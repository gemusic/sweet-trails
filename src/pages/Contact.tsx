import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Music2, Send, CheckCircle } from "lucide-react";

import bulkOrdersImage from "@/assets/events/bulk-orders.jpg";

const WHATSAPP_NUMBER = "2348000000000";
const EMAIL = "hello@sweettrails.ng";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us for instant orders & inquiries.",
    action: "Start Chat",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Give us a call for urgent pickups.",
    action: "Call Now",
    href: `tel:+${WHATSAPP_NUMBER}`,
  },
  {
    icon: Mail,
    title: "Email",
    description: "For corporate inquiries and partnerships.",
    action: "Send Email",
    href: `mailto:${EMAIL}`,
  },
];

const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    
    // Simulate sending, then redirect to WhatsApp
    setTimeout(() => {
      const whatsappMessage = `Hello Sweet Trails! My name is ${formData.name}. ${formData.message}. You can reach me at ${formData.phone}.`;
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );
      setFormState("sent");
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={bulkOrdersImage}
          alt="Sweet Trails Location"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Contact Us
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Visit Us in <span className="text-primary">Benin City</span>
            </h1>
            <p className="font-body text-lg text-white/80 max-w-2xl mx-auto">
              Whether you're picking up a fresh box of Small Chops or planning
              your next big event, we're here to welcome you.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-auto min-h-[400px] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63424.06574965853!2d5.5682!3d6.3350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3c3b9a66b5b%3A0x1b47d2c9a0b8f4f0!2sBenin%20City%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              {/* Pulsing marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-8 h-8 bg-primary rounded-full animate-ping absolute" />
                  <div className="w-8 h-8 bg-primary rounded-full relative flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Find Us Here
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Address
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Ugbor-GRA, Benin City,
                      <br />
                      Edo State, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Store Hours
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Monday – Saturday: 9:00 AM – 8:00 PM
                      <br />
                      Sunday: Closed (Pre-booked events only)
                    </p>
                  </div>
                </div>
                <Button size="lg" className="mt-4 gap-2" asChild>
                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Connect Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Instant <span className="text-primary">Connect</span>
            </h2>
            <p className="font-body text-muted-foreground">
              Choose your preferred way to reach us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl p-6 text-center hover:shadow-strong hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <method.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>
                <span className="font-heading text-sm font-semibold text-primary">
                  {method.action} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Quick <span className="text-primary">Message</span>
            </h2>
            <p className="font-body text-muted-foreground">
              Leave us a message and we'll get back to you via WhatsApp.
            </p>
          </div>

          {formState === "sent" ? (
            <div className="text-center py-12 bg-muted rounded-2xl">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Message Sent!
              </h3>
              <p className="font-body text-muted-foreground">
                We'll respond to you on WhatsApp shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your WhatsApp number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message / Order Details</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your order or inquiry..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={formState === "sending"}
              >
                {formState === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    SEND MESSAGE
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Social Section */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-white/60 mb-4">
            See who's visiting us today. Tag{" "}
            <span className="text-honey font-semibold">@sweettrails.ng</span> to
            be featured!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/sweettrails.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com/@sweettrails.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Music2 className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
