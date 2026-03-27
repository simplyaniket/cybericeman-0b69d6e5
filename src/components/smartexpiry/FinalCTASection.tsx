import { scrollTo } from "./utils";
import { STORES_COUNT } from "./constants";

const FinalCTASection = () => {
  return (
    <section id="cta" className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1a0f 0%, #1a3a1a 100%)" }}>
      {/* Floating food emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-10 left-[5%] text-5xl float-animation opacity-20">🥦</span>
        <span className="absolute top-20 right-[8%] text-4xl float-animation-delay opacity-15">🍊</span>
        <span className="absolute bottom-10 left-[15%] text-4xl float-animation-delay-2 opacity-20">🥚</span>
        <span className="absolute top-1/2 left-[2%] text-3xl float-animation opacity-15">🧈</span>
        <span className="absolute bottom-20 right-[5%] text-5xl float-animation-delay opacity-20">🍇</span>
        <span className="absolute top-5 left-1/2 text-4xl float-animation-delay-2 opacity-15">🥩</span>
        <span className="absolute bottom-5 right-1/3 text-3xl float-animation opacity-20">🧁</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2 mb-6">
          <span className="text-green-400 text-sm font-bold">🎯 Limited onboarding slots available this month</span>
        </div>
        <h2 className="text-4xl md:text-6xl text-white mb-6" style={{ fontFamily: "'Fredoka One', cursive" }}>
          Stop Losing Money to <span className="text-green-400">Expired Inventory.</span>
        </h2>
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Join {STORES_COUNT} retailers already using SmartExpiry to turn expiry dates into revenue. Setup in 48 hours, ROI in 30 days.
        </p>
        <button
          onClick={() => scrollTo("pricing")}
          className="bg-green-500 text-white px-10 py-5 rounded-xl font-bold text-xl cartoon-border hover:bg-green-400 transition-all pulse-green inline-flex items-center gap-2"
        >
          🚀 Schedule a Free Demo
        </button>
        <div className="mt-4 text-white/40 text-sm">
          No credit card required · Setup in 48 hours · Cancel anytime
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/40 text-sm">
          <span>🔒 ISO 27001 Certified</span>
          <span>🏆 Startup India Recognized</span>
          <span>⭐ 4.9/5 on G2</span>
          <span>🇮🇳 Made in India</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
