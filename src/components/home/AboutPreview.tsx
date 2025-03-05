
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import SectionHeading from "../ui-custom/SectionHeading";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Leading the Way in Agricultural Innovation"
              subtitle="With over 25 years of experience, Argos Industries Ltd has been at the forefront of developing sustainable agricultural solutions."
            />
            
            <div className="space-y-4 mb-8">
              {[
                "Environmentally friendly agricultural products",
                "Innovative farming techniques and services",
                "Comprehensive support for modern farmers",
                "Research-backed solutions for optimal crop yield"
              ].map((item, index) => (
                <div key={index} className="flex items-start reveal-on-scroll">
                  <CheckCircle className="h-6 w-6 text-argos-green mr-3 flex-shrink-0 mt-0.5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 reveal-on-scroll">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=600" 
                alt="About Argos Industries" 
                className="rounded-lg h-auto w-full object-cover shadow-md"
                style={{ height: '220px' }}
              />
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600" 
                alt="About Argos Industries" 
                className="rounded-lg h-auto w-full object-cover shadow-md"
                style={{ height: '160px' }}
              />
            </div>
            <div className="space-y-4 pt-6">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600" 
                alt="About Argos Industries" 
                className="rounded-lg h-auto w-full object-cover shadow-md"
                style={{ height: '160px' }}
              />
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600" 
                alt="About Argos Industries" 
                className="rounded-lg h-auto w-full object-cover shadow-md"
                style={{ height: '220px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
