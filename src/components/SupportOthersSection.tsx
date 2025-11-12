import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const emotionalSupport = [
  {
    zh: "承认他们的处境是困难的、可怕的，他们重新掌控生活是勇敢的。",
    en: "Acknowledge that their situation is difficult, scary, and brave of them to regain control from.",
  },
  {
    zh: "不要评判他们的决定，拒绝批评他们或因为他们的选择而让他们感到内疚。",
    en: "Not judging their decisions and refusing to criticize them or guilt them over a choice they make.",
  },
  {
    zh: "记住你无法'拯救他们'，关于他们生活的决定应该由他们自己做出。",
    en: "Remembering that you cannot 'rescue them,' and that decisions about their lives are up to them to make.",
  },
  {
    zh: "不要说施暴者的坏话。",
    en: "Not speaking poorly of the abusive partner.",
  },
  {
    zh: "帮助他们制定安全计划。",
    en: "Helping them create a safety plan.",
  },
  {
    zh: "如果他们确实结束了关系，并且可以理解地感到孤独、沮丧或回到了施暴者身边，继续支持他们。",
    en: "Continuing to be supportive of them if they do end the relationship and are understandably lonely, upset, or return to their abusive partner.",
  },
  {
    zh: "主动陪同他们去任何服务机构或法律场所，提供道义支持。",
    en: "Offering to go with them to any service provider or legal setting for moral support.",
  },
];

const practicalSupport = [
  {
    zh: "帮助他们确定支持网络，以协助满足住房、食物、医疗保健和出行等实际需求。",
    en: "Help them identify a support network to assist with physical needs like housing, food, healthcare, and mobility as applicable.",
  },
  {
    zh: "帮助他们存储重要文件或'应急包'，以防紧急情况。",
    en: "Help them by storing important documents or a 'to-go bag' in case of an emergency situation.",
  },
  {
    zh: "鼓励他们参与与朋友和家人的关系之外的活动，并在这种能力上支持他们。",
    en: "Encourage them to participate in activities outside of their relationship with friends and family, and be there to support them in such a capacity",
  },
  {
    zh: "鼓励他们与能够提供进一步帮助和指导的人交谈，如热线或青少年和年轻成人项目。",
    en: "Encourage them to talk to people who can provide further help and guidance, like The Hotline or our teen and young adult project love is respect.",
  },
  {
    zh: "如果他们允许，帮助记录他们生活中的家庭暴力事件，包括受伤照片、互动的准确记录，以及记录虐待事件发生日期的日历笔记。",
    en: "If they give you permission, help document instances of domestic violence in their life, including pictures of injuries, exact transcripts of interactions, and notes on a calendar of dates that incidents of abuse occur.",
  },
  {
    zh: "不要在社交媒体上发布可能被用来识别他们或他们所在位置的信息。",
    en: "Don't post information about them on social media that could be used to identify them or where they spend time.",
  },
  {
    zh: "帮助他们通过资源了解他们的正式法律权利，如Women's Law，它提供关于家庭暴力法律和程序的信息。",
    en: "Help them learn about their formal legal rights through resources like Women's Law, which provides information on domestic violence laws and procedures.",
  },
  {
    zh: "在他们的允许下，确保幸存者居住和工作的建筑物中的其他人了解情况，包括在危机时刻或与施暴者对抗时该做什么（以及不该做什么）。",
    en: "With their permission, ensure that others in the buildings where the survivor lives and works are aware of the situation, including what to do (and what not to do) during a moment of crisis or confrontation with an abusive partner.",
  },
];

const SupportOthersSection = () => {
  const [showAllEmotional, setShowAllEmotional] = useState(false);
  const [showAllPractical, setShowAllPractical] = useState(false);

  const displayedEmotional = showAllEmotional ? emotionalSupport : emotionalSupport.slice(0, 4);
  const displayedPractical = showAllPractical ? practicalSupport : practicalSupport.slice(0, 4);

  return (
    <section id="support" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="relative overflow-hidden rounded-lg mb-12 h-64">
          <img src="/images/res1.jpg" alt="Support and solidarity" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"/>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            如何帮助身边的家暴受害者
            <br />
            <span className="text-2xl lg:text-3xl text-muted-foreground font-normal">
              How to Support a Survivor
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-normal mb-4">
            一点帮助可以走很长的路。
            <br />
            <span className="text-base">A little help can go a long way.</span>
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto font-normal">
            经历关系虐待是创伤性的，处于虐待关系任何阶段的人都应该能够依赖他人获得支持，以处理复杂的情感并导航下一步。
            <br />
            <span className="text-sm">The experience of surviving relationship abuse is traumatic, and people in any stage of an abusive relationship should be able to depend on others for support as they process complex emotions and navigate next steps.</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              情感支持
              <br />
              <span className="text-lg text-muted-foreground font-normal">Emotional Support</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedEmotional.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-relaxed text-card-foreground font-normal mb-2">{item.zh}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground font-normal">{item.en}</p>
                  </div>
                </div>
              ))}
            </div>
            {emotionalSupport.length > 4 && (
              <div className="text-center mt-6">
                <Button
                  onClick={() => setShowAllEmotional(!showAllEmotional)}
                  variant="outline"
                  className="gap-2"
                >
                  {showAllEmotional ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      显示更少 / Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      显示更多 / Show More
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              实际支持
              <br />
              <span className="text-lg text-muted-foreground font-normal">Practical Support</span>
            </h3>
            <p className="text-base text-muted-foreground mb-6 font-normal">
              根据情况，幸存者可能在经济上依赖施暴者，或者缺乏物质资源。支持经历关系虐待的人最直接的方法之一是帮助他们满足物质需求。
              <br />
              <span className="text-sm">Depending on the situation, a survivor may be financially dependent on an abusive partner or otherwise lacking access to material resources. One of the most immediate ways you can support someone experiencing relationship abuse is by helping them with their material needs.</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedPractical.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-relaxed text-card-foreground font-normal mb-2">{item.zh}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground font-normal">{item.en}</p>
                  </div>
                </div>
              ))}
            </div>
            {practicalSupport.length > 4 && (
              <div className="text-center mt-6">
                <Button
                  onClick={() => setShowAllPractical(!showAllPractical)}
                  variant="outline"
                  className="gap-2"
                >
                  {showAllPractical ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      显示更少 / Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      显示更多 / Show More
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          <Card className="bg-card border-2 border-border mt-8">
            <CardContent className="pt-6">
              <p className="text-base leading-relaxed text-card-foreground font-normal">
                这些例子绝不是全面的，但提供了理解支持幸存者的方法，可以帮助保护他们的安全。
                <br />
                <span className="text-sm text-muted-foreground">These examples are by no means comprehensive but provide an understanding of ways to support a survivor that can help protect their safety.</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SupportOthersSection;


