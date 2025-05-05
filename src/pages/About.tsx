import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui-custom/PageHeader";
import SectionHeading from "../components/ui-custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Users, Globe, Award, Target, Clock } from "lucide-react";
import RiceField2 from "../assets/img/rice-field-2.jpg";
import UserAvatar from "../assets/img/User-avatar.svg";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
	// Company values
	const values = [
		{
			title: "Sustainability",
			description:
				"We're committed to promoting environmentally responsible farming practices that preserve natural resources for future generations.",
			icon: Globe,
		},
		{
			title: "Innovation",
			description:
				"We continuously seek out and develop cutting-edge solutions that advance agricultural technology and efficiency.",
			icon: Target,
		},
		{
			title: "Quality",
			description:
				"We maintain the highest standards in all our products and services, ensuring reliable performance and results.",
			icon: Award,
		},
		{
			title: "Integrity",
			description:
				"We conduct our business with honesty, transparency, and respect for all stakeholders in the agricultural community.",
			icon: CheckCircle2,
		},
	];

	// Timeline items
	const timelineItems = [
		{
			year: "2015",
			title: "Company Founded",
			description:
				"Argos Industries was established with a mission to support sustainable agriculture in Bangladesh.",
		},
		{
			year: "2021",
			title: "Got Trademark",
			description:
				"Argos Industries Ltd. is now a registered trademark of Argos Industries Ltd.",
		},
		{
			year: "2022",
			title: "Research Center",
			description:
				"Opened our first agricultural research and development center, focusing on crop adaptation to local conditions.",
		},
		{
			year: "2023",
			title: "Land Acquisition",
			description:
				"Expanded our agricultural operations to 50,000 hectares across key farming regions in Bangladesh.",
		},
		{
			year: "2024",
			title: "BARRI Partnership",
			description:
				"Launched partnership with Bangladesh Agricultural Research Institute (BARRI) for the rice field project in Nouga district.",
		},
		{
			year: "2024",
			title: "Sustainable Farming Initiative",
			description:
				"Launched innovative program to promote and support eco-friendly farming practices across our 126,000 hectares of land.",
		},
		{
			year: "2025",
			title: "Digital Agriculture",
			description:
				"Introduced advanced digital farming solutions incorporating AI and IoT technology for precision agriculture.",
		},
	];

	// Organization structure - expanded to 18 members
	const organizationStructure = [
		// Board Level (Level 0)
		{
			name: "Baker Hossain",
			title: "Chairman",
			level: 0,
			id: "board-1",
			isBoard: true,
		},
		{
			name: "Abul Kalam Azad",
			title: "Managing Director",
			level: 0,
			id: "board-2",
			isBoard: true,
		},
		{
			name: "Nasir Khan",
			title: "Director",
			level: 0,
			id: "board-3",
			isBoard: true,
		},
		// C-Level (Level 1)
		{
			name: "Abdur Rob",
			title: "Director & CEO",
			level: 1,
			id: "c-1",
		}, // SVP Level (Level 2)
		{
			name: "Tanjina Haque",
			title: "Head of Research & Development",
			level: 2,
			id: "svp-1",
			reportTo: "c-1",
		},
		{
			name: "Shahriar Kabir",
			title: "Director of Sustainability",
			level: 2,
			id: "svp-2",
			reportTo: "c-1",
		},
		{
			name: "Farzana Chowdhury",
			title: "Chief Financial Officer",
			level: 2,
			id: "svp-3",
			reportTo: "c-1",
		},
		{
			name: "Hasan Mahmud",
			title: "Head of Operations",
			level: 2,
			id: "svp-4",
			reportTo: "c-1",
		},
		// Director Level (Level 3)
		{
			name: "Nusrat Jahan",
			title: "Marketing Director",
			level: 3,
			id: "dir-1",
			reportTo: "svp-4",
		},
		{
			name: "Raihan Hossain",
			title: "Head of Product Development",
			level: 3,
			id: "dir-2",
			reportTo: "svp-1",
		},
		{
			name: "Sharmin Akter",
			title: "HR Director",
			level: 3,
			id: "dir-3",
			reportTo: "svp-3",
		},
		{
			name: "Asif Rahman",
			title: "Technology Director",
			level: 3,
			id: "dir-4",
			reportTo: "svp-1",
		},
		{
			name: "Maliha Sultana",
			title: "Regional Director - Asia",
			level: 3,
			id: "dir-5",
			reportTo: "svp-4",
		},
		// Manager Level (Level 4)
		{
			name: "Tanvir Ahmed",
			title: "Supply Chain Manager",
			level: 4,
			id: "mgr-1",
			reportTo: "dir-5",
		},
		{
			name: "Sadia Islam",
			title: "Sustainability Projects Manager",
			level: 4,
			id: "mgr-2",
			reportTo: "svp-2",
		},
		{
			name: "Faisal Huda",
			title: "Agricultural Research Manager",
			level: 4,
			id: "mgr-3",
			reportTo: "dir-2",
		},
		{
			name: "Sumaiya Noor",
			title: "Communications Manager",
			level: 4,
			id: "mgr-4",
			reportTo: "dir-1",
		},
	];

	return (
		<Layout>
			<PageHeader
				title="About Argos Industries"
				subtitle="Leading the way in sustainable agricultural solutions in Bangladesh since 2015"
				breadcrumbs={[
					{ label: "Home", link: "/" },
					{ label: "About", link: "/about" },
				]}
			/>

			{/* Company Introduction */}
			<section className="section-padding">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="reveal-on-scroll">
							<h2 className="text-3xl font-display font-bold mb-6 text-argos-navy">
								Our Story
							</h2>
							<p className="text-lg text-muted-foreground mb-6">
								For over 10 years, Argos Industries has been at
								the forefront of agricultural innovation in
								Bangladesh, providing farmers with the tools,
								knowledge, and support they need to thrive in an
								ever-changing landscape.
							</p>
							<p className="text-lg text-muted-foreground mb-6">
								What began as a small family business has grown
								into a leading provider of agricultural
								solutions, managing 126,000 hectares of
								agricultural land and serving customers across
								the country with a commitment to quality,
								sustainability, and innovation.
							</p>
							<p className="text-lg text-muted-foreground">
								Today, we continue to build on our legacy of
								excellence, developing new technologies and
								practices that help farmers increase yields,
								reduce environmental impact, and build resilient
								agricultural systems for Bangladesh's future.
							</p>
						</div>
						<div className="rounded-xl overflow-hidden shadow-lg border border-border reveal-on-scroll">
							<img
								src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1400"
								alt="Argos Industries Farm"
								className="w-full h-auto object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Agricultural Operations */}
			<section className="section-padding bg-gradient-to-r from-argos-green/10 to-argos-navy/5">
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Our Agricultural Operations"
						subtitle="Managing one of Bangladesh's largest agricultural land portfolios"
						centered
					/>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
						<div className="rounded-xl overflow-hidden shadow-md border border-border order-2 lg:order-1 reveal-on-scroll">
							<img
								// src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1400"
								src={RiceField2}
								alt="Argos Rice Fields"
								className="w-full h-auto object-cover"
							/>
						</div>
						<div className="order-1 lg:order-2 reveal-on-scroll">
							<h3 className="text-2xl font-display font-bold mb-4 text-argos-navy">
								126,000 Hectares of Agricultural Land
							</h3>
							<p className="text-lg text-muted-foreground mb-6">
								Argos Industries manages 126,000 hectares of
								agricultural land across Bangladesh, making us
								one of the country's largest agricultural
								enterprises. Our lands span diverse ecological
								zones, allowing us to cultivate a wide range of
								crops and implement region-specific farming
								practices.
							</p>
							<div className="bg-white p-6 rounded-xl shadow-sm mb-6">
								<h4 className="font-semibold text-argos-navy mb-2">
									BARRI Rice Field Project
								</h4>
								<p className="text-muted-foreground">
									In partnership with the Bangladesh
									Agricultural Research Institute (BARRI), we
									operate an extensive rice field project in
									Nouga district. This pioneering initiative
									focuses on developing high-yield,
									climate-resilient rice varieties
									specifically adapted to Bangladesh's growing
									conditions. The project combines traditional
									knowledge with modern agricultural science
									to improve food security and farmer
									livelihoods.
								</p>
							</div>
							<p className="text-lg text-muted-foreground">
								Our land management approach emphasizes
								sustainability, biodiversity, and long-term soil
								health. We implement crop rotation, integrated
								pest management, and water conservation
								practices to ensure the continued productivity
								of our agricultural lands for generations to
								come.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Company Values */}
			<section className="section-padding bg-muted">
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Our Core Values"
						subtitle="The principles that guide everything we do at Argos Industries"
						centered
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-xl shadow-md border border-border reveal-on-scroll"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="bg-argos-green/10 p-3 rounded-full w-fit mb-4">
									<value.icon className="h-6 w-6 text-argos-green" />
								</div>
								<h3 className="text-xl font-semibold mb-3 text-argos-navy">
									{value.title}
								</h3>
								<p className="text-muted-foreground">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Company Timeline */}
			<section className="section-padding">
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Our Journey"
						subtitle="Key milestones in the Argos Industries story"
						centered
					/>

					<div className="relative mt-12">
						{/* Timeline Line */}
						<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-argos-green/20 transform -translate-x-1/2"></div>

						{/* Timeline Items */}
						<div className="space-y-16">
							{timelineItems.map((item, index) => (
								<div
									key={index}
									className={`relative flex flex-col md:flex-row gap-8 items-center reveal-on-scroll ${
										index % 2 === 0
											? "md:flex-row-reverse"
											: ""
									}`}
									style={{
										animationDelay: `${index * 0.1}s`,
									}}
								>
									{/* Timeline Circle */}
									<div className="absolute left-8 md:left-1/2 w-8 h-8 bg-argos-green rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center">
										<Clock className="h-4 w-4 text-white" />
									</div>

									{/* Content */}
									<div
										className={`md:w-1/2 ${
											index % 2 === 0
												? "md:pr-16"
												: "md:pl-16"
										}`}
									>
										<div className="bg-white p-6 rounded-xl shadow-md border border-border">
											<span className="inline-block px-3 py-1 bg-argos-green/10 text-argos-green rounded-full text-sm font-semibold mb-3">
												{item.year}
											</span>
											<h3 className="text-xl font-semibold mb-2 text-argos-navy">
												{item.title}
											</h3>
											<p className="text-muted-foreground">
												{item.description}
											</p>
										</div>
									</div>
									<div className="md:w-1/2"></div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="section-padding bg-muted">
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Our Leadership Team"
						subtitle="Meet the experienced professionals guiding Argos Industries"
						centered
					/>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
						{[
							{
								name: "Baker Hossain",
								title: "Chairman",
								bio: "With over 20+ years of experience in the agricultural industry, Baker has been at the forefront of Argos Industries' growth and success.",
								// image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500",
								image: UserAvatar,
							},
							{
								name: "Abul Kalam Azad",
								title: "Managing Director",
								bio: "Abul Kalam Azad brings a wealth of experience in the agricultural industry, with a focus on sustainable farming practices and innovative solutions.",
								// image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
								image: UserAvatar,
							},
							{
								name: "Abdur Rob",
								title: "Director & CEO",
								bio: "Abdur Rob brings a wealth of experience in the agricultural industry, with a focus on sustainable farming practices and innovative solutions.",
								// image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500",
								image: UserAvatar,
							},
						].map((member, index) => (
							<div
								key={index}
								className="bg-white rounded-xl shadow-md overflow-hidden border border-border reveal-on-scroll"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="h-64 overflow-hidden">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-argos-navy">
										{member.name}
									</h3>
									<p className="text-argos-green font-medium mb-3">
										{member.title}
									</p>
									<p className="text-muted-foreground">
										{member.bio}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className="mt-16">
						<SectionHeading
							title="Our Team"
							subtitle="The complete organizational structure of Argos Industries"
							centered
						/>

						<div className="mt-12">
							{/* Organization Chart without connection lines */}
							<div className="organization-chart">
								{/* Board of Directors */}
								<div className="mb-16">
									<h3 className="text-2xl font-display font-bold text-argos-navy mb-6 text-center">
										Board of Directors
									</h3>
									<div className="flex flex-wrap justify-center gap-6">
										{organizationStructure
											.filter((member) => member.isBoard)
											.map((member, index) => (
												<Card
													key={index}
													className="w-64 bg-white border-argos-navy/20"
												>
													<CardContent className="p-6 text-center">
														<h4 className="font-semibold text-lg text-argos-navy mb-2">
															{member.name}
														</h4>
														<p className="text-argos-green">
															{member.title}
														</p>
													</CardContent>
												</Card>
											))}
									</div>
								</div>

								{/* Executive Leadership - Level 1 */}
								<div className="mb-16">
									<h3 className="text-2xl font-display font-bold text-argos-navy mb-6 text-center">
										Executive Leadership
									</h3>
									<div className="flex flex-wrap justify-center mb-8">
										{organizationStructure
											.filter(
												(member) => member.level === 1
											)
											.map((member, index) => (
												<Card
													key={index}
													className="w-64 bg-white border-argos-green"
													id={member.id}
												>
													<CardContent className="p-6 text-center">
														<h4 className="font-semibold text-lg text-argos-navy mb-2">
															{member.name}
														</h4>
														<p className="text-argos-green">
															{member.title}
														</p>
													</CardContent>
												</Card>
											))}
									</div>
								</div>

								{/* SVP Level - Level 2 */}
								<div className="mb-16">
									<div className="flex flex-wrap justify-center gap-6">
										{organizationStructure
											.filter(
												(member) => member.level === 2
											)
											.map((member, index) => (
												<Card
													key={index}
													className="w-60 bg-white"
													id={member.id}
												>
													<CardContent className="p-6 text-center">
														<h4 className="font-semibold text-lg text-argos-navy mb-2">
															{member.name}
														</h4>
														<p className="text-argos-green">
															{member.title}
														</p>
													</CardContent>
												</Card>
											))}
									</div>
								</div>

								{/* Director Level - Level 3 */}
								<div className="mb-16">
									<div className="flex flex-wrap justify-center gap-6">
										{organizationStructure
											.filter(
												(member) => member.level === 3
											)
											.map((member, index) => (
												<Card
													key={index}
													className="w-56 bg-white"
													id={member.id}
												>
													<CardContent className="p-6 text-center">
														<h4 className="font-semibold text-lg text-argos-navy mb-2">
															{member.name}
														</h4>
														<p className="text-argos-green">
															{member.title}
														</p>
													</CardContent>
												</Card>
											))}
									</div>
								</div>

								{/* Manager Level - Level 4 */}
								<div className="relative">
									<div className="flex flex-wrap justify-center gap-6">
										{organizationStructure
											.filter(
												(member) => member.level === 4
											)
											.map((member, index) => (
												<Card
													key={index}
													className="w-52 bg-white"
													id={member.id}
												>
													<CardContent className="p-6 text-center">
														<h4 className="font-semibold text-lg text-argos-navy mb-2">
															{member.name}
														</h4>
														<p className="text-argos-green">
															{member.title}
														</p>
													</CardContent>
												</Card>
											))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="section-padding">
				<div className="container mx-auto px-4">
					<div className="bg-gradient-to-r from-argos-green/10 to-argos-navy/5 rounded-xl p-8 md:p-12 relative overflow-hidden shadow-md border border-border">
						<div className="relative z-10 max-w-3xl mx-auto text-center">
							<h2 className="text-3xl font-display font-bold mb-4 text-argos-navy">
								Ready to Collaborate?
							</h2>
							<p className="text-lg mb-8 text-muted-foreground">
								Partner with Argos Industries to access
								cutting-edge agricultural solutions and
								expertise that will help your farm thrive in
								Bangladesh's dynamic agricultural landscape.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Button
									asChild
									className="bg-argos-green hover:bg-argos-green/90 text-white"
								>
									<Link to="/contact">Get in Touch</Link>
								</Button>
								<Button variant="outline" asChild>
									<Link to="/services">
										Explore Our Services
									</Link>
								</Button>
							</div>
						</div>

						{/* Background Decorative Elements */}
						<div className="absolute right-0 bottom-0 w-64 h-64 bg-argos-green/10 rounded-full -mr-20 -mb-20 z-0"></div>
						<div className="absolute right-20 bottom-20 w-32 h-32 bg-argos-green/20 rounded-full z-0"></div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default About;
