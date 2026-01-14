import React from 'react';

const CASES = [
  {
    category: 'Indústria Metalúrgica',
    title: 'Recuperação de R$ 4.2M em Créditos de IPI',
    result: 'Redução de 12% no custo operacional anual.',
    impact: 'Reinvestimento em nova linha de produção automatizada.'
  },
  {
    category: 'Grupo de Saúde',
    title: 'Blindagem Patrimonial e Reestruturação de Holding',
    result: 'Economia de 35% em ITCMD e proteção de ativos.',
    impact: 'Sucessão familiar pacificada e segurança jurídica total.'
  },
  {
    category: 'Tech Export',
    title: 'Enquadramento em Incentivos de Inovação',
    result: 'Redução de IRPJ/CSLL via Lei do Bem.',
    impact: 'Aumento de 20% no budget de P&D.'
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-24 bg-white dark:bg-navy-dark transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="md:w-1/2">
            <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Portfólio de Impacto</p>
            <h2 className="text-5xl font-serif text-navy-dark dark:text-white leading-tight">
              Resultados <span className="text-gold italic">Comprovados</span>
            </h2>
          </div>
          <p className="md:w-1/3 text-slate-500 dark:text-slate-400 mt-6 md:mt-0 font-light italic">
            Transformamos desafios tributários complexos em vantagem competitiva real para nossos parceiros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASES.map((c, i) => (
            <div key={i} className="group p-8 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-sm hover:border-gold/50 transition-all duration-500">
              <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-4">{c.category}</p>
              <h3 className="text-xl font-serif text-navy-dark dark:text-white mb-6 group-hover:text-gold transition-colors">{c.title}</h3>
              <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-white/10">
                <div>
                  <p className="text-[9px] uppercase font-bold text-slate-400 tracking-tighter mb-1">Resultado Financeiro</p>
                  <p className="text-sm font-medium text-navy-dark dark:text-white">{c.result}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-slate-400 tracking-tighter mb-1">Impacto Estratégico</p>
                  <p className="text-sm font-medium text-navy-dark dark:text-white">{c.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
