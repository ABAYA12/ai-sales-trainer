/*
  # Create scenarios table

  1. New Tables
    - `scenarios`
      - `id` (uuid, primary key) - Unique identifier for the scenario
      - `title` (text) - Scenario title
      - `description` (text) - Scenario description
      - `difficulty` (text) - Difficulty level (Easy, Medium, Hard)
      - `customer_persona` (text) - Description of the customer persona
      - `objections` (text array) - Common objections in this scenario
      - `is_premium` (boolean) - Whether this is a premium scenario
      - `created_at` (timestamptz) - When the scenario was created

  2. Security
    - Enable RLS on `scenarios` table
    - Add policy for all authenticated users to read scenarios
*/

CREATE TABLE IF NOT EXISTS scenarios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  difficulty text NOT NULL DEFAULT 'Medium',
  customer_persona text NOT NULL,
  objections text[] NOT NULL DEFAULT '{}',
  is_premium boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE scenarios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read scenarios"
  ON scenarios
  FOR SELECT
  TO authenticated
  USING (true);