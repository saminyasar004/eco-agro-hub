import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
	const [state, handleSubmit] = useForm("mdkggewj");
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		setLoading(state.submitting);
	}, [state.submitting]);

	useEffect(() => {
		if (state.succeeded) {
			toast({
				title: "Message Sent!",
				description:
					"Thank you for contacting us. We'll get back to you soon.",
			});
			setLoading(false);
			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
			});
		}
	}, [state.succeeded]);

	return (
		<form onSubmit={handleSubmit} className="space-y-6 h-full">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium mb-1"
					>
						Your Name <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-argos-green focus:border-argos-green transition-colors"
						required
					/>
					<ValidationError
						prefix="Name"
						field="name"
						errors={state.errors}
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium mb-1"
					>
						Your Email <span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-argos-green focus:border-argos-green transition-colors"
						required
					/>
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
					/>
				</div>
			</div>

			<div>
				<label
					htmlFor="phone"
					className="block text-sm font-medium mb-1"
				>
					Phone Number
				</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-argos-green focus:border-argos-green transition-colors"
				/>
				<ValidationError
					prefix="Phone"
					field="phone"
					errors={state.errors}
				/>
			</div>
			<div>
				<label
					htmlFor="subject"
					className="block text-sm font-medium mb-1"
				>
					Subject <span className="text-red-500">*</span>
				</label>
				<select
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-argos-green focus:border-argos-green transition-colors"
					required
				>
					<option value="">Select a subject</option>
					<option value="General Inquiry">General Inquiry</option>
					<option value="Product Information">
						Product Information
					</option>
					<option value="Service Information">
						Service Information
					</option>
					<option value="Partnership">Partnership</option>
					<option value="Other">Other</option>
				</select>
			</div>

			<div>
				<label
					htmlFor="message"
					className="block text-sm font-medium mb-1"
				>
					Your Message <span className="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					rows={6}
					className="w-full h-full min-h-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-argos-green focus:border-argos-green transition-colors"
					required
				></textarea>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>

			<button
				type="submit"
				disabled={state.submitting}
				className="btn-primary w-full md:w-auto min-w-[150px] flex items-center justify-center"
			>
				{loading ? (
					<>
						<span className="animate-spin mr-2">⟳</span>
						Sending...
					</>
				) : (
					"Send Message"
				)}
			</button>
		</form>
	);
};

export default ContactForm;
