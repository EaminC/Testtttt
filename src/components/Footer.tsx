
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src="/images/logo.svg" alt="Site logo" className="h-8 w-8 mb-6" />
            <p className="text-base text-gray-300 leading-relaxed font-normal">
              A community hub to end domestic violence through survivor‑centered support,
              practical resources, and coordinated community response.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold text-gray-100 mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-base text-gray-300 hover:text-secondary transition-colors cursor-pointer font-normal"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="block text-base text-gray-300 hover:text-secondary transition-colors cursor-pointer font-normal"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-base text-gray-300 hover:text-secondary transition-colors cursor-pointer font-normal"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="block text-base text-gray-300 hover:text-secondary transition-colors cursor-pointer font-normal"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-base text-gray-300 hover:text-secondary transition-colors cursor-pointer font-normal"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold text-gray-100 mb-6">
              Connect With Us
            </h4>
            <div className="flex gap-6 mb-6">
              <a
                href="https://www.xiaohongshu.com/website-login/captcha?redirectPath=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F68b469f80000000019011935%3Fxsec_token%3DYBWXv9b_hZS9ayfXAhFL4d2JTJ2VCzQu_fD-lqoDblEww%3D%26xsec_source%3Dapp_share%26xhsshare%3DWeixinSession%26appuid%3D68b469f80000000019011935%26apptime%3D1762700197%26share_id%3D7a674a04478240fb974d6084641d1982%26exSource%3D&verifyUuid=483aeef6-0271-48f4-a444-e36cee6a9d91&verifyType=124&verifyBiz=461"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Visit our Xiaohongshu page"
              >
                <img 
                  src="/images/rednote.jpeg" 
                  alt="Xiaohongshu / RedNote" 
                  className="h-10 w-10 rounded-lg object-cover"
                />
              </a>
            </div>
            <p className="text-base text-gray-300 font-normal">
              Contact: support@silentnomorechina.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400 font-normal">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
