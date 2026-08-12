import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Certificates", "Contact"];

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-lavender ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#home" className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-serif font-bold text-sm">
          AR
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-semibold tracking-wide text-white/80 hover:text-white transition-colors uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        <span className="hidden md:inline-flex items-center px-4 py-2 bg-white/15 rounded-full text-[11px] font-semibold text-white tracking-wide">
          OPEN TO OPPORTUNITIES ✦
        </span>

        <button className="md:hidden text-2xl text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 bg-lavender">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-white"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}