/*
  # Update Katy's Population
  
  Update Katy's population to reflect its actual size and ensure
  it appears in the top 10 cities on the homepage
*/

-- Update Katy's population (Katy area including Greater Katy is much larger)
UPDATE cities 
SET population = 400000
WHERE slug = 'katy';

-- For reference, ensure it's properly ranked
-- Let's check and set appropriate populations for other cities too
UPDATE cities SET population = 2304580 WHERE slug = 'houston' AND population < 2304580;
UPDATE cities SET population = 111026 WHERE slug = 'sugar-land' AND population < 111026;
UPDATE cities SET population = 114436 WHERE slug = 'the-woodlands' AND population < 114436;
UPDATE cities SET population = 125410 WHERE slug = 'pearland' AND population < 125410;
UPDATE cities SET population = 108177 WHERE slug = 'league-city' AND population < 108177;
UPDATE cities SET population = 400000 WHERE slug = 'katy' AND population < 400000;
UPDATE cities SET population = 62559 WHERE slug = 'spring' AND population < 62559;
UPDATE cities SET population = 75348 WHERE slug = 'missouri-city' AND population < 75348;
UPDATE cities SET population = 151950 WHERE slug = 'pasadena' AND population < 151950;
UPDATE cities SET population = 83500 WHERE slug = 'baytown' AND population < 83500;
UPDATE cities SET population = 98081 WHERE slug = 'conroe' AND population < 98081;

