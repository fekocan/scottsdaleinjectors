/*
  # Add rating, reviews, analysis fields and unique business_id constraint

  1. Schema Changes
    - Add `rating` column (numeric) for star rating
    - Add `review_count` column (integer) for number of reviews
    - Add `analysis` column (text array) for review analysis text
    - Add unique constraint on `google_business_id` to prevent duplicates
    
  2. Data Updates
    - Update existing Pasadena therapists with rating, review count, and analysis data
  
  3. Notes
    - Business ID is critical for deduplication
    - Analysis provides detailed insights from reviews
*/

-- Add new columns to therapists table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'therapists' AND column_name = 'rating'
  ) THEN
    ALTER TABLE therapists ADD COLUMN rating numeric(2,1);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'therapists' AND column_name = 'review_count'
  ) THEN
    ALTER TABLE therapists ADD COLUMN review_count integer DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'therapists' AND column_name = 'analysis'
  ) THEN
    ALTER TABLE therapists ADD COLUMN analysis text[];
  END IF;
END $$;

-- Add unique constraint on google_business_id
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'therapists_google_business_id_key'
  ) THEN
    ALTER TABLE therapists ADD CONSTRAINT therapists_google_business_id_key UNIQUE (google_business_id);
  END IF;
END $$;

-- Update Pasadena therapists with rating, review_count, and analysis
UPDATE therapists SET 
  rating = 4.4,
  review_count = 60,
  analysis = ARRAY[
    'Reviews for Thriveworks Counseling & Psychiatry Pasadena highlight a patient, kind, and caring approach across providers. Families describe immediate relief and a strong sense of safety, with clinicians who listen, validate feelings, and guide decision making. One parent notes that in a single visit emotional weight was lifted, and they observed improvements in their young adult''s confidence and daily life. Clients consistently report a supportive and nonjudgmental space where counselors focus on listening with genuine care and helping individuals grow beyond their expectations. Overall, the center is praised for its commitment to mental health and well being and for delivering thoughtful, practical guidance that leads to noticeable progress.',
    'With 60 reviews and a rating of 4.4, Thriveworks Counseling & Psychiatry Pasadena is presented as a trusted option in the Pasadena area. The practice earns high marks for its professional staff, clear communication, and a user-friendly process to find the right therapist. Families appreciate how the organization supports youth and adult clients by offering a searchable online directory that helps compare providers and tailor services to individual needs. The address at 7219 Fairmont Pkwy # 135, Pasadena, TX 77505 situates the center conveniently for local clients seeking reliable care and straightforward scheduling.'
  ]
WHERE google_business_id = '0x86409fa9970c34d1:0xdbad1160222b2eab';

UPDATE therapists SET 
  rating = 3.7,
  review_count = 34
WHERE google_business_id = '0x8640a3ef450765b9:0x1420ef34f44cb98d';

UPDATE therapists SET 
  rating = 5.0,
  review_count = 3
WHERE google_business_id = '0x86409924ec09e4f7:0xafe3e4a5d60a5431';

UPDATE therapists SET 
  rating = 5.0,
  review_count = 29,
  analysis = ARRAY[
    'Across the 29 reviews, Advent Therapy Solutions emerges as a welcoming, effective option for speech therapy in Pasadena. Families consistently report tangible progress in their children after only a few sessions, attributed to a patient, skilled team working in a warm, supportive environment. Reviewers appreciate a well-organized process from the initial consult through ongoing care, with clear communication about what was done in therapy and practical steps for at-home practice. The availability of bilingual therapists and scheduling flexibility are highlighted as practical strengths that help families fit therapy into busy lives.',
    'For visitors considering Advent Therapy Solutions, the clinic''s perfect 5.0 rating and the detailed, positive feedback from other families suggest a reliable and family-centered experience. Located at 3326 Watters Rd BLDG B in Pasadena, TX, the center is described as easy to reach and easy to work with. Expect friendly staff who prioritize the child''s comfort, regular progress updates, and a collaborative approach that connects in-clinic work with at-home activities to support ongoing development.'
  ]
WHERE google_business_id = '0x8640af7f7cd203bb:0x8eeb59fd1e2663a4';

UPDATE therapists SET 
  rating = 4.6,
  review_count = 13,
  analysis = ARRAY[
    'NAG Mindful Therapy appears to be a family-focused center with strong positive feedback from families, reflected in an overall 4.6 rating from 13 reviews. Visitors consistently note attentive, respectful, and caring staff who take time to understand each child''s behaviors and to communicate clearly with parents. The center emphasizes practical, home-based strategies and child-centered progress, with multiple accounts describing improvements such as a child beginning to use sign language to request needs. The emphasis on patience, professional guidance, and parent involvement suggests a supportive environment for families seeking behavioral and communication support for kids.',
    'There is a caveat in the reviews: one family reported a negative experience with a staff member during a first appointment, noting rushed interactions and a challenging atmosphere. This highlights the importance of finding a good fit among the center''s clinicians and maintaining open communication about expectations and progress. For prospective visitors, it can be helpful to inquire about clinician assignments, what to expect in initial sessions, and how progress and home exercises are tracked and shared. Overall, given the strong overall rating and multiple positive experiences, NAG Mindful Therapy at this Pasadena location is likely a solid choice for families seeking patient, home-integrated therapy for children.'
  ]
WHERE google_business_id = '0x864099bc762b64e1:0x5a88ac1b0e4da630';

UPDATE therapists SET 
  rating = 4.5,
  review_count = 550
WHERE google_business_id = '0x864098f430301b13:0x763c3b4429617589';

UPDATE therapists SET 
  rating = 4.6,
  review_count = 10,
  analysis = ARRAY[
    'Overall, Success On The Spectrum appears to be a well-regarded ABA therapy center in Pasadena, TX, with a 4.6 rating from 10 reviews. Many families report meaningful progress in core skills and a notable emphasis on parent training and real-time communication. Reviews describe substantial improvements for children who initially faced challenges like limited speech, avoidance, or limited engagement, with several families noting the therapy''s role in reducing such behaviors and improving daily functioning. The center''s welcoming environment and accessible staff, including opportunities to observe therapy in the waiting area, contribute to a sense of transparency and involvement. Community-minded actions, like charity support and facility use, also add a sense of trustworthiness and care beyond the classroom.',
    'Despite the largely positive feedback, there is at least one review raising concerns about scheduling, plan revisions, and potential financial considerations, including a claim of discharge after proposing schedule changes. This underscores the importance of clear communication around therapy plans, scheduling, and insurance-related aspects. Prospective families should consider requesting a detailed, written therapy plan with measurable goals, data from progress tracking, and a discussion of how scheduling aligns with school commitments. Given the multiple positive reviews, the center may still be a strong option, and visiting in person to assess fit, asking about parent training availability, and reviewing current policies can help ensure alignment with your child''s needs and family priorities.'
  ]
WHERE google_business_id = '0x8640992e52b3dcb5:0xb22cb99a4df434e4';

UPDATE therapists SET 
  rating = 5.0,
  review_count = 1,
  analysis = ARRAY[
    'In this single review, the parent highlights a warm and welcoming environment, noting that everyone is friendly and that their son enjoys coming to the center. This suggests a child-focused, engaging atmosphere where staff interactions resonate with younger clients, which can be a strong predictor of therapy adherence and positive progress, especially for families seeking ongoing support for behavioral or developmental needs.',
    'With a perfect 5.0 rating and a dedicated space at 817 Southmore Ave #204 in Pasadena, the practice appears to establish trust quickly with new families. However, as there is only one published review, prospective clients may want to gather additional information—such as service offerings, typical session lengths, and whether the center provides evidence-based approaches—and consider reaching out for a preliminary consultation to assess fit for their child''s goals.'
  ]
WHERE google_business_id = '0x8640a29f181b41dd:0x4ef822c6fc8df13d';

UPDATE therapists SET 
  rating = 5.0,
  review_count = 18,
  analysis = ARRAY[
    'Reviews portray Back to Balance Massage Therapy as a welcoming, people-focused center where staff are described as sweet, helpful, and accommodating. The facility is noted for flexibility—families are made comfortable while waiting, and clients repeatedly mention professional, friendly service. With a 5.0 rating from 18 reviews, visitors can feel confident in the consistency of care. Many clients report meaningful relief, from dissolving painful knots to significant back pain reduction, suggesting effective techniques and attentive, individualized sessions.',
    'Overall, the center appears to deliver strong outcomes and encourage repeat visits. Reported improvements include rapid muscle recovery and repeated sessions for ongoing relief, indicating satisfaction with both treatment results and the experience. For someone considering a massage therapy center in Pasadena, TX, the address at 3203 Preston Ave Ste. B and the consistently high rating point to a reliable option that combines approachable service with tangible relief from tension and pain.'
  ]
WHERE google_business_id = '0x86409f570bfbd6b3:0xd33e1ee1717153cc';
