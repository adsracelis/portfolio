import { motion } from "framer-motion";

const strengths = [
  { title: "Detail-Oriented", desc: "Careful attention to accuracy in technical work and documentation" },
  { title: "Problem-Solving", desc: "Analytical approach to troubleshooting technical issues" },
  { title: "Adaptable", desc: "Comfortable learning and applying new tools and technologies" },
  { title: "Continuous Learner", desc: "Actively growing skills through seminars, projects, and self-study" },
];

export default function About() {
  return (
    <section id="about" className="bg-icy-blue/20 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue font-medium text-center mb-2">Get to know me</p>
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-10">About Me</h2>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm mb-10">
            <p className="text-text-muted leading-relaxed mb-4">
              I'm a Computer Engineering graduate from Southern Luzon State University with a
              growing interest in IT support, cybersecurity, and web development. My academic
              journey has given me hands-on experience in building practical software solutions,
              including a machine learning-based attire recognition system for my thesis.
            </p>
            <p className="text-text-muted leading-relaxed">
              During my internship at Asia United Bank, I gained real-world exposure to
              information security, firewall automation, and IT operations — strengthening my
              interest in a career that combines technical troubleshooting with security-minded
              thinking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-muted-blue/20"
              >
                <h3 className="font-serif font-semibold text-navy mb-1">{s.title}</h3>
                <p className="text-sm text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}