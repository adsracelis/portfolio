import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy px-6 py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-icy-blue font-medium mb-2">Get in touch</p>
        <h2 className="font-serif text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-icy-blue/80 mb-8 leading-relaxed">
          I'm open to opportunities in IT support, cybersecurity, networking, and web development.
          Feel free to reach out.
        </p>

        <div className="flex justify-center gap-6 text-2xl text-white mb-8">
          <a href="mailto:adsracelis@gmail.com" className="hover:text-blush transition-colors">
            <FiMail />
          </a>
          <a
            href="https://www.linkedin.com/in/alleona-divine-racelis"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blush transition-colors"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/adsracelis"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blush transition-colors"
          >
            <FiGithub />
          </a>
        </div>

        <p className="flex items-center justify-center gap-2 text-sm text-icy-blue/70">
          <FiMapPin /> Lucban, Quezon, Philippines
        </p>
      </div>
    </section>
  );
}