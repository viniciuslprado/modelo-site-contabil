import React from 'react';

const AuthorityBanner: React.FC = () => {
  return (
   <div className="bg-transparent py-12 transition-colors overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-12 italic">Credenciais e Atuação Estratégica</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          
          <div className="flex flex-col items-center group">
             <div className="w-12 h-12 mb-3 flex items-center justify-center border-2 border-gold/20 rounded-full group-hover:border-gold transition-colors">
                <span className="font-serif font-bold text-lg text-primary">CRC</span>
             </div>
             <span className="text-[8px] font-bold text-primary uppercase text-center">Conselho Regional<br/>de Contabilidade</span>
          </div>

          <div className="flex flex-col items-center group">
             <div className="w-12 h-12 mb-3 flex items-center justify-center border-2 border-gold/20 rounded-full group-hover:border-gold transition-colors">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeWidth="2" /></svg>
             </div>
             <span className="text-[8px] font-bold text-primary uppercase text-center">Atendimento Nacional<br/>Presente em 27 Estados</span>
          </div>

          <div className="flex flex-col items-center group">
             <div className="w-12 h-12 mb-3 flex items-center justify-center border-2 border-gold/20 rounded-full group-hover:border-gold transition-colors">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth="2" /></svg>
             </div>
             <span className="text-[8px] font-bold text-primary uppercase text-center">ISO 9001:2015<br/>Gestão de Qualidade</span>
          </div>

          <div className="flex flex-col items-center group">
             <div className="w-12 h-12 mb-3 flex items-center justify-center border-2 border-gold/20 rounded-full group-hover:border-gold transition-colors">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3m0 0c.886 0 1.75.099 2.584.289m-5.337 13.921L8.448 21m1.458-1.459L9.182 18m1.458-1.459L10.082 18M12 3a10.003 10.003 0 019.387 6.387m-1.156 1.156L18 10.118" strokeWidth="2" /></svg>
             </div>
             <span className="text-[8px] font-bold text-primary uppercase text-center">Contabilidade Digital<br/>Nativa e Segura</span>
          </div>

          <div className="flex flex-col items-center group">
             <div className="w-12 h-12 mb-3 flex items-center justify-center border-2 border-gold/20 rounded-full group-hover:border-gold transition-colors relative">
                <span className="font-serif font-bold text-[10px] text-primary text-center block" style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>SESCON</span>
             </div>
             <span className="text-[8px] font-bold text-primary uppercase text-center">Sindicato das Empresas<br/>de Serviços</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthorityBanner;
