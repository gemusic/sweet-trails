import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

const WHATSAPP_NUMBER = "2348000000000";
const WHATSAPP_MESSAGE = "Hello Sweet Trails! I'd like to order your box now.";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const scriptRef = useRef<HTMLSpanElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([badgeRef.current, headlineRef.current, scriptRef.current, subheadlineRef.current, ctaRef.current], {
        opacity: 0,
        y: 40,
      });

      // Animation timeline - staggered left-aligned content
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          scriptRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          subheadlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background - Full viewport */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* LIGHT Directional Overlay - Left side darker, right side open */}
      <div className="absolute inset-0 overlay-left-fade" />

      {/* Subtle decorative blobs - kept minimal */}
      <div className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 blob-shape bg-honey/10 blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-32 right-1/4 w-24 h-24 md:w-40 md:h-40 blob-shape-alt bg-primary/10 blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content - LEFT ALIGNED, not centered */}
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-0">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
          {/* Badge - subtle, uppercase */}
          <span
            ref={badgeRef}
            className="inline-block font-heading text-[10px] sm:text-xs uppercase tracking-[0.3em] text-honey mb-6 md:mb-8"
          >
            ✦ Premium Catering ✦
          </span>

          {/* Main Headline - Cormorant Garamond */}
          <h1
            ref={headlineRef}
            className="font-display text-[12vw] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-[0.95] tracking-tight text-shadow-strong"
          >
            The Taste That
            <br />
            Leaves You
          </h1>

          {/* Script Accent - Italianno */}
          <span
            ref={scriptRef}
            className="font-script text-[16vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] text-honey block leading-[0.9] text-shadow-hero -mt-2 md:-mt-4"
          >
            Wanting More
          </span>

          {/* Subheadline - Lora */}
          <p
            ref={subheadlineRef}
            className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-white/85 max-w-md lg:max-w-lg mt-6 md:mt-8 leading-relaxed text-shadow-subtle"
          >
            Premium Small Chops, Gourmet Meals & Curated Gift Packages
            delivered fresh in{" "}
            <span className="text-honey font-semibold">Benin City</span>.
          </p>

          {/* CTA Buttons - Stacked on mobile, row on desktop */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto relative overflow-hidden font-heading font-bold text-sm md:text-base px-8 md:px-10 py-6 md:py-7 bg-primary/30 hover:bg-primary/50 backdrop-blur-sm border-2 border-primary/60 text-white gap-2 group rounded-full"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <MessageCircle className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">ORDER YOUR BOX NOW</span>
              </Button>
            </a>
            <Link to="/menu" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-heading font-bold text-sm md:text-base px-8 md:px-10 py-6 md:py-7 border-2 border-white/60 bg-white/10 text-white hover:bg-white/20 gap-2 rounded-full backdrop-blur-sm"
              >
                <Eye className="w-5 h-5" />
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>


      {/* Minimal decorative corners */}
      <div className="absolute top-6 left-6 hidden lg:block">
        <div className="w-16 h-16 border-t-2 border-l-2 border-honey/40" />
      </div>
      <div className="absolute bottom-6 right-6 hidden lg:block">
        <div className="w-16 h-16 border-b-2 border-r-2 border-white/20" />
      </div>
    </section>
  );
};

export default HeroSection;
