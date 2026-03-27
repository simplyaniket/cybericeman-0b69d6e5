import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Logo + tagline */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold text-green-400" style={{ fontFamily: "'Fredoka One', cursive" }}>SmartExpiry</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Turning expiry dates into revenue for India's retail ecosystem. Automated markdown management powered by AI.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500/20 flex items-center justify-center transition-colors">
                <Twitter size={16} className="text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500/20 flex items-center justify-center transition-colors">
                <Linkedin size={16} className="text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500/20 flex items-center justify-center transition-colors">
                <Instagram size={16} className="text-gray-400" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              {["Dynamic Pricing", "Barcode Scanner", "Analytics Dashboard", "Smart Labels", "Alert System", "Integrations"].map((item) => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Press Kit", "Blog", "Partners", "Contact"].map((item) => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {["Documentation", "API Reference", "Case Studies", "Help Center", "Status Page", "Privacy Policy"].map((item) => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-gray-500 text-sm">© 2024 SmartExpiry Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="text-gray-500 text-sm">Made with 💚 for India's retail ecosystem</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
