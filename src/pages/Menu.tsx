import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { products, categories, formatPrice, type Product } from "@/data/products";
import { Search, Filter, Flame, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const heroRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Filter products based on category and search
  useEffect(() => {
    let result = products;
    
    if (activeCategory !== "all") {
      result = result.filter(p => p.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchQuery]);

  // Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  // Card animations when filtered products change
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { opacity: 0, y: 30, scale: 0.95 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.4, 
            delay: index * 0.05,
            ease: "power2.out",
          }
        );
      }
    });
  }, [filteredProducts]);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return products.length;
    return products.filter(p => p.category === categoryId).length;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-secondary text-secondary-foreground overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 blob-shape bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 blob-shape-alt bg-honey/10 blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-heading">
              Our Menu
            </Badge>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              The <span className="text-primary">Menu</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              From crispy small chops to hearty main meals, explore our full menu
              crafted with love in Benin City.
            </p>
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[72px] md:top-[80px] z-40 bg-background/95 backdrop-blur-xl border-b-2 border-charcoal/10 shadow-soft">
        <div className="container mx-auto px-4 py-4">
          {/* Search Bar */}
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 font-body text-base border-2 border-charcoal/10 focus:border-primary"
              />
            </div>
            <Button variant="outline" size="icon" className="h-12 w-12 border-2">
              <Filter className="w-5 h-5" />
            </Button>
          </div>

          {/* Category Tabs */}
          <nav className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl font-heading text-sm font-semibold transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
            >
              All ({getCategoryCount("all")})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl font-heading text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label} ({getCategoryCount(cat.id)})
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12 md:py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-muted-foreground mb-4">
                No products found
              </p>
              <Button onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-card rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary/20 shadow-soft hover:shadow-strong transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.badge && (
                        <Badge className="bg-honey text-charcoal font-heading font-semibold text-xs">
                          {product.badge}
                        </Badge>
                      )}
                      {product.isSpicy && (
                        <Badge className="bg-primary text-primary-foreground font-heading text-xs">
                          <Flame className="w-3 h-3 mr-1" />
                          Spicy
                        </Badge>
                      )}
                      {product.isPremium && (
                        <Badge className="bg-charcoal text-cream font-heading text-xs">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </div>

                    {/* Price Tag */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-primary text-primary-foreground font-heading font-bold text-lg px-3 py-1.5 rounded-lg shadow-lg">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <AddToCartButton product={product} variant="default" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5">
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    
                    {/* Servings info */}
                    {product.servings && (
                      <p className="font-heading text-xs text-muted-foreground uppercase tracking-wider mb-3">
                        {product.servings}
                      </p>
                    )}

                    {/* Mobile Add to Cart */}
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="font-heading text-xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                      <AddToCartButton product={product} variant="icon" className="lg:hidden" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom padding for mobile cart bar */}
      <div className="h-20 lg:hidden" />
    </Layout>
  );
};

export default Menu;
