import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 floating">
          Cyber Security <span className="text-white">Hunter</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8">
          Ethical Hacker and Penetration Tester
        </p>
        
        <Button 
          onClick={() => scrollToSection('projects')}
          className="glass-card hover:cyber-glow transition-smooth mb-8 text-lg px-8 py-3 text-white border-white/20"
        >
          View My Work
        </Button>
        
        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href="https://github.com/simplyaniket" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:cyber-glow transition-smooth"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/aniket-singh-695bb6262" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:cyber-glow transition-smooth"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://x.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:cyber-glow transition-smooth"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="bounce-arrow absolute bottom-8 p-2 glass-card hover:cyber-glow transition-smooth"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;