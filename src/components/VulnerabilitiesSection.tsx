import vulnerability1 from '@/assets/vulnerability-1.jpg';
import vulnerability2 from '@/assets/vulnerability-2.jpg';
import vulnerability3 from '@/assets/vulnerability-3.jpg';

const VulnerabilitiesSection = () => {
  const vulnerabilities = [
    {
      id: 1,
      cve: "CVE-2024-1234",
      title: "Remote Code Execution Vulnerability",
      description: "Critical vulnerability allowing remote code execution through buffer overflow in network services.",
      image: vulnerability1
    },
    {
      id: 2,
      cve: "CVE-2024-5678",
      title: "SQL Injection in Web Application",
      description: "High severity SQL injection vulnerability found in authentication bypass mechanisms.",
      image: vulnerability2
    },
    {
      id: 3,
      cve: "CVE-2024-9012",
      title: "Cross-Site Scripting (XSS)",
      description: "Medium severity XSS vulnerability affecting user session management and data integrity.",
      image: vulnerability3
    }
  ];

  return (
    <section id="vulnerabilities" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center text-white mb-16">Vulnerabilities</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vulnerabilities.map((vuln) => (
            <div key={vuln.id} className="glass-panel hover:cyber-glow transition-smooth">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={vuln.image} 
                  alt={vuln.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{vuln.cve}</h3>
              <h4 className="text-lg font-semibold text-foreground mb-3">{vuln.title}</h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">{vuln.description}</p>
              <button className="text-accent hover:text-primary transition-smooth font-medium">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VulnerabilitiesSection;