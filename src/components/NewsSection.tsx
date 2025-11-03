import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    title: "Young Woman’s Death in Hebei Sparks Outrage",
    summary:
      "A suspected fatal domestic violence case in Hebei drew national attention. Police detained the husband and mother‑in‑law; forensics indicated blunt‑force trauma. The case highlights isolation and gaps in help‑seeking.",
    details:
      "Reports describe early signs of coercion and escalating abuse, with limited engagement with local support systems. Advocates stress early risk assessment and coordinated agency response.",
    date: "Aug 24, 2024",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="relative overflow-hidden rounded-lg mb-12 h-64">
          <img src="/images/res5.jpg" alt="News and case tracking" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"/>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            News & Case Log
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-normal">
            Track recent incidents and policy responses to inform advocacy and prevention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {items.map((it, i) => (
            <Card key={i} className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-card-foreground">
                  {it.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-card-foreground mb-4 font-normal">
                  {it.summary}
                </p>
                <p className="text-base text-muted-foreground font-normal">{it.details}</p>
                <p className="mt-4 text-sm text-muted-foreground">{it.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;


