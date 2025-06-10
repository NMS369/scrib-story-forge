import Header from "./homepage/Header";
import HeroSection from "./homepage/HeroSection";
import FeaturesSection from "./homepage/FeaturesSection";
import TestimonialsSection from "./homepage/TestimonialsSection";
import PricingSection from "./homepage/PricingSection";
import BenefitsSection from "./homepage/BenefitsSection";
import CTASection from "./homepage/CTASection";
import Footer from "./homepage/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};
export default Homepage;