import React from 'react';
import { ACHIEVEMENTS } from '@/constants';

const Milestones: React.FC = () => {
  return (
    <section className="py-24 bg-white transition-colors overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif mb-4">Nossa <span className="text-gold italic">Jornada</span></h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block"></div>
          <div className="space-y-12 lg:space-y-0">
            {ACHIEVEMENTS.map((item, i) => (
              <div key={i} className={`flex flex-wrap items-center w-full lg:mb-24 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 lg:px-12">
                   <div className={`p-8 bg-slate-50 border border-slate-100 rounded-sm relative group hover:border-gold/30 transition-all ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <p className="text-4xl font-serif font-bold text-gold/30 group-hover:text-gold mb-2 transition-colors">{item.year}</p>
                      <h4 className="text-xl font-bold text-navy-dark mb-4 uppercase tracking-tighter">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      <div className={`absolute top-1/2 w-4 h-4 bg-white border-2 border-gold rounded-full hidden lg:block z-10 ${i % 2 === 0 ? '-left-2 -translate-x-1/2' : '-right-2 translate-x-1/2'} -translate-y-1/2`}></div>
                   </div>
                </div>
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
