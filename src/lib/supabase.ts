import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ngsbexdnnazhkjmxcnap.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nc2JleGRubmF6aGtqbXhjbmFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NDc3MTAsImV4cCI6MjA3OTIyMzcxMH0.g6Fd-0jWEMXUlAAkb1oOsWRVrjIhheAtB0bV9Dp3Zp0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Profile {
  id: string;
  email: string;
  name: string;
  sales_role: string;
  industry: string;
  simulations_today: number;
  last_simulation_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  customer_persona: string;
  objections: string[];
  is_premium: boolean;
  created_at: string;
}

export interface Simulation {
  id: string;
  user_id: string;
  scenario_id: string;
  transcript: string;
  score: number;
  clarity_score: number;
  confidence_score: number;
  objection_handling_score: number;
  closing_score: number;
  feedback: string;
  created_at: string;
}
