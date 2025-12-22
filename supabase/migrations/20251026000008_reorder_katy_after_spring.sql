/*
  # Update Katy's Population to Appear After Spring
  
  Lower Katy's population so it appears after Spring in the homepage grid
*/

-- Update Katy's population to be lower than Spring (62,559)
UPDATE cities 
SET population = 21926
WHERE slug = 'katy';

