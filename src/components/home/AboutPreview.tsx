import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import SectionHeading from "../ui-custom/SectionHeading";
import AgriEquipment from "../../assets/img/agri-equipment-1.jpg";
import Fisheries from "../../assets/img/fisheries-1.jpg";
import RiceField from "../../assets/img/rice-field-3.jpg";
import RiceMill from "../../assets/img/rice-mill-1.jpeg";

const AboutPreview = () => {
	return (
		<section className="section-padding bg-white">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<SectionHeading
							title="Leading the Way in Agricultural Innovation"
							subtitle="With over 10 years of experience, Argos Industries Ltd has been at the forefront of developing sustainable agricultural solutions across Bangladesh."
						/>

						<div className="space-y-4 mb-8">
							{[
								"Managing 126,000 hectares of agricultural land across Bangladesh",
								"Pioneering the BARRI rice field project in Nouga district",
								"Comprehensive agricultural and fisheries products and services",
								"Research-backed solutions for optimal crop and livestock yield",
							].map((item, index) => (
								<div
									key={index}
									className="flex items-start reveal-on-scroll"
								>
									<CheckCircle className="h-6 w-6 text-argos-green mr-3 flex-shrink-0 mt-0.5" />
									<p>{item}</p>
								</div>
							))}
						</div>

						<Link to="/about" className="btn-primary">
							Learn More About Us
						</Link>
					</div>

					<div className="grid grid-cols-2 gap-4 reveal-on-scroll">
						<div className="space-y-4">
							<img
								// src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=600"
								src={AgriEquipment}
								alt="About Argos Industries"
								className="rounded-lg h-auto w-full object-cover shadow-md"
								style={{ height: "220px" }}
							/>
							<img
								// src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600"
								src={Fisheries}
								alt="About Argos Industries"
								className="rounded-lg h-auto w-full object-cover shadow-md"
								style={{ height: "160px" }}
							/>
						</div>
						<div className="space-y-4 pt-6">
							<img
								// src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600"
								src={RiceField}
								alt="About Argos Industries"
								className="rounded-lg h-auto w-full object-cover shadow-md"
								style={{ height: "160px" }}
							/>
							<img
								// src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600"
								src={RiceMill}
								alt="About Argos Industries"
								className="rounded-lg h-auto w-full object-cover shadow-md"
								style={{ height: "220px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPreview;
