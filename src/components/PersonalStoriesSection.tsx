import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PersonalStoriesSection = () => {
  return (
    <section id="stories" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="relative overflow-hidden rounded-lg mb-12 h-64">
          <img src="/images/res3.jpg" alt="Personal stories" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"/>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Personal Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-normal">
            Community voices and lived experiences to foster understanding and solidarity
          </p>
        </div>

        <Card className="bg-card border-2 border-border max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-card-foreground">
              Contribute Your Story
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-card-foreground font-normal">
              We welcome anonymized personal stories. Sharing experiences helps others feel less alone and learn safe ways forward.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PersonalStoriesSection;


