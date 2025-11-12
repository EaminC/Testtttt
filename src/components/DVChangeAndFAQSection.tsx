import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sections = [
  {
    title: "家暴是有迹可循的",
    titleEn: "Domestic Violence Has Patterns",
    content:
      "家暴行为是一种童年习得。\n\n大部分家暴和被家暴者，往往有不幸的童年。他们在小时候经常看见养育者打架，或者经常被养育者打。\n\n父母是孩子最好的老师，孩子会害怕，会想反抗和改变，但因为年纪和身体原因没有反抗和改变的能力，长期下来，遇到冲突实施暴力这种意识，就在潜意识层面驻扎了下来。\n\n(这里的冲突包括现实层面的冲突和内心的动力冲突)\n\n这种意识，会形成念到1后面就是2的条件反射，当外界某个相似的情景一出现，他们就会很自然地依照条件反射把2做出来。",
    contentEn:
      "Domestic violence behavior is learned in childhood.\n\nMost perpetrators and victims of domestic violence often had unfortunate childhoods. They frequently witnessed caregivers fighting or were frequently beaten by caregivers when they were young.\n\nParents are children's best teachers. Children will be afraid, want to resist and change, but because of age and physical limitations, they lack the ability to resist and change. Over time, the consciousness of using violence when conflicts arise becomes embedded in the subconscious.\n\n(Conflicts here include both real-world conflicts and internal psychological conflicts)\n\nThis consciousness forms a conditioned reflex—like saying 1 followed by 2. When a similar external situation appears, they naturally act according to this conditioned reflex.",
  },
  {
    title: "长大后变成自己讨厌的人",
    titleEn: "Growing Up to Become What We Once Hated",
    content:
      "在童年处于被害者身份时，人都会觉得这种暴力行为是不对的，因为它给自己带来了痛苦，于是很讨厌。\n\n但在成年后，这种驻扎在潜意识层面的条件反射会不断被激发，不断影响一个人的思维模式，稍不注意就会形成强迫性重复。\n\n如果伴侣弱势，他们就会强势地成为主动攻击者，如果伴侣强势，他们就会充当受害者，这种关系模式，要么存在于两个都有这种意识的人身上，要么把一个没有这种意识的人，改造成接受这种意识的人。",
    contentEn:
      "When in the role of a victim during childhood, people feel that such violent behavior is wrong because it brings them pain, so they hate it.\n\nBut in adulthood, this conditioned reflex embedded in the subconscious is constantly triggered, continuously affecting a person's thinking patterns, and if not careful, it can form compulsive repetition.\n\nIf the partner is weak, they become the active aggressor. If the partner is strong, they play the victim. This relational pattern either exists between two people who both have this consciousness, or transforms someone without this consciousness into someone who accepts it.",
  },
  {
    title: "觉知能力的获得是改变家暴的前提",
    titleEn: "Awareness is the Prerequisite for Change",
    content:
      "觉知，就是察觉和知道。任何改变的第一步都是知道不对，只有家暴者知道家暴行为是不对的，深刻认识到它会给伴侣造成严重的身体和精神伤害， TA才会去改变。\n\n很多人失去了正常的觉知能力，是因为他们的这种能力从小就被压制和剥夺了，小时候在表达感觉时经常被否定，会造成心理上的习得性无助，然后升级为对自己感觉的不信任，甚至直接忽视。\n\n当对自己的感觉都忽视掉了，也就没办法察觉和照顾伴侣的感受了，于是，当启动按钮被按下，家暴程序就自动运转了。",
    contentEn:
      "Awareness means perceiving and knowing. The first step of any change is knowing what's wrong. Only when the abuser knows that domestic violence is wrong and deeply understands that it causes serious physical and psychological harm to their partner will they change.\n\nMany people have lost their normal awareness because this ability was suppressed and deprived from childhood. When feelings were frequently denied during childhood, it creates psychological learned helplessness, which then escalates into distrust of one's own feelings, or even direct neglect.\n\nWhen one's own feelings are ignored, it becomes impossible to perceive and care for a partner's feelings. Then, when the trigger button is pressed, the domestic violence program automatically runs.",
  },
  {
    title: "正确的归因能力是改变家暴的基础",
    titleEn: "Correct Attribution is the Foundation for Change",
    content:
      "正确的归因能力，就是从客观的角度去分析问题，该向内归因就向内归因，该向外归因就向外归因，只有归因正确，才能把问题解决。\n\n很多人没有正确的归因能力，是因为他们一遇到问题首先就推卸责任，认为自己一点问题都没有。\n\n这种归因能力，需要通过不断思考来形成和巩固，它不仅是改变家暴的基础，我认为，它是获得幸福生活和事业成就的基础，可惜的是，很多人在快节奏的生活和巨大的社会压力下，已经失去了这个能力。",
    contentEn:
      "Correct attribution means analyzing problems from an objective perspective—attributing internally when appropriate, and externally when appropriate. Only with correct attribution can problems be solved.\n\nMany people lack correct attribution because when they encounter problems, they first shift blame, believing they have no problems at all.\n\nThis attribution ability needs to be formed and strengthened through continuous reflection. It is not only the foundation for changing domestic violence, but I believe it is the foundation for achieving a happy life and career success. Unfortunately, many people have lost this ability under the fast pace of life and immense social pressure.",
  },
  {
    title: "如果没有办法改变就只能离开了",
    titleEn: "If Change Is Impossible, Leave",
    content:
      "改变只能由内发生，如果当事人没有觉知，改变就不会发生。\n\n之前我说过，家暴这种关系模式，要么存在于两个都有这种意识的人身上，要么把一个没有这种意识的人，改造成接受这种意识的人。这种关系模式，不仅存在于伴侣关系，如果以后有了小孩，大概率上，那个小孩也会继续习得并投射这种模式，然后形成一个恶性的家族循环。好好想一下，你愿意成为这种恶性家族循环的一份子吗?\n\n最后，我还是希望家暴者能够认识到自己的问题，慢慢改变自己的思维模式，把那些动物性的条件反射摒弃掉，把更好的爱带给伴侣。",
    contentEn:
      "Change can only come from within. If the person involved has no awareness, change will not happen.\n\nAs I mentioned before, this pattern of domestic violence either exists between two people who both have this consciousness, or transforms someone without this consciousness into someone who accepts it. This relational pattern not only exists in partner relationships—if there are children later, that child will likely continue to learn and project this pattern, forming a vicious family cycle. Think carefully: do you want to be part of this vicious family cycle?\n\nFinally, I still hope that abusers can recognize their problems, gradually change their thinking patterns, discard those animalistic conditioned reflexes, and bring better love to their partners.",
  },
];

const faqItems = [
  {
    question: "如果想帮助家暴者改变，并带TA去看心理医生，这样能解决问题吗？",
    questionEn:
      "If I want to help an abuser change and take them to see a psychologist, will this solve the problem?",
    answer:
      "除非他自己想改变，不然帮助改变这个想法会被他认为是侮辱，谁都不想听到自己有问题这样的话，成年人被带着去看心理医生这件事，听着就让人感觉很不舒服，但问题又存在，关键还是看他愿意沟通不，还有一个问题，力是相互的，一件事情发展到最终阶段，一般来讲双方都有自己没意识到的失误。",
    answerEn:
      "Unless they want to change themselves, the idea of helping them change will be seen as an insult. No one wants to hear that they have problems. An adult being taken to see a psychologist sounds very uncomfortable, but the problem exists. The key is whether they are willing to communicate. There's another issue: force is mutual. When something reaches its final stage, generally both parties have mistakes they're not aware of.",
  },
];

// 合并所有内容到一个数组中
const allContent = [
  ...sections.map((section, i) => ({
    type: "section" as const,
    index: i + 1,
    title: section.title,
    titleEn: section.titleEn,
    content: section.content,
    contentEn: section.contentEn,
  })),
  ...faqItems.map((item, i) => ({
    type: "faq" as const,
    index: i + 1,
    question: item.question,
    questionEn: item.questionEn,
    answer: item.answer,
    answerEn: item.answerEn,
  })),
];

const DVChangeAndFAQSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = allContent[currentIndex];
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < allContent.length - 1;

  const handlePrev = () => {
    if (canGoLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoRight) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section id="can-dv-change" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            {currentItem.type === "section"
              ? "DV有可能改变吗？"
              : "DV相关常见Q及其A"}
            <br />
            <span className="text-2xl lg:text-3xl text-muted-foreground font-normal">
              {currentItem.type === "section"
                ? "Can Domestic Violence Change?"
                : "Common Q&A on Domestic Violence"}
            </span>
          </h2>
          {currentItem.type === "section" && (
            <p className="text-sm text-muted-foreground italic"></p>
          )}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <Button
              onClick={handlePrev}
              variant={canGoLeft ? "default" : "outline"}
              size="lg"
              disabled={!canGoLeft}
              className="h-14 w-14 p-0 flex-shrink-0 flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex-1">
              <Card className="bg-card border-2 border-border">
                <CardHeader>
                  {currentItem.type === "section" ? (
                    <>
                      <CardTitle className="text-2xl font-serif text-card-foreground mb-2">
                        {currentItem.index}. {currentItem.title}
                      </CardTitle>
                      <CardTitle className="text-lg font-serif text-muted-foreground font-normal">
                        {currentItem.titleEn}
                      </CardTitle>
                    </>
                  ) : (
                    <>
                      <CardTitle className="text-xl font-serif text-card-foreground mb-2">
                        Q{currentItem.index}: {currentItem.question}
                      </CardTitle>
                      <CardTitle className="text-lg font-serif text-muted-foreground font-normal">
                        {currentItem.questionEn}
                      </CardTitle>
                    </>
                  )}
                </CardHeader>
                <CardContent>
                  {currentItem.type === "section" ? (
                    <>
                      <p className="text-base leading-relaxed text-card-foreground mb-4 font-normal whitespace-pre-line">
                        {currentItem.content}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground font-normal whitespace-pre-line">
                        {currentItem.contentEn}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-base leading-relaxed text-card-foreground mb-3 font-normal">
                        {currentItem.answer}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground font-normal">
                        {currentItem.answerEn}
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
            <Button
              onClick={handleNext}
              variant={canGoRight ? "default" : "outline"}
              size="lg"
              disabled={!canGoRight}
              className="h-14 w-14 p-0 flex-shrink-0 flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {currentIndex + 1} / {allContent.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DVChangeAndFAQSection;
