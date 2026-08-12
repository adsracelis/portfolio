import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="bg-icy-blue/20 px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue font-medium text-center mb-2">Where I've worked</p>
        <h2 className="font-serif text-3xl font-bold text-navy text-center mb-12">Experience</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-blue"
        >
          <div className="flex items-start gap-4 mb-5">
            <img
              src="/logos/aub.webp"
              alt="Asia United Bank logo"
              className="w-14 h-14 object-contain rounded-lg border border-muted-blue/20 p-1.5 bg-white flex-shrink-0"
            />

            <div className="flex-1 flex flex-wrap justify-between gap-2">
              <div>
                <h3 className="font-serif font-semibold text-lg text-navy">
                  Information Security Management Intern
                </h3>
                <p className="text-sm text-blue font-medium mt-0.5">Asia United Bank (AUB)</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <FiMapPin className="text-blue" />
                 Ortigas Center, Pasig City, Philippines
              </div>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-text-muted">
            {[
              "Monitored system security and identified vulnerabilities",
              "Implemented data filtering systems using Forcepoint and Python automation",
              "Researched data breach incidents and presented findings",
              "Supported Clean Desk Policy compliance and documentation",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-blue">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}