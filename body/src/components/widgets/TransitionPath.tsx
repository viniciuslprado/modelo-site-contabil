import React from 'react';

const TransitionPath: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-navy-dark/30 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-navy-dark p-10 border border-slate-100 dark:border-white/5 shadow-xl group hover:border-gold/50 transition-all">
            <div className="w-16 h-16 gold-gradient rounded-sm flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-3xl font-serif text-navy-dark dark:text-white mb-4">Abrir Empresa</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-light">
              Tire sua ideia do papel com suporte especializado. Escolhemos a melhor estrutura societária e regime tributário para o seu crescimento sustentável.
            </p>
            <ul className="space-y-3 mb-10">
              {['Análise de Viabilidade', 'Elaboração de Contrato Social', 'Obtenção de Alvarás', 'Suporte nos 27 Estados'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-navy-dark dark:bg-gold text-white dark:text-navy-dark py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-gold transition-all">
              Começar Agora
            </button>
          </div>
          <div className="bg-white dark:bg-navy-dark p-10 border border-slate-100 dark:border-white/5 shadow-xl group hover:border-gold/50 transition-all">
            <div className="w-16 h-16 gold-gradient rounded-sm flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-3xl font-serif text-navy-dark dark:text-white mb-4">Mudar para a Prado</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-light">
              Traga sua contabilidade para uma gestão de elite. Fazemos toda a transição sem burocracia e sem custos de migração.
            </p>
            <ul className="space-y-3 mb-10">
              {['Auditoria de Passivo Fiscal', 'Migração Digital em 24h', 'Equipe de Especialistas Dedicada', 'Economia Imediata de Honorários'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full border-2 border-navy-dark dark:border-gold text-navy-dark dark:text-gold py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-navy-dark hover:text-white transition-all">
              Migrar Minha Empresa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransitionPath;
