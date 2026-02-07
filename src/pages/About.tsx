import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Heart, Users, Leaf, ChefHat, Truck, Package, Award } from "lucide-react";

import diamondPackageImage from "@/assets/products/diamond-package.jpg";
import smallChopsImage from "@/assets/products/small-chops.jpg";
import pepperedPlatterImage from "@/assets/products/peppered-platter.jpg";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Leaf,
    title: "Absolute Freshness",
    description: "We don't believe in 'stale'. Every order is prepared only when you say so.",
    image: smallChopsImage,
  },
  {
    icon: ChefHat,
    title: "Craftsmanship",
    description: "From the fold of our Samosas to the glaze on our Puff Puffs, everything is handmade with precision.",
    image: pepperedPlatterImage,
  },
  {
    icon: Users,
    title: "Community",
    description: "Benin City is our home. We source locally and serve with the warmth our city is known for.",
    image: diamondPackageImage,
  },
];

const stats = [
  { icon: Award, value: "500+", label: "Events Catered" },
  { icon: Heart, value: "100%", label: "Handmade with Love" },
  { icon: Truck, value: "Fast", label: "Reliable Delivery" },
  { icon: Package, value: "Premium", label: "Insta-worthy Packaging" },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero zoom out effect
      gsap.from(heroRef.current?.querySelector("img"), {
        scale: 1.2,
        duration: 1.5,
        ease: "power2.out",
      });

      // Story section animation
      gsap.from(storyRef.current, {
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
      });

      // Values flip effect simulation
      valuesRef.current.forEach((val, index) => {
        if (val) {
          gsap.from(val, {
            scrollTrigger: {
              trigger: val,
              start: "top 85%",
            },
            opacity: 0,
            rotateY: 90,
            duration: 0.6,
            delay: index * 0.15,
          });
        }
      });

      // Stats counter animation
      gsap.from(statsRef.current, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={diamondPackageImage}
          alt="Sweet Trails Kitchen"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <Badge className="mb-4 bg-honey/20 text-honey border-honey/30">
              Our Story
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              More than just Small Chops.
              <br />
              <span className="text-primary">A Sweet Legacy.</span>
            </h1>
            <p className="font-body text-lg text-white/80 max-w-2xl mx-auto">
              From a humble kitchen to Benin City's favorite catering choice.
              Discover the passion behind every bite.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                The <span className="text-primary">Sweetest</span> Evolution
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  We started with a simple dream: to make people smile through
                  food. Originally known as <strong>EverythingCandy</strong>, we
                  realized our journey was leading us toward something bigger.
                </p>
                <p>
                  Creating complete culinary experiences became our passion.
                  Today, <strong className="text-primary">Sweet Trails</strong>{" "}
                  is the destination for those who seek premium flavors,
                  impeccable packaging, and a touch of magic in every meal.
                </p>
                <p>
                  From our kitchen in Ugbor-GRA to tables across Benin City, we
                  pour love, creativity, and the finest ingredients into
                  everything we make.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={smallChopsImage}
                alt="Our Journey"
                className="rounded-2xl shadow-strong"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-strong">
                <Sparkles className="w-8 h-8 mb-2" />
                <p className="font-heading font-bold">Since 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              The pillars that guide everything we do, from sourcing ingredients
              to packaging your order.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                ref={(el) => (valuesRef.current[index] = el)}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 perspective-1000"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <value.icon className="absolute bottom-4 left-4 w-10 h-10 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div ref={statsRef} className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-honey">Us?</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <stat.icon className="w-10 h-10 text-honey mx-auto mb-4" />
                <div className="font-heading text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to start your own
            <br />
            sweet journey?
          </h2>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-heading font-bold text-lg px-10"
            asChild
          >
            <a href="/menu">BROWSE THE MENU</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
