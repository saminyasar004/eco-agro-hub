
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

const PageHeader = ({ 
  title, 
  subtitle,
  backgroundImage,
  className 
}: PageHeaderProps) => {
  return (
    <section 
      className={cn(
        "relative py-20 md:py-32 bg-argos-navy",
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover opacity-20" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-argos-navy via-argos-navy to-argos-green/90"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-background fill-current w-full h-auto">
          <path d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,58.7C840,64,960,64,1080,58.7C1200,53,1320,43,1380,37.3L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default PageHeader;
