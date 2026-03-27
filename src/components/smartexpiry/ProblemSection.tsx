const stats = [
  {
    value: "₹1.2Cr",
    label: "Average annual loss per store",
    desc: "Indian retailers lose over a crore rupees yearly to expired inventory that had to be written off or discarded.",
    icon: "💸",
  },
  {
    value: "30%",
    label: "Fresh produce expires unsold",
    desc: "Nearly a third of all fresh fruits, vegetables, and dairy expires on shelves without ever reaching a customer.",
    icon: "🗑️",
  },
  {
    value: "4 hrs",
    label: "Daily staff time wasted",
    desc: "Store staff spend 4+ hours every day manually checking dates, applying stickers, and tracking near-expiry items.",
    icon: "⏰",
  },
];

const ProblemSection = () => (
  <section id="problem" className="py-20" style={{ background: "#0f1a0f" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-green-400 font-bold uppercase tracking-widest text-sm">The Problem</span>
        <h2 className="text-4xl md:text-5xl text-white mt-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
          The Expiry Problem is Costing You <span className="text-green-400">Millions</span>
        </h2>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
          Every Indian retail store faces the same silent drain. Products expire, money vanishes, and the planet pays the price.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-2xl p-8 border border-green-900 bg-white/5 hover:bg-white/10 transition-all group">
            <div className="text-5xl mb-4">{stat.icon}</div>
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
              {stat.value}
            </div>
            <div className="text-white font-bold text-lg mb-2">{stat.label}</div>
            <div className="text-white/50 text-sm leading-relaxed">{stat.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
