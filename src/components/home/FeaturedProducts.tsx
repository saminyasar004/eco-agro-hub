
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "../ui-custom/ProductCard";
import SectionHeading from "../ui-custom/SectionHeading";

// Updated featured products to reflect expanded offerings
const products = [
  {
    id: "tilapia-fingerlings",
    title: "Tilapia Fingerlings",
    category: "Fisheries",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800",
  },
  {
    id: "dairy-cattle",
    title: "Dairy Cattle Breeds",
    category: "Cattle Farming",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=800",
  },
  {
    id: "tractor-rental",
    title: "Tractor Rental Service",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800",
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-muted leaf-pattern">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Featured Products"
          subtitle="Discover our comprehensive range of agricultural and fisheries products designed for Bangladesh's farming needs."
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
