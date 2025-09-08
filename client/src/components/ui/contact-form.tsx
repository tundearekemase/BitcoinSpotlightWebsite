import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We'll get back to you within 24 hours.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="contact-card rounded-xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-form-title">
          Send us a Message
        </h2>
        <p className="text-muted-foreground" data-testid="text-form-subtitle">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
              First Name
            </Label>
            <Input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
              className="w-full"
              data-testid="input-first-name"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
              Last Name
            </Label>
            <Input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
              className="w-full"
              data-testid="input-last-name"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </Label>
          <Input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className="w-full"
            data-testid="input-email"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </Label>
          <Input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full"
            data-testid="input-phone"
          />
        </div>

        <div>
          <Label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject
          </Label>
          <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)} required>
            <SelectTrigger className="w-full" data-testid="select-subject">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="investment">Bitcoin Investment Advice</SelectItem>
              <SelectItem value="trading">Trading Strategies</SelectItem>
              <SelectItem value="institutional">Institutional Services</SelectItem>
              <SelectItem value="lightning">Lightning Network</SelectItem>
              <SelectItem value="etf">Bitcoin ETF Information</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            rows={6}
            required
            className="w-full resize-none"
            placeholder="Tell us about your Bitcoin interests and how we can help..."
            data-testid="textarea-message"
          />
        </div>

        <div className="text-center">
          <Button 
            type="submit" 
            className="cta-button text-accent-foreground px-10 py-4 rounded-full text-lg font-semibold glow-effect"
            disabled={isSubmitting}
            data-testid="button-send-message"
          >
            <i className="fas fa-paper-plane mr-2"></i>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
