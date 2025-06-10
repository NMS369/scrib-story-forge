-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  writing_genre TEXT,
  experience_level TEXT CHECK (experience_level IN ('beginner', 'intermediate', 'advanced', 'professional')),
  referral_source TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (join waitlist)
CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy for reading (only authenticated users can read - for admin purposes)
CREATE POLICY "Authenticated users can view waitlist"
ON public.waitlist
FOR SELECT
TO authenticated
USING (true);

-- Add index for better performance
CREATE INDEX idx_waitlist_email ON public.waitlist(email);
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);