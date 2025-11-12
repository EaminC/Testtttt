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
            <br />
            <span className="text-2xl lg:text-3xl text-muted-foreground font-normal">
              个人故事
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-normal">
            Community voices and lived experiences to foster understanding and solidarity
            <br />
            <span className="text-base">社区声音与真实经历，促进理解与团结</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          <Card className="bg-card border-2 border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-card-foreground">
                小红书账号
                <br />
                <span className="text-lg text-muted-foreground font-normal">Xiaohongshu Account</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-card-foreground mb-4 font-normal">
                我们的小红书账号分享视频和图文内容，记录真实故事，提供支持与资源。
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4 font-normal">
                Our Xiaohongshu account shares videos and images, documenting real stories and providing support and resources.
              </p>
              <a
                href="https://www.xiaohongshu.com/website-login/captcha?redirectPath=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F68b469f80000000019011935%3Fxsec_token%3DYBWXv9b_hZS9ayfXAhFL4d2JTJ2VCzQu_fD-lqoDblEww%3D%26xsec_source%3Dapp_share%26xhsshare%3DWeixinSession%26appuid%3D68b469f80000000019011935%26apptime%3D1762700197%26share_id%3D7a674a04478240fb974d6084641d1982%26exSource%3D&verifyUuid=483aeef6-0271-48f4-a444-e36cee6a9d91&verifyType=124&verifyBiz=461"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 bg-primary text-primary-foreground rounded-md border border-primary hover:bg-primary/90 transition-colors text-base font-normal"
              >
                访问小红书账号 / Visit Xiaohongshu
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-card-foreground">
                分享你的故事
                <br />
                <span className="text-lg text-muted-foreground font-normal">Contribute Your Story</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-card-foreground mb-4 font-normal">
                我们欢迎匿名的个人故事分享。分享经历可以帮助他人感到不再孤单，并学习安全的前进方式。
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground font-normal">
                We welcome anonymized personal stories. Sharing experiences helps others feel less alone and learn safe ways forward.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default PersonalStoriesSection;


