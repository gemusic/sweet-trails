// src/pages/Events.tsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  MessageCircle, 
  Users, 
  PartyPopper, 
  Utensils,
  Calendar,
  CheckCircle,
  Package,
  Clock,
  ChevronRight,
  Phone,
  Shield,
  Zap,
  Users as UsersIcon,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Importez seulement l'image qui existe
import { bulkOrdersImage } from "@/assets/events";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "2348000000000";

const eventTypes = [
  { icon: Users, label: "Corporate Events", description: "Professional catering for meetings, product launches, and office parties." },
  { icon: PartyPopper, label: "Social Celebrations", description: "Weddings, birthdays, and anniversaries that your guests will talk about for years." },
  { icon: Package, label: "Custom Bulk Boxes", description: "Branded or themed small chop boxes for mass distribution." },
];

const processSteps = [
  { 
    number: "1", 
    title: "Consultation", 
    description: "We discuss your guest count, menu preferences, and spice levels.",
    icon: MessageCircle 
  },
  { 
    number: "2", 
    title: "Tasting & Selection", 
    description: "Pick your favorites from our diverse menu of chops and meals.",
    icon: Utensils 
  },
  { 
    number: "3", 
    title: "Flawless Execution", 
    description: "Freshly cooked, neatly packaged, and delivered on time. Period.",
    icon: CheckCircle 
  },
];

// Utilisez des URLs d'images de placeholder pour l'instant
const galleryImages = [
  { 
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=80", 
    alt: "Corporate event catering" 
  },
  { 
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80", 
    alt: "Wedding celebration" 
  },
  { 
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80", 
    alt: "Bulk orders preparation" 
  },
  { 
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=80", 
    alt: "Event setup" 
  },
  { 
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80", 
    alt: "Happy guests" 
  },
];

export const EventsAndBulkOrdersPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    eventDate: "",
    guestCount: "",
    menuPreference: "",
    message: ""
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero image slow zoom effect
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.1,
        duration: 2,
      });

      // Hero text sweep animation
      gsap.from(".hero-text", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 70%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2
      });

      // Process timeline animation
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3
      });

      // Gallery items animation
      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1
      });

      // Icon hover animations
      eventTypes.forEach((_, index) => {
        const iconElement = document.querySelector(`#icon-${index}`);
        if (iconElement) {
          iconElement.addEventListener("mouseenter", () => {
            gsap.to(iconElement, {
              scale: 1.2,
              duration: 0.3,
              ease: "power2.out"
            });
          });
          iconElement.addEventListener("mouseleave", () => {
            gsap.to(iconElement, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const message = `Hello Sweet Trails!

I'm interested in event catering:
- Name: ${formData.name}
- Company: ${formData.company}
- Event Date: ${formData.eventDate}
- Guest Count: ${formData.guestCount}
- Menu Preference: ${formData.menuPreference}
- Additional Info: ${formData.message}

Please send me a quote!`;
    
    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={sectionRef} className="bg-background">
      {/* 1. Hero Section */}
      <div ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          ref={imageRef}
          className="absolute inset-0 z-0"
        >
          <img
            src={bulkOrdersImage}
            alt="Event catering buffet table"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-heading px-4 py-2">
              Events & Bulk Orders
            </Badge>
            
            <h1 className="hero-text font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Your Big Moments,
              <span className="block font-script text-primary text-[1.2em] mt-2">
                Our Signature Flavors
              </span>
            </h1>
            
            <p className="hero-text font-body text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              From intimate gatherings to grand celebrations of 500+ guests. We bring the heat, 
              the crunch, and the joy to your event in Benin City.
            </p>
            
            <a href="#bulk-inquiry" className="hero-text inline-block">
              <Button
                size="lg"
                className="font-heading font-bold text-lg gap-3 bg-primary hover:bg-primary/90 px-12 py-8 rounded-none border-2 border-white/20"
              >
                <MessageCircle className="w-5 h-5" />
                REQUEST AN EVENT QUOTE
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Services & Capacities */}
      <div className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services & Capacities
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional catering solutions for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {eventTypes.map((event, index) => (
              <div 
                key={event.label}
                className="bg-background p-8 rounded-2xl border border-charcoal/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    id={`icon-${index}`}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-transform duration-300"
                  >
                    <event.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {event.label}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Capacity Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-background px-8 py-4 rounded-full border border-charcoal/10">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-heading font-bold text-foreground">
                Capacity: Up to 500+ Guests
              </span>
              <UsersIcon className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. The Process */}
      <div ref={processRef} className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple process, exceptional results
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`process-step relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                >
                  {/* Step content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-background p-8 rounded-2xl border border-charcoal/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-heading text-sm font-medium text-primary mb-1">
                            Step {step.number}
                          </div>
                          <h3 className="font-heading text-xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="font-body text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>

                  {/* Step number on timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 md:top-1/2 md:-translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-background">
                      {step.number}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Event Gallery */}
      <div ref={galleryRef} className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 md:px8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Event Gallery
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Real smiles. Real events. 100% Sweet Trails
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`gallery-item relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-cream">
                    <Heart className="w-5 h-5 mb-2" />
                    <p className="font-body text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-charcoal/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-4 right-4 text-cream hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <ChevronRight className="w-8 h-8 rotate-45" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged event photo"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </div>

      {/* 5. Bulk Inquiry Form */}
      <div id="bulk-inquiry" className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request Your Quote
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's create something delicious for your next event
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-cream p-8 md:p-12 rounded-2xl border border-charcoal/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-heading font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-charcoal/20 focus:border-primary focus:ring-primary"
                  onFocus={(e) => gsap.to(e.target, { 
                    boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.1)",
                    duration: 0.3 
                  })}
                  onBlur={(e) => gsap.to(e.target, { 
                    boxShadow: "none",
                    duration: 0.3 
                  })}
                />
              </div>

              <div>
                <label className="block font-heading font-medium text-foreground mb-2">
                  Company Name
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-background border-charcoal/20 focus:border-primary focus:ring-primary"
                  onFocus={(e) => gsap.to(e.target, { 
                    boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.1)",
                    duration: 0.3 
                  })}
                />
              </div>

              <div>
                <label className="block font-heading font-medium text-foreground mb-2">
                  Event Date *
                </label>
                <Input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-charcoal/20 focus:border-primary focus:ring-primary"
                  onFocus={(e) => gsap.to(e.target, { 
                    boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.1)",
                    duration: 0.3 
                  })}
                />
              </div>

              <div>
                <label className="block font-heading font-medium text-foreground mb-2">
                  Estimated Guest Count *
                </label>
                <Select
                  value={formData.guestCount}
                  onValueChange={(value) => handleSelectChange("guestCount", value)}
                >
                  <SelectTrigger className="bg-background border-charcoal/20 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Select guest count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20-50">20-50 Guests</SelectItem>
                    <SelectItem value="50-200">50-200 Guests</SelectItem>
                    <SelectItem value="200-500">200-500 Guests</SelectItem>
                    <SelectItem value="500+">500+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <label className="block font-heading font-medium text-foreground mb-2">
                  Preferred Menu *
                </label>
                <Select
                  value={formData.menuPreference}
                  onValueChange={(value) => handleSelectChange("menuPreference", value)}
                >
                  <SelectTrigger className="bg-background border-charcoal/20 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Select menu preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small-chops">Small Chops only</SelectItem>
                    <SelectItem value="full-meals">Full Meals</SelectItem>
                    <SelectItem value="mixed">Mixed (Small Chops & Full Meals)</SelectItem>
                    <SelectItem value="custom">Custom Menu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <label className="block font-heading font-medium text-foreground mb-2">
                  Additional Information
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-background border-charcoal/20 focus:border-primary focus:ring-primary"
                  onFocus={(e) => gsap.to(e.target, { 
                    boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.1)",
                    duration: 0.3 
                  })}
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full font-heading font-bold text-lg gap-3 bg-primary hover:bg-primary/90 py-7 rounded-none border-2 border-white/20"
            >
              <MessageCircle className="w-5 h-5" />
              GET MY QUOTE VIA WHATSAPP
            </Button>
          </form>
        </div>
      </div>

      {/* 6. Reassurance Footer */}
      <div className="bg-charcoal text-cream py-8">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5" />
              <div>
                <p className="font-heading font-bold">Need something urgent?</p>
                <p className="font-body">Call our event hotline: {WHATSAPP_NUMBER}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Shield className="w-5 h-5" />
              <div>
                <p className="font-heading font-bold">Fully insured and health-certified catering</p>
                <p className="font-body text-cream/80">Your safety is our priority</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5" />
              <div>
                <p className="font-heading font-bold">Timely Delivery Guaranteed</p>
                <p className="font-body text-cream/80">Across Benin City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAndBulkOrdersPage;
