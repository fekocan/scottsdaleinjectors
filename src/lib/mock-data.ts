
import { City, Therapist } from './supabase-server';

export const MOCK_CITIES: City[] = [
  {
    "id": "1",
    "name": "Scottsdale",
    "slug": "scottsdale",
    "population": 250000,
    "image": "https://images.unsplash.com/photo-1562920619-a1d2e134612d?auto=format&fit=crop&q=80&w=2000"
  }
];

export const MOCK_THERAPISTS: Therapist[] = [
  {
    "id": "1",
    "first_name": "",
    "last_name": "Scottsdale Med Spa",
    "slug": "scottsdale-med-spa-1",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 454-6959",
    "email": "",
    "website": "https://scottsdalemedspa.beauty/?utm_source=GBP",
    "address": "7045 E 3rd Ave, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Scottsdale Med Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 129,
    "analysis": []
  },
  {
    "id": "2",
    "first_name": "",
    "last_name": "The Scottsdale Injector LLC",
    "slug": "the-scottsdale-injector-llc-2",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 435-6524",
    "email": "",
    "website": "https://www.thescottsdaleinjector.com/",
    "address": "5635 N Scottsdale Rd Suite 210, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, The Scottsdale Injector LLC provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 22,
    "analysis": []
  },
  {
    "id": "3",
    "first_name": "",
    "last_name": "ZONA MED SPA",
    "slug": "zona-med-spa-3",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 299-4975",
    "email": "",
    "website": "http://www.zonamedspa.com/",
    "address": "9767 N 91st St Suite B102, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, ZONA MED SPA provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 504,
    "analysis": []
  },
  {
    "id": "4",
    "first_name": "",
    "last_name": "NakedMD Med Spa Scottsdale",
    "slug": "nakedmd-med-spa-scottsdale-4",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 300-4732",
    "email": "",
    "website": "https://www.nakedmd.com/pages/locations-scottsdale-az",
    "address": "9377 E Bell Rd Suite #207, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, NakedMD Med Spa Scottsdale provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 896,
    "analysis": []
  },
  {
    "id": "5",
    "first_name": "",
    "last_name": "Elite Medspa Scottsdale",
    "slug": "elite-medspa-scottsdale-5",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 306-7766",
    "email": "",
    "website": "https://elitemedspaaz.com/",
    "address": "7001 N Scottsdale Rd #164, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Elite Medspa Scottsdale provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 320,
    "analysis": []
  },
  {
    "id": "6",
    "first_name": "",
    "last_name": "North Scottsdale Med Spa",
    "slug": "north-scottsdale-med-spa-6",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 419-9605",
    "email": "",
    "website": "https://northscottsdalemedspa.com/?utm_source=GBP",
    "address": "7000 E Mayo Blvd #1004, Phoenix, Arizona",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Phoenix, North Scottsdale Med Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 89,
    "analysis": []
  },
  {
    "id": "7",
    "first_name": "",
    "last_name": "Nude Aesthetics Med Spa Scottsdale",
    "slug": "nude-aesthetics-med-spa-scottsdale-7",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(623) 278-8252",
    "email": "",
    "website": "https://www.nude-aesthetics.com/",
    "address": "4260 N Drinkwater Blvd Ste 5, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Nude Aesthetics Med Spa Scottsdale provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 478,
    "analysis": []
  },
  {
    "id": "8",
    "first_name": "",
    "last_name": "Skin Wellness Med Spa",
    "slug": "skin-wellness-med-spa-8",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 366-4800",
    "email": "",
    "website": "https://www.skinwellnessmedspa.com/",
    "address": "7600 E Camelback Rd Suite 7, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Skin Wellness Med Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 96,
    "analysis": []
  },
  {
    "id": "9",
    "first_name": "",
    "last_name": "The Skin Shop Medspa Scottsdale",
    "slug": "the-skin-shop-medspa-scottsdale-9",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 948-1759",
    "email": "",
    "website": "https://theskinshopmedspascottsdale.com/",
    "address": "10632 N Scottsdale Rd suite A, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, The Skin Shop Medspa Scottsdale provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 72,
    "analysis": []
  },
  {
    "id": "10",
    "first_name": "",
    "last_name": "Skindale Medspa",
    "slug": "skindale-medspa-10",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(623) 401-7546",
    "email": "",
    "website": "http://www.skindalemedspa.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
    "address": "11000 N Scottsdale Rd Suite 160, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Skindale Medspa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 90,
    "analysis": []
  },
  {
    "id": "11",
    "first_name": "",
    "last_name": "Scottsdale Sculpt",
    "slug": "scottsdale-sculpt-11",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(623) 414-9025",
    "email": "",
    "website": "http://scottsdalesculpt.com/",
    "address": "8787 N Scottsdale Rd Suite a 105, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Scottsdale Sculpt provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 152,
    "analysis": []
  },
  {
    "id": "12",
    "first_name": "",
    "last_name": "Uptown Medispa Scottsdale",
    "slug": "uptown-medispa-scottsdale-12",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 483-4755",
    "email": "",
    "website": "http://www.uptownmedispa.com/Scottsdale",
    "address": "7950 E Redfield Rd #220, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Uptown Medispa Scottsdale provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 58,
    "analysis": []
  },
  {
    "id": "13",
    "first_name": "",
    "last_name": "The Well Med Spa",
    "slug": "the-well-med-spa-13",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 999-9355",
    "email": "",
    "website": "http://www.thewellmedspa.com/",
    "address": "12802 N Scottsdale Rd, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, The Well Med Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 180,
    "analysis": []
  },
  {
    "id": "14",
    "first_name": "",
    "last_name": "MDSkin Lounge",
    "slug": "mdskin-lounge-14",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 878-5213",
    "email": "",
    "website": "http://www.mdskinlounge.com/",
    "address": "18251 N Pima Rd STE 125, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, MDSkin Lounge provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 373,
    "analysis": []
  },
  {
    "id": "15",
    "first_name": "",
    "last_name": "Arizona Medical Medspa",
    "slug": "arizona-medical-medspa-15",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 766-0550",
    "email": "",
    "website": "http://www.arizonamedicalmedspa.com/",
    "address": "13802 N Scottsdale Rd #120, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Arizona Medical Medspa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 298,
    "analysis": []
  },
  {
    "id": "16",
    "first_name": "",
    "last_name": "The Perfect Secret Med Spa",
    "slug": "the-perfect-secret-med-spa-16",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 647-8991",
    "email": "",
    "website": "https://www.itstheperfectsecret.com/",
    "address": "7301 E 2nd St Ste 200, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, The Perfect Secret Med Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 457,
    "analysis": []
  },
  {
    "id": "17",
    "first_name": "",
    "last_name": "Skin Beautiful",
    "slug": "skin-beautiful-17",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 578-6364",
    "email": "",
    "website": "https://skinbeautifulaz.com/",
    "address": "7325 E 6th Ave, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Skin Beautiful provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 514,
    "analysis": []
  },
  {
    "id": "18",
    "first_name": "",
    "last_name": "Moderne Medical Aesthetics",
    "slug": "moderne-medical-aesthetics-18",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 477-7726",
    "email": "",
    "website": "http://www.modernemedical.com/",
    "address": "9180 E Desert Cove Ave Ste 103, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Moderne Medical Aesthetics provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 348,
    "analysis": []
  },
  {
    "id": "19",
    "first_name": "",
    "last_name": "Injections by Megan",
    "slug": "injections-by-megan-19",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(602) 793-0370",
    "email": "",
    "website": "https://injectionsbymegan.com/",
    "address": "8415 N Pima Rd STE 200, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Injections by Megan provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 58,
    "analysis": []
  },
  {
    "id": "20",
    "first_name": "",
    "last_name": "MedSpa810",
    "slug": "medspa810-20",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 513-8813",
    "email": "",
    "website": "https://medspa810scottsdale.com/",
    "address": "23425 N Scottsdale Rd Suite A4, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, MedSpa810 provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 140,
    "analysis": []
  },
  {
    "id": "21",
    "first_name": "",
    "last_name": "DHH Med Spa",
    "slug": "dhh-med-spa-21",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 336-4195",
    "email": "",
    "website": "https://dhhmedspa.com/",
    "address": "9188 E San Salvador Dr #102, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, DHH Med Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 235,
    "analysis": []
  },
  {
    "id": "22",
    "first_name": "",
    "last_name": "Blume Skin and Body",
    "slug": "blume-skin-and-body-22",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 808-4461",
    "email": "",
    "website": "https://blumeskintreatment.com/",
    "address": "8575 E Princess Dr #123, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Blume Skin and Body provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 144,
    "analysis": []
  },
  {
    "id": "23",
    "first_name": "",
    "last_name": "BabyFace Scottsdale Med Spa",
    "slug": "babyface-scottsdale-med-spa-23",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 405-8241",
    "email": "",
    "website": "https://www.babyfacellc.com/",
    "address": "8888 E Pinnacle Peak Rd Suite # 11, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, BabyFace Scottsdale Med Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 237,
    "analysis": []
  },
  {
    "id": "24",
    "first_name": "",
    "last_name": "SkinSpirit Scottsdale",
    "slug": "skinspirit-scottsdale-24",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 863-2800",
    "email": "",
    "website": "https://www.skinspirit.com/locations/scottsdale/",
    "address": "15425 N Scottsdale Rd #140, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, SkinSpirit Scottsdale provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 151,
    "analysis": []
  },
  {
    "id": "25",
    "first_name": "",
    "last_name": "Glo Medspa",
    "slug": "glo-medspa-25",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 245-6881",
    "email": "",
    "website": "http://www.glomedspas.com/",
    "address": "10505 N 69th St suite #1000, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Glo Medspa provides premier Spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 84,
    "analysis": []
  },
  {
    "id": "26",
    "first_name": "",
    "last_name": "MD Beauty Club",
    "slug": "md-beauty-club-26",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 508-5774",
    "email": "",
    "website": "https://mdbeautyspa.com/camelback/",
    "address": "6740 E Camelback Rd suite 101, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, MD Beauty Club provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 90,
    "analysis": []
  },
  {
    "id": "27",
    "first_name": "",
    "last_name": "Joliet Aesthetics Med Spa Scottsdale",
    "slug": "joliet-aesthetics-med-spa-scottsdale-27",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 896-3754",
    "email": "",
    "website": "https://www.jolietaestheticsmedspa.com/?utm_source=GBP",
    "address": "10679 N Frank Lloyd Wright Blvd Building F Suite 103, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Joliet Aesthetics Med Spa Scottsdale provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 69,
    "analysis": []
  },
  {
    "id": "28",
    "first_name": "",
    "last_name": "Quantum Wellness Med Spa Scottsdale",
    "slug": "quantum-wellness-med-spa-scottsdale-28",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(602) 726-1262",
    "email": "",
    "website": "https://www.quantumwellnessmedical.com/",
    "address": "7155 E Main St, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Quantum Wellness Med Spa Scottsdale provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 28,
    "analysis": []
  },
  {
    "id": "29",
    "first_name": "",
    "last_name": "Perfect Dose",
    "slug": "perfect-dose-29",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 823-0119",
    "email": "",
    "website": "https://www.theperfectdose.net/",
    "address": "6590 N Scottsdale Rd, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Perfect Dose provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 352,
    "analysis": []
  },
  {
    "id": "30",
    "first_name": "",
    "last_name": "Alani Skin MD",
    "slug": "alani-skin-md-30",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 993-2218",
    "email": "",
    "website": "https://alaniskinmd.com/locations/scottsdale-az/?utm_source=GBP&utm_medium=GBP&utm_campaign=gbp+scottsdale",
    "address": "7246 E 1st St Suite 102, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Alani Skin MD provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 618,
    "analysis": []
  },
  {
    "id": "31",
    "first_name": "",
    "last_name": "Love Aesthetics & Wellness",
    "slug": "love-aesthetics-wellness-31",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 999-8383",
    "email": "",
    "website": "https://www.loveaestheticswellness.com/",
    "address": "9300 E Raintree Dr, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Love Aesthetics & Wellness provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 205,
    "analysis": []
  },
  {
    "id": "32",
    "first_name": "",
    "last_name": "MODE Aesthetics and Wellness",
    "slug": "mode-aesthetics-and-wellness-32",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 203-2072",
    "email": "",
    "website": "https://modescottsdale.com/",
    "address": "7420 E Pinnacle Peak Rd Ste 120, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, MODE Aesthetics and Wellness provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 25,
    "analysis": []
  },
  {
    "id": "33",
    "first_name": "",
    "last_name": "Skin Charm",
    "slug": "skin-charm-33",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 687-8996",
    "email": "",
    "website": "http://www.skincharm.com/",
    "address": "7038 E Indian School Rd, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Skin Charm provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 132,
    "analysis": []
  },
  {
    "id": "34",
    "first_name": "",
    "last_name": "Snatural Medspa",
    "slug": "snatural-medspa-34",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 995-4477",
    "email": "",
    "website": "https://www.snaturalmedspa.com/",
    "address": "4383 N 75th St Suite 103, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Snatural Medspa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 25,
    "analysis": []
  },
  {
    "id": "35",
    "first_name": "",
    "last_name": "Skin Savvy Aesthetics Med Spa",
    "slug": "skin-savvy-aesthetics-med-spa-35",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 409-2902",
    "email": "",
    "website": "https://skinsavvyaesthetics.com/",
    "address": "8418 E Shea Blvd Ste 101, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Skin Savvy Aesthetics Med Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 430,
    "analysis": []
  },
  {
    "id": "36",
    "first_name": "",
    "last_name": "SkinSpirit Noe Valley",
    "slug": "skinspirit-noe-valley-36",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(415) 685-0510",
    "email": "",
    "website": "https://www.skinspirit.com/locations/noe-valley/?utm_source=citation&utm_medium=organic&utm_campaign=noevalley",
    "address": "3939 24th St, San Francisco, California",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in San Francisco, SkinSpirit Noe Valley provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.7,
    "review_count": 119,
    "analysis": []
  },
  {
    "id": "37",
    "first_name": "",
    "last_name": "SkinSpirit Walnut Creek",
    "slug": "skinspirit-walnut-creek-37",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(925) 952-9200",
    "email": "",
    "website": "https://www.skinspirit.com/locations/walnut-creek/?utm_source=citation&utm_medium=organic&utm_campaign=walnutcreek",
    "address": "1647 N California Blvd, Walnut Creek, California",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Walnut Creek, SkinSpirit Walnut Creek provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 331,
    "analysis": []
  },
  {
    "id": "38",
    "first_name": "",
    "last_name": "SkinSpirit Oakland - Montclair",
    "slug": "skinspirit-oakland-montclair-38",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(510) 368-7500",
    "email": "",
    "website": "https://www.skinspirit.com/locations/montclair/?utm_source=citation&utm_medium=organic&utm_campaign=oakland",
    "address": "2017 Mountain Blvd, Oakland, California",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Oakland, SkinSpirit Oakland - Montclair provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 138,
    "analysis": []
  },
  {
    "id": "39",
    "first_name": "",
    "last_name": "SkinSpirit Burlingame",
    "slug": "skinspirit-burlingame-39",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(650) 825-4100",
    "email": "",
    "website": "https://www.skinspirit.com/locations/burlingame/?utm_source=citation&utm_medium=organic&utm_campaign=burlingame",
    "address": "1375 Burlingame Ave, Burlingame, California",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Burlingame, SkinSpirit Burlingame provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 99,
    "analysis": []
  },
  {
    "id": "40",
    "first_name": "",
    "last_name": "SkinSpirit Presidio Heights",
    "slug": "skinspirit-presidio-heights-40",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(415) 767-2640",
    "email": "",
    "website": "https://www.skinspirit.com/locations/san-francisco/",
    "address": "3325 Sacramento St, San Francisco, California",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in San Francisco, SkinSpirit Presidio Heights provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.7,
    "review_count": 153,
    "analysis": []
  },
  {
    "id": "41",
    "first_name": "",
    "last_name": "SkinSpirit Los Gatos",
    "slug": "skinspirit-los-gatos-41",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(669) 233-4040",
    "email": "",
    "website": "https://www.skinspirit.com/locations/los-gatos/",
    "address": "15954 Los Gatos Blvd, Los Gatos, California",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Los Gatos, SkinSpirit Los Gatos provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 163,
    "analysis": []
  },
  {
    "id": "42",
    "first_name": "",
    "last_name": "SkinSpirit Palo Alto",
    "slug": "skinspirit-palo-alto-42",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(650) 324-9600",
    "email": "",
    "website": "https://www.skinspirit.com/locations/palo-alto/?utm_source=citation&utm_medium=organic&utm_campaign=paloalto",
    "address": "701 Emerson St, Palo Alto, California",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Palo Alto, SkinSpirit Palo Alto provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.6,
    "review_count": 290,
    "analysis": []
  },
  {
    "id": "43",
    "first_name": "",
    "last_name": "SkinSpirit Mill Valley",
    "slug": "skinspirit-mill-valley-43",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(415) 383-3100",
    "email": "",
    "website": "https://www.skinspirit.com/locations/mill-valley/",
    "address": "800 Redwood Hwy Suite 610, Mill Valley, California",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Mill Valley, SkinSpirit Mill Valley provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 79,
    "analysis": []
  },
  {
    "id": "44",
    "first_name": "",
    "last_name": "David M. Lieberman, MD",
    "slug": "david-m-lieberman-md-44",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(650) 327-3232",
    "email": "",
    "website": "https://www.fortheface.com/?utm_source=google&utm_medium=local&utm_campaign=paloalto-lieberman-website",
    "address": "105 Addison Ave, Palo Alto, California",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Palo Alto, David M. Lieberman, MD provides premier Plastic surgeon services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.5,
    "review_count": 8,
    "analysis": []
  },
  {
    "id": "45",
    "first_name": "",
    "last_name": "Plump Medspa",
    "slug": "plump-medspa-45",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(503) 805-5979",
    "email": "",
    "website": "http://www.plumpmedspa.com/",
    "address": "2725 SW Cedar Hills Blvd #115, Beaverton, Oregon",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Beaverton, Plump Medspa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 468,
    "analysis": []
  },
  {
    "id": "46",
    "first_name": "",
    "last_name": "SkinSpirit Lake Oswego",
    "slug": "skinspirit-lake-oswego-46",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(971) 396-4300",
    "email": "",
    "website": "https://www.skinspirit.com/locations/lake-oswego/",
    "address": "220 A Ave Suite 100, Lake Oswego, Oregon",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Lake Oswego, SkinSpirit Lake Oswego provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 105,
    "analysis": []
  },
  {
    "id": "47",
    "first_name": "",
    "last_name": "Pearl MedSpa",
    "slug": "pearl-medspa-47",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(503) 946-3888",
    "email": "",
    "website": "https://pearlmedspa.com/",
    "address": "1339 NW Couch St, Portland, Oregon",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Portland, Pearl MedSpa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 3.8,
    "review_count": 73,
    "analysis": []
  },
  {
    "id": "48",
    "first_name": "",
    "last_name": "Dew Aesthetics",
    "slug": "dew-aesthetics-48",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 329-4553",
    "email": "",
    "website": "https://www.joinblvd.com/b/dewskinaz/widget#/",
    "address": "5115 N Scottsdale Rd #9, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Dew Aesthetics provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 60,
    "analysis": []
  },
  {
    "id": "49",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Spring Lake",
    "slug": "4ever-young-med-spa-wellness-center-spring-lake-49",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(732) 344-4833",
    "email": "",
    "website": "https://4everyoungantiaging.com/spring-lake-nj/?utm_source=google&utm_medium=organic&utm_campaign=gbp-spring-lake-nj",
    "address": "1933 NJ-35 #122, Wall Township, New Jersey",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Wall Township, 4Ever Young Med Spa & Wellness Center - Spring Lake provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 167,
    "analysis": []
  },
  {
    "id": "50",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Edgewater",
    "slug": "4ever-young-med-spa-wellness-center-edgewater-50",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(551) 313-8204",
    "email": "",
    "website": "https://4everyoungantiaging.com/edgewater/?utm_source=google&utm_medium=organic&utm_campaign=gbp-edgewater",
    "address": "11 Edgewater Towne Ctr unit 9c, Edgewater, New Jersey",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Edgewater, 4Ever Young Med Spa & Wellness Center - Edgewater provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 206,
    "analysis": []
  },
  {
    "id": "51",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Ridgewood",
    "slug": "4ever-young-med-spa-wellness-center-ridgewood-51",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(201) 614-4047",
    "email": "",
    "website": "https://4everyoungantiaging.com/ridgewood-nj-anti-aging-clinic/?utm_source=google&utm_medium=organic&utm_campaign=gbp-ridgewood-nj-anti-aging-clinic",
    "address": "20 Wilsey Square, Ridgewood, New Jersey",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Ridgewood, 4Ever Young Med Spa & Wellness Center - Ridgewood provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.7,
    "review_count": 114,
    "analysis": []
  },
  {
    "id": "52",
    "first_name": "",
    "last_name": "Profile Aesthetics",
    "slug": "profile-aesthetics-52",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 933-9319",
    "email": "",
    "website": "https://profileaesthetics.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
    "address": "8370 East V\u00eda de Ventura K205, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Profile Aesthetics provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 125,
    "analysis": []
  },
  {
    "id": "53",
    "first_name": "",
    "last_name": "Mountain Aesthetics with Taylor FNP",
    "slug": "mountain-aesthetics-with-taylor-fnp-53",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(520) 850-9285",
    "email": "",
    "website": "https://www.schedulicity.com/scheduling/MAWW38B",
    "address": "529 E Main St Suite 116, Bozeman, Montana",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Bozeman, Mountain Aesthetics with Taylor FNP provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 18,
    "analysis": []
  },
  {
    "id": "54",
    "first_name": "",
    "last_name": "Crafted Aesthetics",
    "slug": "crafted-aesthetics-54",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(406) 461-0974",
    "email": "",
    "website": "http://craftedaestheticsmt.com/",
    "address": "1211 Echelon Pl STE A, Helena, Montana",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Helena, Crafted Aesthetics provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 500,
    "analysis": []
  },
  {
    "id": "55",
    "first_name": "",
    "last_name": "DS Skin & Lips Medical Spa",
    "slug": "ds-skin-lips-medical-spa-55",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 864-5100",
    "email": "",
    "website": "https://www.dsskinandlips.com/",
    "address": "617 N Scottsdale Rd Ste. B, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, DS Skin & Lips Medical Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 321,
    "analysis": []
  },
  {
    "id": "56",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Heights Houston",
    "slug": "4ever-young-med-spa-wellness-center-heights-houston-56",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(346) 449-4945",
    "email": "",
    "website": "https://4everyoungantiaging.com/houston-heights/?utm_source=google&utm_medium=organic&utm_campaign=gbp-houston-heights",
    "address": "550 Heights Blvd Suite A, Houston, Texas",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Houston, 4Ever Young Med Spa & Wellness Center - Heights Houston provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 75,
    "analysis": []
  },
  {
    "id": "57",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Katy",
    "slug": "4ever-young-med-spa-wellness-center-katy-57",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(346) 514-4600",
    "email": "",
    "website": "https://4everyoungantiaging.com/katy/?utm_source=google&utm_medium=organic&utm_campaign=gbp-katy",
    "address": "23128 Westheimer Pkwy, Katy, Texas",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Katy, 4Ever Young Med Spa & Wellness Center - Katy provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 119,
    "analysis": []
  },
  {
    "id": "58",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Wilchester Houston",
    "slug": "4ever-young-med-spa-wellness-center-wilchester-houston-58",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(713) 818-8982",
    "email": "",
    "website": "https://4everyoungantiaging.com/wilchester-houston/?utm_source=google&utm_medium=organic&utm_campaign=gbp-wilchester-houston",
    "address": "13210 Memorial Dr Ste 400, Houston, Texas",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Houston, 4Ever Young Med Spa & Wellness Center - Wilchester Houston provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 155,
    "analysis": []
  },
  {
    "id": "59",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Spring",
    "slug": "4ever-young-med-spa-wellness-center-spring-59",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(832) 585-8008",
    "email": "",
    "website": "https://4everyoungantiaging.com/spring-tx/?utm_source=google&utm_medium=organic&utm_campaign=gbp-spring-tx",
    "address": "6535 Grand Pkwy STE 215, Spring, Texas",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Spring, 4Ever Young Med Spa & Wellness Center - Spring provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 205,
    "analysis": []
  },
  {
    "id": "60",
    "first_name": "",
    "last_name": "R3 Anti Aging & Medspa",
    "slug": "r3-anti-aging-medspa-60",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(615) 835-2690",
    "email": "",
    "website": "https://r3antiaging.com/",
    "address": "5020 Thoroughbred Ln, Brentwood, Tennessee",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Brentwood, R3 Anti Aging & Medspa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 222,
    "analysis": []
  },
  {
    "id": "61",
    "first_name": "",
    "last_name": "Seamless Skin M.D.",
    "slug": "seamless-skin-m-d-61",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(505) 772-0185",
    "email": "",
    "website": "http://seamlessskinmd.com/",
    "address": "308 N Guadalupe St, Santa Fe, New Mexico",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Santa Fe, Seamless Skin M.D. provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 131,
    "analysis": []
  },
  {
    "id": "62",
    "first_name": "",
    "last_name": "MDSkin Lounge and MDSkin Bar",
    "slug": "mdskin-lounge-and-mdskin-bar-62",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(435) 571-0873",
    "email": "",
    "website": "http://www.mdskinlounge.com/",
    "address": "1242 Center Dr UNIT 5, Park City, Utah",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Park City, MDSkin Lounge and MDSkin Bar provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 117,
    "analysis": []
  },
  {
    "id": "63",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Fort Collins",
    "slug": "4ever-young-med-spa-wellness-center-fort-collins-63",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(970) 694-5050",
    "email": "",
    "website": "https://4everyoungantiaging.com/fort-collins/?utm_source=google&utm_medium=organic&utm_campaign=gbp-fort-collins",
    "address": "2720 Council Tree Ave #112, Fort Collins, Colorado",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Fort Collins, 4Ever Young Med Spa & Wellness Center - Fort Collins provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 270,
    "analysis": []
  },
  {
    "id": "64",
    "first_name": "",
    "last_name": "Beauty Sleep Injections",
    "slug": "beauty-sleep-injections-64",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(435) 590-7817",
    "email": "",
    "website": "http://beautysleepinjections.com/",
    "address": "1008 Main St, Evanston, Wyoming",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Evanston, Beauty Sleep Injections provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 3,
    "analysis": []
  },
  {
    "id": "65",
    "first_name": "",
    "last_name": "Haute Beauty Aesthetics",
    "slug": "haute-beauty-aesthetics-65",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(469) 790-0204",
    "email": "",
    "website": "http://www.hautebeautyaesthetics.com/",
    "address": "241 Town Pl Suite 101/103, Fairview, Texas",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Fairview, Haute Beauty Aesthetics provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 100,
    "analysis": []
  },
  {
    "id": "66",
    "first_name": "",
    "last_name": "SkinSpirit Preston Royal - Dallas",
    "slug": "skinspirit-preston-royal-dallas-66",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(972) 707-1200",
    "email": "",
    "website": "https://www.skinspirit.com/locations/preston-royal/",
    "address": "5959 Royal Ln #530, Dallas, Texas",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Dallas, SkinSpirit Preston Royal - Dallas provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 193,
    "analysis": []
  },
  {
    "id": "67",
    "first_name": "",
    "last_name": "Lemmon Avenue Plastic Surgery and Laser Center",
    "slug": "lemmon-avenue-plastic-surgery-and-laser-center-67",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(214) 702-0707",
    "email": "",
    "website": "http://www.lemmonavenueplasticsurgery.com/",
    "address": "2801 Lemmon Ave # 300, Dallas, Texas",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Dallas, Lemmon Avenue Plastic Surgery and Laser Center provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 421,
    "analysis": []
  },
  {
    "id": "68",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Flower Mound",
    "slug": "4ever-young-med-spa-wellness-center-flower-mound-68",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(469) 658-4800",
    "email": "",
    "website": "https://4everyoungantiaging.com/flower-mound/?utm_source=google&utm_medium=organic&utm_campaign=gbp-flower-mound",
    "address": "4251 Cross Timbers Rd #160, Flower Mound, Texas",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Flower Mound, 4Ever Young Med Spa & Wellness Center - Flower Mound provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 354,
    "analysis": []
  },
  {
    "id": "69",
    "first_name": "",
    "last_name": "Athena Beauty Bar Il",
    "slug": "athena-beauty-bar-il-69",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(214) 256-0992",
    "email": "",
    "website": "https://athenabeautybar.com/",
    "address": "11445 Dallas Pkwy, Frisco, Texas",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Frisco, Athena Beauty Bar Il provides premier Permanent make-up clinic services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 3.9,
    "review_count": 112,
    "analysis": []
  },
  {
    "id": "70",
    "first_name": "",
    "last_name": "Astria Aesthetics - Grove City",
    "slug": "astria-aesthetics-grove-city-70",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(380) 223-3331",
    "email": "",
    "website": "http://www.astriaaesthetics.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
    "address": "2045 Stringtown Rd, Grove City, Ohio",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Grove City, Astria Aesthetics - Grove City provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 313,
    "analysis": []
  },
  {
    "id": "71",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Carmel",
    "slug": "4ever-young-med-spa-wellness-center-carmel-71",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(317) 559-9150",
    "email": "",
    "website": "https://4everyoungantiaging.com/clay-terrace-indianapolis/?utm_source=google&utm_medium=organic&utm_campaign=gbp-clay-terrace-indianapolis",
    "address": "14405 Clay Terrace Blvd Ste 100, Carmel, Indiana",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Carmel, 4Ever Young Med Spa & Wellness Center - Carmel provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 205,
    "analysis": []
  },
  {
    "id": "72",
    "first_name": "",
    "last_name": "Skin N Tox Aesthetics",
    "slug": "skin-n-tox-aesthetics-72",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(208) 869-9779",
    "email": "",
    "website": "https://skinandtox.com/?y_source=1_MTA4NDg5MDM1Ni03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
    "address": "1385 W McMillan Rd, Meridian, Idaho",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Meridian, Skin N Tox Aesthetics provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 581,
    "analysis": []
  },
  {
    "id": "73",
    "first_name": "",
    "last_name": "B'tox Babe",
    "slug": "b-tox-babe-73",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(208) 391-3299",
    "email": "",
    "website": "https://www.btoxbabe.com/",
    "address": ", , ",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, B'tox Babe provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 38,
    "analysis": []
  },
  {
    "id": "74",
    "first_name": "",
    "last_name": "4Ever Young Med Spa & Wellness Center - Omaha",
    "slug": "4ever-young-med-spa-wellness-center-omaha-74",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(402) 433-6447",
    "email": "",
    "website": "https://4everyoungantiaging.com/omaha/?utm_source=google&utm_medium=organic&utm_campaign=gbp-omaha",
    "address": "2501 S 90th St STE 117, Omaha, Nebraska",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Omaha, 4Ever Young Med Spa & Wellness Center - Omaha provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 222,
    "analysis": []
  },
  {
    "id": "75",
    "first_name": "",
    "last_name": "Ida Aesthetics",
    "slug": "ida-aesthetics-75",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(816) 552-3852",
    "email": "",
    "website": "https://www.idamedaesthetics.com/",
    "address": "5341 W 151st St Suite 4, Leawood, Kansas",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Leawood, Ida Aesthetics provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 43,
    "analysis": []
  },
  {
    "id": "76",
    "first_name": "",
    "last_name": "SkinSpirit Manhattan Beach",
    "slug": "skinspirit-manhattan-beach-76",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(424) 653-3700",
    "email": "",
    "website": "https://www.skinspirit.com/locations/manhattan-beach/",
    "address": "3113 N Sepulveda Blvd Unit C, Manhattan Beach, California",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Manhattan Beach, SkinSpirit Manhattan Beach provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 80,
    "analysis": []
  },
  {
    "id": "77",
    "first_name": "",
    "last_name": "SkinSpirit Long Beach at 2nd &PCH",
    "slug": "skinspirit-long-beach-at-2nd-pch-77",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(562) 512-7900",
    "email": "",
    "website": "https://www.skinspirit.com/locations/long-beach/",
    "address": "6460 Pacific Coast Hwy, Long Beach, California",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Long Beach, SkinSpirit Long Beach at 2nd &PCH provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 160,
    "analysis": []
  },
  {
    "id": "78",
    "first_name": "",
    "last_name": "SkinSpirit Pasadena",
    "slug": "skinspirit-pasadena-78",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(626) 765-6291",
    "email": "",
    "website": "https://www.skinspirit.com/locations/pasadena/",
    "address": "708 E Colorado Blvd, Pasadena, California",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Pasadena, SkinSpirit Pasadena provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 56,
    "analysis": []
  },
  {
    "id": "79",
    "first_name": "",
    "last_name": "SkinCeuticals SkinLab Santa Monica by Cavendish Clinic",
    "slug": "skinceuticals-skinlab-santa-monica-by-cavendish-clinic-79",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(310) 310-2003",
    "email": "",
    "website": "http://www.skinlab-la.com/",
    "address": "2801 Main St, Santa Monica, California",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Santa Monica, SkinCeuticals SkinLab Santa Monica by Cavendish Clinic provides premier Medical clinic services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 156,
    "analysis": []
  },
  {
    "id": "80",
    "first_name": "",
    "last_name": "SkinSpirit at Lasky",
    "slug": "skinspirit-at-lasky-80",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(310) 552-8010",
    "email": "",
    "website": "https://www.skinspirit.com/locations/beverly-hills/",
    "address": "153 S Lasky Dr Suite 8, Beverly Hills, California",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Beverly Hills, SkinSpirit at Lasky provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 93,
    "analysis": []
  },
  {
    "id": "81",
    "first_name": "",
    "last_name": "NakedMD Med Spa Chino Hills",
    "slug": "nakedmd-med-spa-chino-hills-81",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(909) 538-8715",
    "email": "",
    "website": "https://www.nakedmd.com/pages/locations-chino-hills-ca",
    "address": "15944 Los Serranos Country Club Dr STE 270, Chino Hills, California",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Chino Hills, NakedMD Med Spa Chino Hills provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 722,
    "analysis": []
  },
  {
    "id": "82",
    "first_name": "",
    "last_name": "SkinSpirit Newport Beach",
    "slug": "skinspirit-newport-beach-82",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(949) 688-5880",
    "email": "",
    "website": "https://www.skinspirit.com/locations/newport-beach/?utm_source=citation&utm_medium=organic&utm_campaign=newportbeach",
    "address": "2135 Westcliff Dr #102, Newport Beach, California",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Newport Beach, SkinSpirit Newport Beach provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 91,
    "analysis": []
  },
  {
    "id": "83",
    "first_name": "",
    "last_name": "Bonakdar Aesthetics",
    "slug": "bonakdar-aesthetics-83",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(949) 721-6000",
    "email": "",
    "website": "https://www.bonakdaraesthetics.com/?utm_source=gmb&utm_medium=organic",
    "address": "20321 Irvine Ave Ste F3, Newport Beach, California",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Newport Beach, Bonakdar Aesthetics provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 186,
    "analysis": []
  },
  {
    "id": "84",
    "first_name": "",
    "last_name": "Rejuvayou Medical",
    "slug": "rejuvayou-medical-84",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(626) 382-1022",
    "email": "",
    "website": "http://www.rejuvayou.com/",
    "address": "1024 Mission St A, South Pasadena, California",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in South Pasadena, Rejuvayou Medical provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 39,
    "analysis": []
  },
  {
    "id": "85",
    "first_name": "",
    "last_name": "SSK Plastic Surgery",
    "slug": "ssk-plastic-surgery-85",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(949) 515-7874",
    "email": "",
    "website": "https://sskplasticsurgery.com/ssk-plastic-surgery",
    "address": "500 Superior Ave #340, Newport Beach, California",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Newport Beach, SSK Plastic Surgery provides premier Plastic surgeon services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 264,
    "analysis": []
  },
  {
    "id": "86",
    "first_name": "",
    "last_name": "SkinSpirit Austin",
    "slug": "skinspirit-austin-86",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(737) 255-8200",
    "email": "",
    "website": "https://www.skinspirit.com/locations/austin/?utm_source=citation&utm_medium=organic&utm_campaign=austin",
    "address": "405 N Lamar Blvd Suite 110, Austin, Texas",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Austin, SkinSpirit Austin provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 166,
    "analysis": []
  },
  {
    "id": "87",
    "first_name": "",
    "last_name": "Vessel Longevity Cedar Park",
    "slug": "vessel-longevity-cedar-park-87",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(512) 337-7722",
    "email": "",
    "website": "https://www.vessel-tx.com/",
    "address": "1717 Scottsdale Dr #120, Cedar Park, Texas",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Cedar Park, Vessel Longevity Cedar Park provides premier Health spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 327,
    "analysis": []
  },
  {
    "id": "88",
    "first_name": "",
    "last_name": "Austin Cosmetic Surgery: Dr. Michelle Cabret & Dr. Kimberly Prock",
    "slug": "austin-cosmetic-surgery-dr-michelle-cabret-dr-kimberly-prock-88",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(512) 861-6087",
    "email": "",
    "website": "https://austincosmeticsurgery.com/?utm_source=GMBlisting&utm_medium=organic&utm_campaign=business-profile",
    "address": "3102 Ranch Rd 620 S, Austin, Texas",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Austin, Austin Cosmetic Surgery: Dr. Michelle Cabret & Dr. Kimberly Prock provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 98,
    "analysis": []
  },
  {
    "id": "89",
    "first_name": "",
    "last_name": "DermaPrecision",
    "slug": "dermaprecision-89",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 470-1966",
    "email": "",
    "website": "https://dermaprecision.com/",
    "address": "7550 E Greenway Rd #105, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, DermaPrecision provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 123,
    "analysis": []
  },
  {
    "id": "90",
    "first_name": "",
    "last_name": "MD Beauty Spa",
    "slug": "md-beauty-spa-90",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 551-2040",
    "email": "",
    "website": "https://www.marcmalekmd.com/md-beauty-spa/",
    "address": "8994 E Desert Cove Ave, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, MD Beauty Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 19,
    "analysis": []
  },
  {
    "id": "91",
    "first_name": "",
    "last_name": "The Glam Nurse",
    "slug": "the-glam-nurse-91",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 527-7646",
    "email": "",
    "website": "http://theglamnurse.com/",
    "address": "7109 E 2nd St #104, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, The Glam Nurse provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 240,
    "analysis": []
  },
  {
    "id": "92",
    "first_name": "",
    "last_name": "Revive Health and Wellness",
    "slug": "revive-health-and-wellness-92",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(520) 759-7394",
    "email": "",
    "website": "http://www.revivehealthaz.com/",
    "address": "1550 E Florence Blvd SUITES 103 AND 104, Casa Grande, Arizona",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Casa Grande, Revive Health and Wellness provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 116,
    "analysis": []
  },
  {
    "id": "93",
    "first_name": "",
    "last_name": "Cloud 9 MedSpa - Best MedSpa in Casa Grande, AZ",
    "slug": "cloud-9-medspa-best-medspa-in-casa-grande-az-93",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(520) 876-5996",
    "email": "",
    "website": "http://www.cloud9medspaaz.com/",
    "address": "1269 N Promenade Pkwy #101, Casa Grande, Arizona",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Casa Grande, Cloud 9 MedSpa - Best MedSpa in Casa Grande, AZ provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 132,
    "analysis": []
  },
  {
    "id": "94",
    "first_name": "",
    "last_name": "Peach Skin & Laser",
    "slug": "peach-skin-laser-94",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(928) 782-0554",
    "email": "",
    "website": "https://www.peachskinlaser.com/",
    "address": "2180 S 4th Ave A, Yuma, Arizona",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Yuma, Peach Skin & Laser provides premier Laser hair removal service services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 656,
    "analysis": []
  },
  {
    "id": "95",
    "first_name": "",
    "last_name": "Peach Skin & Laser",
    "slug": "peach-skin-laser-95",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(520) 413-0774",
    "email": "",
    "website": "https://www.peachskinlaser.com/",
    "address": "245 S Wilmot Rd #165, Tucson, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Tucson, Peach Skin & Laser provides premier Laser hair removal service services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 1274,
    "analysis": []
  },
  {
    "id": "96",
    "first_name": "",
    "last_name": "Skin Appeal",
    "slug": "skin-appeal-96",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(520) 261-7546",
    "email": "",
    "website": "https://myskinappeal.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
    "address": "1700 E Fort Lowell Rd STE 101, Tucson, Arizona",
    "photo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Tucson, Skin Appeal provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 299,
    "analysis": []
  },
  {
    "id": "97",
    "first_name": "",
    "last_name": "Nurse Gemavie Aesthetics",
    "slug": "nurse-gemavie-aesthetics-97",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(520) 565-0737",
    "email": "",
    "website": "http://www.nursegemavie.com/",
    "address": "2920 N Swan Rd Suite 208, Tucson, Arizona",
    "photo": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d885?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Tucson, Nurse Gemavie Aesthetics provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 30,
    "analysis": []
  },
  {
    "id": "98",
    "first_name": "",
    "last_name": "LaserAway Tucson",
    "slug": "laseraway-tucson-98",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(520) 600-5757",
    "email": "",
    "website": "https://www.laseraway.com/locations/az/tucson/?utm_source=google&utm_medium=organic&utm_campaign=website-link",
    "address": "2905 E Skyline Dr Suite 252, Tucson, Arizona",
    "photo": "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1600334019640-eb2029cc0a5e?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Tucson, LaserAway Tucson provides premier Laser hair removal service services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 637,
    "analysis": []
  },
  {
    "id": "99",
    "first_name": "",
    "last_name": "It\u2019s A Secret Med Spa",
    "slug": "it-s-a-secret-med-spa-99",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 685-2647",
    "email": "",
    "website": "https://secretmedspa.com/scottsdale-az/",
    "address": "7012 E Greenway Pkwy Suite 140, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, It\u2019s A Secret Med Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.4,
    "review_count": 100,
    "analysis": []
  },
  {
    "id": "100",
    "first_name": "",
    "last_name": "Lumier Medical Spa",
    "slug": "lumier-medical-spa-100",
    "city_id": "1",
    "services": [
      "Botox",
      "Dysport",
      "Dermal Fillers",
      "Lip Fillers",
      "Microneedling",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Kybellla",
      "Facial Balancing"
    ],
    "phone": "(480) 244-5544",
    "email": "",
    "website": "http://www.lumiermedicalspa.com/",
    "address": "14350 N Frank Lloyd Wright Blvd Ste 2, Scottsdale, Arizona",
    "photo": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    ],
    "bio": "Located in Scottsdale, Lumier Medical Spa provides premier Medical spa services including Botox, fillers, and skin rejuvenation.",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 64,
    "analysis": []
  }
];