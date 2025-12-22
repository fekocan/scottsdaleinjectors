/*
  # Add slug field to therapists table

  1. Changes
    - Add `slug` column to `therapists` table (text, unique, not null)
    - Generate slugs from existing therapist names (first-last format)
    - Add index on slug for faster lookups
  
  2. Notes
    - Slugs are generated from first_name and last_name in lowercase with hyphens
    - Unique constraint ensures no duplicate slugs
    - Index improves query performance when looking up by slug
*/

-- Add slug column (nullable initially to allow data migration)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'therapists' AND column_name = 'slug'
  ) THEN
    ALTER TABLE therapists ADD COLUMN slug text;
  END IF;
END $$;

-- Generate slugs from existing data
UPDATE therapists
SET slug = lower(first_name || '-' || last_name)
WHERE slug IS NULL;

-- Make slug NOT NULL after populating
ALTER TABLE therapists ALTER COLUMN slug SET NOT NULL;

-- Add unique constraint
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'therapists_slug_key'
  ) THEN
    ALTER TABLE therapists ADD CONSTRAINT therapists_slug_key UNIQUE (slug);
  END IF;
END $$;

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_therapists_slug ON therapists(slug);
