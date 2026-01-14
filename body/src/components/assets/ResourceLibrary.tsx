import React from 'react';

const RESOURCES = [
  {
    title: 'Guia de Holding Familiar',
    desc: 'Como proteger seu patrimônio e evitar o inventário judicial.',
    type: 'E-BOOK PDF'
  },
  {
    title: 'Checklist Reforma Tributária',
    desc: 'Os impactos imediatos no faturamento da sua empresa em 2024.',
    type: 'MASTERCLASS'
  },
  {
    title: 'Manual do BPO Financeiro',
    desc: 'Como reduzir custos operacionais em até 30% via terceirização.',
    type: 'PLANILHA BI'
  }
];

const ResourceLibrary: React.FC = () => {
  return (
    <section className="py-24 bg-white transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Knowledge Hub</p>
          <h2 className="text-4xl font-serif text-navy-dark mb-4">Biblioteca de <span className="text-gold italic">Inteligência</span></h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map((res, i) => (
            <div key={i} className="group bg-slate-50 border border-slate-100 p-8 rounded-sm hover:translate-y-[-8px] transition-all duration-500">
              <span className="text-[9px] font-black bg-navy-dark text-gold px-3 py-1 rounded-full mb-6 inline-block">
                {res.type}
              </span>
              <h4 className="text-xl font-serif text-navy-dark mb-4 group-hover:text-gold transition-colors">{res.title}</h4>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-light">
                {res.desc}
              </p>
              <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-navy-dark hover:gap-5 transition-all">
                Download Gratuito
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;
