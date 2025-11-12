import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MenuGrid from "./components/MenuGrid";
// import GalleryGrid from "./components/GalleryGrid";
import SupportOthersSection from "./components/SupportOthersSection";
import GlobalMeasuresSection from "./components/GlobalMeasuresSection";
import LawPolicySection from "./components/LawPolicySection";
import HelpInChinaSection from "./components/HelpInChinaSection";
import DVChangeAndFAQSection from "./components/DVChangeAndFAQSection";
import NewsSection from "./components/NewsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PersonalStoriesSection from "./components/PersonalStoriesSection";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <MenuGrid />
          <SupportOthersSection />
          <GlobalMeasuresSection />
          <LawPolicySection />
          <HelpInChinaSection />
          <DVChangeAndFAQSection />
          <PersonalStoriesSection />
          <NewsSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
