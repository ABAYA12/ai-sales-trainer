import { supabase } from './supabase';

export async function setupDatabase() {
  try {
    const { data: profilesCheck } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);

    if (profilesCheck !== null) {
      console.log('Database tables already exist');
      return { success: true, message: 'Database already initialized' };
    }
  } catch (error: any) {
    console.log('Tables need to be created. Note: Create them in Supabase dashboard.');
  }

  return {
    success: false,
    message: 'Please create tables in Supabase dashboard',
    sql: `
-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  name text NOT NULL,
  sales_role text NOT NULL DEFAULT 'SDR',
  industry text NOT NULL DEFAULT 'Technology',
  is_pro boolean DEFAULT false,
  daily_simulations_used integer DEFAULT 0,
  last_simulation_date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- Create scenarios table
CREATE TABLE IF NOT EXISTS scenarios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  type text NOT NULL,
  description text NOT NULL,
  difficulty text DEFAULT 'realistic',
  system_prompt text NOT NULL,
  is_system boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE scenarios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "System scenarios are publicly readable" ON scenarios FOR SELECT TO authenticated USING (is_system = true OR user_id = auth.uid());
CREATE POLICY "Users can create custom scenarios" ON scenarios FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid() AND is_system = false);
CREATE POLICY "Users can update own custom scenarios" ON scenarios FOR UPDATE TO authenticated USING (user_id = auth.uid() AND is_system = false) WITH CHECK (user_id = auth.uid() AND is_system = false);
CREATE POLICY "Users can delete own custom scenarios" ON scenarios FOR DELETE TO authenticated USING (user_id = auth.uid() AND is_system = false);

-- Create simulations table
CREATE TABLE IF NOT EXISTS simulations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  scenario_id uuid NOT NULL REFERENCES scenarios(id) ON DELETE CASCADE,
  status text DEFAULT 'in_progress',
  transcript jsonb DEFAULT '[]'::jsonb,
  duration_seconds integer DEFAULT 0,
  overall_score integer,
  metrics jsonb,
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

ALTER TABLE simulations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own simulations" ON simulations FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Users can create own simulations" ON simulations FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update own simulations" ON simulations FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

-- Create performance_reports table
CREATE TABLE IF NOT EXISTS performance_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  simulation_id uuid NOT NULL REFERENCES simulations(id) ON DELETE CASCADE,
  strengths text[] DEFAULT ARRAY[]::text[],
  weaknesses text[] DEFAULT ARRAY[]::text[],
  improved_script text,
  practice_suggestions text[] DEFAULT ARRAY[]::text[],
  phrases_to_avoid text[] DEFAULT ARRAY[]::text[],
  created_at timestamptz DEFAULT now()
);

ALTER TABLE performance_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own performance reports" ON performance_reports FOR SELECT TO authenticated USING (EXISTS (SELECT 1 FROM simulations WHERE simulations.id = performance_reports.simulation_id AND simulations.user_id = auth.uid()));
CREATE POLICY "Users can create own performance reports" ON performance_reports FOR INSERT TO authenticated WITH CHECK (EXISTS (SELECT 1 FROM simulations WHERE simulations.id = performance_reports.simulation_id AND simulations.user_id = auth.uid()));

-- Insert system scenarios
INSERT INTO scenarios (name, type, description, difficulty, system_prompt, is_system) VALUES
('Cold Call - Tech Startup', 'cold_call', 'You are calling a busy startup founder about a new sales automation tool.', 'realistic', 'You are a busy startup founder receiving a cold call. You are skeptical but curious if the solution can save you time. Give realistic objections like "How is this different from what we use?" and "I''m in the middle of something." Be brief and direct. If the caller is confident and addresses your concerns, warm up slightly.', true),
('Discovery Call - Enterprise', 'discovery', 'A discovery call with an enterprise VP who requested a demo.', 'realistic', 'You are an enterprise VP of Sales who requested a demo. You have pain points around team productivity and forecasting accuracy. Ask clarifying questions about implementation, pricing structure, and ROI. Be professional but expect detailed answers. Push back if responses are vague.', true),
('Objection Handling - Price', 'objection_handling', 'The prospect says your solution is too expensive.', 'hard', 'You are a budget-conscious buyer who thinks the price is too high. Say things like "That''s way over our budget" and "Your competitor is half the price." Be firm but fair. If the rep demonstrates clear ROI and differentiation, show openness to continuing the conversation.', true),
('Pricing Discussion', 'pricing', 'Negotiate pricing with a mid-market company ready to buy.', 'realistic', 'You are a Director of Operations ready to purchase but want the best deal. Ask about discounts for annual payment, what''s included in different tiers, and if there are any promotions. Be ready to commit if you get a fair offer.', true),
('Aggressive Negotiation', 'negotiation', 'A demanding prospect who wants major concessions.', 'aggressive', 'You are an aggressive procurement manager. Demand discounts, push for additional features at no cost, and compare to competitors constantly. Say things like "I can get this elsewhere for less" and "Throw in premium support or we walk." Be tough but not impossible to work with.', true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_simulations_user_id ON simulations(user_id);
CREATE INDEX IF NOT EXISTS idx_simulations_completed_at ON simulations(completed_at);
CREATE INDEX IF NOT EXISTS idx_scenarios_type ON scenarios(type);
CREATE INDEX IF NOT EXISTS idx_scenarios_is_system ON scenarios(is_system);
    `,
  };
}
