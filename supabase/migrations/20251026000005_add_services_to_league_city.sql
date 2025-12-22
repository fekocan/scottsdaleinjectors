/*
  # Add Services to League City Therapists
  
  Randomly assign services to all therapists in League City
  that don't have services yet
*/

-- Create a function to randomly select services
CREATE OR REPLACE FUNCTION random_services_temp(num_services INT)
RETURNS text[] AS $$
DECLARE
  all_services text[] := ARRAY[
    'Anxiety', 'Depression', 'Couples Therapy', 'Family Therapy', 
    'PTSD', 'Trauma', 'CBT', 'Stress Management',
    'Child Therapy', 'Teen Therapy', 'Play Therapy',
    'Grief Counseling', 'Addiction', 'Eating Disorders',
    'OCD', 'Bipolar Disorder', 'ADHD', 'Autism Spectrum',
    'Life Transitions', 'Career Counseling', 'Anger Management',
    'Sleep Disorders', 'Chronic Pain', 'Self Esteem',
    'Relationship Issues', 'Divorce', 'Parenting Support',
    'Mindfulness', 'Holistic Therapy', 'Group Therapy',
    'Speech Therapy', 'Physical Therapy', 'Massage Therapy'
  ];
  result text[] := '{}';
  random_index int;
  service_count int := 0;
BEGIN
  WHILE service_count < num_services LOOP
    random_index := floor(random() * array_length(all_services, 1) + 1)::int;
    IF NOT (all_services[random_index] = ANY(result)) THEN
      result := array_append(result, all_services[random_index]);
      service_count := service_count + 1;
    END IF;
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Update League City therapists without services
DO $$
DECLARE
  therapist_record RECORD;
  num_services int;
BEGIN
  FOR therapist_record IN 
    SELECT id FROM therapists 
    WHERE city_id = 'league-city'
    AND (services IS NULL OR array_length(services, 1) IS NULL OR array_length(services, 1) = 0)
  LOOP
    num_services := floor(random() * 5 + 5)::int;
    UPDATE therapists 
    SET services = random_services_temp(num_services)
    WHERE id = therapist_record.id;
  END LOOP;
END $$;

-- Ensure they have at least Anxiety or Depression
UPDATE therapists 
SET services = array_append(services, 'Anxiety')
WHERE city_id = 'league-city'
  AND NOT ('Anxiety' = ANY(services)) 
  AND NOT ('Depression' = ANY(services))
  AND random() > 0.5;

UPDATE therapists 
SET services = array_append(services, 'Depression')
WHERE city_id = 'league-city'
  AND NOT ('Anxiety' = ANY(services)) 
  AND NOT ('Depression' = ANY(services));

-- Add diversity tags
UPDATE therapists 
SET services = array_append(services, 'LGBTQ Friendly')
WHERE city_id = 'league-city'
  AND NOT ('LGBTQ Friendly' = ANY(services))
  AND random() < 0.4;

UPDATE therapists 
SET services = array_append(services, 'BIPOC')
WHERE city_id = 'league-city'
  AND NOT ('BIPOC' = ANY(services))
  AND random() < 0.3;

UPDATE therapists 
SET services = array_append(services, 'Christian Counseling')
WHERE city_id = 'league-city'
  AND NOT ('Christian Counseling' = ANY(services))
  AND random() < 0.25;

DROP FUNCTION IF EXISTS random_services_temp(INT);

