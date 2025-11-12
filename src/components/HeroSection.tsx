import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const HeroSection = () => {
  const [language, setLanguage] = useState<"zh" | "en">("en");
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 语言切换时的淡入淡出动画
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (headlineRef.current && subtextRef.current && ctaRef.current) {
      // 先淡出
      timeline
        .to([headlineRef.current, subtextRef.current, ctaRef.current], {
          opacity: 0,
          y: -20,
          duration: 0.3,
        })
        // 然后淡入
        .to([headlineRef.current, subtextRef.current, ctaRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.6,
        });
    }
  }, [language]);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景层 - 更优雅的渐变 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/law-cover.jpg"
          alt="Silent No More China background"
          className="w-full h-full object-cover scale-105 transition-transform duration-700"
          loading="eager"
        />
        {/* 多层渐变遮罩，创造深度 */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        {/* 红色强调 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-950/10 to-transparent"></div>
      </div>

      {/* 装饰性几何元素 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* 语言切换按钮 - 封面图片右上角 */}
      <div className="absolute top-40 right-8 z-30">
        <Button
          onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
          variant="ghost"
          size="sm"
          className="bg-white/15 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/25 hover:border-white/50 transition-all duration-300 rounded-full px-5 py-2.5 shadow-lg hover:shadow-xl"
        >
          <Languages className="w-4 h-4 mr-2" />
          <span className="text-sm font-semibold">
            {language === "zh" ? "English" : "中文"}
          </span>
        </Button>
      </div>

      {/* 内容层 - 更现代的布局 */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          {/* 主标题区域 - 更优雅的设计 */}
          <div className="mb-16 text-center">
            {language === "zh" ? (
              <div ref={headlineRef} className="space-y-6">
                <div className="inline-block mb-4">
                  <div className="h-0.5 w-16 bg-red-500 mx-auto mb-6"></div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight">
                  <span
                    className="block mb-2"
                    style={{
                      fontFamily:
                        "'PingFang SC', 'Microsoft YaHei', 'SimHei', sans-serif",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    家暴只有
                  </span>
                  <span
                    className="block text-red-400"
                    style={{
                      fontFamily:
                        "'PingFang SC', 'Microsoft YaHei', 'SimHei', sans-serif",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      textShadow: "0 4px 20px rgba(220,38,38,0.4)",
                    }}
                  >
                    0 次和无数次
                  </span>
                </h1>
              </div>
            ) : (
              <div ref={headlineRef} className="space-y-6">
                <div className="inline-block mb-4">
                  <div className="h-0.5 w-16 bg-red-500 mx-auto mb-6"></div>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                  <span
                    className="block mb-3 font-serif"
                    style={{
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    There is no "once"
                  </span>
                  <span
                    className="block text-4xl md:text-5xl lg:text-6xl text-red-400 font-serif"
                    style={{
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      textShadow: "0 4px 20px rgba(220,38,38,0.4)",
                    }}
                  >
                    in domestic violence
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-white/90 mt-4 font-light">
                    — only zero or countless times.
                  </span>
                </h1>
              </div>
            )}
          </div>

          {/* 平台介绍区域 - 卡片式设计 */}
          <div className="mb-16">
            {language === "zh" ? (
              <div
                ref={subtextRef}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-500"
              >
                <div className="space-y-6 text-left">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-12 bg-red-500"></div>
                    <h2 className="text-xl font-semibold text-white/90">
                      关于我们
                    </h2>
                  </div>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Silent No More
                    是一个家庭暴力自助与信息平台，由两位高中生建立，致力于整理求助资源、追踪家暴新闻、分享研究与社会行动。
                  </p>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed italic border-l-4 border-red-500/50 pl-6">
                    我们希望让更多人理解：家庭暴力不是私事，而是公共议题。打破沉默，才是改变的开始。
                  </p>
                </div>
              </div>
            ) : (
              <div
                ref={subtextRef}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-500"
              >
                <div className="space-y-6 text-left">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-12 bg-red-500"></div>
                    <h2 className="text-xl font-semibold text-white/90">
                      About Us
                    </h2>
                  </div>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Silent No More is a self-help and information platform on
                    domestic violence, created by two high school students to
                    collect reliable resources, track news, and document social
                    responses.
                  </p>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed italic border-l-4 border-red-500/50 pl-6">
                    We believe domestic violence is not a private matter but a
                    public concern. Breaking the silence is where change begins.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 行动按钮 - 更现代的设计 */}
          <div ref={ctaRef} className="text-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-6 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">
                {language === "zh" ? "立即求助" : "Get Help Now"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
