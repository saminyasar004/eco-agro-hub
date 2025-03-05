
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  className 
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-lg border border-border card-hover reveal-on-scroll",
      className
    )}>
      <div className="bg-argos-green/10 p-3 rounded-full w-fit mb-4">
        <Icon className="h-7 w-7 text-argos-green" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-argos-navy">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
