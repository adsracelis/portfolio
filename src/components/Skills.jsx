const skillGroups = {
  Programming: ["Python", "Java", "C++", "PHP", "JavaScript", "SQL"],
  Web: ["HTML", "CSS", "Tailwind", "Bootstrap", "React"],
  AI: ["YOLOv11", "OpenCV", "Roboflow", "ONNX"],
  Networking: ["Cisco", "Packet Tracer", "TCP/IP", "VLAN", "Routing"],
  Tools: ["Git", "GitHub", "VS Code", "XAMPP", "Arduino IDE", "MATLAB"],
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skillGroups).map(([category, items]) => (
          <div key={category} className="bg-white dark:bg-card rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-accent mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-sm rounded-lg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}