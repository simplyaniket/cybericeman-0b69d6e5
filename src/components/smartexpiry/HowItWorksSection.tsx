const steps = [
  {
    num: "01",
    icon: "📱",
    title: "Scan Expiry Date",
    desc: "Staff scans the product barcode using our mobile app. Expiry date is logged instantly into the system.",
  },
  {
    num: "02",
    icon: "🔍",
    title: "Track Shelf Life",
    desc: "SmartExpiry monitors days remaining for every product across your entire store in real-time.",
  },
  {
    num: "03",
    icon: "💰",
    title: "Auto-Adjust Price",
    desc: "As expiry approaches, dynamic pricing automatically kicks in — no staff action required.",
  },
  {
    num: "04",
    icon: "🛒",
    title: "Sell Before Waste",
    desc: "Customers see the discounted price via QR shelf labels and grab deals before products expire.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Process</span>
        <h2 className="text-4xl md:text-5xl text-gray-900 mt-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
          How <span className="text-green-500">SmartExpiry</span> Works
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">From scan to sale in four simple steps.</p>
      </div>

      {/* Desktop: horizontal */}
      <div className="hidden lg:flex items-start justify-between gap-4 relative">
        <div className="absolute top-10 left-[15%] right-[15%] h-0.5 bg-green-200 z-0"></div>
        {steps.map((step, i) => (
          <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-3xl border-4 border-green-500 mb-4">
              <span className="text-3xl">{step.icon}</span>
            </div>
            <div className="text-green-500 font-bold text-sm mb-1">{step.num}</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-2">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 items-start bg-green-50 rounded-2xl p-4">
            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-2xl flex-shrink-0 border-2 border-green-700">
              {step.icon}
            </div>
            <div>
              <div className="text-green-600 font-bold text-xs mb-0.5">{step.num}</div>
              <h3 className="font-bold text-gray-900 text-base mb-1" style={{ fontFamily: "'Fredoka One', cursive" }}>{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
