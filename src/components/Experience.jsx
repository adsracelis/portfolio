import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold tracking-[0.25em] text-lavender text-center"
            >
              ✦ WHERE I'VE WORKED
            </motion.p>
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-12">Experience</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-mint-light rounded-3xl p-8"
        >
          <div className="flex items-start gap-4 mb-5">
            <img
              src="/logos/aub.webp"
              alt="Asia United Bank logo"
              className="w-14 h-14 object-contain rounded-2xl border border-white bg-white p-1.5 flex-shrink-0"
            />
            <div className="flex-1 flex flex-wrap justify-between gap-2">
              <div>
                <h3 className="font-serif font-semibold text-lg text-ink">
                  Information Security Management Intern
                </h3>
                <p className="text-sm text-lavender font-medium mt-0.5">Asia United Bank (AUB)</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <FiMapPin className="text-lavender" /> Ortigas Center, Pasig City, Philippines
              </div>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-muted">
            {[
              "Monitored system security and identified vulnerabilities",
              "Implemented data filtering systems using Forcepoint and Python automation",
              "Researched data breach incidents and presented findings",
              "Supported Clean Desk Policy compliance and documentation",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-lavender">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}