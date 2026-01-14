import React from 'react';

const NationalMap: React.FC = () => {
  return (
    <section className="py-24 bg-navy-dark overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-center lg:text-left">Omnipresença Estratégica</p>
            <h2 className="text-5xl font-serif text-white mb-8 leading-tight text-center lg:text-left">
              Uma única estrutura. <br/>
              <span className="text-gold italic">Todos os Estados.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-10 text-center lg:text-left">
              Diferente de escritórios regionais, a Prado Black opera com células especialistas em cada Federação, dominando as nuances do ICMS e incentivos fiscais do Norte ao Sul do país.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Sudeste', cities: 'Hub SP & MG' },
                { label: 'Sul', cities: 'Incentivos Industriais' },
                { label: 'Nordeste', cities: 'Zonas de Processamento' },
                { label: 'Norte/CO', cities: 'Agrobusiness & Tech' }
              ].map((reg, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-sm group hover:border-gold transition-colors">
                  <p className="text-gold font-serif text-xl mb-1">{reg.label}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{reg.cities}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square">
              <svg viewBox="0 0 500 500" className="w-full h-full text-gold/20 fill-current opacity-50">
                <path d="M250,50 L350,150 L400,300 L300,450 L150,450 L100,300 L150,150 Z" className="animate-pulse" />
              </svg>
              {[
                { t: '15%', l: '40%' }, { t: '45%', l: '20%' }, { t: '70%', l: '50%' },
                { t: '30%', l: '75%' }, { t: '60%', l: '80%' }, { t: '20%', l: '60%' }
              ].map((pos, idx) => (
                <div 
                  key={idx}
                  className="absolute w-2 h-2 bg-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] animate-bounce"
                  style={{ top: pos.t, left: pos.l, animationDelay: `${idx * 0.5}s` }}
                ></div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                    <p className="text-6xl font-serif text-gold font-bold mb-2">27</p>
                    <p className="text-[10px] uppercase font-bold text-white tracking-[0.5em]">UFs Atendidas</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalMap;
