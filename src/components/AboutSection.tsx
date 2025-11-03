import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    gsap.fromTo(
      image,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      content,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-neutral">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={imageRef} className="relative">
            <img
              src="/images/res2.jpg"
              alt="Community support and solidarity"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <div ref={contentRef} className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Our Mission
            </h2>
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed font-normal">
                No Silence Network is a community-driven initiative to end
                domestic violence. We connect survivors, supporters, and
                allies with practical resources, safety planning guidance,
                and evidence-based best practices from around the world.
              </p>
              <p className="text-lg leading-relaxed font-normal">
                We believe in survivor autonomy, trauma-informed support,
                and coordinated community response. Our goal is to make
                help easier to find, amplify successful approaches, and
                encourage safe, informed bystander action.
              </p>
              <p className="text-lg leading-relaxed font-normal">
                Explore resources, learn how to support someone you care
                about, and discover global policies that work. Together,
                we can break the silence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
