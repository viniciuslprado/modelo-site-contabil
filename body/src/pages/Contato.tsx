import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import SocialProof from '@/components/SocialProof';

const ContatoPage: React.FC = () => (
  <>
    <Header />
    <main className="min-h-screen container-custom py-8">
      <h1 className="section-title">Fale Conosco</h1>
      <Contact />
      <SocialProof />
      {/* Adicione aqui endereço, telefones, mapa, etc. */}
    </main>
    <Footer />
  </>
);

export default ContatoPage;
