
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
  rating?: number;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  title, 
  image,
  rating = 5,
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "p-6 bg-white rounded-xl shadow-lg border border-border reveal-on-scroll",
      className
    )}>
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-lg italic mb-6 text-argos-navy">"{quote}"</blockquote>
      <div className="flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-argos-green/20 flex items-center justify-center mr-4">
            <span className="text-argos-green font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
