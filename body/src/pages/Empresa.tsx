import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Milestones from '@/components/institutional/Milestones';
import TeamSection from '@/components/institutional/TeamSection';
import AuthorityBanner from '@/components/institutional/AuthorityBanner';

const EmpresaPage: React.FC = () => (
  <>
    <Header />
    <main className="min-h-screen container-custom py-8 bg-black pt-20 text-white">
      <h1 className="section-title text-gold mb-1">Sobre o Escritório</h1>
      <section>
        <About />
      </section>
      <section className="mb-12">
        <h2 className="section-title mb-4 text-primary font-bold">Credenciais e Atuação Estratégica</h2>
        <AuthorityBanner />
      </section>
      <section className="mb-12">
        <h2 className="section-title mb-4 text-gold">Nossa Jornada</h2>
        <Milestones />
      </section>
      <section className="mb-12">
        <h2 className="section-title mb-4 text-gold">Time de Especialistas</h2>
        <TeamSection />
      </section>
      <section className="mb-12">
        <h2 className="section-title mb-4 text-gold">Missão, Visão e Valores</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-900 border border-gold rounded shadow-gold p-6">
            <h3 className="font-bold text-gold mb-2">Missão</h3>
            <p className="text-white">Oferecer soluções contábeis de excelência, promovendo o sucesso dos clientes com ética, inovação e proximidade.</p>
          </div>
          <div className="bg-gray-900 border border-gold rounded shadow-gold p-6">
            <h3 className="font-bold text-gold mb-2">Visão</h3>
            <p className="text-white">Ser referência nacional em contabilidade estratégica, reconhecida pela qualidade, tecnologia e resultados.</p>
          </div>
          <div className="bg-gray-900 border border-gold rounded shadow-gold p-6">
            <h3 className="font-bold text-gold mb-2">Valores</h3>
            <ul className="list-disc ml-4 text-gray-200">
              <li>Ética e Transparência</li>
              <li>Excelência e Inovação</li>
              <li>Compromisso com o Cliente</li>
              <li>Respeito e Diversidade</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default EmpresaPage;
