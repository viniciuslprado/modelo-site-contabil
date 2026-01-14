import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consultoria contábil." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      <div className="bg-white py-2 px-4 rounded-full shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
        <span className="text-sm font-bold text-navy-dark whitespace-nowrap">Falar com Consultor</span>
      </div>
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.243-.038.384.3.141.338.484 1.18.526 1.266.042.085.07.184.013.303-.057.118-.085.19-.17.29-.085.099-.178.221-.253.296-.085.086-.174.181-.075.351.099.17.441.725.946 1.176.65.58 1.2.76 1.371.845.17.086.27.071.371-.045.101-.116.427-.496.541-.666.115-.17.23-.142.387-.085.157.057 1.001.472 1.172.557.17.085.284.127.327.2.042.071.042.411-.102.816z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
