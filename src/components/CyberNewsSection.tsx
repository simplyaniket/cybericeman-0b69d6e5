import news1 from '@/assets/news-1.jpg';
import news2 from '@/assets/news-2.jpg';
import news3 from '@/assets/news-3.jpg';

const CyberNewsSection = () => {
  const newsItems = [
    {
      id: 1,
      date: "January 2025",
      title: "New Zero-Day Exploit Discovered",
      description: "Critical vulnerability found in widely-used enterprise software affecting millions of users worldwide.",
      image: news1
    },
    {
      id: 2,
      date: "December 2024",
      title: "Advanced Persistent Threat Campaign",
      description: "Security researchers uncover sophisticated nation-state attack targeting critical infrastructure.",
      image: news2
    },
    {
      id: 3,
      date: "November 2024",
      title: "Ransomware Group Targets Healthcare",
      description: "Major healthcare systems hit by coordinated ransomware attacks, patient data potentially compromised.",
      image: news3
    }
  ];

  return (
    <section id="news" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center text-white mb-16">Cyber News</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div key={news.id} className="glass-panel hover:cyber-glow transition-smooth">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{news.date}</h3>
              <h4 className="text-lg font-semibold text-white mb-3">{news.title}</h4>
              <p className="text-white mb-4 leading-relaxed">{news.description}</p>
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

export default CyberNewsSection;