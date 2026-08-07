export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-sm">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          I'm a Computer Engineering graduate from Southern Luzon State University
          who enjoys building software solutions using web development, AI, and
          networking technologies.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          During my internship at Asia United Bank, I gained hands-on exposure to
          information security, technical documentation, firewall automation, and
          IT operations.
        </p>
        <div className="flex flex-wrap gap-2">
          {["IT Support", "Software Engineering", "QA Testing", "Cybersecurity", "Cloud Computing"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}