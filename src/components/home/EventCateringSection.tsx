import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Users, PartyPopper, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import bulkOrdersImage from "@/assets/events/bulk-orders.jpg";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "2348000000000";
const WHATSAPP_MESSAGE = "Hello Sweet Trails! I'm hosting an event and would like to get a quote for catering services.";

const eventTypes = [
  { icon: PartyPopper, label: "Weddings" },
  { icon: Users, label: "Corporate Events" },
  { icon: Utensils, label: "Private Parties" },
];

export const EventCateringSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slide in from RIGHT (zig-zag pattern - opposite direction)
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 100,
        rotate: 3,
        duration: 1,
        ease: "power3.out",
      });

      // Content slide in from LEFT
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -100,
        rotate: -3,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section ref={sectionRef} className="py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side - FIRST on mobile, order reversed on desktop */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-heading">
              Event Catering
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Hosting an{" "}
              <span className="font-script text-primary text-[1.3em] leading-none">
                Event?
              </span>
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              From intimate parties to 500+ guest celebrations, we deliver
              flavor that keeps your guests talking. Let us handle the food
              while you enjoy your special day.
            </p>

            {/* Event Types */}
            <div className="flex flex-wrap gap-3 mb-8">
              {eventTypes.map((event) => (
                <div
                  key={event.label}
                  className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full border border-charcoal/10"
                >
                  <event.icon className="w-4 h-4 text-primary" />
                  <span className="font-heading text-sm font-medium text-foreground">
                    {event.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {[
                "Custom menus tailored to your event",
                "Premium packaging for all occasions",
                "Timely delivery across Benin City",
                "Flexible portions from 20 to 500+ guests",
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-foreground text-base md:text-lg">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="font-heading font-bold text-lg gap-2 bg-primary hover:bg-primary/90 px-10 py-7 rounded-none border-2 border-white/20"
              >
                <MessageCircle className="w-5 h-5" />
                GET A QUOTE
              </Button>
            </a>
          </div>

          {/* Image Side */}
          <div ref={imageRef} className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-strong">
              <img
                src={bulkOrdersImage}
                alt="Sweet Trails Event Catering"
                className="w-full aspect-[4/3] lg:aspect-[3/4] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-charcoal text-cream font-heading text-sm py-2 px-4">
                  500+ Events Served
                </Badge>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-honey/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>

        {/* Decorative divider */}
        <div className="relative mt-20 md:mt-28">
          <div className="h-1 bg-charcoal" />
          <div className="absolute top-0 right-8 w-1/3 h-1 bg-primary -translate-y-px" />
          <div className="absolute top-0 left-8 w-16 h-1 bg-honey -translate-y-px" />
        </div>
      </div>
    </section>
  );
};

export default EventCateringSection;
