import React, { useState } from 'react';
import HRExperience from './experiences/HRExperience';

export default function App() {
  const [sessionKey, setSessionKey] = useState(0);

  const handleRestart = () => {
    setSessionKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-slate-900 selection:bg-purple-600 selection:text-white">
      {/* Executive Top Bar */}
      <header className="w-full border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm font-display">
              HR
            </div>
            <div>
              <span className="font-display font-bold text-sm text-slate-900 tracking-tight block leading-tight">
                HR in Startups
              </span>
              <span className="font-mono text-[10px] text-purple-600 font-semibold uppercase tracking-wider block leading-tight">
                Executive Experience
              </span>
            </div>
          </div>
          
          <button
            onClick={handleRestart}
            className="text-xs font-mono text-slate-500 hover:text-purple-600 border border-slate-200 hover:border-purple-300 rounded-lg px-3 py-1.5 transition-all cursor-pointer flex items-center gap-1.5 hover:bg-purple-50/50"
            title="Restart Experience"
          >
            <span>↻</span>
            <span>Restart</span>
          </button>
        </div>
      </header>

      {/* Main Experience Stage */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <HRExperience key={sessionKey} onBackToHub={handleRestart} />
      </main>
    </div>
  );
}
