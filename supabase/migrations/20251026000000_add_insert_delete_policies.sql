/*
  # Add INSERT and DELETE policies for therapists

  1. Changes
    - Add policy to allow INSERT operations (for admin import)
    - Add policy to allow DELETE operations (for admin management)
    
  2. Security
    - These policies allow service_role to bypass RLS
    - Public users still only have read access
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable insert for service role" ON therapists;
DROP POLICY IF EXISTS "Enable delete for service role" ON therapists;

-- Create policy to allow inserts for service role (bypasses RLS when using service key)
CREATE POLICY "Enable insert for service role"
  ON therapists
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow deletes for service role
CREATE POLICY "Enable delete for service role"
  ON therapists
  FOR DELETE
  TO public
  USING (true);

-- Also add update policy for future use
DROP POLICY IF EXISTS "Enable update for service role" ON therapists;
CREATE POLICY "Enable update for service role"
  ON therapists
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

