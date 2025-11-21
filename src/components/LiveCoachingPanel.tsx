import { useState, useEffect } from 'react';
import { Lightbulb, AlertCircle, TrendingUp, CheckCircle } from 'lucide-react';

interface LiveCoachingPanelProps {
  userMessage: string;
  aiResponse: string;
  messageCount: number;
}

interface CoachingTip {
  type: 'success' | 'warning' | 'tip';
  message: string;
  icon: React.ReactNode;
}

export default function LiveCoachingPanel({ userMessage, aiResponse, messageCount }: LiveCoachingPanelProps) {
  const [tips, setTips] = useState<CoachingTip[]>([]);

  useEffect(() => {
    analyzeTurn();
  }, [userMessage, aiResponse]);

  const analyzeTurn = () => {
    const newTips: CoachingTip[] = [];
    const lowerMessage = userMessage.toLowerCase();
    const lowerResponse = aiResponse.toLowerCase();

    if (messageCount <= 2 && !lowerMessage.includes('?')) {
      newTips.push({
        type: 'tip',
        message: 'Try asking open-ended questions early to understand needs',
        icon: <Lightbulb className="h-4 w-4" />
      });
    }

    if (lowerMessage.includes('price') && messageCount <= 3) {
      newTips.push({
        type: 'warning',
        message: 'Discussing price too early! Build value first',
        icon: <AlertCircle className="h-4 w-4" />
      });
    }

    if (lowerMessage.match(/\b(we|our|us)\b/g)?.length || 0 > 3) {
      newTips.push({
        type: 'warning',
        message: 'Too much "we/our" - focus on the customer!',
        icon: <AlertCircle className="h-4 w-4" />
      });
    }

    if (lowerMessage.match(/\b(you|your)\b/g)?.length || 0 > 3) {
      newTips.push({
        type: 'success',
        message: 'Great job making it about the customer!',
        icon: <CheckCircle className="h-4 w-4" />
      });
    }

    if (lowerResponse.includes('objection') || lowerResponse.includes('concern') || lowerResponse.includes('skeptical')) {
      newTips.push({
        type: 'tip',
        message: 'Customer raised objection - acknowledge and address',
        icon: <TrendingUp className="h-4 w-4" />
      });
    }

    if (lowerMessage.split(' ').length > 50) {
      newTips.push({
        type: 'warning',
        message: 'Message too long - keep responses concise',
        icon: <AlertCircle className="h-4 w-4" />
      });
    }

    if (messageCount >= 4 && !lowerMessage.match(/\?/)) {
      newTips.push({
        type: 'tip',
        message: 'Ask qualifying questions to move towards close',
        icon: <Lightbulb className="h-4 w-4" />
      });
    }

    setTips(newTips);
  };

  if (tips.length === 0) return null;

  return (
    <div className="space-y-2">
      {tips.map((tip, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg border-l-4 ${
            tip.type === 'success'
              ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
              : tip.type === 'warning'
              ? 'bg-amber-50 border-amber-500 text-amber-800'
              : 'bg-blue-50 border-blue-500 text-blue-800'
          }`}
        >
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0 mt-0.5">{tip.icon}</div>
            <p className="text-sm font-medium">{tip.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
