import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gift, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { products, formatPrice } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

// Get only packages from data
const packages = products.filter(p => p.category === "packages");

export const GiftPackagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation - slide from RIGHT (opposite to bestsellers = zig-zag)
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 80,
        rotate: 2,
        duration: 0.8,
        ease: "power3.out",
      });

      // Cards stagger animation - alternating right/left (opposite pattern)
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const isEven = index % 2 === 0;
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            x: isEven ? 60 : -60,
            y: 30,
            rotate: isEven ? 3 : -3,
            duration: 0.7,
            delay: index * 0.15,
            ease: "power3.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-secondary text-secondary-foreground relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-40 h-40 md:w-64 md:h-64 blob-shape bg-honey/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-48 h-48 md:w-72 md:h-72 blob-shape-alt bg-primary/10 blur-3xl pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
      <div className="absolute top-0 left-1/4 w-1/3 h-1 bg-honey -translate-y-px" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header - RIGHT ALIGNED for asymmetry (opposite to best-sellers) */}
        <div ref={headingRef} className="max-w-2xl ml-auto text-right mb-16 md:mb-24">
          <Badge className="mb-4 bg-honey/20 text-honey border-honey/30 font-heading">
            <Gift className="w-3 h-3 mr-1" />
            Gift Collection
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
            Curated{" "}
            <span className="font-script text-honey text-[1.3em] leading-none">
              Gift Boxes
            </span>
          </h2>
          <p className="font-body text-secondary-foreground/80 text-base sm:text-lg lg:text-xl leading-relaxed">
            The perfect way to say "I love you," "Thank you," or "Let's celebrate."
            Premium packaging included.
          </p>
        </div>

        {/* Packages - Alternating left/right layout */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const isReversed = index % 2 === 1;
            const isLuxury = pkg.badge === "Luxury";

            return (
              <div
                key={pkg.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group relative ${isLuxury ? "py-4" : ""}`}
              >
                {/* Premium Glow for Diamond */}
                {isLuxury && (
                  <div className="absolute -inset-4 bg-gradient-to-r from-honey/20 via-primary/10 to-honey/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
                )}

                <div className={`relative grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center ${isReversed ? "" : ""}`}>
                  {/* Image */}
                  <div className={`${isLuxury ? "md:col-span-7" : "md:col-span-5"} ${isReversed ? "md:order-2" : ""}`}>
                    <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${isLuxury ? "border-2 border-honey/40" : "border border-white/10"}`}>
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Badge */}
                      {pkg.badge && (
                        <div className="absolute top-4 left-4">
                          <Badge className={`font-heading font-bold text-sm px-3 py-1 ${
                            isLuxury 
                              ? "bg-honey text-charcoal animate-pulse-soft" 
                              : "bg-primary text-white"
                          }`}>
                            <Sparkles className="w-3 h-3 mr-1" />
                            {pkg.badge}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isLuxury ? "md:col-span-5" : "md:col-span-7"} ${isReversed ? "md:order-1 md:text-right" : ""}`}>
                    <h3 className={`font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 ${isLuxury ? "text-honey" : ""}`}>
                      {pkg.name}
                    </h3>
                    <p className="font-body text-secondary-foreground/70 text-sm md:text-base lg:text-lg mb-4 leading-relaxed max-w-md">
                      {pkg.description}
                    </p>
                    {pkg.servings && (
                      <p className="font-heading text-xs text-secondary-foreground/50 uppercase tracking-wider mb-6">
                        Serves {pkg.servings}
                      </p>
                    )}
                    
                    {/* Price and CTA */}
                    <div className={`flex items-center gap-6 ${isReversed ? "md:justify-end" : ""}`}>
                      <span className={`font-script text-4xl md:text-5xl lg:text-6xl ${
                        isLuxury ? "text-honey" : "text-honey"
                      }`}>
                        {formatPrice(pkg.price)}
                      </span>
                      <AddToCartButton
                        product={pkg}
                        variant="default"
                        className={isLuxury ? "bg-honey text-charcoal hover:bg-honey/90 border-0" : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="relative mt-20 md:mt-28">
          <div className="h-1 bg-white/10" />
          <div className="absolute top-0 right-4 w-1/4 h-1 bg-honey -translate-y-px" />
          <div className="absolute top-0 left-4 w-12 h-1 bg-primary -translate-y-px" />
        </div>
      </div>
    </section>
  );
};

export default GiftPackagesSection;
