const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center text-white mb-16">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-panel hover:cyber-glow transition-smooth">
            <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
              <span className="text-muted-foreground">Project Image</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">CyberSaarthi</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
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