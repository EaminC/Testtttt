import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LifeBuoyIcon,
  HeartHandshakeIcon,
  ShieldCheckIcon,
  Globe2Icon,
  NewspaperIcon,
  BookOpenIcon,
} from "lucide-react";

interface MenuItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    id: "china-help",
    title: "Help in China",
    description:
      "Hotlines, shelters, and legal aid in China. Start with safety planning and immediate support.",
    icon: <LifeBuoyIcon size={48} strokeWidth={1.5} />,
  },
  {
    id: "support-others",
    title: "How to Support Survivors",
    description:
      "From The Hotline: listen without judgment, plan for safety, document with consent, protect privacy.",
    icon: <HeartHandshakeIcon size={48} strokeWidth={1.5} />,
  },
  {
    id: "global",
    title: "Global Protective Measures",
    description:
      "Japan, Korea, UK, US: hotlines, orders of protection, and coordinated community response.",
    icon: <Globe2Icon size={48} strokeWidth={1.5} />,
  },
  {
    id: "success-abroad",
    title: "Success Stories Abroad",
    description:
      "Real cases of recovery and effective interventions from around the world.",
    icon: <ShieldCheckIcon size={48} strokeWidth={1.5} />,
  },
  {
    id: "news-summary",
    title: "News Summary",
    description:
      "Recent incidents and policy updates to inform advocacy and prevention.",
    icon: <NewspaperIcon size={48} strokeWidth={1.5} />,
  },
  {
    id: "personal-stories",
    title: "Personal Stories",
    description:
      "Community voices and lived experiences to foster understanding and solidarity.",
    icon: <BookOpenIcon size={48} strokeWidth={1.5} />,
  },
];

const MenuGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="menu" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
            Explore trusted information, practical tools, and supportive
            pathways for safety, healing, and advocacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                if (item.id === "support-others") scrollTo("support");
                else if (item.id === "global") scrollTo("global");
                else if (item.id === "success-abroad") scrollTo("reviews");
                else if (item.id === "news-summary") scrollTo("news");
                else if (item.id === "personal-stories") scrollTo("stories");
                else if (item.id === "china-help") scrollTo("menu");
              }}
              className={`cursor-pointer transition-all duration-300 ease-in-out border-2 ${
                hoveredId === item.id
                  ? "scale-105 border-primary bg-tertiary"
                  : "border-border bg-card hover:border-secondary"
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`flex justify-center mb-6 transition-colors duration-300 ${
                    hoveredId === item.id
                      ? "text-primary"
                      : "text-secondary-foreground"
                  }`}
                >
                  {item.icon}
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-card-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed text-muted-foreground font-normal">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
