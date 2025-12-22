/*
  # Create Cities and Therapists Tables

  ## Overview
  This migration creates the database schema for the Houston Therapy Directory application,
  including tables for cities and therapists with their relationships.

  ## New Tables

  ### `cities`
  Stores information about cities in the Houston metro area.
  - `id` (text, primary key) - Unique identifier for the city
  - `name` (text) - City name
  - `slug` (text, unique) - URL-friendly identifier
  - `population` (integer) - City population
  - `image` (text) - URL to city image
  - `created_at` (timestamptz) - Record creation timestamp

  ### `therapists`
  Stores information about mental health therapists.
  - `id` (text, primary key) - Unique identifier for the therapist
  - `first_name` (text) - Therapist's first name
  - `last_name` (text) - Therapist's last name
  - `city_id` (text, foreign key) - References cities table
  - `services` (text[]) - Array of services offered
  - `phone` (text) - Contact phone number
  - `email` (text) - Contact email address
  - `website` (text) - Professional website URL
  - `address` (text) - Physical office address
  - `photo` (text) - URL to profile photo
  - `bio` (text) - Professional biography
  - `languages` (text[]) - Array of languages spoken
  - `created_at` (timestamptz) - Record creation timestamp

  ## Security
  - RLS is enabled on both tables
  - Public read access is granted for all records
  - No write access is granted to public users
*/

-- Create cities table
CREATE TABLE IF NOT EXISTS cities (
  id text PRIMARY KEY,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  population integer NOT NULL,
  image text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create therapists table
CREATE TABLE IF NOT EXISTS therapists (
  id text PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  city_id text NOT NULL REFERENCES cities(id),
  services text[] NOT NULL DEFAULT '{}',
  phone text,
  email text,
  website text,
  address text,
  photo text NOT NULL,
  bio text NOT NULL,
  languages text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_therapists_city_id ON therapists(city_id);
CREATE INDEX IF NOT EXISTS idx_cities_slug ON cities(slug);

-- Enable Row Level Security
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE therapists ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access
CREATE POLICY "Cities are publicly readable"
  ON cities
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Therapists are publicly readable"
  ON therapists
  FOR SELECT
  TO public
  USING (true);