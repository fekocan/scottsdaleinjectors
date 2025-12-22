/*
  # Update LGBTQ+ Friendly to LGBTQ Friendly
  
  Remove the + symbol from the service name for cleaner display
*/

-- Update all therapists with "LGBTQ+ Friendly" to "LGBTQ Friendly"
UPDATE therapists
SET services = array_replace(services, 'LGBTQ+ Friendly', 'LGBTQ Friendly')
WHERE 'LGBTQ+ Friendly' = ANY(services);

