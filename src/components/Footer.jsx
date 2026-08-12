export default function Footer() {
  const links = ["Home", "About", "Tech Stack", "Projects", "Certificates", "Contact"];

  return (
    <footer className="bg-navy border-t border-blue/30 px-6 py-10 text-center">
      <p className="font-serif text-lg font-semibold text-white mb-2">Alleona Divine Racelis</p>
      <p className="text-sm text-icy-blue/70 mb-6">
        Computer Engineering Graduate · Aspiring IT Professional
      </p>
      <div className="flex flex-wrap justify-center gap-5 mb-6">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="text-xs text-icy-blue/70 hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-blue">© 2026 Alleona Divine Racelis. All rights reserved.</p>
    </footer>
  );
}