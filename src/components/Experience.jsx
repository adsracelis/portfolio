export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-sm border-l-4 border-accent">
        <div className="flex justify-between flex-wrap mb-2">
          <h3 className="font-semibold text-lg">Information Security Management Intern</h3>
          <span className="text-sm text-slate-400">Asia United Bank (AUB)</span>
        </div>
        <ul className="list-disc list-inside text-sm text-slate-500 dark:text-slate-300 space-y-1 mt-3">
          <li>Monitored system security and identified vulnerabilities</li>
          <li>Implemented data filtering systems using Forcepoint and Python automation</li>
          <li>Researched data breach incidents and presented findings</li>
          <li>Supported Clean Desk Policy compliance and documentation</li>
        </ul>
      </div>
    </section>
  );
}