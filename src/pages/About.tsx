
import { Award, Users, GraduationCap, Target, Leaf, Handshake } from "lucide-react";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui-custom/PageHeader";
import SectionHeading from "../components/ui-custom/SectionHeading";
import FeatureCard from "../components/ui-custom/FeatureCard";

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About Argos Industries"
        subtitle="Leading the way in sustainable agricultural solutions"
        backgroundImage="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1920"
      />
      
      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading 
                title="Our Story"
                subtitle="From humble beginnings to industry leader"
              />
              
              <div className="space-y-4 reveal-on-scroll">
                <p>
                  Argos Industries Ltd was founded in 1995 with a simple mission: to create agricultural solutions that work in harmony with nature. What began as a small research initiative by a team of agricultural scientists and environmentally-conscious farmers has evolved into a leading provider of sustainable agricultural products and services.
                </p>
                <p>
                  Over the past decades, we have expanded our reach and impact, developing innovative products that help farmers increase productivity while reducing environmental impact. Our approach combines cutting-edge research with practical applications, ensuring that our solutions meet the real-world needs of farmers.
                </p>
                <p>
                  Today, Argos Industries operates globally, partnering with farmers, agricultural cooperatives, and research institutions to advance sustainable farming practices. Our commitment to environmental stewardship and agricultural excellence remains at the heart of everything we do.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200" 
                alt="Argos Industries History" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section-padding bg-muted leaf-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="glass-card p-8 reveal-on-scroll">
              <div className="bg-argos-green/10 p-3 rounded-full w-fit mb-4">
                <Target className="h-7 w-7 text-argos-green" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-argos-navy">Our Mission</h3>
              <p className="mb-4">
                To provide sustainable, innovative agricultural solutions that enhance farm productivity while preserving natural resources for future generations.
              </p>
              <p>
                We strive to empower farmers with the knowledge, tools, and products they need to succeed in an environmentally responsible way, contributing to global food security and ecological balance.
              </p>
            </div>
            
            <div className="glass-card p-8 reveal-on-scroll">
              <div className="bg-argos-green/10 p-3 rounded-full w-fit mb-4">
                <Leaf className="h-7 w-7 text-argos-green" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-argos-navy">Our Vision</h3>
              <p className="mb-4">
                To be the global leader in sustainable agricultural innovation, creating a world where farming practices nourish both people and planet.
              </p>
              <p>
                We envision a future where agricultural productivity and environmental stewardship go hand in hand, enabled by our continuous research and development of groundbreaking solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Core Values"
            subtitle="These principles guide everything we do at Argos Industries"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Environmental Stewardship" 
              description="We are committed to developing solutions that protect and enhance the natural environment, recognizing our responsibility to current and future generations."
              icon={Leaf}
            />
            <FeatureCard 
              title="Scientific Excellence" 
              description="Our work is grounded in rigorous research and innovation, ensuring that our products and services meet the highest standards of efficacy and safety."
              icon={GraduationCap}
            />
            <FeatureCard 
              title="Customer Partnership" 
              description="We believe in building lasting relationships with our customers, working together to understand their unique needs and develop tailored solutions."
              icon={Handshake}
            />
            <FeatureCard 
              title="Integrity" 
              description="We conduct our business with honesty, transparency, and ethical practices, earning the trust of our stakeholders through our actions."
              icon={Award}
            />
            <FeatureCard 
              title="Inclusivity" 
              description="We respect diversity in all its forms and strive to create products and services that benefit agricultural communities worldwide."
              icon={Users}
            />
            <FeatureCard 
              title="Continuous Improvement" 
              description="We are never satisfied with the status quo, constantly seeking ways to enhance our offerings and refine our approach to better serve our customers."
              icon={Target}
            />
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="section-padding bg-gradient-to-r from-argos-green/5 to-argos-navy/5">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Leadership Team"
            subtitle="Meet the experts driving innovation at Argos Industries"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. James Wilson",
                title: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
                bio: "With over 30 years in agricultural science, Dr. Wilson founded Argos Industries to bridge the gap between scientific research and practical farming applications."
              },
              {
                name: "Dr. Elena Chen",
                title: "Chief Scientific Officer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
                bio: "Leading our R&D team, Dr. Chen has pioneered multiple breakthroughs in sustainable agriculture and holds numerous patents in bio-fertilizer technology."
              },
              {
                name: "Michael Rodriguez",
                title: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80",
                bio: "Michael oversees global operations, ensuring that our high standards for quality and sustainability are maintained throughout our production process."
              },
              {
                name: "Sarah Johnson",
                title: "Director of Sustainability",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
                bio: "Sarah develops our environmental strategy, ensuring that our products and practices contribute positively to ecological balance and resource conservation."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg reveal-on-scroll">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-argos-navy">{member.name}</h3>
                  <p className="text-argos-green font-medium mb-3">{member.title}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
