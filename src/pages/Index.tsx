import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NutriPlan - Smart Meal Planning Made Effortless</title>
        <meta 
          name="description" 
          content="End decision fatigue forever with NutriPlan. Smart meal scheduling, automated grocery lists, and personalized recipes in one beautiful app. Save 4 hours/week." 
        />
        <meta name="keywords" content="meal planning, nutrition, grocery list, recipe manager, healthy eating, food planning app" />
        <link rel="canonical" href="https://nutriplan.app" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
