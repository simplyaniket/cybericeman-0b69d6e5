import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Features", id: "features" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Benefits", id: "benefits" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Pricing", id: "pricing" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/90 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-display text-green-700" style={{ fontFamily: "'Fredoka One', cursive" }}>SmartExpiry</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-gray-700 hover:text-green-600 font-semibold transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("cta")}
              className="bg-green-500 text-white px-5 py-2 rounded-lg font-bold text-sm cartoon-border hover:bg-green-600 transition-colors"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-gray-700 hover:text-green-600 font-semibold py-2 border-b border-gray-100"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("cta")}
              className="bg-green-500 text-white px-5 py-3 rounded-lg font-bold cartoon-border mt-2"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
