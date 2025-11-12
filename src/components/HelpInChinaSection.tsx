import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Organization {
  name: string;
  phone?: string;
  hours?: string;
  services: string;
  scope: string;
  address: string;
  link?: string;
}

const organizations: Organization[] = [
  {
    name: "北京红枫妇女心理咨询服务中心",
    services: "成立较早的妇女权益保护组织，其\"红枫热线\"是国内第一条妇女家暴咨询热线。",
    scope: "全国",
    address: "北京市",
    link: "https://www.ungeneva.org/zh/news-media/news/2024/12/100998/qianfangshiye-xinhuoxiangchuanjiangfanjiabaoyundongjinxingxiaqu?utm_source=chatgpt.com",
  },
  {
    name: "北京市东城区源众家庭与社区发展服务中心",
    services: "开发了国内首个\"家暴求助\"公益小程序，集合一键拨打热线、在线咨询、全国组织信息、紧急救助金申请等功能。",
    scope: "全国",
    address: "北京市东城区",
    link: "https://cn.chinadaily.com.cn/a/202208/18/WS62fe0978a3101c3ee7ae473e.html?utm_source=chatgpt.com",
  },
  {
    name: "北京为平文化有限公司",
    services: "专注性别平等、家庭暴力监测与研究。曾发布《反家庭暴力法实施两年报告》。",
    scope: "全国",
    address: "北京市",
    link: "http://www.equality-beijing.org/newinfo.aspx?id=90",
  },
  {
    name: "中国法学会家庭暴力与婚姻家庭法律研究中心",
    services: "提供家庭暴力相关法律研究和咨询服务。",
    scope: "全国",
    address: "北京市",
    link: "https://www.chinalaw.org.cn/portal/article/index/id/15894/cid/22.html",
  },
  {
    name: "上海心翼家庭社工师事务所 — \"让爱流动\"家庭暴力干预服务项目",
    services: "项目起始于2015年，目标为满足妇女维权需求，通过法治宣传、心理疏导及\"一站式\"服务模式，形成宣传、预防、咨询、庇护、援助、维权的闭环。",
    scope: "全国",
    address: "上海市",
    link: "https://www.womenvoice.cn/voice/shouye/zhuanti/nuxingshehuizuzhi/2411/0574-1.htm?utm_source=chatgpt.com",
  },
  {
    name: "上海反家庭暴力庇护救助中心",
    services: "是上海市为遭受家庭暴力侵害的妇女、儿童和老人提供免费临时庇护的救助机构，庇护时长一般不超过7天。2009年上半年，市妇联系统受理家庭暴力投诉604例，占婚姻家庭类投诉的4.5%。同期，市公安局与市妇联在全市300余个基层派出所设立'家庭暴力受理点'，实现投诉全数接收。",
    scope: "上海市",
    address: "上海市",
  },
  {
    name: "鹏星家庭暴力防护中心",
    phone: "0755-25950003、18929315210",
    hours: "工作日9:00-17:30",
    services: "综合服务：受暴者辅导、施暴者辅导、目睹儿童辅导、心理辅导、 法律咨询、经济救急、反家暴培训、社区宣传等。",
    scope: "全国",
    address: "深圳市宝安区",
    link: "http://jbfh.pengxingsw.org/",
  },
  {
    name: "深圳市德纳慈善基金会",
    phone: "0755-82805166",
    hours: "工作日9:00-18:00",
    services: "个案辅导、法律援助、经济支持、紧急庇护",
    scope: "全国",
    address: "深圳市福田区",
  },
  {
    name: "维德志愿法律服务中心",
    phone: "4000-343-580（免通话费）",
    hours: "工作时间接听",
    services: "为受暴妇女儿童提供法律咨询",
    scope: "咨询（全国） ；诉讼（深圳）",
    address: "深圳市福田区",
  },
  {
    name: "中澳合作家暴危机干预中心",
    phone: "010-84659225",
    services: "贯彻男女平等基本国策，消除家庭暴力，推进会性别主流化，增进妇女权益，促进性别平等，推动社会和谐与进步。",
    scope: "全国",
    address: "北京市朝阳区",
  },
  {
    name: "北京市千千律师事务所（原北京大学法学院妇女法律研究中心）",
    phone: "010-84831639、84833270",
    hours: "工作日9:00-17:00",
    services: "机构关注所有针对女性女童带有性别歧视色彩的案件/公共事件，提供法律援助，推动弱势群体权益状况改善，推动国家法律援助事业的发展。",
    scope: "全国",
    address: "北京市朝阳区",
  },
  {
    name: "女声网",
    phone: "010-64808179",
    hours: "工作日10:00-18:00",
    services: "促进媒体中的性别平等和妇女的传播权利为宗旨，主张纠正对妇女的歧视贬低性态度及性别刻板印象，提高妇女和性别议题在媒体及传播中的可见度。",
    scope: "全国",
    address: "北京市朝阳区",
  },
  {
    name: "云南连心家庭暴力求助中心",
    phone: "0871-64183896、4006004039",
    services: "对施暴者、受暴者进行专业辅导；婚姻关系辅导；家庭暴力庇护申请；离婚咨询；法律援助转介；陪伴出庭等。",
    scope: "全国",
    address: "云南昆明五华区",
  },
  {
    name: "昆明五华区明心社会工作服务中心",
    phone: "18064830617",
    hours: "工作日9:30-17:30",
    services: "家暴受害人一站式服务（心理疏导、法律咨询与援助、紧急救助等）、目睹儿童关怀、施暴者辅导、隐蔽型庇护、司法服务、社区公众教育、反家暴能力建设培训等。",
    scope: "全国",
    address: "云南省昆明市五华区",
  },
  {
    name: "陕西家源汇社会工作服务中心",
    phone: "029-87420063",
    hours: "工作日9:00-17:30",
    services: "综合社工服务、婚姻家庭、反家暴、困境儿童与长者服务",
    scope: "全国",
    address: "陕西省西安市碑林区",
  },
  {
    name: "长沙市开福区鑫晨婚姻家庭综合服务中心",
    phone: "0731-82290866",
    hours: "工作日9:00-12:00 13:00-17:00",
    services: "情绪支持、陪伴、家庭关系指导、制定安全计划、心理咨询、法律咨询、医疗救助、互助小组、关系调解、庇护、就业支持、经济援助、认知教育、资源链接",
    scope: "全国",
    address: "湖南省长沙市开福区",
  },
];

const HelpInChinaSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? organizations : organizations.slice(0, 3);

  return (
    <section id="help-china" className="py-24 lg:py-32 bg-neutral">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Help in China
            <br />
            <span className="text-2xl lg:text-3xl text-muted-foreground font-normal">
              中国求助资源
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {displayedItems.map((org, i) => (
            <Card key={i} className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-card-foreground">
                  {org.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {org.phone && (
                  <div>
                    <p className="text-sm font-medium text-card-foreground mb-1">电话 / Phone:</p>
                    <p className="text-base text-card-foreground font-normal">{org.phone}</p>
                  </div>
                )}
                {org.hours && (
                  <div>
                    <p className="text-sm font-medium text-card-foreground mb-1">接听时间 / Hours:</p>
                    <p className="text-sm text-muted-foreground font-normal">{org.hours}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-card-foreground mb-1">服务内容 / Services:</p>
                  <p className="text-sm text-card-foreground font-normal leading-relaxed">{org.services}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground mb-1">服务范围 / Scope:</p>
                  <p className="text-sm text-muted-foreground font-normal">{org.scope}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground mb-1">机构地址 / Address:</p>
                  <p className="text-sm text-muted-foreground font-normal">{org.address}</p>
                </div>
                {org.link && (
                  <a
                    href={org.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-block mt-2"
                  >
                    了解更多 / Learn more →
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {organizations.length > 3 && (
          <div className="text-center mt-8">
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
      </div>
    </section>
  );
};

export default HelpInChinaSection;

