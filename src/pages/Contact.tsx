
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui-custom/PageHeader";
import ContactForm from "../components/ui-custom/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Green Valley Road", "Agricultural District", "Toronto, ON M5V 2L7"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+1 (234) 567-8901", "+1 (234) 567-8902"]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@argosindustries.com", "support@argosindustries.com"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday-Friday: 9AM - 5PM", "Saturday: 10AM - 2PM", "Sunday: Closed"]
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Contact Us"
        subtitle="We're here to answer any questions you have about Argos Industries"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Contact", link: "/contact" }
        ]}
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-argos-navy mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our products or services? We're here to help. Reach out to us through any of the channels below, or fill out the contact form and we'll get back to you as soon as possible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="border border-border rounded-lg p-5 bg-white shadow-sm reveal-on-scroll"
                  >
                    <div className="bg-argos-green/10 p-3 rounded-full w-fit mb-4">
                      <item.icon className="h-6 w-6 text-argos-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-argos-navy">{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-border reveal-on-scroll">
              <h2 className="text-2xl font-semibold text-argos-navy mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-md border border-border reveal-on-scroll">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.446842861378!2d-79.38927492346158!3d43.64268545260464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1687893042887!5m2!1sen!2sus" 
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
