import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import IndustrySelector from '@/components/widgets/IndustrySelector';

const ServicesPage: React.FC = () => (
  <>
    <Header />
    <main className="min-h-screen container-custom py-8 bg-black pt-16 text-white">
      <h1 className="section-title text-gold">Nossos Serviços</h1>
      <div className="bg-card border border-gold p-6 rounded shadow-gold mb-8">
        <Services />
      </div>
      <div className="bg-card border border-gold p-6 rounded shadow-gold">
        <IndustrySelector />
      </div>
      {/* Adicione aqui detalhes e diferenciais dos serviços */}
    </main>
    <Footer />
  </>
);

export default ServicesPage;
