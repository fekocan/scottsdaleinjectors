
'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client for client-side usage
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Therapist {
    id: string;
    first_name: string;
    last_name: string;
    slug: string;
    city_id: string; // or expand relation
    services: string[];
    bio: string;
    short_bio?: string;
    description?: string;
    city?: { name: string }; // if we join
}

export default function AdminBiosPage() {
    const [therapists, setTherapists] = useState<Therapist[]>([]);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState<string | null>(null);

    useEffect(() => {
        fetchTherapists();
    }, []);

    async function fetchTherapists() {
        setLoading(true);
        // Fetch therapists and their city names
        const { data, error } = await supabase
            .from('therapists')
            .select('*, city:city_id(name)')
            .order('created_at', { ascending: false }); // Show newest first? Or just all.

        if (error) console.error('Error fetching:', error);
        else setTherapists(
            data?.map(t => ({ ...t, city: t.city as unknown as { name: string } })) || []
        );
        setLoading(false);
    }

    async function generateBio(therapist: Therapist) {
        setGenerating(therapist.id);
        try {
            const response = await fetch('/api/generate-bio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${therapist.first_name} ${therapist.last_name}`,
                    services: therapist.services || [],
                    city: therapist.city?.name || 'Houston',
                }),
            });

            const aiData = await response.json();

            if (aiData.error) throw new Error(aiData.error);

            // Update Supabase
            const { error } = await supabase
                .from('therapists')
                .update({
                    short_bio: aiData.short_bio,
                    bio: aiData.bio,
                    description: aiData.description,
                })
                .eq('id', therapist.id);

            if (error) throw error;

            // Update local state
            setTherapists(prev => prev.map(t =>
                t.id === therapist.id
                    ? { ...t, short_bio: aiData.short_bio, bio: aiData.bio, description: aiData.description }
                    : t
            ));

            alert(`Success! Generated bio for ${therapist.first_name}`);

        } catch (e: any) {
            console.error(e);
            alert('Failed: ' + e.message);
        } finally {
            setGenerating(null);
        }
    }

    if (loading) return <div className="p-10">Loading...</div>;

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Injector Bio Generator (Gemini AI)</h1>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Bio Preview</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {therapists.map((therapist) => (
                                <tr key={therapist.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {therapist.first_name} {therapist.last_name}
                                        </div>
                                        <div className="text-sm text-gray-500">{therapist.city?.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {therapist.short_bio ? (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Enhanced
                                            </span>
                                        ) : (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                Needs AI
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900 max-w-md truncate">
                                            {therapist.short_bio || therapist.bio || "No bio available"}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => generateBio(therapist)}
                                            disabled={generating === therapist.id}
                                            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${generating === therapist.id
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-indigo-600 hover:bg-indigo-700'
                                                }`}
                                        >
                                            {generating === therapist.id ? 'Generating...' : '✨ Generate with AI'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
