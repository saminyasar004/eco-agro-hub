import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui-custom/PageHeader";
import ContactForm from "../components/ui-custom/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Contact = () => {
	const contactInfo = [
		{
			icon: MapPin,
			title: "Our Location",
			details: [
				"Corporate Office: 218, New Elephant Road, 9th Floor, Suite: 906/907, Sahera Tropical Center, Dhaka-1205",
				"Branch Office & Cold Storage: Ekdala, Hatshingradaha Natore Sadar-6400, Bangladesh",
				"Production & Factory Office: Doctor Bazar Switchgate Noakhali Sadar, Noakhali.",
			],
		},
		{
			icon: Phone,
			title: "Phone Numbers",
			details: ["+8802-41060883/5"],
		},
		{
			icon: Mail,
			title: "Email Address",
			details: ["info@argosindltd.com", "argosltdbd@gmail.com"],
		},
		{
			icon: Clock,
			title: "Working Hours",
			details: ["Saturday-Thursday: 9AM - 6PM"],
		},
	];

	return (
		<Layout>
			<PageHeader
				title="Contact Us"
				subtitle="We're here to answer any questions you have about Argos Industries"
				breadcrumbs={[
					{ label: "Home", link: "/" },
					{ label: "Contact", link: "/contact" },
				]}
			/>

			<section className="section-padding">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Information */}
						<div>
							<h2 className="text-2xl font-semibold text-argos-navy mb-6">
								Get In Touch
							</h2>
							<p className="text-muted-foreground mb-8">
								Have questions about our products or services?
								We're here to help. Reach out to us through any
								of the channels below, or fill out the contact
								form and we'll get back to you as soon as
								possible.
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{contactInfo.map((item, index) => (
									<div
										key={index}
										className={cn(
											"border border-border rounded-lg p-5 bg-white shadow-sm reveal-on-scroll",
											index === 0 || index === 3
												? "col-span-2"
												: ""
										)}
									>
										<div className="bg-argos-green/10 p-3 rounded-full w-fit mb-4">
											<item.icon className="h-6 w-6 text-argos-green" />
										</div>
										<h3 className="text-xl font-semibold mb-3 text-argos-navy">
											{item.title}
										</h3>
										<div className="space-y-1">
											{item.details.map(
												(detail, detailIndex) => (
													<p
														key={detailIndex}
														className="text-muted-foreground"
													>
														{detail}
													</p>
												)
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Contact Form */}
						<div className="bg-white p-6 rounded-xl shadow-md border border-border reveal-on-scroll h-full">
							<h2 className="text-2xl font-semibold text-argos-navy mb-6">
								Send Us a Message
							</h2>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="pb-16">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-semibold text-argos-navy mb-6">
						Corporate Office
					</h2>
					<div className="rounded-xl overflow-hidden shadow-md border border-border reveal-on-scroll">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2241104821405!2d90.3865478259794!3d23.739386339197942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b94ea98c1ab1%3A0x85b8ebef67fdc42b!2sSahera%20Tropical%20Centre%20Shopping%20Mall!5e0!3m2!1sen!2sbd!4v1746427482899!5m2!1sen!2sbd"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Argos Industries Location Map"
						/>
					</div>
				</div>
			</section>

			<section className="pb-16">
				<div className="container mx-auto px-4">
					<div className="w-full flex justify-between">
						<h2 className="text-2xl font-semibold text-argos-navy mb-6">
							Branch Office
						</h2>

						<div className="flex items-center">
							<Button>
								<Phone className="text-white" />
								<a href="tel:+8801335973112">+88 01335973112</a>
							</Button>
						</div>
					</div>
					<div className="rounded-xl overflow-hidden shadow-md border border-border reveal-on-scroll">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14533.500857802625!2d88.952691!3d24.403029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc117b23a728a9%3A0x83ca043c67afce7b!2sSadik%20Agrochemicals%20Co.%20Ltd.!5e0!3m2!1sen!2sbd!4v1746447217162!5m2!1sen!2sbd"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Argos Industries Location Map"
						/>
					</div>
				</div>
			</section>

			<section className="pb-16">
				<div className="container mx-auto px-4">
					<div className="w-full flex justify-between">
						<h2 className="text-2xl font-semibold text-argos-navy mb-6">
							Production & Factory Office
						</h2>

						<div className="flex items-center">
							<Button>
								<Phone className="text-white" />
								<a href="tel:+8801336985440">+88 01336985440</a>
							</Button>
						</div>
					</div>
					<div className="rounded-xl overflow-hidden shadow-md border border-border reveal-on-scroll">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8513.67647900967!2d91.07713931706554!3d22.786494968893976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ3JzM2LjciTiA5McKwMDUnMDEuOSJF!5e0!3m2!1sen!2sbd!4v1746446426240!5m2!1sen!2sbd"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Argos Industries Location Map"
						/>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Contact;
