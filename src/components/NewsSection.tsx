import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const items = [
  {
    title: "河北25岁女子被家暴去世",
    titleEn: "Young Woman's Death in Hebei Sparks Outrage",
    summary: "河北省沧州市孟村县发生一起疑似家暴致死案件。25岁女子刘某被丈夫金某及婆婆张某殴打致死。警方已对金某、张某采取刑事拘留措施。",
    summaryEn: "A suspected case of fatal domestic violence in Hebei province has ignited public fury. A 25-year-old woman, Liu, allegedly died at the hands of her husband, Jin, and mother-in-law, Zhang. Both suspects have been criminally detained.",
    date: "2024年8月24日",
  },
  {
    title: "女子驾车躲避施暴丈夫致其死亡",
    titleEn: "Woman Driving to Escape Abusive Husband Causes His Death",
    summary: "2025年10月31日，河北省石家庄市中级人民法院二审开庭审理。26岁的曹女士因驾车致其丈夫刘先生死亡，一审被以故意杀人罪判处有期徒刑11年。曹女士主张其行为系长期遭受家庭暴力后的正当防卫或紧急避险。",
    summaryEn: "On October 31, 2025, the Shijiazhuang Intermediate People's Court held the second trial. 26-year-old Ms. Cao was sentenced to 11 years in prison for intentional homicide in the first trial. Ms. Cao claims her actions constituted justifiable defense following prolonged domestic violence.",
    date: "2025年10月31日",
  },
  {
    title: "宜昌男子当街家暴致妻子肋骨骨折仅获刑六个月",
    titleEn: "Yichang Man Sentenced to Six Months for Street Domestic Violence",
    summary: "湖北省枝江市人民法院对一起街头家暴案件作出判决。尤姓男子因妻子拒绝让其无证驾驶，当街对妻子实施暴力，致其4根肋骨骨折。法院以故意伤害罪判处尤某有期徒刑六个月。",
    summaryEn: "The Zhijiang People's Court in Hubei Province sentenced a man surnamed You to six months in prison for a street domestic violence incident. The assault occurred when his wife refused to let him drive without a license, leading to four broken ribs.",
    date: "2024年",
  },
  {
    title: "中国女留学生新加坡坠亡案",
    titleEn: "Chinese Female Student's Fatal Fall in Singapore",
    summary: "2024年5月23日，20岁的中国留学生李佳轩在新加坡某高档公寓坠亡。据其好友透露，她长期遭受父亲的家庭暴力。李佳轩在毕业前不到十天时结束了自己的生命。",
    summaryEn: "On May 23, 2024, 20-year-old Chinese international student Li Jiaxuan fell to her death from an upscale apartment building in Singapore. According to friends, she endured long-term domestic violence from her father. Her life ended less than ten days before graduation.",
    date: "2024年5月23日",
  },
  {
    title: "湖南邵阳男子当街强吻、暴力殴打女生",
    titleEn: "Man in Shaoyang, Hunan, Forcibly Kissing and Assaulting a Woman",
    summary: "4月8日晚，湖南邵阳市邵阳县发生一起严重的街头暴力事件。一名男子当街强行搂抱并强吻一名年轻女性，遭到反抗后恼羞成怒，抬脚猛踹，将女孩踹飞倒地。警方通报被批评为'粉饰暴力'。",
    summaryEn: "On the evening of April 8, a serious incident of street violence occurred in Shaoyang County. A man forcibly grabbed and kissed a young woman in public. When she resisted, he kicked her hard enough to send her flying. The police report was criticized for downplaying the violence.",
    date: "2024年4月8日",
  },
  {
    title: "Doja Cat母亲指控儿子家暴",
    titleEn: "Doja Cat's Mother Alleges Son's Domestic Violence",
    summary: "Doja Cat的母亲Deborah Elizabeth Sawyer对她的儿子Raman申请了临时限制令，指控他对Doja Cat（本名Amala Dlamini）实施身体攻击，甚至导致她'被Raman打掉了牙齿'。",
    summaryEn: "Doja Cat's mother, Deborah Elizabeth Sawyer, filed a temporary restraining order against her son, Raman, accusing him of physically assaulting Doja Cat (real name Amala Dlamini), including having her 'teeth knocked out by Raman'.",
    date: "2024年",
  },
  {
    title: "谷歌工程师杀妻案",
    titleEn: "Google Engineer Wife Murder Case",
    summary: "2024年1月16日，在美国加州圣何塞的一处住宅内，华人女子于某在家中被丈夫陈立人残忍殴打致死。两人都毕业于清华大学，都是谷歌的员工。监控录像显示，陈某在将妻子殴打致死后，在屋内徘徊几个小时，还拿起了电锯。",
    summaryEn: "On January 16, 2024, in a residence in San Jose, California, a Chinese woman surnamed Yu was brutally beaten to death by her husband, Chen Liren. Both graduated from Tsinghua University and were Google employees. Surveillance footage showed Chen wandering around the house for hours after killing his wife, even picking up a chainsaw.",
    date: "2024年1月16日",
  },
  {
    title: "北京女生'花轿变轮椅'案",
    titleEn: "Beijing Woman's 'Wedding Sedan to Wheelchair' Case",
    summary: "2023年，同居男友杨某看似意外的动手，导致小玲左右手不同程度受伤。2024年，因她想做手部手术，两人爆发争吵进而动手。小玲至今记得对方动手时曾说：'残了就只能跟着我'。案件卡在伤情鉴定近10个月。",
    summaryEn: "In 2023, her cohabiting boyfriend, Yang, seemingly accidentally became violent, resulting in injuries to both of her hands. In 2024, a dispute over her desire to undergo hand surgery led to another violent incident. Yang said, 'If you're disabled, you'll have to follow me.' The case got stuck in the injury assessment process for nearly 10 months.",
    date: "2024年7月",
  },
  {
    title: "辽宁营口女子遭前夫殴打致肠破裂",
    titleEn: "Woman in Yingkou, Liaoning, Beaten by Ex-Husband",
    summary: "来自黑龙江的于女士在社交平台求助称，她43岁的母亲张某萍在辽宁营口遭前夫张某铭殴打，导致肠破裂、混合型休克被送到了重症监护室，至今还没有脱离生命危险。张某铭已被刑事拘留。",
    summaryEn: "Ms. Yu from Heilongjiang reached out for help on social media, stating that her 43-year-old mother, Zhang Xiaoping, was beaten by her ex-husband Zhang Xiaoming in Yingkou, Liaoning, leading to a ruptured intestine and mixed shock. She was sent to the ICU and has not yet been out of life-threatening danger.",
    date: "2024年8月29日",
  },
  {
    title: "2年被家暴16次女子获分144万元",
    titleEn: "Woman Abused 16 Times Awarded 1.44 Million Yuan",
    summary: "来自四川成都的小谢在结婚两年里，被丈夫贺某家暴了16次，最后一次被家暴导致其肠破裂需要终身佩戴粪袋。财产纠纷案宣判，小谢获得约144万元。她说：'我要的从来不是钱，而是一个交代。'",
    summaryEn: "Xiao Xie from Chengdu, Sichuan, was subjected to domestic violence 16 times by her husband, He, during their two years of marriage. The last incident resulted in a ruptured intestine, leaving her needing to wear a colostomy bag for life. She was awarded approximately 1.44 million yuan in a property dispute case. She said: 'What I wanted was never money, but an explanation.'",
    date: "2024年10月24日",
  },
];

const NewsSection = () => {
  const [showAllNews, setShowAllNews] = useState(false);
  const displayedItems = showAllNews ? items : items.slice(0, 4);

  return (
    <section id="news" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="relative overflow-hidden rounded-lg mb-12 h-64">
          <img src="/images/res5.jpg" alt="News and case tracking" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"/>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            无法被遗忘的——新闻总结
            <br />
            <span className="text-2xl lg:text-3xl text-muted-foreground font-normal">
              News & Case Log
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-normal">
            追踪相关新闻报道与政策动态，为倡导和预防提供信息
            <br />
            <span className="text-base">Track recent incidents and policy responses to inform advocacy and prevention</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {displayedItems.map((it, i) => (
            <Card key={i} className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-card-foreground mb-2">
                  {it.title}
                </CardTitle>
                <CardTitle className="text-lg font-serif text-muted-foreground font-normal">
                  {it.titleEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-card-foreground mb-3 font-normal">
                  {it.summary}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4 font-normal">
                  {it.summaryEn}
                </p>
                <p className="mt-4 text-sm text-muted-foreground border-t border-border pt-3">{it.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {items.length > 4 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAllNews(!showAllNews)}
              variant="outline"
              className="gap-2"
            >
              {showAllNews ? (
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
    </section>
  );
};

export default NewsSection;


