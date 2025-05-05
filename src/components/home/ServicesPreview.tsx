import { Link } from "react-router-dom";
import {
	ArrowRight,
	Microscope,
	Fish,
	Tractor,
	Globe,
	Refrigerator,
	Wheat,
} from "lucide-react";
import FeatureCard from "../ui-custom/FeatureCard";
import SectionHeading from "../ui-custom/SectionHeading";

const ServicesPreview = () => {
	return (
		<section className="section-padding bg-gradient-to-r from-argos-green/5 to-argos-navy/5">
			<div className="container mx-auto px-4">
				<SectionHeading
					title="Our Services"
					subtitle="We provide comprehensive agricultural and fisheries services across Bangladesh to maximize productivity and sustainability."
					centered
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<FeatureCard
						title="Soil Analysis & Engineering"
						description="Comprehensive soil testing and engineering solutions to optimize land productivity and ensure sustainable farming practices for Bangladesh's diverse soil types."
						icon={Microscope}
					/>
					<FeatureCard
						title="Fisheries Management"
						description="Complete fisheries services including pond design, species selection, water quality management, and commercial production optimized for Bangladesh's aquatic environments."
						icon={Fish}
					/>
					<FeatureCard
						title="Biogas & Greenhouse Projects"
						description="Innovative biogas systems and climate-controlled greenhouses designed for Bangladesh's tropical climate, helping farmers reduce fossil fuel dependence and increase year-round production."
						icon={Globe}
					/>
					<FeatureCard
						title="Cold Storage Solutions"
						description="Temperature-controlled storage facilities across Bangladesh for preserving agricultural produce, ensuring longer shelf life and maintaining quality for market distribution."
						icon={Refrigerator}
					/>
					<FeatureCard
						title="Rice Milling & Processing"
						description="Advanced rice milling and processing facilities located across Bangladesh, providing clean and efficient processing for rice production."
						icon={Wheat}
					/>
					<FeatureCard
						title="Agricultural Equipment Rental"
						description="Access to modern agricultural machinery including tractors, harvesters, and irrigation equipment through flexible rental programs tailored to farms of all sizes."
						icon={Tractor}
					/>
				</div>

				<div className="mt-12 text-center">
					<Link
						to="/services"
						className="btn-primary inline-flex items-center group"
					>
						Explore All Services
						<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ServicesPreview;
