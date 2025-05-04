
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  className?: string;
}

const ProductCard = ({ 
  id,
  title, 
  category, 
  image,
  className 
}: ProductCardProps) => {
  return (
    <Link 
      to={`/products/${id}`}
      className={cn(
        "group block overflow-hidden rounded-xl shadow-md reveal-on-scroll",
        className
      )}
    >
      <div className="relative overflow-hidden h-60">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-4 z-20">
          <span className="inline-block bg-argos-green text-white text-xs px-3 py-1 rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
