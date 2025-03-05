
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false, 
  className 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <h2 className={cn(
        centered ? "section-title-centered" : "section-title",
        "reveal-on-scroll"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-6 text-lg text-muted-foreground max-w-3xl reveal-on-scroll",
          centered && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
