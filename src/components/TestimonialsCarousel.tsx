import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Survivor — Chicago",
    review:
      "A friend learned how to support me without judgment and helped me make a safety plan. That changed everything.",
    rating: 5,
  },
  {
    id: 2,
    name: "Advocate — Seoul",
    review:
      "Rapid police intervention and coordinated services meant the survivor was safe the same night. Systems can work when connected.",
    rating: 5,
  },
  {
    id: 3,
    name: "Counselor — Tokyo",
    review:
      "Multi‑language hotlines and shelter networks helped an immigrant survivor rebuild with legal and housing support.",
    rating: 5,
  },
  {
    id: 4,
    name: "Practitioner — London",
    review:
      "Recognizing coercive control allowed us to obtain a protection order before physical harm escalated.",
    rating: 5,
  },
  {
    id: 5,
    name: "Coordinator — Minnesota",
    review:
      "The coordinated community response held the abuser accountable while centering survivor safety across agencies.",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: `-${currentIndex * 100}%`,
        duration: 0.6,
        ease: "power2.inOut",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-tertiary">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-tertiary-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-tertiary-foreground/80 max-w-2xl mx-auto font-normal">
            Real-world examples of safety, recovery, and effective responses that made a difference
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div ref={carouselRef} className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-2 border-border">
                    <CardContent className="p-12 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            size={32}
                            strokeWidth={1.5}
                            className="text-warning fill-warning"
                          />
                        ))}
                      </div>
                      <p className="text-xl leading-relaxed text-card-foreground mb-8 font-normal italic">
                        "{testimonial.review}"
                      </p>
                      <p className="text-lg font-medium text-card-foreground">
                        — {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <Button
              onClick={() => {
                prevSlide();
                resetAutoPlay();
              }}
              variant="outline"
              size="icon"
              className="bg-background text-foreground border-2 border-border hover:bg-secondary hover:text-secondary-foreground hover:border-secondary w-16 h-16"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon size={32} strokeWidth={1.5} />
            </Button>
            <Button
              onClick={() => {
                nextSlide();
                resetAutoPlay();
              }}
              variant="outline"
              size="icon"
              className="bg-background text-foreground border-2 border-border hover:bg-secondary hover:text-secondary-foreground hover:border-secondary w-16 h-16"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon size={32} strokeWidth={1.5} />
            </Button>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  resetAutoPlay();
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-12"
                    : "bg-border hover:bg-secondary"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
