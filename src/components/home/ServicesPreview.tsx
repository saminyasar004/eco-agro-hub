
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Leaf, BarChart4 } from "lucide-react";
import FeatureCard from "../ui-custom/FeatureCard";
import SectionHeading from "../ui-custom/SectionHeading";

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-argos-green/5 to-argos-navy/5">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services"
          subtitle="We provide comprehensive agricultural services to help farmers maximize productivity and sustainability."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Soil Analysis" 
            description="Comprehensive soil testing to determine nutrient levels, pH, and texture for optimal crop growth and fertilizer recommendations."
            icon={Microscope}
          />
          <FeatureCard 
            title="Sustainable Farming" 
            description="Guidance on implementing environmentally friendly farming practices that maintain soil health and reduce environmental impact."
            icon={Leaf}
          />
          <FeatureCard 
            title="Crop Monitoring" 
            description="Regular assessment of crop health, growth, and potential issues to ensure optimal yields and early problem detection."
            icon={BarChart4}
          />
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="btn-primary inline-flex items-center group"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
