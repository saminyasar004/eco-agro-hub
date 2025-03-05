
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import TestimonialCard from "../ui-custom/TestimonialCard";
import SectionHeading from "../ui-custom/SectionHeading";

// Sample testimonial data
const testimonials = [
  {
    quote: "Argos Industries' bio-fertilizers have significantly improved our crop yield while maintaining soil health. Their products are a game-changer for sustainable farming.",
    name: "Michael Thompson",
    title: "Farm Owner, Green Valley Farms",
    rating: 5
  },
  {
    quote: "Their technical support team provided invaluable guidance for our transition to more sustainable farming practices. The results have been outstanding.",
    name: "Sarah Johnson",
    title: "Agricultural Director, Harvest Fields",
    rating: 5
  },
  {
    quote: "We've been using Argos products for over 5 years, and the quality and results have been consistently excellent. Their seed varieties produce exceptional yields.",
    name: "Robert Chen",
    title: "Manager, Sunrise Agricultural Co-op",
    rating: 4
  },
  {
    quote: "The soil analysis service from Argos Industries gave us precise recommendations that improved our productivity by 30%. Highly professional team.",
    name: "Emily Rodriguez",
    title: "Agronomist, Westland Farms",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  
  const next = () => {
    setDirection('right');
    setCurrent((prev) => (prev === testimonials.length - 2 ? 0 : prev + 1));
  };
  
  const prev = () => {
    setDirection('left');
    setCurrent((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Our Clients Say"
          subtitle="Don't just take our word for it – hear from some of our satisfied clients about their experiences with Argos Industries."
          centered
        />
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className={cn(
                "flex transition-transform duration-500 ease-in-out",
                direction === 'left' ? "-translate-x-[calc(100%/2)]" : direction === 'right' ? "translate-x-0" : ""
              )}
              style={{ transform: `translateX(-${current * 50}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 px-4 flex-shrink-0">
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full border border-argos-green text-argos-green hover:bg-argos-green hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full border border-argos-green text-argos-green hover:bg-argos-green hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
