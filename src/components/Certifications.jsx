const certs = [
  { title: "PhilSec 2025 Cybersecurity Summit", org: "Manila Marriott Hotel", date: "July 2025" },
  { title: "ICPEP.SE Regional Convention & Challenge", org: "De La Salle Lipa, Batangas", date: "March 2024" },
  { title: "Civil Service Exam — Professional Level", org: "Philippine Civil Service Commission", date: "" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Certifications & Seminars</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {certs.map((c) => (
          <div key={c.title} className="bg-white dark:bg-card rounded-2xl p-5 shadow-sm text-center">
            <h3 className="font-semibold text-sm mb-2">{c.title}</h3>
            <p className="text-xs text-slate-400">{c.org}</p>
            {c.date && <p className="text-xs text-accent mt-1">{c.date}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}