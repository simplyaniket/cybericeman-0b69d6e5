const metrics = [
  { icon: "📈", value: "8x", label: "Average ROI in first year" },
  { icon: "⚡", value: "<3mo", label: "Payback period" },
  { icon: "♻️", value: "93%", label: "Waste reduction achieved" },
  { icon: "💰", value: "15-25%", label: "Revenue recovery on near-expiry" },
];

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/mo",
    color: "border-gray-200",
    features: [
      "Up to 500 SKUs tracked",
      "1 store location",
      "Mobile barcode scanner",
      "Basic analytics dashboard",
      "Email alerts",
      "Standard shelf label templates",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹7,999",
    period: "/mo",
    color: "border-green-500",
    features: [
      "Unlimited SKUs",
      "Up to 5 store locations",
      "AI dynamic pricing engine",
      "Advanced waste analytics",
      "SMS + email alerts",
      "Smart QR shelf labels",
      "Priority support",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    color: "border-gray-800",
    features: [
      "Unlimited stores & SKUs",
      "Custom pricing algorithms",
      "ERP & POS integrations",
      "Dedicated account manager",
      "Custom reporting",
      "SLA guarantees",
      "On-site training",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const BusinessModelSection = () => (
  <section id="pricing" className="py-20" style={{ background: "#0f1a0f" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-green-400 font-bold uppercase tracking-widest text-sm">Pricing & ROI</span>
        <h2 className="text-4xl md:text-5xl text-white mt-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
          The Numbers <span className="text-green-400">Don't Lie</span>
        </h2>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white/5 rounded-2xl p-5 text-center border border-green-900">
            <div className="text-4xl mb-2">{m.icon}</div>
            <div className="text-3xl font-bold text-green-400" style={{ fontFamily: "'Fredoka One', cursive" }}>{m.value}</div>
            <div className="text-white/60 text-sm mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Pricing plans */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 border-2 ${plan.color} ${plan.highlight ? "bg-green-500/10 scale-105" : "bg-white/5"} flex flex-col`}
          >
            {plan.highlight && (
              <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-3">⭐ MOST POPULAR</div>
            )}
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Fredoka One', cursive" }}>{plan.name}</h3>
            <div className="flex items-end gap-1 mt-2 mb-4">
              <span className="text-4xl font-bold text-green-400">{plan.price}</span>
              <span className="text-white/40 mb-1">{plan.period}</span>
            </div>
            <ul className="space-y-2 flex-1 mb-6">
              {plan.features.map((f, j) => (
                <li key={j} className="text-white/70 text-sm flex items-center gap-2">
                  <span className="text-green-400">✓</span> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${plan.highlight ? "bg-green-500 text-white hover:bg-green-400 cartoon-border" : "border border-white/20 text-white hover:bg-white/10"}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessModelSection;
