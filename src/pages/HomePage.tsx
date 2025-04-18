
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
