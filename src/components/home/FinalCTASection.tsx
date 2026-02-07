import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "2348000000000";
const WHATSAPP_MESSAGE = "Hello Sweet Trails! I'd like to start my order.";

export const FinalCTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content fade in from center with scale
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.9,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      // Button entrance with pulse
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.4,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 lg:py-44 bg-charcoal overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-honey/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 border-2 border-white rounded-full" />
        <div className="absolute top-20 right-20 w-8 h-8 md:w-10 md:h-10 bg-primary rotate-45" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 md:w-16 md:h-16 border-2 border-honey" />
        <div className="absolute bottom-10 right-1/3 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div ref={contentRef} className="text-center max-w-4xl mx-auto">
          {/* Mixed typography: Cormorant + Italianno */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
            Don't just stare at it.
          </h2>
          <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-honey block mb-8">
            Eat it.
          </span>
          <p className="font-body text-lg md:text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your next unforgettable meal is just one click away. Join thousands
            of satisfied food lovers in Benin City.
          </p>

          <div ref={buttonRef}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="font-heading font-bold text-lg md:text-xl px-10 md:px-12 py-7 md:py-8 bg-primary/30 backdrop-blur-sm border-2 border-primary/60 text-white hover:bg-primary/50 gap-3 animate-pulse-soft shadow-strong"
              >
                START YOUR ORDER
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </Button>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <MessageCircle className="w-5 h-5 text-white/60" />
            <span className="font-body text-sm md:text-base text-white/60">
              Order via WhatsApp • Fast Response
            </span>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-honey" />
    </section>
  );
};

export default FinalCTASection;
