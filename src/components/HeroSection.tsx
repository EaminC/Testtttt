import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2 }
      )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/law-cover.jpg"
          alt="Silent No More China background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 lg:px-16 text-center">
        <h1
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-8 leading-tight"
        >
          Together, We End Domestic Violence
        </h1>
        <p
          ref={subtextRef}
          className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto font-normal"
        >
          A community-led hub providing resources, global best practices,
          survivor support, and news tracking to break the silence and
          prioritize safety.
        </p>
        <div ref={ctaRef}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-normal transition-all duration-300"
          >
            Get Help Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
