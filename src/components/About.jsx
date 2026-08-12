import { motion } from "framer-motion";
import { useState } from "react";
import { FiSearch, FiCpu, FiRefreshCw, FiBookOpen } from "react-icons/fi";

const strengths = [
  {
    title: "Detail-Oriented",
    desc: "Careful attention to accuracy in technical work and documentation",
    icon: FiSearch,
    accent: "lavender",
  },
  {
    title: "Problem-Solving",
    desc: "Analytical approach to troubleshooting technical issues",
    icon: FiCpu,
    accent: "pink",
  },
  {
    title: "Adaptable",
    desc: "Comfortable learning and applying new tools and technologies",
    icon: FiRefreshCw,
    accent: "mint",
  },
  {
    title: "Continuous Learner",
    desc: "Actively growing skills through seminars, projects, and self-study",
    icon: FiBookOpen,
    accent: "ink",
  },
];

const stats = [
  { value: 5, suffix: "+", label: "Projects" },
  { value: 2, suffix: "", label: "Months Internship" },
  { value: 8, suffix: "+", label: "Tools Mastered" },
];

const accentMap = {
  lavender: { border: "hover:border-lavender", bg: "bg-lavender/10", text: "text-lavender" },
  pink: { border: "hover:border-pink", bg: "bg-pink/10", text: "text-pink" },
  mint: { border: "hover:border-mint", bg: "bg-mint/20", text: "text-mint" },
  ink: { border: "hover:border-ink", bg: "bg-ink/10", text: "text-ink" },
};

function CountUp({ value, suffix }) {
  const [count, setCount] = useState(0);

  const handleViewportEnter = () => {
    let start = 0;
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
  };

  return (
    <motion.span
      onViewportEnter={handleViewportEnter}
      viewport={{ once: true }}
      className="font-serif text-5xl font-bold text-navy"
    >
      {count}
      {suffix}
    </motion.span>
  );
}

const floatingSymbols = ["</>", "{ }", "#", "()", "=>", "[]"];
const symbolPositions = [
  { top: "5%", left: "8%" },
  { top: "25%", left: "85%" },
  { top: "55%", left: "15%" },
  { top: "15%", left: "60%" },
  { top: "70%", left: "90%" },
  { top: "40%", left: "45%" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-icy-blue/20 px-6 py-24 overflow-hidden">
      {/* Decorative background blob, echoes Hero — bigger + more visible */}
      <div
        className="absolute -top-32 -right-48 w-[32rem] h-[32rem] bg-gradient-to-br from-lavender-light to-pink-light opacity-90 -z-0"
        style={{ borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-mint-light to-lavender-light opacity-70 -z-0"
        style={{ borderRadius: "50% 50% 40% 60% / 45% 55% 45% 55%" }}
      />

      {/* Decorative floating code symbols in background */}
      <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
        {floatingSymbols.map((sym, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-4xl text-lavender/10 select-none"
            style={symbolPositions[i]}
            animate={{ y: [-10, 10, -10], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            {sym}
          </motion.span>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue font-medium text-center mb-1"
        >
          Get to know me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-3xl font-bold text-navy text-center mb-4"
        >
          About Me
        </motion.h2>

        {/* Intro card with photo + decorative quote mark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white rounded-[2rem] p-6 md:p-8 shadow-sm mb-10 overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          {/* Decorative corner accents — bumped visibility */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-light/70 to-transparent rounded-bl-[3rem] -z-0" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-lavender-light/70 to-transparent rounded-tr-[3rem] -z-0" />

          {/* Casual photo — bigger now */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative flex-shrink-0 z-10"
          >
            <div
              className="absolute -inset-2 bg-gradient-to-br from-lavender to-pink -z-10 rotate-3"
              style={{ borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%" }}
            />
            <img
              src="/profile.png"
              alt="Alleona Divine Racelis"
              className="w-64 h-72 md:w-72 md:h-80 object-cover shadow-lg"
              style={{ borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%" }}
            />
            {/* Small badge accent on photo */}
            <div className="absolute -bottom-3 -right-3 bg-mint-light rounded-full px-4 py-2 shadow-md text-sm font-semibold text-navy z-10">
              🎓 CpE Grad
            </div>
          </motion.div>

          <div className="relative flex-1 z-10">
            <span className="absolute -top-6 -left-2 font-serif text-9xl text-lavender/10 select-none pointer-events-none leading-none">
              "
            </span>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative text-text-muted leading-relaxed mb-3 text-[15px]"
            >
              I'm a Computer Engineering graduate from{" "}
              <span className="text-lavender font-semibold">Southern Luzon State University</span> with a
              growing interest in IT support, cybersecurity, and web development. My academic
              journey has given me hands-on experience in building practical software solutions,
              including a machine learning-based attire recognition system for my thesis.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="relative text-text-muted leading-relaxed text-[15px]"
            >
              During my internship at{" "}
              <span className="text-pink font-semibold">Asia United Bank</span>, I gained real-world
              exposure to information security, firewall automation, and IT operations —
              strengthening my interest in a career that combines technical troubleshooting with
              security-minded thinking.
            </motion.p>
          </div>
        </motion.div>

        {/* Animated stat counters — with gradient top bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative grid grid-cols-3 gap-4 mb-10 z-10"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -6 }}
              className="relative bg-gradient-to-br from-white to-lavender-light/40 rounded-2xl py-6 px-4 text-center shadow-sm border border-lavender/10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lavender via-pink to-mint" />
              <CountUp value={s.value} suffix={s.suffix} />
              <p className="text-xs text-text-muted mt-1 tracking-wide font-medium">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Icon-coded strength cards — glow + watermark on hover */}
        <div className="relative grid sm:grid-cols-2 gap-5 z-10">
          {strengths.map((s, i) => {
            const Icon = s.icon;
            const accent = accentMap[s.accent];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`group relative bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-shadow duration-300 border-2 border-transparent ${accent.border} cursor-default overflow-hidden`}
              >
                {/* Subtle code-bracket watermark */}
                <span className="absolute bottom-2 right-3 font-mono text-3xl text-ink/5 select-none">
                  {"</>"}
                </span>

                <motion.div
                  className={`relative w-10 h-10 rounded-full ${accent.bg} flex items-center justify-center mb-3`}
                  whileHover={{ rotate: 12 }}
                >
                  <Icon className={accent.text} size={18} />
                </motion.div>
                <h3 className="relative font-serif font-semibold text-navy mb-1">{s.title}</h3>
                <p className="relative text-sm text-text-muted">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}