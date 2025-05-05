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
  Wrench,
  Factory,
  Fish,
  TreeDeciduous,
  GraduationCap,
  Search,
  Wheat,
  Refrigerator
} from "lucide-react";

const Services = () => {
  // Main services with expanded descriptions
  const mainServices = [
    {
      id: "soil-analysis",
      title: "Soil Analysis & Engineering",
      description: "State-of-the-art soil testing laboratories to determine nutrient levels, pH, texture, and composition for optimizing crop yield. Our soil engineering services include soil remediation, erosion control, and land preparation solutions tailored to Bangladesh's diverse soil types.",
      icon: Microscope,
      imageSrc: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=800"
    },
    {
      id: "sustainable-farming",
      title: "Sustainable Farming",
      description: "Expert guidance on implementing environmentally friendly farming practices that maintain soil health and reduce environmental impact. We integrate traditional knowledge with modern techniques to create farming systems that are productive, profitable, and ecologically sound.",
      icon: Leaf,
      imageSrc: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800"
    },
    {
      id: "crop-monitoring",
      title: "Crop Monitoring & Management",
      description: "Comprehensive assessment of crop health, growth patterns, and potential issues using both field visits and advanced technology. Our specialists provide timely interventions to ensure optimal yields and early problem detection throughout the growing season.",
      icon: BarChart4,
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800"
    },
    {
      id: "cold-storage",
      title: "Cold Storage Solutions",
      description: "State-of-the-art cold storage facilities for preserving agricultural produce, ensuring longer shelf life and maintaining quality. Our temperature-controlled storage units are available for rent to farmers, distributors, and food processors across Bangladesh.",
      icon: Refrigerator,
      imageSrc: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=800"
    },
    {
      id: "equipment-rental",
      title: "Agricultural Equipment Rental",
      description: "Access to a wide range of modern agricultural machinery including tractors, harvesters, planters, and irrigation equipment. Our rental program makes advanced farming equipment accessible to farmers of all scales without the high capital investment of ownership.",
      icon: Tractor,
      imageSrc: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800"
    },
    {
      id: "irrigation-solutions",
      title: "Irrigation Solutions",
      description: "Custom irrigation system design, implementation, and maintenance to optimize water usage and improve crop yields. Our specialists tailor solutions for Bangladesh's specific climate conditions, water availability challenges, and crop requirements.",
      icon: Droplets,
      imageSrc: "https://images.unsplash.com/photo-1591982611932-7b7726413b0a?q=80&w=800"
    },
    {
      id: "seedling-production",
      title: "Seedling Production",
      description: "Production of high-quality seedlings in controlled environments for various crops including rice, vegetables, fruits, and commercial tree species. Our facilities ensure healthy starts, disease resistance, and genetic quality for improved yields.",
      icon: Sprout,
      imageSrc: "https://images.unsplash.com/photo-1620052581237-e6c9d610a9b0?q=80&w=800"
    },
    {
      id: "fisheries-management",
      title: "Fisheries Management",
      description: "Comprehensive services for establishing and managing fish farms, including species selection, pond design, water quality management, feeding regimens, and disease prevention across Bangladesh's diverse aquatic environments.",
      icon: Fish,
      imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800"
    },
    {
      id: "tree-management",
      title: "Tree & Stump Management",
      description: "Professional services for planting, maintaining, and removing trees, including complete stump removal and land clearing. We specialize in both commercial forestry operations and landscape management for agricultural spaces.",
      icon: TreeDeciduous,
      imageSrc: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800"
    },
    {
      id: "rice-processing",
      title: "Rice Milling & Processing",
      description: "State-of-the-art rice processing facilities located across multiple districts in Bangladesh. Our mills offer cleaning, husking, milling, polishing, and packaging services with emphasis on quality preservation and minimum breakage.",
      icon: Wheat,
      imageSrc: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=800"
    }
  ];
  
  // Additional services with expanded descriptions
  const additionalServices = [
    {
      title: "Agricultural Training",
      description: "Comprehensive training programs for farmers on modern agricultural techniques, crop management, sustainable practices, and technology adoption. Our programs range from basic skill development to advanced certifications in partnership with agricultural institutions.",
      icon: GraduationCap
    },
    {
      title: "Consultation Services",
      description: "Expert agricultural consultation on farm management, crop selection, pest control, market access, and business planning. Our consultants provide personalized guidance to maximize productivity while ensuring environmental sustainability.",
      icon: Users
    },
    {
      title: "Equipment Maintenance",
      description: "Professional maintenance and repair services for all types of agricultural equipment to ensure optimal performance and longevity. Our trained technicians provide both routine maintenance and emergency repair services across Bangladesh.",
      icon: Wrench
    },
    {
      title: "Agricultural Research",
      description: "Ongoing research initiatives in crop improvement, pest management, sustainable farming, and climate adaptation. We collaborate with national and international research institutions to develop solutions for Bangladesh's agricultural challenges.",
      icon: Search
    },
    {
      title: "Food Processing & Manufacturing",
      description: "Advanced food processing facilities for value addition to agricultural products. Our factories across different districts in Bangladesh process rice, fruits, vegetables, and other farm produce to extend shelf life and increase market value.",
      icon: Factory
    },
    {
      title: "Soil Conservation",
      description: "Specialized services to prevent soil erosion, improve soil structure, and implement conservation measures. We develop customized plans based on land topography, soil type, and local environmental conditions.",
      icon: TreeDeciduous
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive agricultural services to enhance productivity and sustainability across Bangladesh"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" }
        ]}
      />
      
      {/* Services Overview */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-md border border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold mb-4 text-argos-navy">Complete Agricultural Service Ecosystem</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                At Argos Industries, we provide an integrated ecosystem of agricultural services designed to support 
                farmers at every stage of production. From initial planning and soil preparation to harvesting, 
                processing, and market access, our comprehensive services ensure optimal results for farms of all sizes.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Our network of rice mills and processing facilities across Bangladesh connects producers directly with 
                markets, reducing waste and maximizing value. With locations in key agricultural districts, we ensure 
                that quality processing is accessible to farmers throughout the country.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageSrc={service.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Cold Storage Section */}
      <section className="section-padding bg-gradient-to-r from-argos-green/5 to-argos-navy/10">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Cold Storage Solutions"
            subtitle="Modern temperature-controlled facilities for preserving agricultural produce"
            centered
          />
          
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 text-argos-navy">Temperature-Controlled Storage Network</h3>
                <p className="mb-4 text-muted-foreground">
                  Our network of modern cold storage facilities spans across Bangladesh, providing farmers and food processors 
                  with reliable temperature-controlled environments for extending the shelf life of agricultural produce.
                  From fruits and vegetables to dairy and meat products, our facilities maintain optimal conditions for each product type.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-argos-green/10 p-1 rounded-full mr-2 mt-1">
                      <Refrigerator className="h-4 w-4 text-argos-green" />
                    </div>
                    <span>Temperature ranges from -20°C to 15°C for different product requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-argos-green/10 p-1 rounded-full mr-2 mt-1">
                      <Refrigerator className="h-4 w-4 text-argos-green" />
                    </div>
                    <span>Humidity-controlled environments for optimal produce preservation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-argos-green/10 p-1 rounded-full mr-2 mt-1">
                      <Refrigerator className="h-4 w-4 text-argos-green" />
                    </div>
                    <span>Flexible rental options: daily, weekly, monthly or seasonal contracts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-argos-green/10 p-1 rounded-full mr-2 mt-1">
                      <Refrigerator className="h-4 w-4 text-argos-green" />
                    </div>
                    <span>Available in 4 major agricultural regions across Bangladesh</span>
                  </li>
                </ul>
                <Button asChild className="bg-argos-green hover:bg-argos-green/90 text-white">
                  <Link to="/contact">Inquire About Storage</Link>
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden h-96">
                <img 
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=800" 
                  alt="Modern cold storage facility" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Processing Facilities Section */}
      <section className="section-padding bg-gradient-to-r from-argos-green/10 to-argos-navy/10">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Processing Facilities"
            subtitle="Our network of modern processing facilities across Bangladesh"
            centered
          />
          
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 text-argos-navy">Rice Mills & Processing Centers</h3>
                <p className="mb-4 text-muted-foreground">
                  Our state-of-the-art rice mills and processing facilities are strategically located across Bangladesh to serve 
                  farmers in all major agricultural regions. These facilities incorporate modern technology for efficient 
                  processing while maintaining the highest quality standards.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="bg-argos-green/10 p-1 rounded-full mr-2 mt-1">
                      <Factory className="h-4 w-4 text-argos-green" />
                    </div>
                    <span>Dhaka District - Central Processing Hub</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-argos-green/10 p-1 rounded-full mr-2 mt-1">
                      <Factory className="h-4 w-4 text-argos-green" />
                    </div>
                    <span>Nouga District - BARRI Rice Processing Center</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-argos-green/10 p-1 rounded-full mr-2 mt-1">
                      <Factory className="h-4 w-4 text-argos-green" />
                    </div>
                    <span>Chittagong District - Coastal Region Facility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-argos-green/10 p-1 rounded-full mr-2 mt-1">
                      <Factory className="h-4 w-4 text-argos-green" />
                    </div>
                    <span>Rajshahi District - Northwestern Region Facility</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800" 
                  alt="Rice processing facility" 
                  className="w-full h-auto"
                />
              </div>
            </div>
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
                With services covering every aspect of agricultural production, we're your complete partner for modern farming in Bangladesh.
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
