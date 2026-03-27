import Navbar from "@/components/smartexpiry/Navbar";
import HeroSection from "@/components/smartexpiry/HeroSection";
import ProblemSection from "@/components/smartexpiry/ProblemSection";
import SolutionSection from "@/components/smartexpiry/SolutionSection";
import HowItWorksSection from "@/components/smartexpiry/HowItWorksSection";
import FeaturesSection from "@/components/smartexpiry/FeaturesSection";
import BenefitsSection from "@/components/smartexpiry/BenefitsSection";
import BusinessModelSection from "@/components/smartexpiry/BusinessModelSection";
import TestimonialsSection from "@/components/smartexpiry/TestimonialsSection";
import QRScanSection from "@/components/smartexpiry/QRScanSection";
import FinalCTASection from "@/components/smartexpiry/FinalCTASection";
import Footer from "@/components/smartexpiry/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <BenefitsSection />
      <BusinessModelSection />
      <TestimonialsSection />
      <QRScanSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
