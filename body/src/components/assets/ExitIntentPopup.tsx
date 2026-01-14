import React, { useState, useEffect } from 'react';

const ExitIntentPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasDismissed) {
        setShow(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasDismissed]);

  const closePopup = () => {
    setShow(false);
    setHasDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-dark/90 backdrop-blur-md">
      <div className="bg-white max-w-2xl w-full rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl animate-[scale_0.3s_ease-out]">
        <div className="md:w-2/5 bg-gold flex flex-col items-center justify-center p-8 text-navy-dark text-center">
          <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-2xl font-serif font-bold mb-2 uppercase tracking-tighter">Decisão Estratégica</h3>
          <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Proteja seu fluxo de caixa.</p>
        </div>
        <div className="md:w-3/5 p-10 relative">
          <button 
            onClick={closePopup}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-3xl font-serif text-navy-dark mb-4">Sua empresa está com sobrecarga tributária?</h2>
          <p className="text-slate-600 mb-8">
            Solicite uma <strong>Análise de Viabilidade Tributária</strong> e identifique oportunidades de recuperação de crédito e elisão fiscal legal.
          </p>
          <form className="space-y-4" onSubmit={(e) => {e.preventDefault(); closePopup();}}>
            <input 
              type="email" 
              placeholder="Seu e-mail corporativo" 
              className="w-full px-4 py-4 border-2 border-slate-100 rounded-sm focus:border-gold outline-none transition-all"
              required
            />
            <button className="w-full bg-navy-dark text-white py-4 rounded-sm font-bold hover:bg-slate-800 transition-all shadow-xl uppercase tracking-widest text-sm">
              SOLICITAR ANÁLISE EXECUTIVA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
