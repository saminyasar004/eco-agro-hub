
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "../ui-custom/ProductCard";
import SectionHeading from "../ui-custom/SectionHeading";

// Sample product data
const products = [
  {
    id: "bio-fertilizer",
    title: "Bio-Fertilizer",
    category: "Fertilizers",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=800",
  },
  {
    id: "organic-pesticides",
    title: "Organic Pesticides",
    category: "Crop Protection",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800",
  },
  {
    id: "high-yield-seeds",
    title: "High-Yield Seeds",
    category: "Seeds",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800",
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-muted leaf-pattern">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Featured Products"
          subtitle="Discover our top agricultural products designed to maximize productivity while minimizing environmental impact."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/products" 
            className="btn-primary inline-flex items-center group"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
