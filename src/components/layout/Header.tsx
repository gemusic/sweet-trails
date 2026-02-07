import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { CartButton } from "@/components/cart/CartButton";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/packages", label: "Gift Boxes" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBER = "2348000000000";
const WHATSAPP_MESSAGE = "Hello Sweet Trails! I'd like to place an order.";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass-premium shadow-lg py-3"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - More impactful */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <span className={cn(
            "font-display text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300 tracking-tight",
            isScrolled ? "text-foreground" : "text-white text-shadow-subtle"
          )}>
            Sweet<span className="text-primary">Trails</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-heading text-sm xl:text-base font-semibold transition-all duration-300 relative py-1 uppercase tracking-wide",
                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5",
                "after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300",
                "hover:after:scale-x-100 hover:after:origin-left",
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white",
                location.pathname === link.href && "after:scale-x-100 text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Cart */}
        <div className="hidden lg:flex items-center gap-3">
          <CartButton isScrolled={isScrolled} />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button 
              size="lg" 
              className="font-heading font-bold gap-2 bg-primary hover:bg-primary/90 neo-brutal border-white relative overflow-hidden group px-6"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <MessageCircle className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Order Now</span>
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <CartButton isScrolled={isScrolled} />
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button 
              size="icon" 
              className="bg-primary hover:bg-primary/90 h-10 w-10"
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-10 w-10",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full sm:w-[400px] bg-charcoal/90 backdrop-blur-xl text-white p-0 border-l-2 border-primary/40"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b-2 border-white/10">
                  <span className="font-display text-2xl font-bold">
                    Sweet<span className="text-primary">Trails</span>
                  </span>
                  <SheetClose asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-white hover:bg-white/10 h-10 w-10"
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile Menu Links - Neo Brutal style */}
                <nav className="flex-1 py-8">
                  {navLinks.map((link, index) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        to={link.href}
                        className={cn(
                          "relative flex items-center px-6 py-5 font-heading text-lg font-bold uppercase tracking-wide",
                          "transition-all duration-300 group",
                          "border-b-2 border-white/5",
                          location.pathname === link.href && "text-primary bg-white/5"
                        )}
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        {/* Hover background effect */}
                        <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        <span className="relative z-10 group-hover:text-white transition-colors">
                          {link.label}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-white/10 bg-charcoal/50 backdrop-blur-sm">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      size="lg" 
                      className="w-full font-heading font-bold gap-2 bg-primary hover:bg-primary/90 neo-brutal border-white py-6 text-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Order Now
                    </Button>
                  </a>
                  <p className="text-center text-sm text-white/50 mt-4 font-display italic">
                    ...indulge in the sweetest journey
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
