const AboutSection = () => {
  const technologies = [
    'Metasploit',
    'Burp Suite', 
    'Nmap',
    'Python',
    'Linux',
    'Wireshark',
    'Docker',
    'Kali Linux'
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/lovable-uploads/8924a2fc-a066-4b4e-bc10-4ae907a737d9.png" 
              alt="Aniket Singh"
              className="w-80 h-80 mx-auto rounded-xl floating shadow-lg object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <div className="glass-panel fade-in">
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-lg text-white leading-relaxed">
                I'm Aniket Singh a Computer Science student with a singular focus on cybersecurity.
                From my base in Bengaluru, I dive into penetration testing and bug bounty programs, 
                thriving on the constant challenge of breaking things to make them stronger.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-white mb-8">Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="glass-card text-foreground hover:cyber-glow transition-smooth cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;