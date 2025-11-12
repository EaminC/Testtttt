import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqItems = [
  {
    question: "如果想帮助家暴者改变，并带TA去看心理医生，这样能解决问题吗？",
    questionEn: "If I want to help an abuser change and take them to see a psychologist, will this solve the problem?",
    answer: "除非他自己想改变，不然帮助改变这个想法会被他认为是侮辱，谁都不想听到自己有问题这样的话，成年人被带着去看心理医生这件事，听着就让人感觉很不舒服，但问题又存在，关键还是看他愿意沟通不，还有一个问题，力是相互的，一件事情发展到最终阶段，一般来讲双方都有自己没意识到的失误。",
    answerEn: "Unless they want to change themselves, the idea of helping them change will be seen as an insult. No one wants to hear that they have problems. An adult being taken to see a psychologist sounds very uncomfortable, but the problem exists. The key is whether they are willing to communicate. There's another issue: force is mutual. When something reaches its final stage, generally both parties have mistakes they're not aware of.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-neutral">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            DV相关常见Q及其A
            <br />
            <span className="text-2xl lg:text-3xl text-muted-foreground font-normal">
              Common Q&A on Domestic Violence
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqItems.map((item, i) => (
            <Card key={i} className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-card-foreground mb-2">
                  Q{i + 1}: {item.question}
                </CardTitle>
                <CardTitle className="text-lg font-serif text-muted-foreground font-normal">
                  {item.questionEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-card-foreground mb-3 font-normal">
                  {item.answer}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground font-normal">
                  {item.answerEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

