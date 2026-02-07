import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Music2, Truck, ChefHat, Package } from "lucide-react";

const WHATSAPP_NUMBER = "2348000000000";
const EMAIL = "hello@sweettrails.ng";

const quickLinks = [
  { href: "/menu", label: "Weekly Menu" },
  { href: "/packages", label: "Our Packages" },
  { href: "/#testimonials", label: "Customer Reviews" },
  { href: "/faq", label: "FAQ" },
];

const socialLinks = [
  { href: "https://instagram.com/sweettrails.ng", label: "Instagram", icon: Instagram },
  { href: "https://tiktok.com/@sweettrails.ng", label: "TikTok", icon: Music2 },
];

export const Footer = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="bg-charcoal/95 backdrop-blur-sm text-white">
      {/* Reassurance Bar - Glassmorphism style */}
      <div className="border-b border-white/10 bg-charcoal/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 xs:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6 text-center">
            <div className="flex items-center justify-center gap-2 xs:gap-3 p-2 xs:p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Truck className="w-5 h-5 xs:w-6 xs:h-6 text-primary flex-shrink-0" />
              <span className="font-heading text-xs xs:text-sm font-medium">
                Fast Delivery in Benin City
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 xs:gap-3 p-2 xs:p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <ChefHat className="w-5 h-5 xs:w-6 xs:h-6 text-primary flex-shrink-0" />
              <span className="font-heading text-xs xs:text-sm font-medium">
                Freshly Cooked to Order
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 xs:gap-3 p-2 xs:p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Package className="w-5 h-5 xs:w-6 xs:h-6 text-primary flex-shrink-0" />
              <span className="font-heading text-xs xs:text-sm font-medium">
                Premium Secure Packaging
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 xs:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-10 lg:gap-8">
          {/* Column A: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-3 xs:mb-4">
              <span className="font-display text-2xl xs:text-3xl font-bold">
                Sweet<span className="text-primary">Trails</span>
              </span>
            </Link>
            <p className="text-xs xs:text-sm text-white/70 italic mb-3 xs:mb-4 font-display">
              ...indulge in the sweetest journey
            </p>
            <p className="text-xs xs:text-sm text-white/60 leading-relaxed">
              We create memorable culinary experiences in Benin City, 
              from the first crispy Small Chop to the last grain of Jollof Rice.
            </p>
          </div>

          {/* Column B: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base xs:text-lg mb-4 xs:mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-primary" />
              Quick Navigation
            </h4>
            <ul className="space-y-2 xs:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-xs xs:text-sm text-white/60 hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column C: Contact */}
          <div>
            <h4 className="font-heading font-bold text-base xs:text-lg mb-4 xs:mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-honey" />
              Contact & Location
            </h4>
            <ul className="space-y-3 xs:space-y-4">
              <li className="flex items-start gap-2 xs:gap-3">
                <MapPin className="w-4 h-4 xs:w-5 xs:h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs xs:text-sm text-white/60">
                  Ugbor-GRA, Benin City, Edo State, Nigeria
                </span>
              </li>
              <li>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 xs:gap-3 text-xs xs:text-sm text-white/60 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 xs:w-5 xs:h-5 text-primary flex-shrink-0" />
                  WhatsApp Direct Chat
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 xs:gap-3 text-xs xs:text-sm text-white/60 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 xs:w-5 xs:h-5 text-primary flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 xs:gap-3">
                <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-primary flex-shrink-0" />
                <span className="text-xs xs:text-sm text-white/60">
                  Mon - Sat | 09:00 - 20:00
                </span>
              </li>
            </ul>
          </div>

          {/* Column D: Social */}
          <div>
            <h4 className="font-heading font-bold text-base xs:text-lg mb-4 xs:mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-primary" />
              Social Media
            </h4>
            <p className="text-xs xs:text-sm text-white/60 mb-3 xs:mb-4">
              Join the community of food lovers.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 xs:w-12 xs:h-12 rounded-lg bg-white/5 flex items-center justify-center neo-brutal border-white/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 xs:w-5 xs:h-5" />
                </a>
              ))}
            </div>
            <div className="mt-4 xs:mt-6 text-xs xs:text-sm text-white/50">
              <p>@sweettrails.ng</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 relative">
        <div className="absolute top-0 left-4 w-1/4 h-px bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute top-0 right-4 w-16 h-px bg-gradient-to-l from-honey to-transparent" />
        <div className="container mx-auto px-4 py-4 xs:py-6">
          <p className="text-center text-xs xs:text-sm text-white/40">
            © 2026 Sweet Trails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
