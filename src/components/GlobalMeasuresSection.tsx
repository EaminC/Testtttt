import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const measures = [
  {
    country: "Japan",
    highlights: [
      "Act on the Prevention of Spousal Violence (expanded in 2023 to include severe psychological harm)",
      "National hotlines with multi‑language access; local Spousal Violence Counseling and Support Centers",
      "Integrated network across police, social services, shelters, and legal aid",
    ],
  },
  {
    country: "South Korea",
    highlights: [
      "Immediate police intervention and separation; evidence collection; referrals to shelter/treatment",
      "Sunflower Centers provide one‑stop medical, legal, and psychological support",
      "Promotion of bystander intervention and coordinated responses",
    ],
  },
  {
    country: "United Kingdom",
    highlights: [
      "Secure Tenancies Act: improves housing security for domestic abuse survivors",
      "CPS guidance recognizes coercive control alongside physical and sexual abuse",
      "Multi‑agency risk assessment and management protocols",
    ],
  },
  {
    country: "United States",
    highlights: [
      "Violence Against Women Act (VAWA) and National Domestic Violence Hotline",
      "Coordinated Community Response (Duluth Model): survivor safety + abuser accountability",
      "High‑risk teams and lethality assessment programs in multiple states",
    ],
  },
];

const GlobalMeasuresSection = () => {
  return (
    <section id="global" className="py-24 lg:py-32 bg-neutral">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="relative overflow-hidden rounded-lg mb-12 h-64">
          <img src="/images/global.jpg" alt="Global best practices" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"/>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-foreground mb-6">
            Global Measures That Work
          </h2>
          <p className="text-lg text-neutral-foreground/80 max-w-3xl mx-auto font-normal">
            Evidence‑based policies and services from around the world that improve safety and outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {measures.map((m) => (
            <Card key={m.country} className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-card-foreground">
                  {m.country}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  {m.highlights.map((h, i) => (
                    <li key={i} className="text-base text-card-foreground font-normal">
                      {h}
                    </li>
                  ))}
                </ul>
                {m.country === "Japan" && (
                  <div className="mt-4 text-sm text-muted-foreground space-y-1">
                    <a className="underline hover:text-foreground" href="https://www.japaneselawtranslation.go.jp/en/laws/view/3151/je" target="_blank" rel="noopener noreferrer">Act on Prevention of Spousal Violence (EN)</a>
                    <br />
                    <a className="underline hover:text-foreground" href="https://metropolisjapan.com/domestic-violence-in-japan/" target="_blank" rel="noopener noreferrer">2023 amendment overview</a>
                  </div>
                )}
                {m.country === "South Korea" && (
                  <div className="mt-4 text-sm text-muted-foreground space-y-1">
                    <a className="underline hover:text-foreground" href="https://seoullawgroup.com/domestic-crimes-in-korea-how-to-get-help/" target="_blank" rel="noopener noreferrer">Domestic crimes help</a>
                    <br />
                    <a className="underline hover:text-foreground" href="https://seoullawgroup.com/domestic-violence-korea/" target="_blank" rel="noopener noreferrer">Domestic violence in Korea</a>
                  </div>
                )}
                {m.country === "United Kingdom" && (
                  <div className="mt-4 text-sm text-muted-foreground space-y-1">
                    <a className="underline hover:text-foreground" href="https://www.cps.gov.uk/prosecution-guidance/domestic-abuse" target="_blank" rel="noopener noreferrer">CPS Domestic Abuse guidance</a>
                  </div>
                )}
                {m.country === "United States" && (
                  <div className="mt-4 text-sm text-muted-foreground space-y-1">
                    <a className="underline hover:text-foreground" href="https://www.domesticshelters.org/articles/ending-domestic-violence/it-s-the-30th-anniversary-of-the-violence-against-women-act" target="_blank" rel="noopener noreferrer">VAWA overview</a>
                    <br />
                    <a className="underline hover:text-foreground" href="https://www.worldfuturecouncil.org/coordinated-community-response-domestic-violence-study-tour-minnesota-usa/" target="_blank" rel="noopener noreferrer">Coordinated Community Response (Duluth Model)</a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalMeasuresSection;


