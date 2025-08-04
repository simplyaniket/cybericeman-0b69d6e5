const NotesSection = () => {
  return (
    <section id="notes" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center text-gradient mb-16">Notes</h2>
        
        <div className="glass-panel">
          <h3 className="text-2xl font-bold text-foreground mb-6">Cybersecurity Research & Analysis</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This section contains my ongoing research notes, vulnerability analysis, and penetration testing methodologies. 
              I document various attack vectors, defensive strategies, and emerging threats in the cybersecurity landscape.
            </p>
            <p>
              Key areas of focus include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Web application security testing procedures</li>
              <li>Network penetration testing methodologies</li>
              <li>Malware analysis and reverse engineering techniques</li>
              <li>Social engineering attack vectors and prevention</li>
              <li>Zero-day vulnerability research and disclosure</li>
              <li>Incident response and forensic investigation processes</li>
            </ul>
            <p>
              These notes serve as both a personal knowledge base and a resource for the cybersecurity community. 
              Regular updates include new attack patterns, defense mechanisms, and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesSection;