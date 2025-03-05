
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  className?: string;
}

const ServiceCard = ({ 
  id,
  title, 
  description, 
  image,
  className 
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col rounded-xl overflow-hidden shadow-lg reveal-on-scroll card-hover",
        className
      )}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6 bg-white flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-argos-navy">{title}</h3>
        <p className="text-muted-foreground mb-5">{description}</p>
        <Link 
          to={`/services/${id}`}
          className="mt-auto inline-flex items-center text-argos-green font-medium hover:text-argos-lightGreen transition-colors group"
        >
          Learn More 
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
