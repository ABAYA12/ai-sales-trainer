import { Target } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing') => void;
  showAuthButton?: boolean;
  onAuthClick?: () => void;
  currentPage?: string;
}

export default function Navbar({ onNavigate, showAuthButton = true, onAuthClick, currentPage }: NavbarProps) {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate?.('home')}
          >
            <Target className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-slate-900">PitchPilot</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate?.('home')}
              className={`text-slate-600 hover:text-slate-900 transition-colors ${currentPage === 'home' ? 'text-slate-900 font-semibold' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate?.('about')}
              className={`text-slate-600 hover:text-slate-900 transition-colors ${currentPage === 'about' ? 'text-slate-900 font-semibold' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate?.('features')}
              className={`text-slate-600 hover:text-slate-900 transition-colors ${currentPage === 'features' ? 'text-slate-900 font-semibold' : ''}`}
            >
              Features
            </button>
            <button
              onClick={() => onNavigate?.('pricing')}
              className={`text-slate-600 hover:text-slate-900 transition-colors ${currentPage === 'pricing' ? 'text-slate-900 font-semibold' : ''}`}
            >
              Pricing
            </button>
          </div>

          {showAuthButton && (
            <button
              onClick={onAuthClick}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Start Free Training
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
