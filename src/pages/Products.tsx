
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui-custom/PageHeader";
import SectionHeading from "../components/ui-custom/SectionHeading";
import ProductCard from "../components/ui-custom/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Products = () => {
  // Product categories
  const categories = [
    { id: "all", label: "All Products" },
    { id: "seeds", label: "Seeds & Seedlings" },
    { id: "fertilizers", label: "Fertilizers" },
    { id: "equipment", label: "Equipment" }
  ];

  // Product data
  const products = [
    {
      id: "organic-fertilizer",
      title: "Organic Fertilizer",
      description: "Nutrient-rich organic fertilizer made from sustainable sources",
      category: "fertilizers",
      price: 24.99,
      imageSrc: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800"
    },
    {
      id: "heirloom-tomato-seeds",
      title: "Heirloom Tomato Seeds",
      description: "Non-GMO heirloom tomato seeds for exceptional flavor",
      category: "seeds",
      price: 8.99,
      imageSrc: "https://images.unsplash.com/photo-1592921871077-79e719163738?q=80&w=800"
    },
    {
      id: "drip-irrigation-kit",
      title: "Drip Irrigation Kit",
      description: "Water-efficient irrigation system for small to medium gardens",
      category: "equipment",
      price: 129.99,
      imageSrc: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=800"
    },
    {
      id: "corn-seeds",
      title: "Non-GMO Corn Seeds",
      description: "High-yielding corn seeds perfect for various growing conditions",
      category: "seeds",
      price: 12.99,
      imageSrc: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=800"
    },
    {
      id: "soil-enhancer",
      title: "Soil Enhancer",
      description: "Improves soil structure and nutrient retention for better plant growth",
      category: "fertilizers",
      price: 19.99,
      imageSrc: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800"
    },
    {
      id: "precision-seeder",
      title: "Precision Seeder",
      description: "Handheld tool for accurate seed placement and spacing",
      category: "equipment",
      price: 45.99,
      imageSrc: "https://images.unsplash.com/photo-1598887852154-e51feda9d584?q=80&w=800"
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Our Products"
        subtitle="High-quality agricultural products to optimize your farming operations"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Products", link: "/products" }
        ]}
      />
      
      {/* Product Listings */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Agricultural Products"
            subtitle="Browse our selection of high-quality products designed for modern and sustainable farming"
            centered
          />
          
          {/* Product Filtering */}
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="flex justify-center">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-6 py-2 data-[state=active]:bg-argos-green data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {/* All Products Tab */}
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    imageSrc={product.imageSrc}
                  />
                ))}
              </div>
            </TabsContent>
            
            {/* Category Tabs */}
            {["seeds", "fertilizers", "equipment"].map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.filter(p => p.category === category).map((product) => (
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      imageSrc={product.imageSrc}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Product Catalog CTA */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-md border border-border">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-4 text-argos-navy">Need Our Complete Product Catalog?</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Download our comprehensive product catalog with detailed specifications, application guidelines, and pricing information.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-argos-green hover:bg-argos-green/90 text-white">
                  <a href="#" download>Download Catalog (PDF)</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Request Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
