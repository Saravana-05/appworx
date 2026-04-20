import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import SolutionsSection from "@/components/SolutionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import JourneySection from "@/components/JourneySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ApproachSection />
      <SolutionsSection />
      <BenefitsSection />
      <JourneySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
