const solutions = [
  {
    icon: "🤖",
    title: "Automatic Discounting",
    desc: "Prices reduce automatically based on expiry countdown. No manual intervention needed — set the rules once and let SmartExpiry do the rest.",
  },
  {
    icon: "📅",
    title: "Expiry Date Tracking",
    desc: "Scan barcodes in seconds to log expiry dates. Our mobile app handles hundreds of SKUs in minutes, not hours.",
  },
  {
    icon: "🏷️",
    title: "Smart Price Labels",
    desc: "QR-enabled shelf labels that update in real-time. Customers scan to see current price, freshness score, and discount.",
  },
  {
    icon: "📊",
    title: "Waste Analytics",
    desc: "Track what's selling, what's not, and why. Get weekly reports with actionable insights to improve your buying decisions.",
  },
];

const SolutionSection = () => (
  <section id="solution" className="py-20 bg-green-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-green-600 font-bold uppercase tracking-widest text-sm">The Solution</span>
        <h2 className="text-4xl md:text-5xl text-gray-900 mt-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
          SmartExpiry: Your Automatic <span className="text-green-500">Markdown Manager</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          One platform that monitors, prices, and sells your near-expiry inventory — automatically.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 cartoon-border hover:scale-105 transition-transform cursor-default"
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>{s.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
