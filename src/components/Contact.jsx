import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-slate-500 dark:text-slate-300 mb-8">
        I'm open to opportunities in software development, IT support, and cybersecurity.
      </p>
      <div className="flex justify-center gap-6 text-2xl text-accent mb-8">
        <a href="mailto:adsracelis@gmail.com"><FiMail /></a>
        <a href="https://www.linkedin.com/in/alleona-divine-racelis" target="_blank" rel="noreferrer"><FiLinkedin /></a>
        <a href="https://github.com/adsracelis" target="_blank" rel="noreferrer"><FiGithub /></a>
      </div>
      <p className="flex items-center justify-center gap-2 text-sm text-slate-400">
        <FiMapPin /> Lucban, Quezon, Philippines
      </p>
    </section>
  );
}