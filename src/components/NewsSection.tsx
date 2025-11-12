import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface NewsItem {
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  fullText?: string;
  fullTextEn?: string;
  date: string;
}

const items: NewsItem[] = [
  {
    title: "河北25岁女子被家暴去世",
    titleEn: "Young Woman's Death in Hebei Sparks Outrage",
    summary: "河北省沧州市孟村县发生一起疑似家暴致死案件。25岁女子刘某被丈夫金某及婆婆张某殴打致死。警方已对金某、张某采取刑事拘留措施。",
    summaryEn: "A suspected case of fatal domestic violence in Hebei province has ignited public fury. A 25-year-old woman, Liu, allegedly died at the hands of her husband, Jin, and mother-in-law, Zhang. Both suspects have been criminally detained.",
    fullText: "施暴者：金昊\n\n河北省沧州市孟村县发生一起疑似家暴致死案件。25岁女子刘某被丈夫金某及婆婆张某殴打致死。警方已对金某、张某采取刑事拘留措施。\n\n据孟村县公安局8月24日晚发布的通报，8月22日，警方接到一起居民小区刑事案件报告，导致受害人刘某死亡。警方随后抓获主要嫌疑人金某（26岁，刘某的丈夫）和张某（48岁，金某的母亲，被指控协助销毁或伪造证据）。两人均被刑事拘留。\n\n法医鉴定结论显示，刘某死于钝器造成的颅脑损伤。警方通报还明确指出，受害人死亡时并未怀孕。为确保严格公正的调查，沧州市公安局已下令将案件移交肃宁县公安局进一步处理。\n\n此案暴露了一些受害者面临的孤立处境。8月25日联系到的孟村县妇女联合会工作人员透露，刘某\"从未向我们寻求过帮助\"。该工作人员补充说，联合会通常会与警方和当地乡镇官员联系，为有需要的妇女提供支持服务，但在此案中没有进行此类干预。\n\n从对刘某家人和朋友的采访中，出现了关于刘某生活和死亡前情况的令人心碎的细节，描绘了一个被困在虐待婚姻中的女性形象。\n\n刘某的姑姑（化名刘女士）告诉记者，家人在8月22日上午收到了侄女死亡的噩耗。然而，住宅楼的电梯监控录像显示，金某的家人早在当天凌晨5点就已经将刘某送往医院。8月21日晚的录像显示，金某似乎喝醉了，在电梯内跳跃并摇摇晃晃。\n\n刘女士回忆说，这对夫妇是前同学，金某追求她的侄女多年，甚至与其他追求者打架。虽然家人最初因为金某在县里的家庭声誉不佳而反对这桩婚姻，但最终还是同意了。\n\n悲剧的是，虐待几乎立即开始。\"婚礼后不到十天，孩子就被金某打了，\"刘女士说。她解释说，她的侄女收到了几十万元的丰厚嫁妆，是一名家庭主妇，而金某在当地检察院担任外聘工作人员。孩子出生后，刘某的注意力完全集中在儿子身上。\n\n事发后，金某的父亲据报道跪在刘某家人面前道歉。\"我们现在只希望凶手受到严惩，\"刘女士说。\n\n受害者的密友小凡（化名）进一步揭示了这段关系的控制和虐待性质。她说，刘某甚至选择就读一所不太知名的大学——石家庄政法职业学院，以便与金某在一起。\n\n\"最初，当他打她时，她会告诉家人。后来，她不再谈论这件事，把一切都藏在心里，\"小凡说。她描述了一个家庭，刘某因为要求生活费或花费被认为太多的钱而受到言语虐待。\n\n尽管最近在一家包子店找到了一份兼职工作，每小时赚10元，但刘某被丈夫禁止工作，据称丈夫认为这\"很丢脸\"。\n\n此案继续在警方和妇女权益保护部门的共同努力下进行调查。",
    fullTextEn: "Suspects, including victim's husband and mother-in-law, are in custody as the case is transferred for further investigation.\n\nCANGZHOU, Hebei – A suspected case of fatal domestic violence in Hebei province has ignited public fury and drawn attention to the hidden plight of many abuse victims in China, after local police confirmed the death of a 25-year-old woman, allegedly at the hands of her husband.\n\nAccording to a police statement released by the Mengcun Public Security Bureau on the evening of August 24, authorities received a report on August 22 concerning a criminal incident at a residential community that resulted in the death of the victim, Liu Moumou.\n\nThe police subsequently apprehended the primary suspect, Jin Mou, 26, Liu's husband, and Zhang Mou, 48, Jin's mother, who is accused of assisting in destroying or falsifying evidence. Both have been criminally detained.\n\nA forensic examination concluded that Liu died from a craniocerebral injury caused by blunt force. The police statement also explicitly noted that the victim was not pregnant at the time of her death. In a move to ensure a strict and impartial investigation, the Cangzhou Municipal Public Security Bureau has ordered the case to be transferred to the Suining County Public Security Bureau for further handling.\n\nThe case has shed a harsh light on the isolation faced by some victims. A staff member from the Mengcun County Women's Federation, contacted on August 25, revealed that Liu \"had never sought help from us.\" The staffer added that the federation would typically liaise with police and local township officials to provide support services for women in need, but no such intervention had occurred in this instance.\n\nHeartbreaking details of Liu's life and the lead-up to her death have emerged from interviews with her family and friends, painting a picture of a woman trapped in an abusive marriage.\n\nLiu's aunt, identified as Ms. Liu, told reporters that the family received the devastating news of her niece's death on the morning of August 22. However, elevator surveillance footage from the residential building suggests Jin's family had already rushed Liu to the hospital as early as 5 a.m. that day. Footage from the night of August 21 shows Jin appearing intoxicated, jumping and stumbling unsteadily inside the elevator.\n\nMs. Liu recounted that the couple were former schoolmates and that Jin had pursued her niece for years, even getting into fights with other suitors. While the family initially opposed the marriage due to Jin's family's poor reputation in the county, they eventually relented.\n\nTragically, the abuse began almost immediately. \"Less than ten days after the wedding, the child was beaten by Jin Mou,\" Ms. Liu said. She explained that her niece, who had received a generous dowry of several hundred thousand yuan, was a homemaker, while Jin worked as an external staff member at a local procuratorate. After the birth of their child, Liu's focus was entirely on her son.\n\nIn the wake of the incident, Jin's father reportedly knelt before Liu's family to apologize. \"We now only hope that the murderer will be severely punished,\" Ms. Liu stated.\n\nA close friend of the victim, Xiaofan (a pseudonym), provided further insight into the controlling and abusive nature of the relationship. She said Liu had even chosen to attend a less prestigious college, the Shijiazhuang Vocational College of Politics and Law, to be with Jin.\n\n\"Initially, when he hit her, she would tell her family. Later, she stopped talking about it and kept everything to herself,\" Xiaofan said. She described a household where Liu was verbally abused for asking for living expenses or for spending what was deemed too much money.\n\nDespite recently securing a part-time job at a steamed bun shop, earning 10 yuan per hour, Liu was forbidden from working by her husband, who allegedly found it \"embarrassing.\"\n\nThe case continues to be investigated under the joint efforts of police and women's rights protection departments.",
    date: "2024年8月24日",
  },
  {
    title: "女子驾车躲避施暴丈夫致其死亡",
    titleEn: "Woman Driving to Escape Abusive Husband Causes His Death",
    summary: "2025年10月31日，河北省石家庄市中级人民法院二审开庭审理。26岁的曹女士因驾车致其丈夫刘先生死亡，一审被以故意杀人罪判处有期徒刑11年。曹女士主张其行为系长期遭受家庭暴力后的正当防卫或紧急避险。",
    summaryEn: "On October 31, 2025, the Shijiazhuang Intermediate People's Court held the second trial. 26-year-old Ms. Cao was sentenced to 11 years in prison for intentional homicide in the first trial. Ms. Cao claims her actions constituted justifiable defense following prolonged domestic violence.",
    fullText: "案件背景\n\n2025年10月31日，河北省石家庄市中级人民法院二审开庭审理了一起备受社会关注的案件。26岁的曹女士因驾车致其丈夫刘先生死亡，一审被以故意杀人罪判处有期徒刑11年。曹女士及其家属已提出上诉，主张其行为系长期遭受家庭暴力后的正当防卫或紧急避险。\n\n事发经过\n\n根据石家庄市检察院《起诉书》及多方证据，2024年5月21日凌晨，案件经过如下：\n\n- 凌晨1时许，刘先生因怀疑曹女士当晚与女伴王某用餐时有他人参与，在家中与其发生激烈争吵，后持刀要求曹女士一同前往王某住处对质。\n\n- 二人下楼过程中，刘先生在小区内对曹女士进行威胁和殴打。\n\n- 凌晨2时47分，双方驾车抵达王某家附近。下车后争吵持续，刘先生将曹女士拖拽至汽车尾部并撕坏其衣物。\n\n- 凌晨3时09分，曹女士进入驾驶室启动车辆欲自行离开。刘先生见状爬上引擎盖，曹女士加速行驶并甩动车辆，试图将刘先生甩下。\n\n- 凌晨3时10分，车辆在交叉路口与东南角花池发生碰撞。附近人员闻声报警。刘先生送医抢救无效死亡。鉴定显示，其符合较大钝性外力作用致肝、肾、胰腺等多发破裂死亡。\n\n家暴历史与案发细节\n\n曹女士与刘先生于2015年经家人介绍相识。据曹女士父亲回忆，自2021年起，刘先生脾气变得暴躁。2021年8月26日，曹女士曾因被刘先生掌掴导致左耳鼓膜穿孔，家暴行为始为家人知晓。曹女士自述，近两三年来双方频繁争吵，刘先生偶有动手。\n\n案发当晚细节进一步揭示了曹女士所处的危险境遇：\n\n- 刘先生饮酒后回家，质疑曹女士与王某用餐的真实性，随即实施暴力，包括揪头发、拳打背部，并持20厘米切肉刀威胁。\n\n- 在前往王某住处途中，刘先生单手驾车，另一只手持续殴打曹女士，车辆多次闯红灯。\n\n- 曹女士曾趁隙将刀扔出车外，但被刘先生捡回并用刀背击打其肋骨，导致曹女士呕吐物带血丝，后经诊断胰腺撕裂、腹腔内出血。\n\n- 在王某家小区，刘先生变本加厉，将曹女士拖至车尾并扒掉其衣裤，继续脚踹其腹部等多处。\n\n法律程序与争议焦点\n\n公诉机关指控，曹女士明知刘先生趴在引擎盖上仍加速并甩动车辆，意图将其甩下，最终导致刘先生死亡，应以故意杀人罪追究刑责。\n\n一审法院认定曹女士犯故意杀人罪，判处有期徒刑11年。曹女士方面提出上诉，主张其行为是在生命受到现实威胁情况下的自救行为，系正当防卫或紧急避险，不应构成故意杀人罪。\n\n本案二审已开庭审理，法院未当庭宣判。案件进展受到社会广泛关注，尤其聚焦于家庭暴力受害者面临极端情况时的行为边界与法律责任认定。\n\n附录：案件时间线\n\n- 2015年：曹女士与刘先生经人介绍相识。\n\n- 2021年8月26日：曹女士首次确认因家暴致左耳鼓膜穿孔。\n\n- 2024年5月21日凌晨：本案事件发生，刘先生死亡，曹女士受伤并被监控居住。\n\n- 2025年3月24日：一审判决，曹女士犯故意杀人罪，获刑11年。\n\n- 2025年10月31日：二审开庭审理。",
    fullTextEn: "Case Background\n\nOn October 31, 2025, the Shijiazhuang Intermediate People's Court in Hebei Province held the second trial of a closely watched case. 26-year-old Ms. Cao was sentenced to 11 years in prison for intentional homicide in the first trial, after causing the death of her husband, Mr. Liu, while driving. Ms. Cao and her family have appealed, claiming her actions constituted justifiable defense or emergency avoidance following prolonged domestic violence.\n\nIncident Details\n\nAccording to the Shijiazhuang People's Procuratorate's \"Indictment\" and multiple evidence sources, the incident unfolded as follows on May 21, 2024:\n\n- Around 1:00 AM, Mr. Liu, suspecting Ms. Cao had dined with others besides her female companion Wang that evening, argued fiercely with her at home. He then produced a knife, demanding they go to Wang's residence to confront her.\n\n- While heading downstairs, Mr. Liu threatened and assaulted Ms. Cao within their residential compound.\n\n- At 2:47 AM, they arrived near Wang's home by car. After exiting the vehicle, their argument continued. Mr. Liu dragged Ms. Cao to the rear of the car and tore her clothing.\n\n- At 3:09 AM, Ms. Cao entered the driver's seat and started the car intending to leave. Mr. Liu climbed onto the hood upon seeing this. Ms. Cao accelerated and swerved the vehicle in an attempt to shake him off.\n\n- At 3:10 AM, the vehicle collided with a flower bed at a crossroads. Alerted by the noise, nearby individuals reported the incident. Mr. Liu died after failed medical treatment. Forensic analysis indicated his death resulted from multiple organ ruptures (liver, kidney, pancreas) caused by substantial blunt force.\n\nHistory of Domestic Violence & Case Specifics\n\nMs. Cao and Mr. Liu met through family introduction in 2015. According to Ms. Cao's father, Mr. Liu's temper had noticeably deteriorated since 2021. On August 26, 2021, Ms. Cao was diagnosed with a perforated left eardrum after being slapped by Mr. Liu, revealing the domestic abuse to her family. Ms. Cao stated that arguments had become frequent over the past two to three years, with Mr. Liu occasionally becoming physically violent.\n\nFurther details from that night highlighted the perilous situation Ms. Cao faced:\n\n- Mr. Liu returned home intoxicated, questioned Ms. Cao about her dinner with Wang, and immediately turned violent—grabbing her hair, punching her back, and threatening her with a 20cm meat cleaver.\n\n- En route to Wang's residence, Mr. Liu drove with one hand while continuously hitting Ms. Cao with the other, running multiple red lights.\n\n- Ms. Cao temporarily threw the knife out of the car, but Mr. Liu retrieved it and struck her ribs with the blunt side, causing her to vomit blood-streaked matter. She was later diagnosed with a pancreatic tear and internal abdominal bleeding.\n\n- Near Wang's compound, Mr. Liu escalated the violence, dragging Ms. Cao to the car's rear, removing her clothes, and kicking her abdomen and other areas.\n\nLegal Proceedings & Controversy\n\nThe prosecution accused Ms. Cao of intentional homicide, asserting that she knowingly accelerated and swerved the vehicle while Mr. Liu was on the hood, intending to throw him off, which directly led to his death.\n\nThe first-instance court found Ms. Cao guilty of intentional homicide and sentenced her to 11 years imprisonment. Ms. Cao's defense appealed, arguing her actions constituted self-preservation under immediate threat to her life, amounting to justifiable defense or emergency avoidance, and should not be deemed intentional homicide.\n\nThe second trial has concluded its court hearing without an immediate verdict. The case has attracted significant public attention, particularly regarding the boundaries of behavior and legal liability for domestic violence victims in extreme situations.\n\nAppendix: Case Timeline\n\n- 2015: Ms. Cao and Mr. Liu met through introduction.\n\n- August 26, 2021: Ms. Cao confirmed to have suffered a perforated eardrum from domestic violence.\n\n- Early May 21, 2024: The incident occurred; Mr. Liu died, Ms. Cao injured and placed under residential surveillance.\n\n- March 24, 2025: First-instance verdict: Ms. Cao guilty of intentional homicide, sentenced to 11 years.\n\n- October 31, 2025: Second trial commenced.",
    date: "2025年10月31日",
  },
  {
    title: "宜昌男子当街家暴致妻子肋骨骨折仅获刑六个月",
    titleEn: "Yichang Man Sentenced to Six Months for Street Domestic Violence",
    summary: "湖北省枝江市人民法院对一起街头家暴案件作出判决。尤姓男子因妻子拒绝让其无证驾驶，当街对妻子实施暴力，致其4根肋骨骨折。法院以故意伤害罪判处尤某有期徒刑六个月。",
    summaryEn: "The Zhijiang People's Court in Hubei Province sentenced a man surnamed You to six months in prison for a street domestic violence incident. The assault occurred when his wife refused to let him drive without a license, leading to four broken ribs.",
    fullText: "湖北省枝江市人民法院近日对一起街头家暴案件作出判决。一名尤姓男子因妻子拒绝让其无证驾驶，当街对妻子实施暴力，致其4根肋骨骨折。法院以故意伤害罪判处尤某有期徒刑六个月，并赔偿经济损失。\n\n案件发生于枝江市一处红绿灯路口。尤某与妻子王某驾车回家途中，尤某嫌妻子车速过慢，要求无证驾驶被拒后，强行将王某拽出驾驶座推倒在地，并用脚连续踩踏其左胸及背部，导致王某左侧4根肋骨骨折、右膝软组织挫伤。施暴后尤某扬长而去，将受伤妻子遗弃现场。\n\n经司法鉴定，王某左胸损伤构成轻伤二级，右膝损伤构成轻微伤。尤某案后经警方电话通知到案，并如实供述罪行。法院审理认为，尤某行为已构成故意伤害罪，综合考虑其认罪认罚及赔偿情节，依法作出上述判决。\n\n承办法官强调，本案是典型家庭暴力案件，指出\"家庭本应是温暖港湾，任何人不应以家庭之名行犯罪之实\"。法官提醒家暴受害者应及时报警，保留伤情记录、诊疗证据，通过法律途径维护权益。",
    fullTextEn: "The Zhijiang People's Court in Hubei Province recently sentenced a man surnamed You to six months in prison for a street domestic violence incident. The assault occurred when the victim, You's wife Wang, refused to let him drive without a license, leading to her sustaining four broken ribs.\n\nThe incident took place at a traffic light in Zhijiang City. During a drive home, You became impatient with his wife's driving speed and demanded to take over the wheel. When Wang refused due to his lack of a driver's license, You forcibly dragged her out of the driver's seat, pushed her to the ground, and repeatedly stomped on her left chest and back. The attack resulted in four fractured ribs and soft tissue damage to her right knee. You then abandoned his injured wife at the scene.\n\nForensic examination confirmed Wang's left chest injuries constituted second-degree minor wounds, with additional minor injuries to her right knee. You surrendered after being contacted by police and confessed to the crime. The court determined his actions constituted intentional injury, considering his confession and compensation payments in the sentencing.\n\nThe presiding judge emphasized this case represents typical domestic violence, stating \"homes should be warm harbors, no one should commit crimes in the name of family.\" The judge reminded victims to promptly report abuse, preserve evidence of injuries and medical records, and seek protection through legal channels.",
    date: "2024年",
  },
  {
    title: "中国女留学生新加坡坠亡案",
    titleEn: "Chinese Female Student's Fatal Fall in Singapore",
    summary: "2024年5月23日，20岁的中国留学生李佳轩在新加坡某高档公寓坠亡。据其好友透露，她长期遭受父亲的家庭暴力。李佳轩在毕业前不到十天时结束了自己的生命。",
    summaryEn: "On May 23, 2024, 20-year-old Chinese international student Li Jiaxuan fell to her death from an upscale apartment building in Singapore. According to friends, she endured long-term domestic violence from her father. Her life ended less than ten days before graduation.",
    fullText: "2024年5月23日，新加坡某高档公寓楼下来往的行人发现一具年轻女性的遗体。经确认，死者是20岁的中国留学生李佳轩，来自浙江宁波，就读于新加坡加拿大国际学校。这个本该在6月1日参加毕业典礼的年轻生命，就这样在离毕业仅剩不到十天时戛然而止。\n\n李佳轩出生于宁波一个富裕家庭，从小聪颖伶俐，是亲友眼中的\"别人家的孩子\"。然而这个看似完美的家庭在2015年遭遇重大变故——李佳轩的母亲因病去世，当时她年仅11岁。母亲的离世成为她人生的重要转折点。\n\n丧偶后，父亲李先生决定将女儿送往新加坡留学。这个决定表面上是为了给女儿提供更好的教育环境，实则让年幼的李佳轩在失去母亲后，又被迫远离故乡，独自在异国他乡生活。\n\n在新加坡加拿大国际学校期间，李佳轩表现出色。她完成了所有IB课程及考试，并陆续向香港、澳门、澳大利亚的多所名校提交了本科入学申请。在老师和同学眼中，她是个成绩优异、积极参与校园活动的模范生。\n\n然而，这个看似光鲜的留学生活背后，隐藏着不为人知的痛苦。据李佳轩的多位好友透露，她长期遭受父亲的家庭暴力。\"她告诉我们，父亲曾用玻璃瓶把她的脑袋砸出血。\"李佳轩的好友张薇（化名）回忆道。另一位知情人士补充：\"李先生酒品不好，喝醉后就会打女儿。但清醒时又很正常，也很舍得为女儿的教育投资。\"\n\n这种暴力行为并非偶发。李佳轩的另一位好友徐歌（化名）提供了更为详细的证据：\"佳轩说，这两年她回国时都会遭受父亲的暴力。今年三月，她父亲来新加坡，在酒店里仍然对她施暴。\"\n\n根据徐歌提供的聊天记录，李佳轩详细描述了被父亲\"抓着头发往椅子上撞，拿木棍抽打\"的经历。令人震惊的是，已经20岁的她甚至还会被父亲打屁股，导致\"双腿没有完好的皮肤\"。\n\n2024年4月30日，李佳轩在朋友圈分享了一首梁静茹的《暖暖》，配文只有简单的三个字：\"想妈妈。\"这条看似平常的动态引起了朋友们的关注。\"我们察觉不对劲就问她怎么回事。\"徐歌说，\"她给我们发来语音，语气非常无力。她说心里很绝望，回国面对父亲让她感到恐惧，一想到要回去就想从楼上跳下去。\"\n\n在这些最后的语音留言中，李佳轩明确表达了对回家的恐惧和绝望。她说：\"想到之后要跟父亲待在一起那么久，真的很绝望。\"\n\n面对女儿的突然离世，李先生在接受媒体采访时表示，女儿在新加坡学业优秀，即将毕业，原本计划回国等待大学录取结果。对于家暴指控，他仅承认\"打过手心\"，并称女儿身上的伤痕是\"皮肤敏感容易留下淤青\"。\n\n李先生强调，今年5月女儿刚完成所有IB课程，并已经获得了多所名校的入学申请资格。他否认女儿有抑郁倾向，对其死亡原因表示困惑。\n\n新加坡警方初步认定李佳轩的死亡属于意外坠楼，但具体原因仍在调查中。这个结论显然无法平息舆论的质疑。\n\n李佳轩的案例引发了广泛的社会讨论。一方面，她是一个成绩优异的留学生，有着光明的前途；另一方面，她又是一个长期遭受家暴的受害者，最终选择在毕业前结束生命。",
    fullTextEn: "On May 23, 2024, pedestrians discovered the body of a young woman at the base of an upscale apartment building in Singapore. The deceased was identified as 20-year-old Chinese international student Li Jiaxuan from Ningbo, Zhejiang province, who attended the Canadian International School Singapore. Her life ended abruptly less than ten days before her scheduled graduation ceremony on June 1.\n\nLi Jiaxuan was born into an affluent Ningbo family, recognized since childhood as exceptionally bright - what Chinese families often call the \"model child\" among relatives and friends. However, this seemingly perfect family suffered a devastating blow in 2015 when Li's mother passed away from illness, leaving the 11-year-old girl bereft. Her mother's death became a pivotal turning point in her life.\n\nAfter becoming a widower, her father Mr. Li decided to send his daughter to study in Singapore. While ostensibly providing better educational opportunities, this decision forced the young girl to leave her hometown after losing her mother, confronting life alone in a foreign country.\n\nDuring her time at the Canadian International School Singapore, Li Jiaxuan excelled academically. She completed all International Baccalaureate (IB) courses and examinations, and had submitted undergraduate applications to numerous prestigious universities in Hong Kong, Macau, and Australia. Teachers and classmates perceived her as an outstanding student who actively participated in campus activities.\n\nBehind this seemingly successful international student facade, however, lay concealed suffering. According to multiple friends of Li Jiaxuan, she endured long-term domestic violence from her father.\n\n\"She told us her father once broke a glass bottle over her head, making her bleed,\" recalled Zhang Wei (pseudonym), a close friend of Li's. Another acquaintance added: \"Mr. Li has poor behavior when drinking - he would beat his daughter while drunk. But when sober, he acted normally and generously invested in her education.\"\n\nThe abuse wasn't isolated incidents. Another friend, Xu Ge (pseudonym), provided more detailed evidence: \"Jiaxuan said she suffered violence from her father every time she returned to China over the past two years. When her father visited Singapore this March, the abuse continued in their hotel room.\"\n\nAccording to chat records provided by Xu Ge, Li Jiaxuan detailed experiences of being \"dragged by her hair and smashed against chairs, beaten with wooden sticks.\" Shockingly, even at 20 years old, she was still subjected to being spanked by her father, resulting in \"no intact skin on her legs.\"\n\nOn April 30, 2024, Li Jiaxuan shared the song \"Warm\" by Fish Leong on her social media, captioned simply: \"Missing mom.\" This seemingly ordinary post alerted her friends.\n\n\"We sensed something wrong and asked what was happening,\" Xu Ge said. \"She sent us voice messages, speaking in a very weak tone. She said she felt hopeless inside, that returning to face her father terrified her, and that just thinking about going back made her want to jump from a building.\"\n\nIn these final voice messages, Li Jiaxuan explicitly expressed her fear and despair about returning home. She stated: \"Thinking about having to stay with my father for so long afterwards feels truly hopeless.\"\n\nFollowing his daughter's sudden death, Mr. Li told media that his daughter had excelled academically in Singapore, was about to graduate, and had planned to return to China awaiting university admission results. Regarding abuse allegations, he only admitted to \"occasionally hitting her palms,\" claiming her bruises resulted from \"sensitive skin that marks easily.\"\n\nMr. Li emphasized that his daughter had just completed all IB courses in May and had qualified for admission to several prestigious universities. He denied his daughter had depressive tendencies and expressed confusion about her death.\n\nSingapore police preliminarily classified Li Jiaxuan's death as an accidental fall, though specific circumstances remain under investigation. This conclusion has failed to quell public skepticism.\n\nLi Jiaxuan's case has sparked broad social discussion. On one hand, she was an academically outstanding international student with a bright future; on the other, she was a long-term victim of domestic abuse who ultimately chose to end her life just before graduation.",
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
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const displayedItems = showAllNews ? items : items.slice(0, 4);

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

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
          {displayedItems.map((it, i) => {
            // 计算原始items数组中的索引
            const actualIndex = showAllNews ? i : i; // 因为displayedItems是items的连续切片，索引对应
            const isExpanded = expandedItems.has(actualIndex);
            return (
              <Card 
                key={`${actualIndex}-${showAllNews}`} 
                className={`bg-card border-2 border-border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                  isExpanded ? 'md:col-span-2' : ''
                }`}
                onClick={() => toggleExpand(actualIndex)}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-card-foreground mb-2">
                    {it.title}
                  </CardTitle>
                  <CardTitle className="text-lg font-serif text-muted-foreground font-normal">
                    {it.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!isExpanded ? (
                    <>
                      <p className="text-base leading-relaxed text-card-foreground mb-3 font-normal">
                        {it.summary}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground mb-4 font-normal">
                        {it.summaryEn}
                      </p>
                      <p className="mt-4 text-sm text-muted-foreground border-t border-border pt-3">{it.date}</p>
                      <p className="mt-3 text-xs text-primary/70 italic">点击查看全文 / Click to read more</p>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-base leading-relaxed text-card-foreground whitespace-pre-line font-normal">
                          {it.fullText || it.summary}
                        </p>
                      </div>
                      <div className="prose prose-sm max-w-none">
                        <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line font-normal">
                          {it.fullTextEn || it.summaryEn}
                        </p>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground border-t border-border pt-3">{it.date}</p>
                      <p className="mt-3 text-xs text-primary/70 italic">点击收起 / Click to collapse</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
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


