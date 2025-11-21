import { Simulation } from './supabase';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: number;
  total?: number;
}

export function calculateAchievements(sessions: Simulation[]): Achievement[] {
  const achievements: Achievement[] = [];

  const totalSessions = sessions.length;
  const avgScore = sessions.length > 0
    ? sessions.reduce((sum, s) => sum + s.score, 0) / sessions.length
    : 0;
  const highScores = sessions.filter(s => s.score >= 80).length;
  const perfectScores = sessions.filter(s => s.score >= 95).length;
  const streak = calculateStreak(sessions);

  achievements.push({
    id: 'first_steps',
    title: 'First Steps',
    description: 'Complete your first practice session',
    icon: '🎯',
    unlocked: totalSessions >= 1
  });

  achievements.push({
    id: 'dedicated_learner',
    title: 'Dedicated Learner',
    description: 'Complete 10 practice sessions',
    icon: '📚',
    unlocked: totalSessions >= 10,
    progress: Math.min(totalSessions, 10),
    total: 10
  });

  achievements.push({
    id: 'sales_veteran',
    title: 'Sales Veteran',
    description: 'Complete 50 practice sessions',
    icon: '🏆',
    unlocked: totalSessions >= 50,
    progress: Math.min(totalSessions, 50),
    total: 50
  });

  achievements.push({
    id: 'rising_star',
    title: 'Rising Star',
    description: 'Score 80+ on any session',
    icon: '⭐',
    unlocked: highScores >= 1
  });

  achievements.push({
    id: 'consistent_performer',
    title: 'Consistent Performer',
    description: 'Score 80+ on 5 sessions',
    icon: '🌟',
    unlocked: highScores >= 5,
    progress: Math.min(highScores, 5),
    total: 5
  });

  achievements.push({
    id: 'perfectionist',
    title: 'Perfectionist',
    description: 'Score 95+ on any session',
    icon: '💎',
    unlocked: perfectScores >= 1
  });

  achievements.push({
    id: 'on_fire',
    title: 'On Fire',
    description: 'Practice 3 days in a row',
    icon: '🔥',
    unlocked: streak >= 3,
    progress: Math.min(streak, 3),
    total: 3
  });

  achievements.push({
    id: 'elite_closer',
    title: 'Elite Closer',
    description: 'Maintain 85+ average score over 10 sessions',
    icon: '👑',
    unlocked: totalSessions >= 10 && avgScore >= 85
  });

  achievements.push({
    id: 'objection_crusher',
    title: 'Objection Crusher',
    description: 'Score 90+ on objection handling in 3 sessions',
    icon: '💪',
    unlocked: sessions.filter(s => s.objection_handling_score >= 90).length >= 3,
    progress: Math.min(sessions.filter(s => s.objection_handling_score >= 90).length, 3),
    total: 3
  });

  achievements.push({
    id: 'smooth_talker',
    title: 'Smooth Talker',
    description: 'Score 90+ on clarity in 5 sessions',
    icon: '🎤',
    unlocked: sessions.filter(s => s.clarity_score >= 90).length >= 5,
    progress: Math.min(sessions.filter(s => s.clarity_score >= 90).length, 5),
    total: 5
  });

  return achievements;
}

function calculateStreak(sessions: Simulation[]): number {
  if (sessions.length === 0) return 0;

  const dates = sessions
    .map(s => new Date(s.created_at).toISOString().split('T')[0])
    .filter((date, index, self) => self.indexOf(date) === index)
    .sort()
    .reverse();

  let streak = 1;
  const today = new Date().toISOString().split('T')[0];

  if (dates[0] !== today && dates[0] !== getPreviousDate(today)) {
    return 0;
  }

  for (let i = 1; i < dates.length; i++) {
    if (dates[i] === getPreviousDate(dates[i - 1])) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

function getPreviousDate(dateString: string): string {
  const date = new Date(dateString);
  date.setDate(date.getDate() - 1);
  return date.toISOString().split('T')[0];
}
