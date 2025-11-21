/*
  # Create simulations table

  1. New Tables
    - `simulations`
      - `id` (uuid, primary key) - Unique identifier for the simulation
      - `user_id` (uuid) - References profiles table
      - `scenario_id` (uuid) - References scenarios table
      - `transcript` (text) - Full conversation transcript
      - `score` (integer) - Overall score (0-100)
      - `clarity_score` (integer) - Clarity score (0-100)
      - `confidence_score` (integer) - Confidence score (0-100)
      - `objection_handling_score` (integer) - Objection handling score (0-100)
      - `closing_score` (integer) - Closing score (0-100)
      - `feedback` (text) - AI-generated feedback
      - `created_at` (timestamptz) - When the simulation was completed

  2. Security
    - Enable RLS on `simulations` table
    - Add policy for users to read their own simulations
    - Add policy for users to insert their own simulations
*/

CREATE TABLE IF NOT EXISTS simulations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  scenario_id uuid NOT NULL REFERENCES scenarios(id) ON DELETE CASCADE,
  transcript text NOT NULL DEFAULT '',
  score integer NOT NULL DEFAULT 0,
  clarity_score integer NOT NULL DEFAULT 0,
  confidence_score integer NOT NULL DEFAULT 0,
  objection_handling_score integer NOT NULL DEFAULT 0,
  closing_score integer NOT NULL DEFAULT 0,
  feedback text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE simulations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own simulations"
  ON simulations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own simulations"
  ON simulations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);