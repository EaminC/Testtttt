import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "/images/6101760207281_.pic_hd.jpg",
    alt: "authentic Chinese dishes at Eamin's Kitchen",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/6091760207280_.pic_hd.jpg",
    alt: "delicious Chinese cuisine",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6081760207278_.pic_hd.jpg",
    alt: "traditional Chinese cooking",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6071760207277_.pic_hd.jpg",
    alt: "fresh Chinese ingredients",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6061760207275_.pic_hd.jpg",
    alt: "authentic Chinese flavors",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6051760207273_.pic_hd.jpg",
    alt: "Chinese culinary artistry",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/images/6041760207271_.pic_hd.jpg",
    alt: "traditional Chinese cooking techniques",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6211760207423_.pic.jpg",
    alt: "Chinese food presentation",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6201760207422_.pic.jpg",
    alt: "authentic Chinese dishes",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6191760207421_.pic.jpg",
    alt: "Chinese cuisine close-up",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6181760207419_.pic.jpg",
    alt: "traditional Chinese food",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6171760207418_.pic.jpg",
    alt: "Chinese cooking ingredients",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6161760207417_.pic.jpg",
    alt: "authentic Chinese flavors",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6151760207416_.pic.jpg",
    alt: "Chinese culinary tradition",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6141760207415_.pic.jpg",
    alt: "traditional Chinese cooking",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6131760207414_.pic.jpg",
    alt: "Chinese food artistry",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6121760207290_.pic.jpg",
    alt: "authentic Chinese cuisine",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/6111760207283_.pic_hd.jpg",
    alt: "Chinese culinary excellence",
    span: "md:col-span-1 md:row-span-1",
  },
];

const GalleryGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    imagesRef.current.forEach((image, index) => {
      if (image) {
        gsap.fromTo(
          image,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
            delay: index * 0.1,
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
            A visual journey through our culinary artistry and authentic Chinese
            cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className={`relative overflow-hidden rounded-lg group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
