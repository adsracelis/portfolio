import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiAward } from "react-icons/fi";

const certs = [
  {
    title: "Cisco Certification",
    org: "Cisco Networking Academy",
    date: "May 2026",
    desc: "Completed the Introduction to Cybersecurity course, covering online safety, common cyber threats, and how organizations protect against attacks.",
    image: "/certificates/CISCO.jpg",
    accent: "lavender",
  },
  {
    title: "IBM Certification",
    org: "IBM SkillsBuild",
    date: "June 2026",
    desc: "Completed Data Analysis with Python, gaining hands-on experience in data handling, analysis, and interpretation using Python tools.",
    image: "/certificates/IBM.jpg",
    accent: "pink",
  },
  {
    title: "PhilSec 2025 Cybersecurity Summit",
    org: "TragePass · Manila Marriott Hotel, Philippines",
    date: "July 2025",
    desc: "Attended a national cybersecurity summit focused on emerging threats, industry best practices, and current trends in information security.",
    image: "/certificates/philsec-2025.jpg",
    accent: "mint",
  },
];

const accentMap = {
  lavender: { card: "bg-lavender-light", badge: "bg-lavender", text: "text-lavender" },
  pink: { card: "bg-pink-light", badge: "bg-pink", text: "text-pink" },
  mint: { card: "bg-mint-light", badge: "bg-mint", text: "text-mint" },
};

export default function Certificates() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % certs.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + certs.length) % certs.length);
  };
  const handleDragEnd = (e, info) => {
    if (info.offset.x < -80) next();
    else if (info.offset.x > 80) prev();
  };

  const current = certs[index];
  const accent = accentMap[current.accent];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, rotate: dir > 0 ? 8 : -8 }),
    center: { x: 0, opacity: 1, rotate: 0 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, rotate: dir > 0 ? -8 : 8 }),
  };

  return (
    <section id="certificates" className="relative px-6 py-24 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-lavender-light/40 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-mint-light/30 rounded-full blur-3xl -z-0" />

      {/* Floating sparkles */}
      <motion.span
        className="absolute top-16 right-1/4 text-pink text-xl -z-0 hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.span>
      <motion.span
        className="absolute bottom-24 left-16 text-mint text-lg -z-0 hidden md:block"
        animate={{ y: [0, -8, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        ✦
      </motion.span>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-14 h-14 rounded-full bg-lavender-light flex items-center justify-center mb-4"
          >
            <FiAward className="text-lavender" size={24} />
          </motion.div>
          <p className="text-xs font-bold tracking-[0.25em] text-lavender mb-2">✦ RECOGNITION</p>
          <h2 className="font-serif text-4xl font-bold text-ink">Certificates</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Info for current certificate */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`relative ${accent.card} rounded-3xl p-7 overflow-hidden`}
              >
                <span className="absolute -bottom-6 -right-4 font-serif text-[100px] font-bold text-white/40 select-none leading-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <h3 className="font-serif font-semibold text-xl text-ink mb-2">{current.title}</h3>
                  <p className="text-sm text-muted mb-1">{current.org}</p>
                  {current.date && (
                    <span className={`inline-block px-3 py-1 rounded-full bg-white/70 text-xs font-semibold ${accent.text} mb-4`}>
                      {current.date}
                    </span>
                  )}
                  <p className="text-sm text-muted leading-relaxed">{current.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots + counter */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex gap-2">
                {certs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-lavender" : "w-2 bg-lavender/30"}`}
                    aria-label={`Go to certificate ${i + 1}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted font-medium">
                {index + 1} / {certs.length}
              </span>
            </div>
          </div>

          {/* RIGHT: Stacked swipeable certificate cards */}
          <div className="relative h-80 flex items-center justify-center">
            <button onClick={prev} className="absolute left-0 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-lavender hover:bg-lavender-light hover:scale-110 transition-all" aria-label="Previous certificate">
              <FiChevronLeft />
            </button>

            <div className="w-full max-w-md aspect-[4/3] relative">
              {/* Peek cards behind (stack effect) */}
              {[2, 1].map((offset) => {
                const peekCert = certs[(index + offset) % certs.length];
                return (
                  <div
                    key={offset}
                    className="absolute inset-0 rounded-3xl bg-white border-4 border-white shadow-md"
                    style={{
                      transform: `scale(${1 - offset * 0.05}) translateY(${offset * 10}px) rotate(${offset * 3}deg)`,
                      zIndex: -offset,
                      opacity: 0.6,
                    }}
                  />
                );
              })}

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.title}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={handleDragEnd}
                  onClick={() => window.open(current.image, "_blank")}
                  className="absolute inset-0 rounded-3xl shadow-xl cursor-grab active:cursor-grabbing border-4 border-white bg-white overflow-hidden flex items-center justify-center z-10"
                >
                  {current.image.endsWith(".pdf") ? (
                    <div className={`flex flex-col items-center justify-center h-full w-full ${accent.card} text-ink p-4 text-center`}>
                      <span className="text-4xl mb-2">📄</span>
                      <span className="text-sm font-medium">{current.title}</span>
                      <span className="text-xs text-muted mt-1">Click to open PDF</span>
                    </div>
                  ) : (
                    <img src={current.image} alt={current.title} className="w-full h-full object-contain bg-white" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <button onClick={next} className="absolute right-0 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-lavender hover:bg-lavender-light hover:scale-110 transition-all" aria-label="Next certificate">
              <FiChevronRight />
            </button>

            {/* Swipe hint */}
            <p className="absolute -bottom-8 text-xs text-muted/60 font-medium">← swipe or click arrows →</p>
          </div>
        </div>
      </div>
    </section>
  );
}