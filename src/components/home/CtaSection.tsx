
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-argos-green/90 mix-blend-multiply"></div>
        <img 
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1920" 
          alt="CTA Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 reveal-on-scroll">
            Ready to Transform Your Agricultural Practices?
          </h2>
          <p className="text-xl mb-8 text-white/90 reveal-on-scroll">
            Contact our team today to discover how Argos Industries can help you achieve sustainable, high-yield farming.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal-on-scroll">
            <Link to="/contact" className="bg-white text-argos-green px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-argos-navy hover:text-white flex items-center group">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/products" className="bg-transparent border border-white text-white px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-white/10">
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
