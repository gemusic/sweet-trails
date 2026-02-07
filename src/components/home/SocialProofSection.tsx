import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote: "Love your packaging so much!! I've eaten like 4 puff puff in 2 sec 😂",
    author: "Blessing O.",
    location: "Benin City",
    rating: 5,
  },
  {
    id: 2,
    quote: "The food was absolutely breathtaking. Everyone at the party kept asking where I got it from!",
    author: "Chioma A.",
    location: "Ugbor",
    rating: 5,
  },
  {
    id: 3,
    quote: "Best Small Chops in Benin City, hands down. The Peppered Platter is to die for!",
    author: "Emeka N.",
    location: "GRA",
    rating: 5,
  },
  {
    id: 4,
    quote: "Ordered the Diamond Package for my anniversary. My wife was so impressed!",
    author: "David I.",
    location: "Benin City",
    rating: 5,
  },
  {
    id: 5,
    quote: "Finally found a caterer that delivers on time AND the food is amazing. 100% recommend!",
    author: "Funke B.",
    location: "Ikpoba Hill",
    rating: 5,
  },
  {
    id: 6,
    quote: "The Jollof Rice is exactly how my mother makes it. Pure comfort food!",
    author: "Tolu M.",
    location: "Sapele Road",
    rating: 5,
  },
];

// Duplicate for infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

export const SocialProofSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  const stats = [
    { value: "3,000+", label: "Happy Customers" },
    { value: "500+", label: "Events Catered" },
    { value: "100%", label: "Fresh Ingredients" },
    { value: "5.0", label: "Average Rating" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation - slide from LEFT (continuing zig-zag pattern)
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

      // Stats counter animation - alternating
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          const isEven = index % 2 === 0;
          gsap.from(stat, {
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            x: isEven ? -40 : 40,
            y: 20,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 lg:py-40 bg-muted/50 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-charcoal" />
      <div className="absolute top-0 left-8 w-1/3 h-1 bg-primary -translate-y-px" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header - LEFT ALIGNED */}
        <div ref={headingRef} className="max-w-2xl mb-16 md:mb-20">
          <Badge className="mb-4 bg-primary/10 text-primary border-2 border-primary font-heading">
            <Users className="w-3 h-3 mr-1" />
            Testimonials
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Join{" "}
            <span className="font-script text-primary text-[1.3em] leading-none">
              3,000+
            </span>{" "}
            Happy Foodies
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed">
            Don't just take our word for it. See what our customers in Benin
            City have to say about their Sweet Trails experience.
          </p>
        </div>

        {/* Stats - Neo brutal cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => (statsRef.current[index] = el)}
              className="text-center p-6 md:p-8 bg-card rounded-xl neo-brutal-card hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <div className="font-script text-4xl sm:text-5xl lg:text-6xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-body text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Ticker */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-muted/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-muted/50 to-transparent z-10 pointer-events-none" />

          {/* Ticker */}
          <div className="flex gap-4 md:gap-6 animate-ticker hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96 glass-premium rounded-2xl p-6 md:p-8 border border-charcoal/10 hover:border-primary/30 transition-colors duration-300 group"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/40 mb-4 group-hover:text-primary/60 transition-colors" />

                {/* Quote Text - Italianno for the quote */}
                <p className="font-script text-2xl md:text-3xl text-foreground mb-4 md:mb-6 leading-[1.2]">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading font-semibold text-foreground text-base md:text-lg">
                      {testimonial.author}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-honey text-honey"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="relative mt-20 md:mt-24">
          <div className="h-1 bg-charcoal" />
          <div className="absolute top-0 right-8 w-1/4 h-1 bg-honey -translate-y-px" />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
