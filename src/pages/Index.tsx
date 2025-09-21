import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductDetailsSection from "@/components/ProductDetailsSection";
import ExtraBenefitsSection from "@/components/ExtraBenefitsSection";
import AuthoritySection from "@/components/AuthoritySection";
import OfferSection from "@/components/OfferSection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ProblemSolutionSection />
      <TestimonialsSection />
      <ProductDetailsSection />
      <ExtraBenefitsSection />
      <AuthoritySection />
      <OfferSection />
      <FinalCTASection />
      <FAQSection />
      <FooterSection />
      <FloatingButtons />
    </div>
  );
};

export default Index;
