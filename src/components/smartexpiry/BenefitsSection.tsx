const columns = [
  {
    icon: "🏪",
    title: "For Retailers",
    bg: "bg-green-900",
    textColor: "text-white",
    accentColor: "text-green-400",
    bullets: [
      "Recover 70% of potential expired inventory losses",
      "Reduce manual labor by 4+ hours daily",
      "Improve gross margins by 8-15%",
      "Real-time dashboard for every SKU",
      "Detailed weekly P&L impact reports",
    ],
  },
  {
    icon: "🛒",
    title: "For Customers",
    bg: "bg-green-50",
    textColor: "text-gray-900",
    accentColor: "text-green-600",
    bullets: [
      "Get real discounts on fresh, safe food",
      "Save 20-40% on near-expiry items",
      "Scan QR to check freshness score",
      "Never buy unexpectedly stale products",
      "App-based deal notifications nearby",
    ],
  },
  {
    icon: "🌱",
    title: "For Sustainability",
    bg: "bg-green-700",
    textColor: "text-white",
    accentColor: "text-yellow-300",
    bullets: [
      "40% reduction in food waste per store",
      "Lower carbon footprint from waste disposal",
      "Support circular economy principles",
      "Verifiable ESG reporting for businesses",
      "Contribute to India's net-zero goals",
    ],
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Benefits</span>
        <h2 className="text-4xl md:text-5xl text-gray-900 mt-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
          Everyone <span className="text-green-500">Wins</span> with SmartExpiry
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {columns.map((col, i) => (
          <div key={i} className={`${col.bg} rounded-2xl p-8 cartoon-border flex flex-col`}>
            <div className="text-5xl mb-4">{col.icon}</div>
            <h3 className={`text-2xl font-bold ${col.textColor} mb-4`} style={{ fontFamily: "'Fredoka One', cursive" }}>{col.title}</h3>
            <ul className="space-y-3 flex-1">
              {col.bullets.map((b, j) => (
                <li key={j} className={`flex items-start gap-2 text-sm ${col.textColor === "text-white" ? "text-white/80" : "text-gray-700"}`}>
                  <span className={`${col.accentColor} font-bold mt-0.5`}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
