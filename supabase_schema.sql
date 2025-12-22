
/* Enable the uuid-ossp extension for UUID generation */
create extension if not exists "uuid-ossp";

/* Cities Table */
create table cities (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  population integer,
  image text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

/* Therapists Table (Chiropractors) */
create table therapists (
  id uuid default uuid_generate_v4() primary key,
  first_name text not null,
  last_name text not null,
  slug text not null unique,
  city_id uuid references cities(id) on delete set null,
  services text[],
  phone text,
  email text,
  website text,
  address text,
  photo text,
  images text[],
  bio text,
  description text,
  languages text[],
  google_business_id text,
  rating numeric,
  review_count integer,
  analysis text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

/* Create indexes for better performance */
create index idx_therapists_city_id on therapists(city_id);
create index idx_therapists_services on therapists using gin(services);
create index idx_cities_slug on cities(slug);
create index idx_therapists_slug on therapists(slug);

/* RLS Policies (Optional but recommended - Public Read) */
alter table cities enable row level security;
alter table therapists enable row level security;

create policy "Enable read access for all users" on cities for select using (true);
create policy "Enable read access for all users" on therapists for select using (true);

/* Blog Posts Table */
create table posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  cover_image text,
  published_at timestamp with time zone default now(),
  author_name text default 'Dr. AI',
  tags text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

/* RLS for Posts */
alter table posts enable row level security;
create policy "Enable read access for all users" on posts for select using (true);
