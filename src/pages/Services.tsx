
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui-custom/PageHeader";
import ServiceCard from "../components/ui-custom/ServiceCard";
import FeatureCard from "../components/ui-custom/FeatureCard";
import SectionHeading from "../components/ui-custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Microscope, 
  Leaf, 
  BarChart4, 
  Tractor, 
  Droplets, 
  Sprout, 
  BookOpen, 
  Users, 
  Wrench 
} from "lucide-react";

const Services = () => {
  // Main services
  const mainServices = [
    {
      id: "soil-analysis",
      title: "Soil Analysis",
      description: "Comprehensive soil testing to determine nutrient levels, pH, and texture for optimal crop growth and fertilizer recommendations.",
      icon: Microscope,
      imageSrc: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=800"
    },
    {
      id: "sustainable-farming",
      title: "Sustainable Farming",
      description: "Guidance on implementing environmentally friendly farming practices that maintain soil health and reduce environmental impact.",
      icon: Leaf,
      imageSrc: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800"
    },
    {
      id: "crop-monitoring",
      title: "Crop Monitoring",
      description: "Regular assessment of crop health, growth, and potential issues to ensure optimal yields and early problem detection.",
      icon: BarChart4,
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800"
    },
    {
      id: "farm-equipment",
      title: "Farm Equipment",
      description: "High-quality agricultural machinery rentals and sales, with expert guidance on equipment selection and usage.",
      icon: Tractor,
      imageSrc: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800"
    },
    {
      id: "irrigation-solutions",
      title: "Irrigation Solutions",
      description: "Custom irrigation system design and implementation to optimize water usage and improve crop yields.",
      icon: Droplets,
      imageSrc: "https://images.unsplash.com/photo-1591982611932-7b7726413b0a?q=80&w=800"
    },
    {
      id: "seedling-production",
      title: "Seedling Production",
      description: "High-quality seedling production services, ensuring healthy starts for a variety of crops.",
      icon: Sprout,
      imageSrc: "https://images.unsplash.com/photo-1620052581237-e6c9d610a9b0?q=80&w=800"
    }
  ];

  // Additional services
  const additionalServices = [
    {
      title: "Agricultural Training",
      description: "Comprehensive training programs for farmers on modern agricultural techniques, crop management, and sustainable practices.",
      icon: BookOpen
    },
    {
      title: "Consultancy Services",
      description: "Expert advice on farm management, crop selection, pest control, and maximizing productivity while minimizing environmental impact.",
      icon: Users
    },
    {
      title: "Equipment Maintenance",
      description: "Regular maintenance and repair services for all types of agricultural equipment to ensure optimal performance and longevity.",
      icon: Wrench
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive agricultural services to enhance productivity and sustainability"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" }
        ]}
      />
      
      {/* Main Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Core Services"
            subtitle="Discover our comprehensive range of agricultural services designed to support farmers at every stage of production."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageSrc={service.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Additional Services"
            subtitle="Beyond our core offerings, we provide these specialized services to complement your agricultural needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <FeatureCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-argos-green/10 to-argos-navy/5 rounded-xl p-8 md:p-12 relative overflow-hidden shadow-md">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-display font-bold mb-4 text-argos-navy">Ready to Enhance Your Agricultural Operations?</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Our team of agricultural experts is ready to help you implement sustainable practices that improve yields and protect the environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-argos-green hover:bg-argos-green/90 text-white">
                  <Link to="/contact">Contact Our Experts</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/products">Explore Our Products</Link>
                </Button>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-argos-green/10 rounded-full -mr-20 -mb-20 z-0"></div>
            <div className="absolute right-20 bottom-20 w-32 h-32 bg-argos-green/20 rounded-full z-0"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
