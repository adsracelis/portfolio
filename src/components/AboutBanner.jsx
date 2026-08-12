// AboutBanner.jsx — new file
import { motion } from "framer-motion";

export default function AboutBanner() {
  return (
    <section className="px-6 mb-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-gradient-to-br from-lavender-light/40 to-pink-light/40 rounded-3xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-white"
      >
        <div className="text-center md:text-left">
          <p className="text-xs font-semibold tracking-[0.2em] text-lavender mb-2">
            Computer Engineer Graduate</p>
           <p className="font-serif text-3xl font-bold leading-tight text-ink">
            Building</p>
          <p className="font-serif italic text-3xl font-semibold leading-tight text-pink -mt-1">
            Digital
          </p>
          <p className="font-serif text-3xl font-bold leading-tight text-ink -mt-1">
            Solutions
          </p>
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-muted leading-relaxed max-w-lg">
            I build practical, secure, and user-friendly software solutions —
            blending IT support know-how with a growing passion for cybersecurity
            and web development.
          </p>
        </div>

        <div className="w-20 h-20 rounded-full bg-mint-light flex items-center justify-center text-3xl flex-shrink-0">
          💻
        </div>
      </motion.div>
    </section>
  );
}