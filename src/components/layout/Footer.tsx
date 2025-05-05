import { Link } from "react-router-dom";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	ChevronRight,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from "lucide-react";
import LogoWhite from "../../../public/argos-white.jpg";

const Footer = () => {
	return (
		<footer className="bg-slate-950 text-white">
			<div className="container mx-auto px-4">
				{/* Main Footer */}
				<div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* About Section */}
					<div
						className="animate-fade-in"
						style={{ animationDelay: "0.1s" }}
					>
						<Link to="/" className="inline-block mb-6">
							<img
								src={LogoWhite}
								alt="Argos Industries Ltd"
								className="h-16"
							/>
						</Link>
						<p className="mb-6 text-gray-300">
							Pioneering sustainable agriculture solutions with
							innovative products and services that enhance farm
							productivity while preserving ecological balance.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="bg-white/10 hover:bg-argos-green transition-colors duration-300 p-2 rounded-full"
								aria-label="Facebook"
							>
								<Facebook className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="bg-white/10 hover:bg-argos-green transition-colors duration-300 p-2 rounded-full"
								aria-label="Twitter"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="bg-white/10 hover:bg-argos-green transition-colors duration-300 p-2 rounded-full"
								aria-label="Instagram"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="bg-white/10 hover:bg-argos-green transition-colors duration-300 p-2 rounded-full"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div
						className="animate-fade-in"
						style={{ animationDelay: "0.2s" }}
					>
						<h3 className="text-xl font-semibold mb-6 relative after:absolute after:left-0 after:w-12 after:h-1 after:bg-argos-green after:-bottom-2">
							Quick Links
						</h3>
						<ul className="space-y-3">
							{[
								{ label: "Home", path: "/" },
								{ label: "About Us", path: "/about" },
								{ label: "Our Products", path: "/products" },
								{ label: "Our Services", path: "/services" },
								{ label: "Contact Us", path: "/contact" },
							].map((link, index) => (
								<li key={index}>
									<Link
										to={link.path}
										className="flex items-center hover:text-argos-green transition-colors duration-300"
									>
										<ChevronRight className="h-4 w-4 mr-2" />
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div
						className="animate-fade-in"
						style={{ animationDelay: "0.3s" }}
					>
						<h3 className="text-xl font-semibold mb-6 relative after:absolute after:left-0 after:w-12 after:h-1 after:bg-argos-green after:-bottom-2">
							Our Services
						</h3>
						<ul className="space-y-3">
							{[
								"Agricultural Consulting",
								"Crop Protection",
								"Seed Development",
								"Soil Analysis",
								"Sustainable Farming",
							].map((service, index) => (
								<li key={index}>
									<Link
										to="/services"
										className="flex items-center hover:text-argos-green transition-colors duration-300"
									>
										<ChevronRight className="h-4 w-4 mr-2" />
										{service}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div
						className="animate-fade-in"
						style={{ animationDelay: "0.4s" }}
					>
						<h3 className="text-xl font-semibold mb-6 relative after:absolute after:left-0 after:w-12 after:h-1 after:bg-argos-green after:-bottom-2">
							Contact Us
						</h3>
						<ul className="space-y-4 w-full">
							<li className="flex w-full items-center gap-4">
								<MapPin
									className="text-argos-green"
									size={48}
								/>
								<span>
									Corporate Office: 218, New Elephant Road,
									9th Floor, Suite: 906/907, Sahera Tropical
									Center, Dhaka-1205
								</span>
							</li>
							<li className="flex w-full items-start gap-4">
								<MapPin
									className="text-argos-green"
									size={48}
								/>
								<span>
									Branch Office & Cold Storage: Ekdala,
									Hatshingradaha Natore Sadar-6400, Bangladesh
								</span>
							</li>
							<li className="flex w-full items-start gap-4">
								<MapPin
									className="text-argos-green"
									size={48}
								/>
								<span>
									Production & Factory Office: Doctor Bazar
									Switchgate Noakhali Sadar, Noakhali.
								</span>
							</li>
							<li className="flex items-center">
								<Phone className="h-5 w-5 mr-3 text-argos-green" />
								<a
									href="tel:+8802-41060883"
									className="hover:text-argos-green transition-colors"
								>
									+8802-41060883/5
								</a>
							</li>
							<li className="flex items-center">
								<Mail className="h-5 w-5 mr-3 text-argos-green" />
								<a
									href="mailto:info@argosindltd.com"
									className="hover:text-argos-green transition-colors"
								>
									info@argosindltd.com
								</a>
							</li>
							<li className="flex items-center">
								<Mail className="h-5 w-5 mr-3 text-argos-green" />
								<a
									href="mailto:argosltdbd@gmail.com"
									className="hover:text-argos-green transition-colors"
								>
									argosltdbd@gmail.com
								</a>
							</li>
							<li className="flex items-start">
								<Clock className="h-5 w-5 mr-3 mt-1 text-argos-green" />
								<div>
									<p>Saturday - Thursday</p>
									<p>9:00 AM - 6:00 PM</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="border-t border-white/10 py-6">
				<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
					<p className="mb-4 md:mb-0 text-center md:text-left">
						&copy; {new Date().getFullYear()} Argos Industries Ltd.
						All rights reserved. Developed by{" "}
						<a
							href="https://saminyasar.netlify.app/"
							target="_blank"
							rel="noreferrer"
							className="text-argos-green hover:underline transition-all duration-300"
						>
							Samin Yasar
						</a>
						.
					</p>
					<div className="flex space-x-6">
						<Link
							to="/"
							className="hover:text-argos-green transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							to="/"
							className="hover:text-argos-green transition-colors"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
