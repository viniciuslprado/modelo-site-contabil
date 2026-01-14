import React, { useState } from 'react';

const TABS = [
  { id: 'agenda', label: 'Agenda Fiscal', icon: 'calendar_today' },
  { id: 'links', label: 'Links Técnicos', icon: 'link' },
  { id: 'setores', label: 'Setores Focus', icon: 'business' }
];

const FISCAL_ITEMS = [
  { day: '07', month: 'FEV', title: 'FGTS Mensal', desc: 'Depósito referente à folha de Janeiro.' },
  { day: '20', month: 'FEV', title: 'Simples Nacional', desc: 'Vencimento do DAS mensal.' },
  { day: '25', month: 'FEV', title: 'PIS / COFINS', desc: 'Apuração mensal de faturamento.' }
];

const UTILITY_LINKS = [
  { label: 'Portal e-CAC', url: 'https://cav.receita.fazenda.gov.br/', icon: 'security' },
  { label: 'Consulta CNPJ', url: 'https://servicos.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp', icon: 'search' },
  { label: 'Certidões Negativas', url: 'https://www.gov.br/pt-br/servicos/emitir-certidao-de-regularidade-fiscal', icon: 'verified' },
  { label: 'Simples Nacional', url: 'http://www8.receitafazenda.gov.br/SimplesNacional/', icon: 'account_balance' }
];

const SECTORS = [
  { name: 'Indústria & Manufatura', icon: 'precision_manufacturing', d: 'Recuperação de IPI e ICMS-ST.' },
  { name: 'Health Care Groups', icon: 'medical_services', d: 'Equiparação hospitalar e livro-caixa.' },
  { name: 'Holding & Wealth', icon: 'family_restroom', d: 'Proteção patrimonial e sucessão.' },
  { name: 'Tech & Startups', icon: 'rocket_launch', d: 'Fator R e exportação de serviços.' }
];

const IntelligenceHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('agenda');

  return (
    <section id="utilidades" className="py-24 bg-slate-50 dark:bg-navy-dark transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Prado Business Intelligence</p>
            <h2 className="text-4xl font-serif text-navy-dark dark:text-white mb-4">Central de <span className="text-gold italic">Inteligência Operacional</span></h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="bg-white dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-sm shadow-3xl overflow-hidden">
            <div className="flex border-b border-slate-100 dark:border-white/5 overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-3 py-6 px-8 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === tab.id ? 'text-gold' : 'text-slate-400 hover:text-navy-dark dark:hover:text-white'}`}
                >
                  <span className="material-icons-outlined text-lg">{tab.icon}</span>
                  {tab.label}
                  {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-gold animate-[scaleIn_0.3s_ease-out]"></div>}
                </button>
              ))}
            </div>
            <div className="p-12 min-h-[400px]">
              {activeTab === 'agenda' && (
                <div>
                  <h3 className="text-xl font-bold mb-6">Agenda Fiscal</h3>
                  <ul className="space-y-4">
                    {FISCAL_ITEMS.map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="bg-gold text-white rounded w-14 py-1 text-center">
                          <p className="text-lg font-bold leading-none">{item.day}</p>
                          <p className="text-[10px] uppercase font-bold">{item.month}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-navy-dark dark:text-white">{item.title}</p>
                          <p className="text-xs text-slate-400">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'links' && (
                <div>
                  <h3 className="text-xl font-bold mb-6">Links Técnicos</h3>
                  <ul className="space-y-4">
                    {UTILITY_LINKS.map((link, i) => (
                      <li key={i}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gold hover:underline">
                          <span className="material-icons-outlined text-lg">{link.icon}</span>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'setores' && (
                <div>
                  <h3 className="text-xl font-bold mb-6">Setores Focus</h3>
                  <ul className="space-y-4">
                    {SECTORS.map((sector, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="material-icons-outlined text-lg">{sector.icon}</span>
                        <span className="font-bold text-navy-dark dark:text-white">{sector.name}</span>
                        <span className="text-xs text-slate-400">{sector.d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceHub;
