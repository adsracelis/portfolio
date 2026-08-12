import { motion } from "framer-motion";
import { FiCode, FiShield, FiServer, FiTool, FiDatabase, FiCpu } from "react-icons/fi";

const skills = [
  { icon: <FiCode />, label: "Web Development", target: "web-development", accent: "lavender", rotate: -3 },
  { icon: <FiShield />, label: "Cybersecurity", target: "cybersecurity-networking", accent: "pink", rotate: 2 },
  { icon: <FiServer />, label: "IT Support", target: "cybersecurity-networking", accent: "mint", rotate: -2 },
  { icon: <FiDatabase />, label: "Database Mgmt", target: "programming", accent: "lavender", rotate: 3 },
  { icon: <FiCpu />, label: "AI & Vision", target: "ai-computer-vision", accent: "pink", rotate: -3 },
  { icon: <FiTool />, label: "Troubleshooting", target: "tools", accent: "mint", rotate: 2 },
];

const accentMap = {
  lavender: { bg: "bg-lavender-light", ring: "hover:ring-lavender", icon: "text-lavender", dot: "bg-lavender" },
  pink: { bg: "bg-pink-light", ring: "hover:ring-pink", icon: "text-pink", dot: "bg-pink" },
  mint: { bg: "bg-mint-light", ring: "hover:ring-mint", icon: "text-mint", dot: "bg-mint" },
};

export default function SkillsBadges() {
  const handleClick = (targetSlug) => {
    const el = document.getElementById(`tech-${targetSlug}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("ring-4");
    setTimeout(() => el.classList.remove("ring-4"), 2000);
  };

  return (
    <section className="relative px-6 pt-16 pb-10 overflow-hidden">
      {/* Floating decorative sparkles */}
      <div className="absolute top-4 right-10 w-3 h-3 bg-pink rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-mint rounded-full opacity-60 animate-pulse" style={{ animationDelay: "0.5s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold tracking-[0.20em] text-lavender mb-6"
        >
          ✦ MY SKILLS
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
          {skills.map((s, i) => {
            const accent = accentMap[s.accent];
            return (
              <motion.button
                key={s.label}
                onClick={() => handleClick(s.target)}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: s.rotate }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, type: "spring" }}
                whileHover={{ rotate: 0, scale: 1.08, y: -6 }}
                whileTap={{ scale: 0.94 }}
                className={`relative ${accent.bg} rounded-2xl p-5 flex flex-col items-center gap-3 text-center shadow-sm hover:shadow-lg ring-2 ring-transparent ${accent.ring} transition-shadow cursor-pointer`}
              >
                <span className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                <span className={`text-2xl ${accent.icon}`}>{s.icon}</span>
                <span className="text-xs font-semibold text-ink">{s.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}