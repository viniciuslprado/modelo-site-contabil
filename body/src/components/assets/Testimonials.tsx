import React, { useState } from 'react';
import { TESTIMONIALS } from '@/constants';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="depoimentos" className="py-24 bg-navy-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">A Voz dos Nossos Parceiros</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mais do que clientes, construímos relacionamentos de longo prazo baseados em resultados e confiança mútua.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={t.id} 
                className={`transition-all duration-700 absolute inset-0 ${idx === active ? 'opacity-100 translate-x-0 relative' : 'opacity-0 translate-x-12 absolute hidden'}`}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-sm text-center">
                  <svg className="w-12 h-12 text-gold/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v8h6c0 4.418-3.582 8-8 8v4c6.627 0 12-5.373 12-12v-8h-10zm14 0v8h6c0 4.418-3.582 8-8 8v4c6.627 0 12-5.373 12-12v-8h-10z" />
                  </svg>
                  <p className="text-2xl font-serif italic mb-10 leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex flex-col items-center">

                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-gold text-sm uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-12">
            {TESTIMONIALS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === active ? 'w-12 bg-gold' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
