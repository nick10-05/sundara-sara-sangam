-- Create storage bucket for sloka audio files
INSERT INTO storage.buckets (id, name, public) VALUES ('sloka-audio', 'sloka-audio', true);

-- Allow public read access to audio files
CREATE POLICY "Public can read audio files" ON storage.objects FOR SELECT USING (bucket_id = 'sloka-audio');

-- Allow authenticated users to upload audio files (for admin purposes)
CREATE POLICY "Authenticated users can upload audio" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'sloka-audio' AND auth.role() = 'authenticated');