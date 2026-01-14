import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import AuthorityBanner from "@/components/institutional/AuthorityBanner";
import Clients from "@/components/Clients";
import CaseStudies from "@/components/institutional/CaseStudies";
import ComplianceScore from "@/components/widgets/ComplianceScore";
import DynamicInsights from "@/components/widgets/DynamicInsights";
import ResourceLibrary from "@/components/widgets/ResourceLibrary";
import IntelligenceHub from "@/components/widgets/IntelligenceHub";
import Testimonials from "@/components/institutional/Testimonials";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import ExitIntentPopup from "@/components/widgets/ExitIntentPopup";
import AIConsultant from "@/components/widgets/AIConsultant";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <main className="min-h-screen">
      <div className="container-custom py-4">
        <Header />
        <Hero />
        <QuickAccess />
        <AuthorityBanner />
        {/* Link para página Empresa */}
        {/* Link para página Serviços */}
        {/* Link para página Dúvidas */}
        {/* Link para página Informativos */}
        <Clients />
        <CaseStudies />
        <ComplianceScore />
        <DynamicInsights />
        <ResourceLibrary />
        <IntelligenceHub />
        <Testimonials />
        {/* Conversion Elements */}
        <WhatsAppButton />
        <ExitIntentPopup />
        <AIConsultant />
        <Footer />
      </div>
    </main>
  );
};

export default Index;

