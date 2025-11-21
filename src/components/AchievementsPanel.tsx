import { Trophy, Lock } from 'lucide-react';
import { Achievement } from '../lib/achievements';

interface AchievementsPanelProps {
  achievements: Achievement[];
}

export default function AchievementsPanel({ achievements }: AchievementsPanelProps) {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Trophy className="h-6 w-6 text-amber-500" />
          Achievements
        </h3>
        <span className="text-sm font-semibold text-slate-600">
          {unlockedCount}/{totalCount} Unlocked
        </span>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-4 rounded-xl border-2 transition-all ${
              achievement.unlocked
                ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300 shadow-sm'
                : 'bg-slate-50 border-slate-200 opacity-60'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`text-3xl ${achievement.unlocked ? 'animate-bounce' : 'grayscale'}`}>
                {achievement.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-slate-900">{achievement.title}</h4>
                  {!achievement.unlocked && (
                    <Lock className="h-3 w-3 text-slate-400" />
                  )}
                </div>
                <p className="text-sm text-slate-600">{achievement.description}</p>
                {!achievement.unlocked && achievement.progress !== undefined && achievement.total !== undefined && (
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>Progress</span>
                      <span>{achievement.progress}/{achievement.total}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-amber-400 to-amber-500 h-2 rounded-full transition-all"
                        style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
