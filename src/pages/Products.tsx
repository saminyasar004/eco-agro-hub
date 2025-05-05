import { useState } from "react";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui-custom/PageHeader";
import SectionHeading from "../components/ui-custom/SectionHeading";
import ProductCard from "../components/ui-custom/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import AgriEquipment1 from "../assets/img/agri-equipment-1.jpg";
import AgriEquipment2 from "../assets/img/agriculture-equipment-2.jpg";
import AqualCultureFeed from "../assets/img/aquaculture-feed.jpeg";
import Fisheries1 from "../assets/img/fisheries-1.jpg";
import Fisheries2 from "../assets/img/fisheries-2.jpg";
import Pesticide1 from "../assets/img/pesticide-1.jpg";
import CattleFarm2 from "../assets/img/cattle-farm-2.jpeg";
import TreeFarming1 from "../assets/img/tree-farming-1.jpeg";
import Pesticide2 from "../assets/img/pesticide-2.jpeg";

const Products = () => {
	// Product categories
	const categories = [
		{ id: "all", label: "All Products" },
		{ id: "fisheries", label: "Fisheries" },
		{ id: "farming", label: "Farming" },
		{ id: "seeds", label: "Seeds & Seedlings" },
		{ id: "fertilizers", label: "Fertilizers" },
		{ id: "pesticides", label: "Pesticides" },
		{ id: "equipment", label: "Equipment" },
	];

	// Product data
	const products = [
		{
			id: "organic-fertilizer",
			title: "Organic Fertilizer",
			description:
				"Nutrient-rich organic fertilizer made from sustainable sources",
			category: "fertilizers",
			price: 24.99,
			imageSrc:
				"https://images.unsplash.com/photo-1621272156504-f10c307159d6?q=80&w=2070",
		},
		{
			id: "heirloom-tomato-seeds",
			title: "Heirloom Tomato Seeds",
			description: "Non-GMO heirloom tomato seeds for exceptional flavor",
			category: "seeds",
			price: 8.99,
			imageSrc:
				"https://images.unsplash.com/photo-1588473704752-da33a44b6c1a?q=80&w=2070",
		},
		{
			id: "drip-irrigation-kit",
			title: "Drip Irrigation Kit",
			description:
				"Water-efficient irrigation system for small to medium gardens",
			category: "equipment",
			price: 129.99,
			imageSrc:
				"https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=800",
		},
		{
			id: "corn-seeds",
			title: "Non-GMO Corn Seeds",
			description:
				"High-yielding corn seeds perfect for various growing conditions",
			category: "seeds",
			price: 12.99,
			imageSrc:
				"https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=800",
		},
		{
			id: "soil-enhancer",
			title: "Soil Enhancer",
			description:
				"Improves soil structure and nutrient retention for better plant growth",
			category: "fertilizers",
			price: 19.99,
			imageSrc:
				"https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800",
		},
		{
			id: "precision-seeder",
			title: "Precision Seeder",
			description:
				"Handheld tool for accurate seed placement and spacing",
			category: "equipment",
			price: 45.99,
			imageSrc: AgriEquipment1,
		},
		// New fisheries products
		{
			id: "tilapia-fingerlings",
			title: "Tilapia Fingerlings",
			description:
				"Fast-growing, disease-resistant tilapia fingerlings for commercial fish farming",
			category: "fisheries",
			price: 89.99,
			imageSrc: Fisheries2,
		},
		{
			id: "aquaculture-feed",
			title: "Premium Aquaculture Feed",
			description:
				"High-quality feed formulated for optimal fish growth and health",
			category: "fisheries",
			price: 42.99,
			imageSrc: AqualCultureFeed,
		},
		{
			id: "fishing-nets",
			title: "Commercial Fishing Nets",
			description:
				"Durable, high-capacity fishing nets designed for commercial use",
			category: "fisheries",
			price: 199.99,
			imageSrc: Fisheries1,
		},
		// New farming products
		{
			id: "dairy-cattle",
			title: "Dairy Cattle Breeds",
			description:
				"High-milk-yield dairy cattle breeds adapted to local climate conditions",
			category: "farming",
			price: 1299.99,
			imageSrc: CattleFarm2,
		},
		{
			id: "fruit-tree-saplings",
			title: "Fruit Tree Saplings",
			description:
				"Quality fruit tree saplings for establishing productive orchards",
			category: "farming",
			price: 34.99,
			imageSrc: TreeFarming1,
		},
		// New pesticides products
		{
			id: "bio-pesticide",
			title: "Organic Bio-Pesticide",
			description:
				"Environmentally friendly pesticide for effective pest control without harmful chemicals",
			category: "pesticides",
			price: 39.99,
			imageSrc: Pesticide2,
		},
		{
			id: "insect-repellent",
			title: "Advanced Insect Repellent",
			description:
				"Long-lasting insect repellent to protect crops from common pests",
			category: "pesticides",
			price: 29.99,
			imageSrc: Pesticide1,
		},
		// Additional equipment
		{
			id: "tractor-rental",
			title: "Tractor Rental Service",
			description:
				"Modern tractors available for daily, weekly, or seasonal rental",
			category: "equipment",
			price: 149.99,
			imageSrc: AgriEquipment2,
		},
	];

	// State for advanced filtering
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const [priceSort, setPriceSort] = useState("");
	const [isFilterExpanded, setIsFilterExpanded] = useState(false);
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

	// Filter products based on category, search query, and other filters
	const filteredProducts = products.filter((product) => {
		// Category filter
		const categoryMatch =
			activeCategory === "all" || product.category === activeCategory;

		// Search filter
		const searchMatch =
			product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			product.description
				.toLowerCase()
				.includes(searchQuery.toLowerCase());

		return categoryMatch && searchMatch;
	});

	// Sort products if needed
	const sortedProducts = [...filteredProducts].sort((a, b) => {
		if (priceSort === "low-high") {
			return a.price - b.price;
		} else if (priceSort === "high-low") {
			return b.price - a.price;
		}
		return 0;
	});

	// Handler for category change via tabs
	const handleCategoryChange = (value: string) => {
		setActiveCategory(value);
	};

	// Handler for search input
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	return (
		<Layout>
			<PageHeader
				title="Our Products"
				subtitle="Comprehensive agricultural and fisheries products to optimize farming operations across Bangladesh"
				breadcrumbs={[
					{ label: "Home", link: "/" },
					{ label: "Products", link: "/products" },
				]}
			/>

			{/* Product Overview Section */}
			<section className="bg-muted py-12">
				<div className="container mx-auto px-4">
					<div className="bg-white rounded-xl p-8 shadow-md border border-border">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-2xl font-display font-bold mb-4 text-argos-navy">
								Complete Agricultural Solutions
							</h2>
							<p className="text-lg mb-6 text-muted-foreground">
								At Argos Industries, we provide a comprehensive
								range of products to support every aspect of
								agricultural and aquaculture operations. From
								modern farming equipment to sustainable
								fisheries solutions, our catalog includes
								everything needed for efficient and productive
								agricultural enterprises.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
								<div className="bg-argos-green/5 p-4 rounded-lg">
									<h3 className="font-semibold text-argos-navy mb-2">
										Extensive Fisheries
									</h3>
									<p className="text-sm">
										Complete solutions for commercial fish
										farming, including fingerlings, feed,
										and equipment.
									</p>
								</div>
								<div className="bg-argos-green/5 p-4 rounded-lg">
									<h3 className="font-semibold text-argos-navy mb-2">
										Farming Resources
									</h3>
									<p className="text-sm">
										Quality livestock, seedlings, and
										farming supplies for both small and
										large-scale operations.
									</p>
								</div>
								<div className="bg-argos-green/5 p-4 rounded-lg">
									<h3 className="font-semibold text-argos-navy mb-2">
										Agricultural Equipment Rental
									</h3>
									<p className="text-sm">
										Access modern agricultural equipment
										without the high capital investment
										through our flexible rental program.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Product Listings with Enhanced Filtering */}
			<section className="section-padding">
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Agricultural Products"
						subtitle="Browse our selection of high-quality products designed for modern and sustainable farming"
						centered
					/>

					{/* Advanced Search and Filter Tools */}
					<Card className="mb-8 border border-border">
						<CardContent className="p-4 md:p-6">
							<div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
								{/* Search Input */}
								<div className="relative w-3/4 mx-auto">
									<Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
									<Input
										placeholder="Search products..."
										value={searchQuery}
										onChange={handleSearchChange}
										className="pl-8"
									/>
								</div>

								{/* Sort Dropdown */}
								{/* <Select value={priceSort} onValueChange={setPriceSort}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="low-high">Price: Low to High</SelectItem>
                    <SelectItem value="high-low">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select> */}

								{/* Mobile Filter Button - Only visible on mobile */}
								<Collapsible
									open={isFilterExpanded}
									onOpenChange={setIsFilterExpanded}
									className="md:hidden w-full"
								>
									<CollapsibleTrigger asChild>
										<Button
											variant="outline"
											className="flex items-center gap-2 w-full"
										>
											<Filter className="h-4 w-4" />
											Filter Products
										</Button>
									</CollapsibleTrigger>
									<CollapsibleContent className="mt-4">
										<div className="space-y-4">
											<p className="font-medium">
												Product Categories
											</p>
											<div className="flex flex-wrap gap-2">
												{categories.map((category) => (
													<Button
														key={category.id}
														variant={
															activeCategory ===
															category.id
																? "default"
																: "outline"
														}
														size="sm"
														onClick={() =>
															setActiveCategory(
																category.id
															)
														}
														className={
															activeCategory ===
															category.id
																? "bg-argos-green text-white"
																: ""
														}
													>
														{category.label}
													</Button>
												))}
											</div>
										</div>
									</CollapsibleContent>
								</Collapsible>
							</div>

							{/* Desktop Category Filter - Horizontal Toggle Group */}
							<div className="hidden md:block">
								<ToggleGroup
									type="single"
									value={activeCategory}
									onValueChange={(value) => {
										if (value) setActiveCategory(value);
									}}
									className="flex flex-wrap justify-center gap-2"
								>
									{categories.map((category) => (
										<ToggleGroupItem
											key={category.id}
											value={category.id}
											className={`px-4 py-2 ${
												activeCategory === category.id
													? "bg-argos-green text-white"
													: "border border-border"
											}`}
										>
											{category.label}
										</ToggleGroupItem>
									))}
								</ToggleGroup>
							</div>
						</CardContent>
					</Card>

					{/* Filtered Results */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{sortedProducts.length > 0 ? (
							sortedProducts.map((product) => (
								<ProductCard
									key={product.id}
									id={product.id}
									title={product.title}
									category={product.category}
									image={product.imageSrc}
								/>
							))
						) : (
							<div className="col-span-3 text-center py-12">
								<p className="text-lg text-muted-foreground">
									No products found. Try adjusting your
									filters.
								</p>
								<Button
									variant="outline"
									onClick={() => {
										setActiveCategory("all");
										setSearchQuery("");
										setPriceSort("");
									}}
									className="mt-4"
								>
									Clear Filters
								</Button>
							</div>
						)}
					</div>

					{/* Results Count */}
					<p className="text-sm text-muted-foreground mt-6 text-center">
						Showing {sortedProducts.length} of {products.length}{" "}
						products
					</p>
				</div>
			</section>

			{/* Product Catalog CTA */}
			<section className="section-padding bg-muted">
				<div className="container mx-auto px-4">
					<div className="bg-white rounded-xl p-8 md:p-12 shadow-md border border-border">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="text-3xl font-display font-bold mb-4 text-argos-navy">
								Need Our Complete Product Catalog?
							</h2>
							<p className="text-lg mb-8 text-muted-foreground">
								Download our comprehensive product catalog with
								detailed specifications, application guidelines,
								and pricing information for our entire range of
								agricultural and fishery products.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Button
									asChild
									className="bg-argos-green hover:bg-argos-green/90 text-white"
								>
									<a href="#" download>
										Download Catalog (PDF)
									</a>
								</Button>
								<Button variant="outline" asChild>
									<Link to="/contact">
										Request Custom Quote
									</Link>
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
