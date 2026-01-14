import React, { useState } from 'react';

const NICHES = [
  {
    id: 'tech',
    label: 'Tecnologia & Startups',
    title: 'Sua contabilidade no ritmo do seu código.',
    description: 'Expertise em Fator R, exportação de serviços, Stock Options e regimes tributários para o ecossistema tech.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    )
  },
  {
    id: 'health',
    label: 'Saúde & Medicina',
    title: 'Cuidando do seu financeiro enquanto você cuida de vidas.',
    description: 'Planejamento para clínicas e médicos, gestão de carnê-leão, livro caixa e redução de impostos na pessoa jurídica.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    )
  },
  {
    id: 'service',
    label: 'Serviços Especializados',
    title: 'Alta performance tributária para consultorias.',
    description: 'Transforme seu lucro bruto em rendimento líquido através de elisão fiscal inteligente e gestão eficiente.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    )
  }
];

const IndustrySelector: React.FC = () => {
  const [active, setActive] = useState(NICHES[0]);

  return (
    <section className="py-24 bg-white transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Soluções por <span className="text-gold italic">Nicho</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold">Conteúdo personalizado para seu modelo de negócio</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {NICHES.map((n) => (
            <button
              key={n.id}
              onClick={() => setActive(n)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 font-bold text-sm ${active.id === n.id ? 'bg-gold border-gold text-navy-dark' : 'border-slate-100 text-slate-400 hover:border-gold/50'}`}
            >
              {n.icon}
              {n.label}
            </button>
          ))}
        </div>
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-sm p-12 border border-slate-100 animate-[fadeIn_0.5s_ease-out]">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-serif text-navy-dark mb-4">{active.title}</h3>
              <p className="text-slate-500 mb-6">{active.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySelector;
