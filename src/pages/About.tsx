
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui-custom/PageHeader";
import SectionHeading from "../components/ui-custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Users, Globe, Award, Target, Clock } from "lucide-react";

const About = () => {
  // Company values
  const values = [
    {
      title: "Sustainability",
      description: "We're committed to promoting environmentally responsible farming practices that preserve natural resources for future generations.",
      icon: Globe
    },
    {
      title: "Innovation",
      description: "We continuously seek out and develop cutting-edge solutions that advance agricultural technology and efficiency.",
      icon: Target
    },
    {
      title: "Quality",
      description: "We maintain the highest standards in all our products and services, ensuring reliable performance and results.",
      icon: Award
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and respect for all stakeholders in the agricultural community.",
      icon: CheckCircle2
    }
  ];

  // Timeline items
  const timelineItems = [
    {
      year: "1995",
      title: "Company Founded",
      description: "Argos Industries was established with a mission to support sustainable agriculture in Bangladesh."
    },
    {
      year: "2003",
      title: "Research Center",
      description: "Opened our first agricultural research and development center, focusing on crop adaptation to local conditions."
    },
    {
      year: "2010",
      title: "Land Acquisition",
      description: "Expanded our agricultural operations to 50,000 hectares across key farming regions in Bangladesh."
    },
    {
      year: "2015",
      title: "BARRI Partnership",
      description: "Launched partnership with Bangladesh Agricultural Research Institute (BARRI) for the rice field project in Nouga district."
    },
    {
      year: "2018",
      title: "Sustainable Farming Initiative",
      description: "Launched innovative program to promote and support eco-friendly farming practices across our 126,000 hectares of land."
    },
    {
      year: "2023",
      title: "Digital Agriculture",
      description: "Introduced advanced digital farming solutions incorporating AI and IoT technology for precision agriculture."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="About Argos Industries"
        subtitle="Leading the way in sustainable agricultural solutions in Bangladesh since 1995"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "About", link: "/about" }
        ]}
      />
      
      {/* Company Introduction */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-display font-bold mb-6 text-argos-navy">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over 25 years, Argos Industries has been at the forefront of agricultural innovation in Bangladesh, 
                providing farmers with the tools, knowledge, and support they need to thrive in an 
                ever-changing landscape.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What began as a small family business has grown into a leading provider of agricultural 
                solutions, managing 126,000 hectares of agricultural land and serving customers across the country 
                with a commitment to quality, sustainability, and innovation.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to build on our legacy of excellence, developing new technologies and 
                practices that help farmers increase yields, reduce environmental impact, and build 
                resilient agricultural systems for Bangladesh's future.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-border reveal-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1400" 
                alt="Argos Industries Farm" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Agricultural Operations */}
      <section className="section-padding bg-gradient-to-r from-argos-green/10 to-argos-navy/5">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Agricultural Operations"
            subtitle="Managing one of Bangladesh's largest agricultural land portfolios"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div className="rounded-xl overflow-hidden shadow-md border border-border order-2 lg:order-1 reveal-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1400" 
                alt="Argos Rice Fields" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 reveal-on-scroll">
              <h3 className="text-2xl font-display font-bold mb-4 text-argos-navy">126,000 Hectares of Agricultural Land</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Argos Industries manages 126,000 hectares of agricultural land across Bangladesh, making us one of the 
                country's largest agricultural enterprises. Our lands span diverse ecological zones, allowing us to 
                cultivate a wide range of crops and implement region-specific farming practices.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h4 className="font-semibold text-argos-navy mb-2">BARRI Rice Field Project</h4>
                <p className="text-muted-foreground">
                  In partnership with the Bangladesh Agricultural Research Institute (BARRI), we operate an extensive rice 
                  field project in Nouga district. This pioneering initiative focuses on developing high-yield, 
                  climate-resilient rice varieties specifically adapted to Bangladesh's growing conditions. 
                  The project combines traditional knowledge with modern agricultural science to improve food security 
                  and farmer livelihoods.
                </p>
              </div>
              <p className="text-lg text-muted-foreground">
                Our land management approach emphasizes sustainability, biodiversity, and long-term soil health. 
                We implement crop rotation, integrated pest management, and water conservation practices to ensure 
                the continued productivity of our agricultural lands for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Argos Industries"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md border border-border reveal-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-argos-green/10 p-3 rounded-full w-fit mb-4">
                  <value.icon className="h-6 w-6 text-argos-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-argos-navy">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Journey"
            subtitle="Key milestones in the Argos Industries story"
            centered
          />
          
          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-argos-green/20 transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row gap-8 items-center reveal-on-scroll ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Circle */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-argos-green rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-border">
                      <span className="inline-block px-3 py-1 bg-argos-green/10 text-argos-green rounded-full text-sm font-semibold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 text-argos-navy">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Leadership Team"
            subtitle="Meet the experienced professionals guiding Argos Industries"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "John Anderson",
                title: "Chief Executive Officer",
                bio: "With 25+ years in agricultural technology, John leads our company with vision and expertise in sustainable farming practices.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500"
              },
              {
                name: "Maria Rodriguez",
                title: "Head of Research & Development",
                bio: "Maria brings scientific rigor and innovation to our product development process, with special focus on adapting solutions to Bangladesh's unique agricultural needs.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500"
              },
              {
                name: "David Chen",
                title: "Director of Sustainability",
                bio: "David ensures environmental responsibility is integrated into all our operations, managing our 126,000 hectares with a focus on long-term ecological health.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-border reveal-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-argos-navy">{member.name}</h3>
                  <p className="text-argos-green font-medium mb-3">{member.title}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="mx-auto">
              <Link to="/team">
                <Users className="h-4 w-4 mr-2" />
                View Full Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-argos-green/10 to-argos-navy/5 rounded-xl p-8 md:p-12 relative overflow-hidden shadow-md border border-border">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-4 text-argos-navy">Ready to Collaborate?</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Partner with Argos Industries to access cutting-edge agricultural solutions and expertise that will help your farm thrive in Bangladesh's dynamic agricultural landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-argos-green hover:bg-argos-green/90 text-white">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-argos-green/10 rounded-full -mr-20 -mb-20 z-0"></div>
            <div className="absolute right-20 bottom-20 w-32 h-32 bg-argos-green/20 rounded-full z-0"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
