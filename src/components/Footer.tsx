import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Visit our FacebookIcon page"
              >
                <FacebookIcon size={32} strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Visit our InstagramIcon page"
              >
                <InstagramIcon size={32} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Visit our TwitterIcon page"
              >
                <TwitterIcon size={32} strokeWidth={1.5} />
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
