import React, { useState } from 'react';

const TaxCalculator: React.FC = () => {
  const [revenue, setRevenue] = useState(150000);
  const [employees, setEmployees] = useState(10);
  const [regime, setRegime] = useState('Lucro Presumido');
  const [region, setRegion] = useState('Sudeste');
  const baseIneficiencia = regime === 'Simples Nacional' ? 0.05 : 0.09;
  const ineficienciaPorFuncionario = employees * 250; 
  const multiplicadorRegional = region === 'Norte' || region === 'Nordeste' ? 1.12 : 1.0;
  const ineficienciaMedia = ((revenue * baseIneficiencia) + ineficienciaPorFuncionario) * multiplicadorRegional;
  const recuperavelAno = ineficienciaMedia * 12;

  return (
    <section className="py-24 bg-white transition-colors border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-navy-dark mb-4">Simulador de <span className="text-gold">Performance Patrimonial</span></h2>
            <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Análise Preliminar de Ineficiência Operacional Nacional</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-100 shadow-3xl">
            <div className="lg:col-span-7 bg-slate-50 p-12 border-r border-slate-100">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-navy-dark">Parâmetros de Operação BI</h3>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4 items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Faturamento Bruto Mensal</span>
                    <span className="text-xl font-serif text-gold font-bold">R$ {revenue.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="50000" max="5000000" step="50000" value={revenue}
                    onChange={(e) => setRevenue(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-4 items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Headcount Operacional</span>
                    <span className="text-xl font-serif text-gold font-bold">{employees} Unidades</span>
                  </div>
                  <input 
                    type="range" min="1" max="500" step="5" value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-4 items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Regime Tributário</span>
                    <span className="text-xl font-serif text-gold font-bold">{regime}</span>
                  </div>
                  <select value={regime} onChange={e => setRegime(e.target.value)} className="w-full p-2 rounded border border-slate-200 bg-white text-navy-dark">
                    <option>Lucro Presumido</option>
                    <option>Simples Nacional</option>
                    <option>Lucro Real</option>
                  </select>
                </div>
                <div>
                  <div className="flex justify-between mb-4 items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Região</span>
                    <span className="text-xl font-serif text-gold font-bold">{region}</span>
                  </div>
                  <select value={region} onChange={e => setRegion(e.target.value)} className="w-full p-2 rounded border border-slate-200 bg-white text-navy-dark">
                    <option>Sudeste</option>
                    <option>Sul</option>
                    <option>Nordeste</option>
                    <option>Norte</option>
                    <option>Centro-Oeste</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-white p-12 flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-navy-dark">Resultados Técnicos</h3>
              </div>
              <div className="space-y-8 w-full">
                <div className="p-6 bg-gold/10 rounded border border-gold/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Ineficiência Operacional Média</p>
                  <p className="text-2xl font-serif text-gold font-bold">R$ {ineficienciaMedia.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
                </div>
                <div className="p-6 bg-gold/10 rounded border border-gold/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Recuperável em 12 meses</p>
                  <p className="text-2xl font-serif text-gold font-bold">R$ {recuperavelAno.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
                </div>
              </div>
              <button className="mt-10 bg-gold text-navy-dark font-bold py-3 px-8 rounded-sm text-xs uppercase tracking-widest hover:bg-yellow-600 transition-all">
                Solicitar Diagnóstico Técnico
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxCalculator;
