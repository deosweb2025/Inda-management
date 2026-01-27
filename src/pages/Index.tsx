import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import StatsCounter from "@/components/home/StatsCounter";
import CleaningSection from "@/components/home/CleaningSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <StatsCounter />
      <CleaningSection />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
