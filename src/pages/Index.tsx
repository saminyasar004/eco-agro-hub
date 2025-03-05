
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import Testimonials from "../components/home/Testimonials";
import CtaSection from "../components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <FeaturedProducts />
      <ServicesPreview />
      <Testimonials />
      <CtaSection />
    </Layout>
  );
};

export default Index;
