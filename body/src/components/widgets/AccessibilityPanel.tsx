
import React, { useState, useEffect } from 'react';

const AccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[70] flex items-start gap-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-navy-dark border border-gold/30 p-3 rounded-full shadow-2xl text-gold hover:scale-110 transition-transform"
        aria-label="Opções de Acessibilidade"
      >
        A
      </button>

      {isOpen && (
        <div className="bg-white dark:bg-navy-dark border border-slate-200 dark:border-white/10 p-6 rounded-sm shadow-2xl w-64 animate-[fadeIn_0.2s_ease-out]">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Acessibilidade</h4>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold text-navy-dark dark:text-white mb-3">Tamanho da Fonte: {fontSize}%</p>
              <div className="flex gap-2">
                <button onClick={() => setFontSize(Math.max(80, fontSize - 10))} className="flex-1 bg-slate-100 dark:bg-white/5 p-2 rounded text-xs">-</button>
                <button onClick={() => setFontSize(100)} className="flex-1 bg-slate-100 dark:bg-white/5 p-2 rounded text-xs">Reset</button>
                <button onClick={() => setFontSize(Math.min(150, fontSize + 10))} className="flex-1 bg-slate-100 dark:bg-white/5 p-2 rounded text-xs">+</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityPanel;
