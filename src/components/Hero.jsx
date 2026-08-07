import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm <br />
          <span className="text-blue-500">
            Alleona Divine Racelis
          </span>
        </h1>

        <h2 className="text-2xl font-semibold mb-3">
          Computer Engineering Graduate
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Software Developer • AI Enthusiast • Cybersecurity Learner
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:border-blue-500 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}