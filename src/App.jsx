import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBanner from "./components/AboutBanner";
import About from "./components/About";
import SkillsBadges from "./components/SkillsBadges";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutBanner />
      <About />

      {/* Shared gradient wrapper: white → violet → pink → white */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF 0%, #E8E1F9 20%, #FBE8EE 55%, #FFFFFF 100%)",
        }}
      >
        <SkillsBadges />
        <TechStack />
      </div>

      <Projects />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}