const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center text-white mb-16">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-panel hover:cyber-glow transition-smooth cursor-pointer" onClick={() => window.open('#', '_blank')}>
            <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
              <img 
                src="/lovable-uploads/eff3f406-70b5-41d2-8cd8-01b30b375b80.png" 
                alt="CyberSaarthi Project" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">CyberSaarthi</h3>
            <p className="text-white mb-6 leading-relaxed">
              Security Website for H.A.L Korwa Intranet Framework.
            </p>
            <button className="text-accent hover:text-primary transition-smooth font-medium">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;