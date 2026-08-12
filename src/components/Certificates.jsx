import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const certs = [
  {
    title: "Cisco Certification",
    org: "Cisco Networking Academy",
    date: "May 2026",
    desc: "Completed the Introduction to Cybersecurity course, covering online safety, common cyber threats, and how organizations protect against attacks.",
    image: "/certificates/CISCO.jpg",
  },
  {
    title: "IBM Certification",
    org: "IBM SkillsBuild",
    date: "June 2026",
    desc: "Completed Data Analysis with Python, gaining hands-on experience in data handling, analysis, and interpretation using Python tools.",
    image: "/certificates/IBM.jpg",
  },
  {
    title: "PhilSec 2025 Cybersecurity Summit",
    org: "TragePass · Manila Marriott Hotel, Philippines",
    date: "July 2025",
    desc: "Attended a national cybersecurity summit focused on emerging threats, industry best practices, and current trends in information security.",
    image: "/certificates/philsec-2025.jpg",
  },
];

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

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, rotate: dir > 0 ? 8 : -8 }),
    center: { x: 0, opacity: 1, rotate: 0 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, rotate: dir > 0 ? -8 : 8 }),
  };

  return (
    <section id="certificates" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue font-medium text-center mb-2">Recognition</p>
        <h2 className="font-serif text-3xl font-bold text-navy text-center mb-12">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Info for current certificate */}
          <div className="order-2 md:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-muted-blue/20"
>
                <h3 className="font-serif font-semibold text-xl text-navy mb-2">{current.title}</h3>
                <p className="text-sm text-text-muted mb-1">{current.org}</p>
                {current.date && <p className="text-xs text-blue font-medium mb-3">{current.date}</p>}
                <p className="text-sm text-text-muted leading-relaxed">{current.desc}</p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 mt-6 justify-center md:justify-start">
              {certs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-navy" : "w-2 bg-muted-blue/40"
                  }`}
                  aria-label={`Go to certificate ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Swipeable certificate card — landscape friendly */}
          <div className="order-1 md:order-2 relative h-72 flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-0 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md text-navy hover:bg-icy-blue/40 transition-colors"
              aria-label="Previous certificate"
            >
              <FiChevronLeft />
            </button>

            <div className="w-full max-w-md aspect-[4/3] relative overflow-visible">
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
                  className="absolute inset-0 rounded-xl shadow-xl cursor-grab active:cursor-grabbing border-4 border-white bg-white overflow-hidden flex items-center justify-center"
                >
                  {current.image.endsWith(".pdf") ? (
                    <div className="flex flex-col items-center justify-center h-full w-full bg-icy-blue/20 text-navy p-4 text-center">
                      <span className="text-4xl mb-2">📄</span>
                      <span className="text-sm font-medium">{current.title}</span>
                      <span className="text-xs text-text-muted mt-1">Click to open PDF</span>
                    </div>
                  ) : (
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-contain bg-white"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={next}
              className="absolute right-0 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md text-navy hover:bg-icy-blue/40 transition-colors"
              aria-label="Next certificate"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}