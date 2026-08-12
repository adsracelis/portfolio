import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-icy-blue/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-muted-blue/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blush rounded-full" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT: Profile image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-start order-2 md:order-1"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-icy-blue/50 rounded-[2rem] -rotate-3" />
            <img
              src="/profile.jpg"
              alt="Alleona Divine Racelis"
              className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-[2rem] shadow-xl hover:-translate-y-1 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blush rounded-full -z-10" />
          </div>
        </motion.div>

        {/* RIGHT: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2 text-center md:text-left"
        >
          <p className="text-blue font-medium mb-3 tracking-wide">Hello, I'm</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-3 leading-tight">
            Alleona Divine Racelis
          </h1>
          <p className="text-lg text-blue font-medium mb-5">
            IT Support · Cybersecurity · Web Developer
          </p>
          <p className="text-text-muted leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            Computer Engineering graduate passionate about IT support, cybersecurity,
            networking, and web development. I enjoy solving technical problems, building
            practical software solutions, and continuously learning new technologies.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-navy text-white rounded-full font-medium text-sm hover:bg-blue transition-colors"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-navy text-navy rounded-full font-medium text-sm hover:bg-navy hover:text-white transition-colors"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-navy font-medium text-sm hover:text-blue transition-colors"
            >
              Contact Me →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}