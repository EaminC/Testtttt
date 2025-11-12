import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const content1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image1 = image1Ref.current;
    const content1 = content1Ref.current;
    const image2 = image2Ref.current;
    const content2 = content2Ref.current;

    if (!section) return;

    if (image1 && content1) {
      gsap.fromTo(
        image1,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image1,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        content1,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content1,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (image2 && content2) {
      gsap.fromTo(
        image2,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image2,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        content2,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content2,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-neutral">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="space-y-16">
          {/* 第一部分：英文内容 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div ref={image1Ref} className="relative order-2 lg:order-1 max-w-md mx-auto lg:max-w-full">
              <img
                src="/images/我们相信他打了你.jpg"
                alt="我们相信他打了你"
                className="w-full h-auto rounded-lg shadow-lg max-h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div ref={content1Ref} className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
                About Us
              </h2>
              <div className="space-y-4 text-foreground">
                <p className="text-lg leading-relaxed font-normal">
                  Silent No More is an independent self-help platform focused on domestic violence awareness, information sharing, and collective reflection.
                </p>
                <p className="text-lg leading-relaxed font-normal">
                  Created by two high school students, the site gathers verified resources, news tracking, and social research related to domestic violence in China.
                </p>
                <p className="text-lg leading-relaxed font-normal">
                  Our goal is not to replace professional services, but to make reliable information easier to access and to encourage open, responsible dialogue.
                </p>
                <p className="text-lg leading-relaxed font-normal">
                  We believe that awareness is a form of empowerment — that when knowledge circulates, silence loses its power.
                </p>
              </div>
            </div>
          </div>

          {/* 第二部分：中文内容和"What We Do" */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div ref={image2Ref} className="relative order-2 lg:order-1 max-w-md mx-auto lg:max-w-full">
              <img
                src="/images/沉默不代表同意.jpg"
                alt="沉默不代表同意"
                className="w-full h-auto rounded-lg shadow-lg max-h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div ref={content2Ref} className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl font-serif font-bold text-foreground">
                我们在做什么
                <br />
                <span className="text-2xl text-muted-foreground font-normal">What We Do</span>
              </h3>
              <ul className="space-y-4 text-base">
                <li className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">整理与验证全国范围内的家庭暴力求助资源</span>
                  <span className="text-muted-foreground">Collect and organize verified domestic violence resources across China</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">追踪相关新闻报道与政策动态</span>
                  <span className="text-muted-foreground">Track media coverage and policy updates</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">分享关于性别暴力的研究与教育资料</span>
                  <span className="text-muted-foreground">Share educational materials and research on gender-based violence</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">展示致力于安全与共情的社会行动与项目</span>
                  <span className="text-muted-foreground">Highlight community actions and social projects that promote safety and empathy</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-lg leading-relaxed font-normal italic text-foreground">
                  Silent No More 坚信：理解，是改变的开端。
                </p>
                <p className="text-base leading-relaxed font-normal italic text-muted-foreground mt-2">
                  Silent No More is built on one conviction: change begins with understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
