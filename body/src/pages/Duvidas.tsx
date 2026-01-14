import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import QuickAccess from '@/components/QuickAccess';

const DuvidasPage: React.FC = () => (
  <>
    <Header />
    <main className="min-h-screen container-custom py-8 bg-black pt-16 text-white">
      <h1 className="section-title text-gold">Dúvidas Frequentes</h1>
      <div className="bg-card border border-gold p-6 rounded shadow-gold mb-8">
        <QuickAccess />
      </div>
      <div className="bg-card border border-gold p-6 rounded shadow-gold">
        <FAQ />
      </div>
      {/* Soluções por Nicho pode ser um componente separado */}
    </main>
    <Footer />
  </>
);

export default DuvidasPage;
