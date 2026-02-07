import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { products, formatPrice } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

// Get only the featured products for homepage
const bestSellers = products.filter(p => 
  p.id === "puff-puff-chocolate" || 
  p.id === "peppered-chicken" || 
  p.id === "small-chops-platter"
);

export const BestSellersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation - slide from LEFT (zig-zag effect)
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -80,
        rotate: -2,
        duration: 0.8,
        ease: "power3.out",
      });

      // Cards stagger animation - alternating left/right
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
            x: isEven ? -60 : 60,
            y: 30,
            rotate: isEven ? -3 : 3,
            duration: 0.7,
            delay: index * 0.1,
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
      id="bestsellers"
      className="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden"
    >
      {/* Decorative elements - subtle */}
      <div className="absolute top-10 right-0 w-40 h-40 md:w-72 md:h-72 blob-shape bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-48 h-48 md:w-80 md:h-80 blob-shape-alt bg-honey/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header - LEFT ALIGNED for asymmetry */}
        <div ref={headingRef} className="max-w-2xl mb-16 md:mb-24">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-heading">
            <Sparkles className="w-3 h-3 mr-1" />
            Most Loved
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Our{" "}
            <span className="font-script text-primary text-[1.3em] leading-none">
              Best-Sellers
            </span>
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed">
            The dishes that keep our customers coming back for more.
            Made fresh with love, every single time.
          </p>
        </div>

        {/* Products Grid - Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
          {bestSellers.map((product, index) => {
            // Create asymmetric grid: first card spans 7 cols, second 5, third 6 offset
            const gridClasses = [
              "md:col-span-7",
              "md:col-span-5",
              "md:col-span-6 md:col-start-4"
            ];
            
            return (
              <div
                key={product.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group bg-card rounded-2xl overflow-hidden neo-brutal-card hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 ${gridClasses[index] || ''}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-honey text-charcoal font-heading font-semibold border-2 border-charcoal shadow-[2px_2px_0_hsl(var(--charcoal))]">
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground font-heading font-bold text-lg px-3 py-1 rounded-lg shadow-lg">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 glass-dark-premium opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <AddToCartButton
                      product={product}
                      variant="default"
                      className="neo-brutal border-white text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 bg-card">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                    {product.description}
                  </p>
                  {/* Mobile Add to Cart */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    <AddToCartButton
                      product={product}
                      variant="icon"
                      className="md:hidden"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button - RIGHT ALIGNED for asymmetry */}
        <div className="text-right mt-16 md:mt-20">
          <a href="/menu">
            <button className="inline-flex items-center gap-2 font-heading font-bold text-lg px-8 py-4 bg-secondary text-secondary-foreground rounded-xl neo-brutal-card hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              <ShoppingBag className="w-5 h-5" />
              View Full Menu
            </button>
          </a>
        </div>

        {/* Neo-brutal section divider */}
        <div className="relative mt-20 md:mt-28">
          <div className="h-1 bg-charcoal" />
          <div className="absolute top-0 left-4 w-1/4 h-1 bg-primary -translate-y-1" />
          <div className="absolute top-0 right-4 w-16 h-1 bg-honey -translate-y-1" />
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
