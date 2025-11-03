import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const points: string[] = [
  "Acknowledge their experience and validate their courage.",
  "Avoid judgment; decisions are the survivor’s to make.",
  "Plan for safety together; offer to accompany them.",
  "Support material needs; store key documents with consent.",
  "Encourage trusted connections and hotlines for guidance.",
  "With permission, document incidents for evidence.",
  "Protect privacy; avoid revealing info online.",
  "Share legal rights resources when they are ready.",
];

const SupportOthersSection = () => {
  return (
    <section id="support" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="relative overflow-hidden rounded-lg mb-12 h-64">
          <img src="/images/res1.jpg" alt="Support and solidarity" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"/>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            How to Support a Survivor
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-normal">
            Trauma-informed ways to help, inspired by evidence-based guidance from The Hotline and allied organizations
          </p>
          <div className="mt-6">
            <a
              href="https://www.thehotline.org/support-others/ways-to-support-a-domestic-violence-survivor/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-primary text-primary-foreground rounded-md border border-primary hover:bg-primary/90 transition-colors text-base"
            >
              Read full guide on The Hotline
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Practical Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {points.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  {i + 1}
                </div>
                <p className="text-base leading-relaxed text-card-foreground font-normal">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportOthersSection;


