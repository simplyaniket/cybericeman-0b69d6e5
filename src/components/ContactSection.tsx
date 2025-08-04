const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center text-gradient mb-16">Contact me</h2>
        
        <div className="glass-panel text-center">
          <p className="text-xl text-muted-foreground mb-8">
            Feel free to reach out via email.
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Personal Email:</p>
              <a 
                href="mailto:Aniketsinghgl2004@gmail.com"
                className="text-lg text-primary hover:text-accent transition-smooth font-medium"
              >
                Aniketsinghgl2004@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">College Email:</p>
              <a 
                href="mailto:aniket1.mitblr2023@learner.manipal.edu"
                className="text-lg text-primary hover:text-accent transition-smooth font-medium"
              >
                aniket1.mitblr2023@learner.manipal.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;