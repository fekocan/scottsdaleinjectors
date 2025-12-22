/*
  # Remove Texas City and Friendswood, Ensure Katy Exists
  
  1. Remove cities
    - Delete Texas City
    - Delete Friendswood
    - Delete any therapists in these cities
  
  2. Ensure Katy exists
    - Add Katy if it doesn't exist
*/

-- Delete therapists in Texas City and Friendswood first (foreign key constraint)
DELETE FROM therapists WHERE city_id IN ('texas-city', 'friendswood');

-- Delete the cities
DELETE FROM cities WHERE slug IN ('texas-city', 'friendswood');

-- Ensure Katy exists
INSERT INTO cities (id, name, slug, population, image)
VALUES (
  'katy',
  'Katy',
  'katy',
  21926,
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
)
ON CONFLICT (id) DO NOTHING;

