const testimonials = [
  {
    avatar: "👨‍💼",
    name: "Rajesh Kumar",
    role: "Store Manager",
    company: "BigMart, Pune",
    stars: 5,
    quote: "SmartExpiry saved us over ₹80,000 in the first month alone. The automatic discounting means we never miss an expiring product anymore. Our staff couldn't believe how easy the setup was.",
  },
  {
    avatar: "👩‍💼",
    name: "Priya Sharma",
    role: "Operations Head",
    company: "FreshMart Chain",
    stars: 5,
    quote: "We went from throwing away 200kg of produce weekly to under 30kg. The ROI was immediate and the staff love the simple scanning process. Highly recommend to any fresh food retailer.",
  },
  {
    avatar: "👨‍🍳",
    name: "Anil Patel",
    role: "Owner",
    company: "Daily Needs Supermarket",
    stars: 5,
    quote: "Setup took 2 days, and by day 3 we were already seeing results. The QR shelf labels are brilliant — customers love scanning them for deals. Our footfall has actually increased!",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-green-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Testimonials</span>
        <h2 className="text-4xl md:text-5xl text-gray-900 mt-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
          What Store Managers <span className="text-green-500">Are Saying</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 cartoon-border hover:scale-105 transition-transform">
            <div className="flex text-yellow-400 mb-4 text-xl">
              {"★".repeat(t.stars)}
            </div>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl border-2 border-green-300">
                {t.avatar}
              </div>
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-gray-500 text-xs">{t.role} · {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
