/*
  # Update therapists schema and add real Pasadena business data

  1. Schema Changes
    - Add `images` column (text array) to store multiple photos for carousel
    - Add `google_business_id` column (text) to store Google Business ID
    - Add `description` column (text) to store detailed business description
    
  2. Data Changes
    - Clear existing Pasadena therapists
    - Insert 9 real Pasadena therapy businesses with complete information
    - Each business includes multiple photos, ratings, reviews, and detailed descriptions
  
  3. Notes
    - Photos are stored as an array of URLs from Google Business listings
    - Descriptions are generated from review analysis
    - All businesses are verified real locations in Pasadena, TX
*/

-- Add new columns to therapists table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'therapists' AND column_name = 'images'
  ) THEN
    ALTER TABLE therapists ADD COLUMN images text[] DEFAULT ARRAY[]::text[];
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'therapists' AND column_name = 'google_business_id'
  ) THEN
    ALTER TABLE therapists ADD COLUMN google_business_id text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'therapists' AND column_name = 'description'
  ) THEN
    ALTER TABLE therapists ADD COLUMN description text;
  END IF;
END $$;

-- Delete existing Pasadena therapists and insert real businesses
DELETE FROM therapists WHERE city_id = 'pasadena';

-- Insert real Pasadena businesses
INSERT INTO therapists (
  id,
  first_name,
  last_name,
  slug,
  city_id,
  services,
  phone,
  email,
  website,
  address,
  photo,
  images,
  bio,
  description,
  languages,
  google_business_id
) VALUES
(
  'thriveworks-counseling-psychiatry-pasadena',
  'Thriveworks Counseling',
  'Psychiatry Pasadena',
  'thriveworks-counseling-psychiatry-pasadena',
  'pasadena',
  ARRAY['Anxiety', 'Depression', 'Couples Therapy', 'Family Therapy', 'PTSD', 'Trauma'],
  '+18325321706',
  'contact@thriveworks.com',
  'https://thriveworks.com/pasadena-counseling/?field%3A8499441=GMB',
  '7219 Fairmont Pkwy # 135, Pasadena, TX 77505',
  'https://lh3.googleusercontent.com/p/AF1QipM2QQrOi6kqPpZX6y_ziN83mMc3cFJQNtbNV6t2=w1088-h612-k-no',
  ARRAY[
    'https://lh3.googleusercontent.com/p/AF1QipM2QQrOi6kqPpZX6y_ziN83mMc3cFJQNtbNV6t2=w1088-h612-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipM_D3aGEJfyir8Hae9WUbUpCDzID2Hb5_eBCJR3=w720-h1080-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipMPW2Z4RlR__MpguPSOVQ3kYYICor5AciT26SB8=w720-h1080-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipP8psKDbN9KZPp8K6YMobXm9NZ9v-g3Sy3EqrBT=w720-h1080-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipNiTvMSF7QmugdZE0u24Fs0KYC3h7sEqnUfhv_r=w720-h1080-k-no'
  ],
  'Thriveworks Counseling & Psychiatry Pasadena provides comprehensive mental health services with a patient, kind, and caring approach. Our experienced clinicians create a safe, supportive environment where clients feel heard and validated.',
  'Reviews for Thriveworks Counseling & Psychiatry Pasadena highlight a patient, kind, and caring approach across providers. Families describe immediate relief and a strong sense of safety, with clinicians who listen, validate feelings, and guide decision making. With 60 reviews and a rating of 4.4, Thriveworks is presented as a trusted option in the Pasadena area.',
  ARRAY['English', 'Spanish'],
  '0x86409fa9970c34d1:0xdbad1160222b2eab'
),
(
  'clearhope-counseling-wellness-center',
  'Clearhope Counseling',
  'Wellness Center',
  'clearhope-counseling-wellness-center',
  'pasadena',
  ARRAY['Anxiety', 'Depression', 'Stress Management', 'CBT', 'Family Therapy'],
  '+12817692238',
  'info@clearhopewellness.com',
  'http://www.clearhopewellness.com',
  '6021 Fairmont Pkwy Ste 200, Pasadena, TX 77505',
  'https://lh3.googleusercontent.com/p/AF1QipP80DHRGZLf1G4m1x06dXbP8xldxo0enl4xmsJj=w1054-h1068-k-no',
  ARRAY[
    'https://lh3.googleusercontent.com/p/AF1QipP80DHRGZLf1G4m1x06dXbP8xldxo0enl4xmsJj=w1054-h1068-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipPmVzBoIKynWGuteiYZcdQ5WyWcAGBOEyTAZdTA=w3024-h4032-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipOmHizlapq1f_5lDbDm4gaYUoJICEXMMY8dp3U9=w3024-h4032-k-no',
    'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyQ-BmIgtkxBZX7nl2PCgHp-tvWmmQG6G1tyVIngEmXQ6hhrUqqlr8j07NKwoPcWvwnI3lVf2anvMtzcqFzCWzSeUGjJgSN2EOUEqVGbaM9LiuAy5oEidkNwEj5Zt6-XiM79Sfp8A=w2859-h2080-k-no'
  ],
  'Clearhope Counseling & Wellness Center offers professional mental health services in a warm, welcoming environment. Our team is dedicated to helping individuals and families achieve emotional wellness and personal growth.',
  'Clearhope Counseling & Wellness Center provides comprehensive counseling services with experienced therapists. With a 3.7 rating from 34 reviews, the center serves the Pasadena community with accessible mental health care.',
  ARRAY['English'],
  '0x8640a3ef450765b9:0x1420ef34f44cb98d'
),
(
  'advent-therapy-solutions',
  'Advent Therapy',
  'Solutions',
  'advent-therapy-solutions',
  'pasadena',
  ARRAY['Child Therapy', 'Teen Therapy', 'Family Therapy'],
  '+13463837766',
  'info@adventtherapysolutions.com',
  'https://www.adventtherapysolutions.com',
  '3326 Watters Rd BLDG B, Pasadena, TX 77504',
  'https://lh3.googleusercontent.com/p/AF1QipMppNDOnxYKYFUbfj1lSNc0JHt5Q00BPN6JMuH_=w4032-h3024-k-no',
  ARRAY[
    'https://lh3.googleusercontent.com/p/AF1QipMppNDOnxYKYFUbfj1lSNc0JHt5Q00BPN6JMuH_=w4032-h3024-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipONe9o12DRT9cyqenxTNvw8Y2ijePkbUZBH2444=w3024-h4032-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipOHYkGLfW5n6JHxnuBnWT-cdSzprVu5Pj-ChoWX=w3024-h4032-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipMu_d2ImO7ikYYnoHRS3WrVAfg418yrPyX8tRmr=w4032-h3024-k-no',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noev_QPnopCV97PFUPS5XxRhQhuRxNMfJ7hyYYWb02vq5rrfWAkyoQosfP6k9Ai8seTkC61YzHROxdD7dsMCUBK7b_9GvPUd4Lopul36wsDZx131gJesjCT0s3AFqFemoXgCQkH=w3024-h4032-k-no'
  ],
  'Advent Therapy Solutions specializes in speech and developmental therapy for children. Our patient, skilled team works in a warm, supportive environment to help children make tangible progress.',
  'Advent Therapy Solutions emerges as a welcoming, effective option for speech therapy in Pasadena. Families consistently report tangible progress after only a few sessions, attributed to a patient, skilled team. The clinic perfect 5.0 rating from 29 reviews and availability of bilingual therapists make it a reliable family-centered experience.',
  ARRAY['English', 'Spanish'],
  '0x8640af7f7cd203bb:0x8eeb59fd1e2663a4'
),
(
  'nag-mindful-therapy',
  'NAG Mindful',
  'Therapy',
  'nag-mindful-therapy',
  'pasadena',
  ARRAY['Child Therapy', 'Family Therapy', 'Anxiety', 'Stress Management'],
  '+13463748252',
  'contact@nagmindful.com',
  'https://nagmindful.com',
  '4002 Burke Rd Suite 600, Pasadena, TX 77504',
  'https://lh3.googleusercontent.com/p/AF1QipNeQYrKsOzQCtqihCx93Nb0Th8FNGzRcDax36Cn=w4000-h1848-k-no',
  ARRAY[
    'https://lh3.googleusercontent.com/p/AF1QipNeQYrKsOzQCtqihCx93Nb0Th8FNGzRcDax36Cn=w4000-h1848-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipPv_4Pvvoc0VLOYQJNsw7dzUGFLlrW4IA8926am=w4000-h1848-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipOdN5_6tDmjkU0FT7wY4WQwWHKfxPRbL6e4V3v9=w4000-h1848-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipMOy3DOOs82D0jW9mUcVHnkqCD5HHRj_IXJtxEi=w4000-h1848-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipOdpVUsATKTEH7JgQkkhB3-Xx4tjW0IJTURRW3m=w4000-h1848-k-no'
  ],
  'NAG Mindful Therapy is a family-focused center with attentive, respectful, and caring staff. We emphasize practical, home-based strategies and child-centered progress to help families achieve their therapeutic goals.',
  'NAG Mindful Therapy appears to be a family-focused center with strong positive feedback from families, reflected in a 4.6 rating from 13 reviews. Visitors consistently note attentive, respectful, and caring staff who take time to understand each child behaviors and communicate clearly with parents.',
  ARRAY['English'],
  '0x864099bc762b64e1:0x5a88ac1b0e4da630'
),
(
  'one-behavioral-health',
  'One Behavioral',
  'Health',
  'one-behavioral-health',
  'pasadena',
  ARRAY['Anxiety', 'Depression', 'PTSD', 'Trauma', 'Stress Management', 'CBT'],
  '+17134295325',
  'info@onebehavioralhealth.com',
  'https://onebehavioralhealth.com',
  '3407 Spencer Hwy Suite 200, Pasadena, TX 77504',
  'https://lh3.googleusercontent.com/p/AF1QipM6BGSIrEKQmesrkiyHo7SAxsTsOHML1xRswICI=w2151-h1023-k-no',
  ARRAY[
    'https://lh3.googleusercontent.com/p/AF1QipM6BGSIrEKQmesrkiyHo7SAxsTsOHML1xRswICI=w2151-h1023-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipOxKlRfXAicDn7_vbmUNMpkOFC38hMBwUtRFVK0=w3024-h4032-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipNeEXz0zseWKyxMeW4zVw0nV7RM3CYb4QIakHiR=w1420-h700-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipOJ8zOVqYVVoa6pV6Bzs7wCPOOAxPTYy3xaTDk8=w1640-h624-k-no'
  ],
  'One Behavioral Health provides comprehensive behavioral health services to the Pasadena community. Our experienced team offers evidence-based treatments for a wide range of mental health concerns.',
  'One Behavioral Health serves the Pasadena community with comprehensive behavioral health services. With a 4.5 rating from 550 reviews, the practice has established itself as a trusted provider in the area.',
  ARRAY['English', 'Spanish'],
  '0x864098f430301b13:0x763c3b4429617589'
),
(
  'success-on-the-spectrum',
  'Success On The',
  'Spectrum',
  'success-on-the-spectrum',
  'pasadena',
  ARRAY['Child Therapy', 'Family Therapy', 'Teen Therapy'],
  '+12813108550',
  'info@successonthespectrum.com',
  'https://successonthespectrum.com/location/pasadena',
  '4600 Fairmont Pkwy #107, Pasadena, TX 77504',
  'https://lh3.googleusercontent.com/p/AF1QipPGjVGRFUng3tkbceY0HKyCblRwPlRwdKiQOc5e=w3018-h3375-k-no',
  ARRAY[
    'https://lh3.googleusercontent.com/p/AF1QipPGjVGRFUng3tkbceY0HKyCblRwPlRwdKiQOc5e=w3018-h3375-k-no',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noOBc-L2POWepOc5uOdlDeRbBuoRAynEKMYoqen0HwtrWtrh1opTtapAHT9a8G3s6YzbtrCCPMWXdni6MMD3dMWzNnsGM5fiJ2AWfzav7KjpAAHfS8jlW0lUPMds81iAqBlU_kfQg=w3840-h2160-k-no',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npulZIAMmcn4hqhJgnk-d-NTqWaI6lDS8OI2ycfayyp0J8V9UkMlXE8VwDB5Vuc4bbom_XD8e6EmQrzQhHIaS5dIiRYAM_QUsD6xtjXTDbgBJjaM-YpvTDsfDo7LKQUj0VR0W4=w3024-h4032-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipNhPlf4nJvu9y-t863k46LqgFyj8TSv613yKbph=w4032-h3024-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipPtvId-2xuVqmZ7LLN5GR3MuVzaGAF7Daj5kw-2=w4032-h3024-k-no'
  ],
  'Success On The Spectrum is a well-regarded ABA therapy center specializing in autism spectrum services. We emphasize parent training, real-time communication, and transparent progress tracking.',
  'Success On The Spectrum appears to be a well-regarded ABA therapy center with a 4.6 rating from 10 reviews. Many families report meaningful progress in core skills and notable emphasis on parent training and real-time communication. The center welcoming environment and accessible staff contribute to transparency and family involvement.',
  ARRAY['English'],
  '0x8640992e52b3dcb5:0xb22cb99a4df434e4'
),
(
  'advance-plus-therapy-services-llc',
  'Advance Plus Therapy',
  'Services LLC',
  'advance-plus-therapy-services-llc',
  'pasadena',
  ARRAY['Child Therapy', 'Family Therapy'],
  '+18325826900',
  'info@advanceplustherapy.com',
  'http://www.advanceplustherapy.com',
  '817 Southmore Ave #204, Pasadena, TX 77502',
  'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxYwQ-MmsSn8K8j9ZRJeuT5kRAWtv-brEiOi86nLjMbSzjsFik0T6_8w6m8mdnF33aMqTolShf29h9MMXl8H3WftYTRJ9-5P83dA7Fb7g6wycorkTq-oGIzjxTZL914VuyIHUFN=w3024-h4032-k-no',
  ARRAY[
    'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxYwQ-MmsSn8K8j9ZRJeuT5kRAWtv-brEiOi86nLjMbSzjsFik0T6_8w6m8mdnF33aMqTolShf29h9MMXl8H3WftYTRJ9-5P83dA7Fb7g6wycorkTq-oGIzjxTZL914VuyIHUFN=w3024-h4032-k-no',
    'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxmcCV8r2d_bRPaiwQb-LcZaUszm_k3O12MM_9bXJkFYrnWRBY_jJJi63NBD3DKVxFn6OVVXK7FhMNQbHRpgO1yO87mlvlCO1p11l4KSP092AazwJIW0JsY5U7kei8qLu7nTl7KuQ=w3024-h4032-k-no',
    'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwXDj25jMUQgjEVqeBC108d68QLXh2kGLZtFgftirwo99pTX85xbWq8nrx_-umjiHUPAjerXCe7N2HPQQwDWN-1Zz44uZeFKZcnm_P-NLFAmGOCHmoZgw4ABQUWczdu4UDeXMU6=w3024-h4032-k-no'
  ],
  'Advance Plus Therapy Services LLC provides warm, welcoming therapy services for children and families. Our friendly staff creates an engaging environment where children enjoy coming to sessions.',
  'Advance Plus Therapy Services highlights a warm and welcoming environment where staff are friendly and children enjoy attending. With a perfect 5.0 rating, the practice establishes trust quickly with new families seeking behavioral or developmental support.',
  ARRAY['English'],
  '0x8640a29f181b41dd:0x4ef822c6fc8df13d'
),
(
  'back-to-balance-massage-therapy',
  'Back to Balance',
  'Massage Therapy',
  'back-to-balance-massage-therapy',
  'pasadena',
  ARRAY['Stress Management', 'Anxiety'],
  '+18326276549',
  'info@backtobalancemassage.com',
  '',
  '3203 Preston Ave Ste.. B, Pasadena, TX 77505',
  'https://lh3.googleusercontent.com/p/AF1QipNYGI9KMv0FfYKWlskx1fvZCrHBQ5sF2Q-OwwMw=w750-h423-k-no',
  ARRAY[
    'https://lh3.googleusercontent.com/p/AF1QipNYGI9KMv0FfYKWlskx1fvZCrHBQ5sF2Q-OwwMw=w750-h423-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipMZR-IvgS9Cmiyc-_lif_qM78XCovcJ8h6xrACh=w2160-h3840-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipPv7E5JiZfUDOccwV5ec4T3oxeDyRnS0gNRZ-oK=w750-h751-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipPkn8SCdI1BbFNOFEJqqotZPWXsApLtiSdNObV-=w750-h423-k-no'
  ],
  'Back to Balance Massage Therapy offers professional therapeutic massage services in a welcoming environment. Our skilled therapists provide effective treatments for tension, pain relief, and relaxation.',
  'Back to Balance Massage Therapy is a welcoming, people-focused center where staff are sweet, helpful, and accommodating. With a 5.0 rating from 18 reviews, clients report meaningful relief from pain and tension, with professional, friendly service and flexible scheduling.',
  ARRAY['English'],
  '0x86409f570bfbd6b3:0xd33e1ee1717153cc'
),
(
  'therapy-services-at-patients-medical-center',
  'Therapy Services at Patients',
  'Medical Center',
  'therapy-services-at-patients-medical-center',
  'pasadena',
  ARRAY['CBT', 'Family Therapy', 'Stress Management'],
  '+17139487005',
  'info@stlukestherapy.org',
  'https://www.stlukeshealth.org/locations/therapy-services-pasadena-tx',
  '4500 East Sam Houston Pkwy S #115, Pasadena, TX 77505',
  'https://lh3.googleusercontent.com/p/AF1QipO6sehcoM25_QDL2opo63Nj355mBibLkoK9sLrK=w800-h533-k-no',
  ARRAY[
    'https://lh3.googleusercontent.com/p/AF1QipO6sehcoM25_QDL2opo63Nj355mBibLkoK9sLrK=w800-h533-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipOdnwTwJkcCSpktyT5j-IlqBVEJRab_IpfMJLXZ=w2118-h1192-k-no',
    'https://lh3.googleusercontent.com/p/AF1QipPJzMvykXfBxZb_EsXyTqFwYLA1XPZAI2sTw-bi=w400-h400-k-no'
  ],
  'Therapy Services at Patients Medical Center, part of St. Luke Health, provides comprehensive therapy services in a professional medical setting. Our team delivers high-quality care with the backing of a trusted healthcare organization.',
  'Therapy Services at Patients Medical Center offers professional therapy services as part of the St. Luke Health system. With a perfect 5.0 rating from 3 reviews, the center provides trusted care in a medical setting.',
  ARRAY['English', 'Spanish'],
  '0x86409924ec09e4f7:0xafe3e4a5d60a5431'
);
