'use client';

import { useState, useEffect } from 'react';
import { Upload, CheckCircle2, XCircle, AlertCircle, Lock, Trash2, RefreshCw } from 'lucide-react';

interface BusinessInfo {
  name: string;
  website: string | null;
  city: string;
  address: string;
  phone: string;
  rating: number;
  reviews: number;
}

interface BusinessMedia {
  images_large: string[];
}

interface Business {
  id: string;
  info: BusinessInfo;
  media: BusinessMedia;
  analysis?: string | string[];
}

interface ImportData {
  summary: {
    original_total: number;
    with_large_photos: number;
    dropped_for_no_large_photos: number;
    city: string;
  };
  businesses: Business[];
}

interface PreviewBusiness extends Business {
  isDuplicate: boolean;
  existingSlug?: string;
}

interface City {
  id: string;
  name: string;
  slug: string;
}

interface Therapist {
  business_id: string;
  name: string;
  city_id: string;
}

export default function DatabaseToolPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [parsedData, setParsedData] = useState<ImportData[] | null>(null);
  const [previewData, setPreviewData] = useState<PreviewBusiness[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [importStatus, setImportStatus] = useState<{
    success: number;
    skipped: number;
    failed: number;
  } | null>(null);
  const [activeTab, setActiveTab] = useState<'import' | 'manage'>('import');
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [loadingTherapists, setLoadingTherapists] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState<string | null>(null);
  const [randomizeServices, setRandomizeServices] = useState(true);
  const [removedBusinessIds, setRemovedBusinessIds] = useState<Set<string>>(new Set());

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_TOOL_PASSWORD || password === 'SecurePass2025!ImportDB') {
      setIsAuthenticated(true);
      setError('');

      const response = await fetch('/api/cities');
      if (response.ok) {
        const data = await response.json();
        setCities(data);
      }
    } else {
      setError('Invalid password');
    }
  };

  const handleParse = async () => {
    setError('');
    setParsedData(null);
    setPreviewData([]);
    setImportStatus(null);
    setRemovedBusinessIds(new Set());

    try {
      const data = JSON.parse(jsonInput);

      if (!Array.isArray(data)) {
        throw new Error('JSON must be an array');
      }

      setParsedData(data);

      const allBusinesses: Business[] = [];
      data.forEach((dataset: ImportData) => {
        if (dataset.businesses && Array.isArray(dataset.businesses)) {
          allBusinesses.push(...dataset.businesses);
        }
      });

      setLoading(true);
      const response = await fetch('/api/check-duplicates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businesses: allBusinesses }),
      });

      if (!response.ok) {
        throw new Error('Failed to check duplicates');
      }

      const { duplicates } = await response.json();

      const preview: PreviewBusiness[] = allBusinesses.map((business) => ({
        ...business,
        isDuplicate: duplicates[business.id] || false,
        existingSlug: duplicates[business.id] ? duplicates[business.id] : undefined,
      }));

      setPreviewData(preview);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON format');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveBusiness = (businessId: string) => {
    setRemovedBusinessIds(prev => new Set([...prev, businessId]));
  };

  const handleRestoreBusiness = (businessId: string) => {
    setRemovedBusinessIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(businessId);
      return newSet;
    });
  };

  const handleImport = async () => {
    if (!previewData.length) return;

    if (!selectedCity) {
      setError('Please select a city');
      return;
    }

    // Filter out removed businesses
    const businessesToImport = previewData.filter(b => !removedBusinessIds.has(b.id));

    if (businessesToImport.length === 0) {
      setError('No businesses to import. All businesses have been removed.');
      return;
    }

    setLoading(true);
    setError('');
    setImportStatus(null);

    try {
      const response = await fetch('/api/import-therapists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          businesses: businessesToImport, 
          cityId: selectedCity,
          randomizeServices: randomizeServices 
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMsg = result.error || 'Failed to import data';
        const detailMsg = result.details ? `\n\nDetails: ${JSON.stringify(result.details, null, 2)}` : '';
        throw new Error(errorMsg + detailMsg);
      }

      // If there was a database error but response was 500
      if (result.error) {
        setError(result.error);
        if (result.details) {
          console.error('Import error details:', result.details);
        }
      } else {
        setImportStatus(result);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Import failed');
    } finally {
      setLoading(false);
    }
  };

  const loadTherapists = async () => {
    setLoadingTherapists(true);
    setError('');
    setDeleteSuccess(null);

    try {
      const response = await fetch('/api/list-therapists');
      if (!response.ok) {
        throw new Error('Failed to load therapists');
      }

      const data = await response.json();
      setTherapists(data.therapists);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load therapists');
    } finally {
      setLoadingTherapists(false);
    }
  };

  const handleDeleteTherapist = async (businessId: string, name: string) => {
    if (!businessId) {
      setError('Cannot delete: Business ID is missing');
      return;
    }

    if (!confirm(`Are you sure you want to delete "${name}"?\n\nBusiness ID: ${businessId}`)) {
      return;
    }

    setError('');
    setDeleteSuccess(null);

    try {
      const response = await fetch('/api/delete-therapist', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to delete therapist');
      }

      setDeleteSuccess(`Successfully deleted "${name}"`);
      // Reload the list
      loadTherapists();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    }
  };

  // Load therapists when switching to manage tab
  useEffect(() => {
    if (activeTab === 'manage' && isAuthenticated) {
      loadTherapists();
    }
  }, [activeTab, isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-2 text-slate-900">Database Import Tool</h1>
          <p className="text-slate-600 text-center mb-6">Enter password to access</p>

          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            />
            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm mb-4">
                <XCircle className="w-4 h-4" />
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-6">
          <h1 className="text-3xl font-bold mb-2 text-slate-900">Database Management Tool</h1>
          <p className="text-slate-600 mb-6">Import and manage therapist records</p>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('import')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'import'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Import Data
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'manage'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Manage Businesses
            </button>
          </div>

          {/* Import Tab Content */}
          {activeTab === 'import' && (
            <>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-6"
                >
                  <option value="">Select a city...</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>

                <div className="mb-6 flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <input
                    type="checkbox"
                    id="randomizeServices"
                    checked={randomizeServices}
                    onChange={(e) => setRandomizeServices(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="randomizeServices" className="text-sm font-medium text-slate-700 cursor-pointer">
                    Randomly assign services to imported therapists (5-9 services each including Anxiety, Depression, LGBTQ Friendly, BIPOC, etc.)
                  </label>
                </div>

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  JSON Data
                </label>
                <textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder="Paste your JSON data here..."
                  className="w-full h-64 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleParse}
                  disabled={!jsonInput.trim() || loading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  <Upload className="w-5 h-5" />
                  Parse & Preview
                </button>

                {previewData.length > 0 && !importStatus && (
                  <button
                    onClick={handleImport}
                    disabled={loading || !selectedCity}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Import Non-Duplicates
                  </button>
                )}
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Error</p>
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Manage Tab Content */}
          {activeTab === 'manage' && (
            <>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-slate-600">
                    Total businesses: <span className="font-bold text-slate-900">{therapists.length}</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Only showing therapists with Google Business IDs
                  </p>
                </div>
                <button
                  onClick={loadTherapists}
                  disabled={loadingTherapists}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  <RefreshCw className={`w-4 h-4 ${loadingTherapists ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {deleteSuccess && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium">Success</p>
                    <p className="text-green-700 text-sm">{deleteSuccess}</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Error</p>
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                </div>
              )}

              {loadingTherapists ? (
                <div className="text-center py-12">
                  <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-4" />
                  <p className="text-slate-600">Loading businesses...</p>
                </div>
              ) : therapists.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-slate-600">No businesses found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b-2 border-slate-200">
                        <th className="text-left px-4 py-3 font-semibold text-slate-700">Business Name</th>
                        <th className="text-left px-4 py-3 font-semibold text-slate-700">Business ID</th>
                        <th className="text-center px-4 py-3 font-semibold text-slate-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {therapists.map((therapist, index) => (
                        <tr key={therapist.business_id || `therapist-${index}`} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 text-slate-900">{therapist.name}</td>
                          <td className="px-4 py-3 text-slate-600 font-mono text-sm">
                            {therapist.business_id || <span className="text-red-500 italic">No Business ID</span>}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <button
                              onClick={() => handleDeleteTherapist(therapist.business_id, therapist.name)}
                              disabled={!therapist.business_id}
                              className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
                            >
                              <Trash2 className="w-4 h-4" />
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>

        {activeTab === 'import' && parsedData && previewData.length > 0 && (
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Preview</h2>
              <p className="text-slate-600 mt-1">
                {previewData.length} businesses found, {previewData.filter(b => b.isDuplicate).length} duplicates, {removedBusinessIds.size} removed
              </p>
              {removedBusinessIds.size > 0 && (
                <p className="text-sm text-orange-600 mt-1">
                  {previewData.length - removedBusinessIds.size} will be imported (removed businesses excluded)
                </p>
              )}
            </div>

            {importStatus && (
              <div className="mb-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Import Complete</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">{importStatus.success}</p>
                    <p className="text-sm text-slate-600">Imported</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-600">{importStatus.skipped}</p>
                    <p className="text-sm text-slate-600">Skipped (Duplicates)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-600">{importStatus.failed}</p>
                    <p className="text-sm text-slate-600">Failed</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {previewData.map((business, index) => {
                const isRemoved = removedBusinessIds.has(business.id);
                return (
                  <div
                    key={business.id}
                    className={`p-5 border-2 rounded-lg ${
                      isRemoved
                        ? 'bg-red-50 border-red-300 opacity-60'
                        : business.isDuplicate
                        ? 'bg-yellow-50 border-yellow-300'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-slate-900">{business.info.name}</h3>
                          {isRemoved ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-200 text-red-800 text-xs font-medium rounded-full">
                              <XCircle className="w-3 h-3" />
                              Removed
                            </span>
                          ) : business.isDuplicate ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow-200 text-yellow-800 text-xs font-medium rounded-full">
                              <AlertCircle className="w-3 h-3" />
                              Duplicate
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-200 text-green-800 text-xs font-medium rounded-full">
                              <CheckCircle2 className="w-3 h-3" />
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 mb-1">{business.info.address}</p>
                        <p className="text-sm text-slate-600">
                          {business.info.city} | {business.info.phone} | Rating: {business.info.rating} ({business.info.reviews} reviews)
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-sm text-slate-500 font-mono">#{index + 1}</div>
                        {isRemoved ? (
                          <button
                            onClick={() => handleRestoreBusiness(business.id)}
                            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Restore
                          </button>
                        ) : (
                          <button
                            onClick={() => handleRemoveBusiness(business.id)}
                            className="text-xs text-red-600 hover:text-red-700 font-medium"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {business.media.images_large.slice(0, 4).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${business.info.name} ${i + 1}`}
                          className="w-full h-24 object-cover rounded border border-slate-200"
                        />
                      ))}
                    </div>

                    <div className="text-xs text-slate-500 font-mono bg-slate-50 p-2 rounded">
                      ID: {business.id} | Images: {business.media.images_large.length}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
