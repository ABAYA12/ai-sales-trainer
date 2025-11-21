/*
  # Fix Security and Performance Issues
  
  1. Performance Improvements
    - Add indexes for foreign keys on simulations table
      - Index on user_id for faster user-specific queries
      - Index on scenario_id for faster scenario lookups
    
  2. RLS Policy Optimization
    - Update all RLS policies to use (select auth.uid()) instead of auth.uid()
    - This prevents re-evaluation of auth functions for each row, dramatically improving query performance at scale
    
  3. Tables Affected
    - profiles: 3 policies updated
    - simulations: 2 policies updated
  
  4. Important Notes
    - Foreign key indexes improve JOIN performance
    - RLS optimization is critical for production scalability
    - All existing policies are replaced with optimized versions
*/

-- Add indexes for foreign keys on simulations table
CREATE INDEX IF NOT EXISTS idx_simulations_user_id ON simulations(user_id);
CREATE INDEX IF NOT EXISTS idx_simulations_scenario_id ON simulations(scenario_id);

-- Drop existing RLS policies on profiles table
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Create optimized RLS policies for profiles table
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (id = (select auth.uid()));

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (id = (select auth.uid()));

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (id = (select auth.uid()))
  WITH CHECK (id = (select auth.uid()));

-- Drop existing RLS policies on simulations table
DROP POLICY IF EXISTS "Users can read own simulations" ON simulations;
DROP POLICY IF EXISTS "Users can insert own simulations" ON simulations;

-- Create optimized RLS policies for simulations table
CREATE POLICY "Users can read own simulations"
  ON simulations
  FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()));

CREATE POLICY "Users can insert own simulations"
  ON simulations
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));
