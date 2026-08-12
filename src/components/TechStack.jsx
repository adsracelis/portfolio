import { motion } from "framer-motion";

const categories = [
  {
    name: "Programming",
    items: ["Java", "Python", "C++", "JavaScript", "PHP", "SQL", "Assembly"],
  },
  {
    name: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "PHP", "Java Swing", "XAMPP", "PHP PDO"],
  },
  {
    name: "Cybersecurity & Networking",
    items: ["Networking", "Cisco Packet Tracer", "Firewall Concepts", "VAPT Fundamentals", "Cybersecurity"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "VS Code", "Arduino IDE", "MATLAB", "Google Colab"],
  },
  {
    name: "AI & Computer Vision",
    items: ["YOLO", "Roboflow", "CVAT", "ONNX"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue font-medium text-center mb-2">What I work with</p>
        <h2 className="font-serif text-3xl font-bold text-navy text-center mb-12">
          Languages & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-muted-blue/20"
            >
              <h3 className="font-serif font-semibold text-navy mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-icy-blue/30 text-navy text-sm rounded-lg hover:bg-blush/50 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}