import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import News from '@/components/News';
import ResourceLibrary from '@/components/widgets/ResourceLibrary';
import IntelligenceHub from '@/components/widgets/IntelligenceHub';
import DynamicInsights from '@/components/widgets/DynamicInsights';
import ComplianceScore from '@/components/widgets/ComplianceScore';

const InformativosPage: React.FC = () => (
  <>
    <Header />
    <main className="min-h-screen container-custom py-8 bg-black pt-16 text-white">
      <h1 className="section-title text-gold">Informativos</h1>
      <div className="grid gap-8">
        <div className="bg-card border border-gold p-6 rounded shadow-gold">
          <News />
        </div>
        <div className="bg-card border border-gold p-6 rounded shadow-gold">
          <ResourceLibrary />
        </div>
        <div className="bg-card border border-gold p-6 rounded shadow-gold">
          <IntelligenceHub />
        </div>
        <div className="bg-card border border-gold p-6 rounded shadow-gold">
          <DynamicInsights />
        </div>
        <div className="bg-card border border-gold p-6 rounded shadow-gold">
          <ComplianceScore />
        </div>
      </div>
      {/* Adicione aqui biblioteca de inteligência, artigos, downloads */}
    </main>
    <Footer />
  </>
);

export default InformativosPage;
