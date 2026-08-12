export default function Footer() {
  const links = ["Home", "About", "Skills", "Projects", "Certificates", "Contact"];

  return (
    <footer className="bg-ink px-6 py-10 text-center">
      <p className="font-serif text-lg font-semibold text-white mb-2">Alleona Divine Racelis</p>
      <p className="text-sm text-white/60 mb-6">Computer Engineering Graduate · Aspiring IT Professional</p>
      <div className="flex flex-wrap justify-center gap-5 mb-6">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-xs text-white/60 hover:text-pink transition-colors">
            {link}
          </a>
        ))}
      </div>
      <p className="text-xs text-white/40">© 2026 Alleona Divine Racelis. All rights reserved.</p>
    </footer>
  );
}