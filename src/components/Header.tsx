import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("menu");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "menu", // 国内受害者可以寻找的帮助
        "reviews", // 国外成功案例分享
        "support", // 如何帮助身边的家暴受害者
        "global", // 国外成功的保护措施
        "stories", // personal stories
        "news", // 无法被遗忘的--新闻总结
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "menu", label: "Resources" },
    { id: "reviews", label: "Success Stories" },
    { id: "support", label: "Support" },
    { id: "global", label: "Global" },
    { id: "stories", label: "Personal Stories" },
    { id: "news", label: "News" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <button
            onClick={() => scrollToSection("menu")}
            className="text-2xl lg:text-3xl font-serif font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
            aria-label="Go to Resources"
          >
            silentnomorechina.com
          </button>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="flex gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    onClick={() => scrollToSection(item.id)}
                    className={`px-6 py-3 text-base font-normal cursor-pointer transition-colors ${
                      activeSection === item.id
                        ? "text-primary font-medium"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XIcon size={32} strokeWidth={1.5} />
            ) : (
              <MenuIcon size={32} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <NavigationMenu className="lg:hidden pb-6 bg-background">
            <NavigationMenuList className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-6 py-4 text-base font-normal cursor-pointer transition-colors ${
                      activeSection === item.id
                        ? "text-primary font-medium bg-tertiary"
                        : "text-foreground hover:text-primary hover:bg-tertiary/50"
                    }`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </header>
  );
};

export default Header;
