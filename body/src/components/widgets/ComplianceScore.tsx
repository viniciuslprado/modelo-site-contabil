import React, { useState } from 'react';

const ComplianceScore: React.FC = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    { q: 'Sua empresa realiza revisão tributária anual?', options: [{l: 'Sim', v: 30}, {l: 'Não', v: 0}, {l: 'Às vezes', v: 10}] },
    { q: 'Você possui integração automática entre banco e contabilidade?', options: [{l: 'Sim, 100%', v: 30}, {l: 'Parcial', v: 15}, {l: 'Manual', v: 0}] },
    { q: 'Sabe exatamente quanto paga de impostos sobre o faturamento?', options: [{l: 'Com precisão', v: 40}, {l: 'Aproximado', v: 20}, {l: 'Não sei', v: 0}] }
  ];

  const handleOption = (value: number) => {
    setScore(prev => prev + value);
    setStep(prev => prev + 1);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="metodo" className="py-16 bg-navy-dark text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-serif mb-6 leading-tight">Métricas de <span className="text-gold italic">Saúde Fiscal</span></h2>
            <p className="text-slate-400 mb-8">
              Inicie seu diagnóstico técnico preliminar para avaliação de conformidade e performance tributária corporativa.
            </p>
            <div className="flex gap-4">
               <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex-1">
                  <p className="text-2xl font-serif text-gold mb-1">98%</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Assertividade Prado</p>
               </div>
               <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex-1">
                  <p className="text-2xl font-serif text-gold mb-1">ZERO</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Risco de Glosa</p>
               </div>
            </div>
          </div>

          <div className="w-full lg:w-[450px] bg-white text-navy-dark p-10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
               <div className="h-full bg-gold transition-all duration-500" style={{width: `${(step / questions.length) * 100}%`}}></div>
            </div>

            {step < questions.length ? (
              <div className="animate-[fadeIn_0.3s_ease-out]">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Métrica {step + 1} de {questions.length}</p>
                <h3 className="text-xl font-bold mb-8 leading-snug">{questions[step].q}</h3>
                <div className="space-y-3">
                  {questions[step].options.map((opt, i) => (
                    <button key={i} onClick={() => handleOption(opt.v)} className="w-full p-3 rounded bg-navy-dark text-white border border-gold/30 hover:bg-gold hover:text-navy-dark transition-colors mb-2">
                      {opt.l}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-[fadeIn_0.3s_ease-out] text-center">
                <h3 className="text-2xl font-bold mb-4">Seu Score: <span className="text-gold">{score}</span></h3>
                <p className="mb-6 text-slate-500">Entre em contato para uma análise detalhada e personalizada.</p>
                <button onClick={scrollToContact} className="bg-gold text-white px-6 py-2 rounded font-bold hover:bg-navy-dark hover:text-gold transition-colors">Falar com Especialista</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceScore;
