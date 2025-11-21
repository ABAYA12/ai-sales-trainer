/*
  # Add Pro Subscription Tracking

  1. Changes
    - Add `is_pro` column to profiles table to track Pro subscription status
    - Add `pro_upgraded_at` column to track when user upgraded
    - Set default value to false for existing users

  2. Notes
    - This enables simulated Pro upgrade functionality
    - Users with is_pro = true will have unlimited simulations
*/

-- Add is_pro column to profiles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'profiles' AND column_name = 'is_pro'
  ) THEN
    ALTER TABLE profiles ADD COLUMN is_pro boolean DEFAULT false;
  END IF;
END $$;

-- Add pro_upgraded_at column to profiles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'profiles' AND column_name = 'pro_upgraded_at'
  ) THEN
    ALTER TABLE profiles ADD COLUMN pro_upgraded_at timestamptz;
  END IF;
END $$;
