const projects = [
  {
    title: "Student Attire Recognition System",
    emoji: "🎓",
    desc: "AI-powered attire recognition system using YOLOv11 deployed on Raspberry Pi to detect uniform and casual clothing compliance.",
    tech: ["Python", "YOLOv11", "OpenCV", "ONNX", "Raspberry Pi"],
    github: "https://github.com/adsracelis/student-attire-recognition",
    demo: "#",
  },
  {
    title: "Restaurant Business Website",
    emoji: "🍔",
    desc: "Full-stack website for SECO Brothers Restaurant with customer-facing pages and an admin dashboard for menu management.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/adsracelis/restaurant-management-system",
    demo: "#",
  },
  {
    title: "Java Grade Calculator",
    emoji: "🧮",
    desc: "Desktop application for automated student grade computation with an intuitive graphical interface.",
    tech: ["Java", "Swing"],
    github: "https://github.com/adsracelis/java-grade-calculator",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white dark:bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl mb-3">{p.emoji}</div>
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-300 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm font-medium">
              <a href={p.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">GitHub</a>
              <a href={p.demo} target="_blank" rel="noreferrer" className="text-accent hover:underline">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}