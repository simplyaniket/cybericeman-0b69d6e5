const features = [
  {
    icon: "🎯",
    title: "Dynamic Pricing Engine",
    desc: "AI-powered pricing that factors expiry date, product category, and historical demand to set the optimal discount level.",
  },
  {
    icon: "📱",
    title: "Mobile Barcode Scanner",
    desc: "Scan products in seconds from any iOS or Android device. Bulk scan mode handles 500+ SKUs per hour.",
  },
  {
    icon: "🖥️",
    title: "Retail Dashboard",
    desc: "Real-time view of all at-risk inventory across your store. See what needs attention at a glance.",
  },
  {
    icon: "📉",
    title: "Waste Analytics",
    desc: "Weekly and monthly reports on waste reduction, revenue recovery, and inventory turnover rates.",
  },
  {
    icon: "🏷️",
    title: "Smart Shelf Labels",
    desc: "E-ink or printable QR labels for live pricing display. Customers scan to see real-time price and freshness.",
  },
  {
    icon: "🔔",
    title: "Alert System",
    desc: "Automatic staff alerts when products hit discount thresholds. Email, SMS, and in-app notifications.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-20" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Features</span>
        <h2 className="text-4xl md:text-5xl text-gray-900 mt-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
          Everything You Need to Stop <span className="text-green-500">Wasting Food & Money</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-green-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-default"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">{f.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
