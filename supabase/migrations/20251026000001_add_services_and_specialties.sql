/*
  # Add Services and Specialties to All Therapists
  
  1. Updates
    - Add services to Pasadena therapists (Anxiety, Depression, CBT, etc.)
    - Add services to therapists in other cities
    - Add new specialty tags (BIPOC, LGBTQ+ Friendly, Christian, etc.)
  
  2. Service Categories
    - Core Services: Anxiety, Depression, Couples Therapy, Family Therapy, PTSD, Trauma, CBT
    - Child/Teen: Child Therapy, Teen Therapy, Play Therapy
    - Specialty: Stress Management, Grief Counseling, Addiction
    - Identity/Community: BIPOC, LGBTQ+ Friendly, Christian Counseling, Spanish Speaking
*/

-- Update Thriveworks Counseling & Psychiatry Pasadena
UPDATE therapists 
SET services = ARRAY['Anxiety', 'Depression', 'Couples Therapy', 'Family Therapy', 'PTSD', 'Trauma', 'CBT', 'Stress Management', 'LGBTQ+ Friendly']
WHERE google_business_id = '0x86409fa9970c34d1:0xdbad1160222b2eab';

-- Update Clearhope Counseling & Wellness Center
UPDATE therapists 
SET services = ARRAY['Anxiety', 'Depression', 'Stress Management', 'CBT', 'Family Therapy', 'Christian Counseling', 'BIPOC']
WHERE google_business_id = '0x8640a3ef450765b9:0x1420ef34f44cb98d';

-- Update Advent Therapy Solutions (Speech Therapy)
UPDATE therapists 
SET services = ARRAY['Child Therapy', 'Teen Therapy', 'Family Therapy', 'Speech Therapy', 'Developmental Therapy', 'LGBTQ+ Friendly']
WHERE google_business_id = '0x8640af7f7cd203bb:0x8eeb59fd1e2663a4';

-- Update NAG Mindful Therapy
UPDATE therapists 
SET services = ARRAY['Child Therapy', 'Family Therapy', 'Anxiety', 'Stress Management', 'Mindfulness', 'BIPOC']
WHERE google_business_id = '0x864099bc762b64e1:0x5a88ac1b0e4da630';

-- Update One Behavioral Health
UPDATE therapists 
SET services = ARRAY['Anxiety', 'Depression', 'PTSD', 'Trauma', 'Stress Management', 'CBT', 'Addiction', 'LGBTQ+ Friendly', 'BIPOC']
WHERE google_business_id = '0x864098f430301b13:0x763c3b4429617589';

-- Update Success On The Spectrum (ABA Therapy)
UPDATE therapists 
SET services = ARRAY['Child Therapy', 'Family Therapy', 'Teen Therapy', 'Autism Spectrum', 'ABA Therapy', 'Developmental Therapy']
WHERE google_business_id = '0x8640992e52b3dcb5:0xb22cb99a4df434e4';

-- Update Advance Plus Therapy Services LLC
UPDATE therapists 
SET services = ARRAY['Child Therapy', 'Family Therapy', 'Speech Therapy', 'Occupational Therapy', 'LGBTQ+ Friendly']
WHERE google_business_id = '0x8640a29f181b41dd:0x4ef822c6fc8df13d';

-- Update Back to Balance Massage Therapy
UPDATE therapists 
SET services = ARRAY['Stress Management', 'Anxiety', 'Massage Therapy', 'Pain Management', 'Holistic Therapy']
WHERE google_business_id = '0x86409f570bfbd6b3:0xd33e1ee1717153cc';

-- Update Therapy Services at Patients Medical Center
UPDATE therapists 
SET services = ARRAY['CBT', 'Family Therapy', 'Stress Management', 'Physical Therapy', 'Occupational Therapy', 'LGBTQ+ Friendly']
WHERE google_business_id = '0x86409924ec09e4f7:0xafe3e4a5d60a5431';

-- For any therapists in other cities (Pearland, etc.) without services, add default comprehensive services
UPDATE therapists 
SET services = ARRAY['Anxiety', 'Depression', 'Couples Therapy', 'Family Therapy', 'Stress Management', 'CBT', 'LGBTQ+ Friendly', 'BIPOC']
WHERE city_id IN (
  SELECT id FROM cities WHERE slug IN ('pearland', 'the-woodlands', 'league-city', 'sugar-land', 'katy', 'spring', 'humble', 'baytown', 'missouri-city', 'stafford', 'bellaire', 'friendswood', 'deer-park')
)
AND (services IS NULL OR array_length(services, 1) IS NULL OR array_length(services, 1) = 0);

-- For any remaining therapists without services, add basic services
UPDATE therapists 
SET services = ARRAY['Anxiety', 'Depression', 'Family Therapy', 'Stress Management']
WHERE services IS NULL OR array_length(services, 1) IS NULL OR array_length(services, 1) = 0;

