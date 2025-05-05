import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Award, Clock } from "lucide-react";

const HeroSection = () => {
	return (
		<section className="relative min-h-[85vh] flex items-center overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-argos-navy/80 mix-blend-multiply"></div>
				<img
					src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1920"
					alt="Hero Background"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 relative z-10 mb-40 py-16 md:py-24">
				<div className="max-w-3xl fade-up-stagger">
					<span className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
						<Leaf className="h-4 w-4 mr-2 text-argos-green animate-leaf-sway" />
						Sustainable Agricultural Solutions
					</span>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
						Growing a{" "}
						<span className="text-argos-green">Sustainable</span>{" "}
						Future for Agriculture
					</h1>

					<p className="text-xl text-white/80 mb-8">
						Argos Industries Ltd provides innovative agricultural
						solutions that enhance productivity while preserving our
						natural resources for future generations.
					</p>

					<div className="flex flex-wrap gap-4">
						<Link
							to="/products"
							className="btn-primary inline-flex items-center group"
						>
							Explore Our Products
							<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Link>
						<Link to="/about" className="btn-secondary">
							Learn More About Us
						</Link>
					</div>
				</div>
			</div>

			{/* Stats Banner */}
			<div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md py-5 border-t border-white/20">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
						<div className="flex items-center justify-start">
							<Award className="h-8 w-8 mr-3 text-argos-green" />
							<div>
								<h4 className="font-semibold text-lg">
									Industry Leader
								</h4>
								<p className="text-white/70">
									Trusted by farmers worldwide
								</p>
							</div>
						</div>
						<div className="flex items-center justify-start">
							<Leaf className="h-8 w-8 mr-3 text-argos-green animate-leaf-sway" />
							<div>
								<h4 className="font-semibold text-lg">
									Eco-Friendly Products
								</h4>
								<p className="text-white/70">
									Sustainable agricultural solutions
								</p>
							</div>
						</div>
						<div className="flex items-center justify-start">
							<Clock className="h-8 w-8 mr-3 text-argos-green" />
							<div>
								<h4 className="font-semibold text-lg">
									10+ Years
								</h4>
								<p className="text-white/70">
									Of agricultural innovation
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
