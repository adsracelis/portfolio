import { FiMail, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-lavender to-pink rounded-3xl p-10 flex flex-col justify-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-2">Let's work together</h2>
          <p className="text-white/80 text-sm">
            I'm currently open to opportunities in IT support, cybersecurity, and web development.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm space-y-3">
            <a href="mailto:adsracelis@gmail.com" className="flex items-center gap-3 text-sm text-ink hover:text-lavender transition-colors">
              <FiMail className="text-lavender" /> adsracelis@gmail.com
            </a>
            <p className="flex items-center gap-3 text-sm text-ink">
              <FiMapPin className="text-lavender" /> Lucban, Quezon, Philippines
            </p>
          </div>

          <div className="bg-mint-light rounded-3xl p-6 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-ink">✦ LET'S CONNECT</p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/alleona-divine-racelis" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-ink hover:text-lavender transition-colors">
                <FiLinkedin />
              </a>
              <a href="https://github.com/adsracelis" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-ink hover:text-lavender transition-colors">
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}