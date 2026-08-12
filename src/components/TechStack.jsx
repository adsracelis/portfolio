import { motion } from "framer-motion";
import { FiCode, FiGlobe, FiShield, FiTool, FiCpu } from "react-icons/fi";

const categories = [
  {
    slug: "programming",
    name: "Programming",
    icon: FiCode,
    color: "bg-lavender-light",
    dotColor: "bg-lavender",
    rotate: -1,
    items: ["Java", "Python", "C++", "JavaScript", "PHP", "SQL", "Assembly"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    icon: FiGlobe,
    color: "bg-pink-light",
    dotColor: "bg-pink",
    rotate: 1,
    items: ["HTML", "CSS", "JavaScript", "PHP", "Java Swing", "XAMPP", "PHP PDO", "React", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    slug: "cybersecurity-networking",
    name: "Cybersecurity & Networking",
    icon: FiShield,
    color: "bg-mint-light",
    dotColor: "bg-mint",
    rotate: -1,
    items: ["Networking", "Cisco Packet Tracer", "Firewall Concepts", "VAPT Fundamentals", "Cybersecurity"],
  },
  {
    slug: "tools",
    name: "Tools",
    icon: FiTool,
    color: "bg-lavender-light",
    dotColor: "bg-lavender",
    rotate: 1,
    items: ["Git", "GitHub", "VS Code", "Arduino IDE", "MATLAB", "Google Colab"],
  },
  {
    slug: "ai-computer-vision",
    name: "AI & Computer Vision",
    icon: FiCpu,
    color: "bg-pink-light",
    dotColor: "bg-pink",
    rotate: -1,
    items: ["YOLO", "Roboflow", "CVAT", "ONNX"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="relative px-6 pt-6 pb-20 overflow-hidden">
      {/* Decorative floating blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-lavender-light/40 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint-light/40 rounded-full blur-3xl -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold tracking-[0.20em] text-lavender mb-3"
        >
          ✦ WHAT I WORK WITH
        </motion.p>
        <h2 className="font-serif text-3xl font-bold text-ink mb-2">Languages & Technologies</h2>
        <p className="text-muted text-sm mb-10 max-w-md">
          A curated toolkit I've built through projects, internships, and a healthy dose of curiosity.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                id={`tech-${cat.slug}`}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: cat.rotate }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className={`${cat.color} rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-500 ring-0 ring-lavender ring-offset-4 ring-offset-cream relative overflow-hidden`}
              >
                <div className={`absolute -top-6 -right-6 w-24 h-24 ${cat.dotColor} opacity-10 rounded-full`} />

                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className={`w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center`}>
                    <Icon className="text-ink" size={18} />
                  </div>
                  <h3 className="font-serif font-semibold text-ink">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {cat.items.map((item, idx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + idx * 0.03 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 bg-white/80 text-ink text-sm rounded-full hover:bg-white hover:shadow-sm transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}