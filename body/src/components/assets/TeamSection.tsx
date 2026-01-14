import React from 'react';
import { TEAM } from '@/constants';

const TeamSection: React.FC = () => {
  return (
    <section id="time" className="py-24 bg-white transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Board Executivo</p>
          <h2 className="text-5xl font-serif text-navy-dark">Nosso <span className="text-gold italic">Time de Especialistas</span></h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative mb-8 inline-block">
                <div className="absolute -inset-2 bg-gold/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-48 h-48 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border-4 border-slate-50 shadow-2xl relative z-10"
                />
              </div>
              <h4 className="text-xl font-serif text-navy-dark mb-2">{member.name}</h4>
              <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-tighter mb-4 border-b border-slate-100 pb-4 inline-block">{member.specialty}</p>
              <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xs mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 p-8 bg-slate-50 rounded-sm flex flex-wrap justify-center gap-12">
           <div className="flex items-center gap-3">
              <span className="text-2xl font-serif text-gold font-bold">10+</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Contadores<br/>Ativos</span>
           </div>
           <div className="flex items-center gap-3">
              <span className="text-2xl font-serif text-gold font-bold">3+</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Advogados<br/>Tributaristas</span>
           </div>
           <div className="flex items-center gap-3">
              <span className="text-2xl font-serif text-gold font-bold">5+</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Especialistas em<br/>Controladoria</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
