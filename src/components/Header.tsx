const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="glass-card">
          <span className="text-xl font-bold text-white">ICEMAN</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Cyber News', id: 'news' },
            { name: 'Vulnerabilities', id: 'vulnerabilities' },
            { name: 'Projects', id: 'projects' },
            { name: 'Notes', id: 'notes' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;