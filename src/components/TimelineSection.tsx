interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  description: string;
}

interface TimelineSectionProps {
  id: string;
  title: string;
  items: TimelineItem[];
}

const TimelineSection = ({ id, title, items }: TimelineSectionProps) => {
  return (
    <section id={id} className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center text-white mb-16">{title}</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
          
          <div className="space-y-12">
            {items.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background cyber-glow"></div>
                
                {/* Content */}
                <div className="ml-16 glass-panel slide-up">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-accent font-medium mb-2">{item.subtitle}</p>
                  )}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;