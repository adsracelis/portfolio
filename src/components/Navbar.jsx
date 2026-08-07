import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const links = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Certifications",
  "Contact",
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-2xl font-bold text-blue-500"
        >
          AD Racelis
        </a>

        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              {link}
            </a>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="text-xl"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium"
            >
              {link}
            </a>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="text-xl w-fit"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      )}
    </nav>
  );
}