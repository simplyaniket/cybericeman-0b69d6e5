import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

const products = [
  { emoji: "🥛", name: "Organic Milk 1L", original: 85, days: 2 },
  { emoji: "🧀", name: "Cheddar Cheese 200g", original: 140, days: 4 },
  { emoji: "🥕", name: "Fresh Carrots 500g", original: 45, days: 1 },
  { emoji: "🍎", name: "Apple Pack 6pc", original: 120, days: 3 },
];

const getDiscountedPrice = (original: number, days: number) => {
  if (days <= 1) return Math.round(original * 0.6);
  if (days <= 2) return Math.round(original * 0.7);
  if (days <= 3) return Math.round(original * 0.8);
  return Math.round(original * 0.9);
};

const getDiscountPct = (original: number, days: number) => {
  const disc = getDiscountedPrice(original, days);
  return Math.round(((original - disc) / original) * 100);
};

const DashboardMockup = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % products.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 cartoon-border-green max-w-sm mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <span className="text-white/60 text-xs ml-2 font-mono">SmartExpiry Dashboard</span>
      </div>
      <div className="space-y-2">
        {products.map((p, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-3 rounded-xl transition-all duration-500 ${i === activeIdx ? "bg-green-500/30 scale-105" : "bg-white/5"}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{p.emoji}</span>
              <div>
                <div className="text-white text-xs font-semibold">{p.name}</div>
                <div className="text-white/60 text-xs">⏰ {p.days}d remaining</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white/40 text-xs line-through">₹{p.original}</div>
              <div className="text-green-400 font-bold text-sm">₹{getDiscountedPrice(p.original, p.days)}</div>
              <div className="bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded">{getDiscountPct(p.original, p.days)}% OFF</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-white/10 flex justify-between text-xs text-white/60">
        <span>🟢 Auto-pricing active</span>
        <span>4 items managed</span>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1a0f 0%, #1a2e1a 50%, #0f2d1f 100%)" }}>
      {/* Floating food decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-20 left-10 text-5xl float-animation opacity-30">🥛</span>
        <span className="absolute top-40 right-20 text-4xl float-animation-delay opacity-20">🧀</span>
        <span className="absolute bottom-40 left-20 text-4xl float-animation-delay-2 opacity-25">🥕</span>
        <span className="absolute top-60 left-1/3 text-3xl float-animation opacity-20">🍎</span>
        <span className="absolute bottom-60 right-10 text-5xl float-animation-delay opacity-30">🥗</span>
        <span className="absolute top-1/4 right-1/3 text-3xl float-animation-delay-2 opacity-15">🧃</span>
        <span className="absolute bottom-20 left-1/2 text-4xl float-animation opacity-20">🫙</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2 mb-6">
              <span className="text-green-400 text-sm font-bold">🚀 Now live in 2,400+ stores across India</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6" style={{ fontFamily: "'Fredoka One', cursive" }}>
              Turn <span className="text-green-400">Expiry Dates</span> Into Revenue
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
              SmartExpiry automatically discounts products as they near expiry — reducing waste, recovering margin, and delighting deal-hungry shoppers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("cta")}
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg cartoon-border hover:bg-green-400 transition-all flex items-center gap-2 pulse-green"
              >
                Book a Free Demo <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollTo("how-it-works")}
                className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Play size={20} /> See How It Works
              </button>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="flex justify-center lg:justify-end">
            <DashboardMockup />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
          {[
            { value: "₹2.4Cr", label: "Saved for retailers" },
            { value: "93%", label: "Waste reduction" },
            { value: "2,400+", label: "Stores onboarded" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400" style={{ fontFamily: "'Fredoka One', cursive" }}>{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
