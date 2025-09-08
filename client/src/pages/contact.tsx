import Navigation from "@/components/ui/navigation";
import ContactForm from "@/components/ui/contact-form";
import { Link } from "wouter";

export default function Contact() {
  const contactOptions = [
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp Chat",
      description: "Get instant answers to your Bitcoin questions",
      action: "Start Chat",
      link: "https://wa.me/1234567890",
      testId: "whatsapp"
    },
    {
      icon: "fas fa-envelope",
      title: "Email Support",
      description: "Send us detailed inquiries and proposals",
      action: "Send Email",
      link: "mailto:info@bitcoinhub.com",
      testId: "email"
    },
    {
      icon: "fas fa-phone",
      title: "Phone Call",
      description: "Speak directly with our Bitcoin specialists",
      action: "Call Now",
      link: "tel:+1234567890",
      testId: "phone"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-contact-title">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
              Ready to start your Bitcoin journey? Our experts are here to guide you through the exciting world of cryptocurrency.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <div key={index} className="contact-card rounded-xl p-8 text-center" data-testid={`card-contact-${option.testId}`}>
                <div className="bitcoin-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${option.icon} text-3xl text-accent-foreground`}></i>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4" data-testid={`text-contact-title-${option.testId}`}>
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`text-contact-description-${option.testId}`}>
                  {option.description}
                </p>
                <a 
                  href={option.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link inline-block w-full py-3 px-6 rounded-full border border-primary text-primary font-semibold"
                  data-testid={`link-contact-${option.testId}`}
                >
                  <i className={`${option.icon} mr-2`}></i>
                  {option.action}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="text-primary hover:text-accent transition-colors font-semibold"
              data-testid="link-back-home"
            >
              <i className="fas fa-arrow-left mr-2"></i>Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
