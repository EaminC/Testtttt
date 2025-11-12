import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const lawItems = [
  {
    title: "家庭暴力的法律定义",
    titleEn: "Definition of Domestic Violence",
    content: "根据《中华人民共和国反家庭暴力法》，家庭暴力是指家庭成员之间以殴打、捆绑、残害、限制人身自由以及经常性谩骂、恐吓等方式实施的身体或精神侵害行为。\n中国法律同样保护非婚同居、收养、赡养等事实家庭关系中的受害者。",
    contentEn: "Under China's Anti-Domestic Violence Law (2016), domestic violence refers to physical or mental harm among family members through beating, restraint, injury, restriction of personal freedom, or frequent verbal abuse and intimidation.\nProtection also extends to cohabiting partners, adopted children, and dependents.",
    link: "https://www.chinanews.com/gn/2015/12-27/7690072.shtml",
  },
  {
    title: "报警与公安机关职责",
    titleEn: "Calling the Police (110) & Police Responsibilities",
    content: "如遭受家暴，请第一时间拨打 110。公安机关依法应当：\n\n立即出警，制止家庭暴力；\n记录现场情况，收集证据；\n告知受害人合法权利与救助途径；\n必要时协助受害人就医或进行伤情鉴定；\n对施暴者出具告诫书，并可作为法院认定家暴事实的重要证据。",
    contentEn: "If you are experiencing domestic violence, call 110 immediately.\nPolice are legally required to:\n\nRespond promptly and stop the violence;\nRecord and collect evidence on site;\nInform the victim of their rights and resources;\nAssist in medical care or injury assessment;\nIssue an Official Warning Letter, which can serve as court evidence.",
  },
  {
    title: "人身安全保护令",
    titleEn: "Personal Safety Protection Order",
    content: "受害人可向法院申请人身安全保护令。法院应在72小时内作出裁定，紧急情况下24小时内决定。\n保护令可包括：\n\n禁止施暴者实施家庭暴力；\n禁止施暴者骚扰、跟踪或接触受害人及其近亲属；\n责令施暴者迁出受害人住所；\n其他保护措施。",
    contentEn: "Victims can apply to the local court for a Personal Safety Protection Order.\nCourts must respond within 72 hours (or 24 hours in emergencies).\nOrders may include:\n\nProhibition of further violence;\nBan on contact, stalking, or harassment;\nRequirement for the abuser to move out;\nOther safety-related measures.",
  },
  {
    title: "伤情鉴定与证据保存",
    titleEn: "Injury Assessment & Evidence Collection",
    content: "第一时间到医院就诊并保存病历、照片、检验报告；\n若有条件，可到司法鉴定机构进行伤情鉴定；\n保留报警记录、告诫书、聊天记录、证人证言等证据，以备后续起诉。",
    contentEn: "Seek medical documentation and forensic assessment as soon as possible.\nKeep police reports, official warnings, medical records, photos, messages, and witness statements as evidence for legal proceedings.",
    link: "http://jbfh.pengxingsw.org/NewsDetail/3335366.html",
  },
  {
    title: "临时庇护与求助渠道",
    titleEn: "Shelters & Emergency Assistance",
    content: "可向政府设立的救助站或庇护所求助，获得临时住宿与生活帮助；\n也可联系当地妇女联合会或民政部门寻求支援；妇联电话：12338\n24小时法律援助热线：12348。",
    contentEn: "You can seek temporary shelter at government-run facilities or contact the Women's Federation or Civil Affairs Bureau for help.\n24-hour Legal Aid Hotline: 12348",
  },
  {
    title: "法律援助与离婚赔偿",
    titleEn: "Legal Aid & Divorce Compensation",
    content: "受害人可申请免费法律援助，获得律师协助。\n在离婚诉讼中，法院可依据出警记录、告诫书、伤情鉴定意见等认定家暴事实，并支持受害人的离婚损害赔偿请求。",
    contentEn: "Victims may apply for free legal aid.\nDuring divorce proceedings, courts can use police records, warnings, and medical evidence to confirm domestic violence and grant compensation for damages.",
  },
];

const LawPolicySection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? lawItems : lawItems.slice(0, 2);

  return (
    <section id="law-policy" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Law & Policy
            <br />
            <span className="text-2xl lg:text-3xl text-muted-foreground font-normal">
              法律与政策
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-normal">
            Know your rights. Protect yourself.
            <br />
            <span className="text-base">知法，是保护自己的第一步。</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-12">
          {displayedItems.map((item, i) => (
            <Card key={i} className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-card-foreground mb-2">
                  {item.title}
                </CardTitle>
                <CardTitle className="text-lg font-serif text-muted-foreground font-normal">
                  {item.titleEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-card-foreground mb-3 font-normal whitespace-pre-line">
                  {item.content}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4 font-normal whitespace-pre-line">
                  {item.contentEn}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    了解更多 / Learn more →
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {lawItems.length > 2 && (
          <div className="text-center mb-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="gap-2"
            >
              {showAll ? (
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

        <Card className="bg-card border-2 border-border max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-serif font-bold text-card-foreground mb-4">
              我们想说
              <br />
              <span className="text-lg text-muted-foreground font-normal">What We Believe</span>
            </h3>
            <p className="text-lg leading-relaxed text-card-foreground mb-3 font-normal">
              知法，是保护自己的第一步。
              <br />
              你不是孤单的个体，每一份证据、每一次求助，都是改变的开始。
            </p>
            <p className="text-base leading-relaxed text-muted-foreground font-normal">
              Knowing the law is the first step toward safety.
              <br />
              You are not alone—every record and every act of seeking help is a step toward change.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LawPolicySection;

