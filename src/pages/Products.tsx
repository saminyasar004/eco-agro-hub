
import { useState } from "react";
import { Search } from "lucide-react";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui-custom/PageHeader";
import ProductCard from "../components/ui-custom/ProductCard";
import SectionHeading from "../components/ui-custom/SectionHeading";

// Sample product data
const productData = [
  {
    id: "bio-fertilizer-premium",
    title: "Bio-Fertilizer Premium",
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
  },
  {
    id: "soil-enhancer",
    title: "Soil Enhancer",
    category: "Soil Management",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800",
  },
  {
    id: "micronutrient-mix",
    title: "Micronutrient Mix",
    category: "Fertilizers",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800",
  },
  {
    id: "irrigation-solutions",
    title: "Smart Irrigation Solutions",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800",
  },
  {
    id: "compost-accelerator",
    title: "Compost Accelerator",
    category: "Soil Management",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800",
  },
  {
    id: "natural-fungicide",
    title: "Natural Fungicide",
    category: "Crop Protection",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800",
  }
];

// Product categories
const categories = ["All", "Fertilizers", "Crop Protection", "Seeds", "Soil Management", "Equipment"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter products based on category and search query
  const filteredProducts = productData.filter(product => {
    // Filter by category
    const categoryMatch = activeCategory === "All" || product.category === activeCategory;
    
    // Filter by search query
    const searchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <Layout>
      <PageHeader 
        title="Our Products"
        subtitle="Innovative agricultural solutions for sustainable farming"
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920"
      />
      
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Explore Our Product Range"
            subtitle="Discover our comprehensive line of eco-friendly agricultural products designed to enhance productivity while preserving environmental balance."
            centered
          />
          
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-argos-green focus:border-argos-green transition-colors"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeCategory === category
                        ? "bg-argos-green text-white"
                        : "bg-muted hover:bg-argos-green/10 text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <p className="text-xl">No products found matching your criteria.</p>
              <button 
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Product Innovation */}
      <section className="section-padding bg-gradient-to-r from-argos-green/5 to-argos-navy/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200" 
                alt="Product Innovation" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <SectionHeading 
                title="Product Innovation"
                subtitle="Our commitment to continuous improvement and sustainability"
              />
              
              <div className="space-y-4 reveal-on-scroll">
                <p>
                  At Argos Industries, innovation is at the heart of everything we do. Our dedicated research and development team works tirelessly to create products that address the evolving challenges of modern agriculture.
                </p>
                <p>
                  We collaborate with leading agricultural universities and research institutions to stay at the forefront of sustainable farming practices. This partnership approach ensures that our products incorporate the latest scientific advancements while meeting real-world farming needs.
                </p>
                <p>
                  All of our products undergo rigorous testing to ensure they meet our strict standards for efficacy, safety, and environmental impact. We believe that agricultural products should not only enhance productivity but also contribute positively to ecological balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
