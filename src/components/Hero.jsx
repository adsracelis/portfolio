import { motion, useMotionValue, useSpring } from "framer-motion";

const tools = [
  { name: "Python", logo: "/icons/python.svg", color: "#3776AB" },
  { name: "Java", logo: "/icons/java.svg", color: "#ED8B00" },
  { name: "PHP", logo: "/icons/php.svg", color: "#777BB4" },
  { name: "React", logo: "/icons/react.svg", color: "#61DAFB" },
  { name: "MySQL", logo: "/icons/mysql.svg", color: "#4479A1" },
];

const sparklePositions = [
  { top: "8%", left: "12%", size: 44, duration: 1.8, delay: 0, color: "text-lavender" },
  { top: "18%", left: "40%", size: 32, duration: 2.2, delay: 0.3, color: "text-pink" },
  { top: "10%", left: "60%", size: 50, duration: 1.5, delay: 0.6, color: "text-lavender" },
  { top: "32%", left: "5%", size: 36, duration: 2.5, delay: 0.9, color: "text-pink" },
  { top: "58%", left: "3%", size: 42, duration: 1.7, delay: 0.2, color: "text-lavender" },
  { top: "75%", left: "35%", size: 30, duration: 2.1, delay: 1.1, color: "text-pink" },
  { top: "4%", left: "28%", size: 26, duration: 1.9, delay: 0.5, color: "text-lavender" },
  { top: "45%", left: "20%", size: 38, duration: 2.4, delay: 0.8, color: "text-pink" },
  { top: "14%", left: "70%", size: 36, duration: 1.6, delay: 0.4, color: "text-lavender" },
  { top: "28%", left: "88%", size: 28, duration: 2.3, delay: 1.3, color: "text-pink" },
  { top: "52%", left: "76%", size: 48, duration: 1.4, delay: 0.7, color: "text-lavender" },
  { top: "68%", left: "92%", size: 30, duration: 2.6, delay: 1.5, color: "text-pink" },
  { top: "85%", left: "18%", size: 34, duration: 1.8, delay: 1, color: "text-lavender" },
  { top: "48%", left: "48%", size: 24, duration: 2, delay: 0.6, color: "text-pink" },
  { top: "88%", left: "60%", size: 28, duration: 1.9, delay: 1.2, color: "text-lavender" },
  { top: "6%", left: "85%", size: 26, duration: 2.2, delay: 0.1, color: "text-pink" },
  { top: "8%", left: "50%", size: 30, duration: 2.1, delay: 0.4, color: "text-pink" },
  { top: "22%", left: "56%", size: 40, duration: 1.7, delay: 1, color: "text-lavender" },
  { top: "38%", left: "50%", size: 26, duration: 2.4, delay: 0.7, color: "text-pink" },
  { top: "55%", left: "55%", size: 32, duration: 1.9, delay: 1.4, color: "text-lavender" },
  { top: "70%", left: "50%", size: 22, duration: 2.3, delay: 0.2, color: "text-pink" },
  { top: "82%", left: "58%", size: 36, duration: 1.6, delay: 1.1, color: "text-lavender" },
  // Fills near navbar / top edge
  { top: "3%", left: "42%", size: 20, duration: 2, delay: 0.9, color: "text-lavender" },
  { top: "5%", left: "68%", size: 24, duration: 1.8, delay: 0.3, color: "text-pink" },
  { top: "3%", left: "8%", size: 22, duration: 2.2, delay: 1.3, color: "text-pink" },
  // Fills near tools/bottom-left
  { top: "62%", left: "22%", size: 24, duration: 1.9, delay: 0.5, color: "text-pink" },
  { top: "78%", left: "8%", size: 28, duration: 2.1, delay: 1, color: "text-lavender" },
  { top: "92%", left: "40%", size: 20, duration: 2.3, delay: 0.6, color: "text-pink" },
  // Fills near bottom-right / based-in badge area
  { top: "78%", left: "72%", size: 26, duration: 1.7, delay: 0.8, color: "text-lavender" },
  { top: "90%", left: "82%", size: 22, duration: 2.4, delay: 1.5, color: "text-pink" },
];

function Sparkle({ top, left, size, duration, delay, color }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`absolute pointer-events-none -z-10 ${color}`}
      style={{
        top,
        left,
        width: size,
        height: size,
        filter: "drop-shadow(0 0 8px currentColor)",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0, 1, 0.2, 1, 0],
        scale: [0.5, 1.2, 0.9, 1.2, 0.5],
        rotate: [0, 20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
    </motion.svg>
  );
}

// Splits text into letters for the reveal animation
function AnimatedText({ text, className, delay = 0, showCursor = false }) {
  const letters = Array.from(text);
  return (
    <span className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + i * 0.09,
          }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      {showCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            delay: delay + letters.length * 0.09,
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
          style={{ display: "inline-block", marginLeft: 2 }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}

export default function Hero() {
  // Cursor-following glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Clamp movement range so the glow doesn't drift too far
    mouseX.set(Math.max(-40, Math.min(40, x * 0.1)));
    mouseY.set(Math.max(-40, Math.min(40, y * 0.1)));
  };

  return (
    <section id="home" className="relative px-6 pt-32 pb-20 overflow-hidden">
      {/* Sparkle background */}
      {sparklePositions.map((s, i) => (
        <Sparkle key={i} {...s} />
      ))}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-serif text-lg text-muted mb-1">Hi, I'm</p>

          <h1 className="font-serif italic text-5xl md:text-6xl font-semibold leading-tight mb-1 text-pink">
            <AnimatedText text="Alleona Divine" delay={0.2} />
          </h1>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6 text-ink">
            <AnimatedText text="Racelis" delay={0.2 + 14 * 0.09 + 0.3} showCursor />
          </h1>

          <p className="text-muted mb-3 max-w-md leading-relaxed">
            Computer Engineering graduate who blends technical problem-solving
            with a passion for cybersecurity and clean software design. I love turning
            complex problems into simple, reliable solutions.
          </p>
          <p className="font-serif italic text-lavender mb-8">
            Let's build something reliable together!
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-lavender text-white rounded-full font-medium text-sm hover:bg-lavender/90 transition-colors shadow-md shadow-lavender/30"
          >
            LET'S WORK TOGETHER ↗
          </a>

          <div className="mt-10">
            <p className="text-xs font-medium tracking-wide text-muted mb-3">tools i use</p>
            <div className="flex gap-3">
              {tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="relative group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -6, scale: 1.1 }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-md p-3 cursor-pointer transition-shadow group-hover:shadow-lg"
                  >
                    <img
                      src={t.logo}
                      alt={t.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-medium text-white bg-ink px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {t.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Photo with decorative blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          className="relative flex justify-center md:justify-end pb-8"
        >
          {/* Morphing + cursor-following blob background */}
          <motion.div
            className="absolute w-[560px] h-[680px] bg-gradient-to-br from-lavender-light to-pink-light -z-10"
            style={{ x: glowX, y: glowY }}
            animate={{
              borderRadius: [
                "45% 55% 60% 40% / 55% 45% 55% 45%",
                "55% 45% 45% 55% / 45% 55% 45% 55%",
                "40% 60% 55% 45% / 50% 50% 60% 40%",
                "45% 55% 60% 40% / 55% 45% 55% 45%",
              ],
              rotate: [3, -2, 4, 3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute top-6 right-10 w-28 h-28 bg-pink/40 rounded-full blur-xl" />

          <img
            src="/casual.png"
            alt="Alleona Divine Racelis"
            className="relative w-[470px] h-[610px] object-cover shadow-xl"
            style={{ borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%" }}
          />

          <div className="absolute bottom-10 -right-2 bg-white rounded-full px-6 py-4 shadow-lg text-center z-10">
            <p className="text-[10px] font-semibold text-muted tracking-wide">BASED IN</p>
            <p className="font-serif font-bold text-ink text-base">Quezon, PH</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}