import React from 'react';

const CALENDAR_ITEMS = [
  { day: '07', month: 'JAN', title: 'FGTS Mensal', status: 'Crucial' },
  { day: '15', month: 'JAN', title: 'INSS Contribuinte', status: 'Alerta' },
  { day: '20', month: 'JAN', title: 'PGDAS (Simples Nac)', status: 'Crucial' },
  { day: '25', month: 'JAN', title: 'PIS / COFINS', status: 'Normal' }
];

const FiscalCalendar: React.FC = () => {
  return (
    <div className="bg-white p-8 border border-slate-100 shadow-xl rounded-sm">
      <h3 className="text-xl font-serif text-navy-dark mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2" /></svg>
        Agenda Fiscal Nexus
      </h3>
      <div className="space-y-4">
        {CALENDAR_ITEMS.map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors border-l-2 border-gold/20 hover:border-gold">
            <div className="text-center bg-navy-dark text-white rounded w-14 py-1">
              <p className="text-lg font-bold leading-none">{item.day}</p>
              <p className="text-[10px] uppercase font-bold text-gold">{item.month}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-navy-dark">{item.title}</p>
              <p className={`text-[10px] uppercase tracking-widest font-bold ${item.status === 'Crucial' ? 'text-red-500' : 'text-slate-400'}`}>
                {item.status}
              </p>
            </div>
            <div className="w-2 h-2 bg-gold/30 rounded-full"></div>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 py-2 text-[10px] font-bold text-navy-dark border border-slate-200 hover:border-gold rounded transition-colors uppercase tracking-widest">
        Baixar Calendário 2024
      </button>
    </div>
  );
};

export default FiscalCalendar;
