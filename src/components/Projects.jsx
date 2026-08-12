import { motion } from "framer-motion";

const projects = [
  {
    title: "Student Attire Recognition System",
    desc: "AI-powered attire recognition system using YOLOv11 deployed on Raspberry Pi to detect uniform and casual clothing compliance.",
    tech: ["Python", "YOLOv11", "OpenCV", "ONNX", "Raspberry Pi"],
    github: "https://github.com/adsracelis/student-attire-recognition",
  },
  {
    title: "Restaurant Business Website",
    desc: "Full-stack website for SECO Brothers Restaurant with customer-facing pages and an admin dashboard for menu management.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/adsracelis/restaurant-management-system",
  },
  {
    title: "Java Grade Calculator",
    desc: "Desktop application for automated student grade computation with an intuitive graphical interface.",
    tech: ["Java", "Swing"],
    github: "https://github.com/adsracelis/java-grade-calculator",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-icy-blue/20 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue font-medium text-center mb-2">My work</p>
        <h2 className="font-serif text-3xl font-bold text-navy text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-muted-blue/20"
            >
              <h3 className="font-serif font-semibold text-lg text-navy mb-2">{p.title}</h3>
              <p className="text-sm text-text-muted mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-icy-blue/40 text-navy text-xs rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue text-sm font-medium hover:text-navy transition-colors"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}