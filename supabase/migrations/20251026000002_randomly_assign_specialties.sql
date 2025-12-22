/*
  # Randomly Assign Specialties to Therapists
  
  This migration assigns random combinations of services to each therapist
  to create diversity and realistic specialty distributions.
*/

-- Create a function to randomly select services
CREATE OR REPLACE FUNCTION random_services(num_services INT)
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
    'LGBTQ+ Friendly', 'BIPOC', 'Christian Counseling',
    'Mindfulness', 'Holistic Therapy', 'Group Therapy'
  ];
  result text[] := '{}';
  random_index int;
  service_count int := 0;
BEGIN
  -- Randomly select num_services from all_services
  WHILE service_count < num_services LOOP
    random_index := floor(random() * array_length(all_services, 1) + 1)::int;
    -- Add service if not already in result
    IF NOT (all_services[random_index] = ANY(result)) THEN
      result := array_append(result, all_services[random_index]);
      service_count := service_count + 1;
    END IF;
  END LOOP;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Update each therapist with random services (5-9 services each)
DO $$
DECLARE
  therapist_record RECORD;
  num_services int;
BEGIN
  FOR therapist_record IN SELECT id FROM therapists LOOP
    -- Random number of services between 5 and 9
    num_services := floor(random() * 5 + 5)::int;
    
    UPDATE therapists 
    SET services = random_services(num_services)
    WHERE id = therapist_record.id;
  END LOOP;
END $$;

-- Ensure all therapists have at least Anxiety or Depression
UPDATE therapists 
SET services = array_append(services, 'Anxiety')
WHERE NOT ('Anxiety' = ANY(services)) 
  AND NOT ('Depression' = ANY(services))
  AND random() > 0.5;

UPDATE therapists 
SET services = array_append(services, 'Depression')
WHERE NOT ('Anxiety' = ANY(services)) 
  AND NOT ('Depression' = ANY(services));

-- Add diversity tags to random subset of therapists
-- About 30% get LGBTQ+ Friendly
UPDATE therapists 
SET services = array_append(services, 'LGBTQ+ Friendly')
WHERE NOT ('LGBTQ+ Friendly' = ANY(services))
  AND random() < 0.3;

-- About 25% get BIPOC
UPDATE therapists 
SET services = array_append(services, 'BIPOC')
WHERE NOT ('BIPOC' = ANY(services))
  AND random() < 0.25;

-- About 20% get Christian Counseling
UPDATE therapists 
SET services = array_append(services, 'Christian Counseling')
WHERE NOT ('Christian Counseling' = ANY(services))
  AND random() < 0.2;

-- Drop the helper function
DROP FUNCTION IF EXISTS random_services(INT);

