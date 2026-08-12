import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["Home", "About", "Tech Stack", "Projects", "Certificates", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-off-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#home" className="font-serif text-xl font-bold text-navy">
          Alleona Racelis
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-text-dark hover:text-blue transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-2xl text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 bg-off-white">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-text-dark"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}