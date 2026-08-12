import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiCode, FiCpu, FiDatabase, FiTerminal } from "react-icons/fi";

const projects = [
  {
    index: "01",
    title: "Student Attire Recognition System",
    tag: "AI Capstone Project",
    desc: "AI-powered attire recognition using YOLOv11 deployed on Raspberry Pi.",
    tech: ["Python", "YOLOv11", "OpenCV"],
    github: "https://github.com/adsracelis/student-attire-recognition",
    bg: "bg-mint-light",
    dot: "bg-mint",
    numberColor: "text-mint/60",
    rotate: -1,
  },
  {
    index: "02",
    title: "Restaurant Business Website",
    tag: "Full-Stack Website",
    desc: "A responsive restaurant site with customer view and admin dashboard.",
    tech: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/adsracelis/restaurant-management-system",
    bg: "bg-pink-light",
    dot: "bg-pink",
    numberColor: "text-pink/60",
    rotate: 1,
  },
];

const floatingIcons = [
  { Icon: FiCode, top: "10%", left: "6%", size: 34, color: "text-lavender", duration: 6 },
  { Icon: FiCpu, top: "68%", left: "3%", size: 40, color: "text-mint", duration: 7 },
  { Icon: FiDatabase, top: "14%", left: "90%", size: 32, color: "text-pink", duration: 5.5 },
  { Icon: FiTerminal, top: "76%", left: "92%", size: 38, color: "text-lavender", duration: 6.5 },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-20 overflow-hidden">
      {/* Soft glowing orbs */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-lavender-light/50 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-pink-light/40 rounded-full blur-3xl -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-mint-light/20 rounded-full blur-3xl -z-0" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 -z-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #B9A9E8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating drifting icons */}
      {floatingIcons.map(({ Icon, top, left, size, color, duration }, i) => (
        <motion.div
          key={i}
          className={`absolute ${color} pointer-events-none -z-0 hidden md:flex items-center justify-center bg-white rounded-2xl shadow-md p-3`}
          style={{ top, left }}
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size={size} strokeWidth={1.8} />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold tracking-[0.25em] text-lavender mb-3"
          >
            ✦ PROJECTS
          </motion.p>

          <a
            href="https://github.com/adsracelis"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-lavender hover:text-ink transition-colors group"
          >
            VIEW ALL PROJECTS
            <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
              whileHover={{ rotate: 0, scale: 1.02, y: -8 }}
              className={`relative ${p.bg} rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden group`}
            >
              <span className={`absolute -top-4 -right-2 font-serif text-[120px] font-bold ${p.numberColor} select-none leading-none pointer-events-none`}>
                {p.index}
              </span>

              <span className={`absolute top-6 right-6 w-2.5 h-2.5 rounded-full ${p.dot} animate-pulse`} />

              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold text-ink mb-1">{p.title}</h3>
                <p className="text-xs font-medium text-muted mb-3">{p.tag}</p>
                <p className="text-sm text-muted mb-5 leading-relaxed">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, idx) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + idx * 0.05 }}
                      whileHover={{ y: -3, scale: 1.08 }}
                      className="px-3 py-1 bg-white/70 text-ink text-xs rounded-full font-medium"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm font-semibold text-ink hover:text-lavender transition-colors group/link"
                  >
                    VIEW CASE STUDY
                    <FiArrowUpRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center text-ink hover:bg-white hover:scale-110 transition-all"
                    aria-label="View on GitHub"
                  >
                    <FiGithub size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}