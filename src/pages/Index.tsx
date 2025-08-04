import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import VulnerabilitiesSection from '@/components/VulnerabilitiesSection';
import NotesSection from '@/components/NotesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const cyberNewsItems = [
    {
      date: "January 2025",
      title: "New Zero-Day Exploit Discovered",
      description: "Critical vulnerability found in widely-used enterprise software affecting millions of users worldwide."
    },
    {
      date: "December 2024", 
      title: "Advanced Persistent Threat Campaign",
      description: "Security researchers uncover sophisticated nation-state attack targeting critical infrastructure."
    },
    {
      date: "November 2024",
      title: "Ransomware Group Targets Healthcare",
      description: "Major healthcare systems hit by coordinated ransomware attacks, patient data potentially compromised."
    }
  ];

  const educationItems = [
    {
      date: "Summer 2024",
      title: "Summer Internship",
      subtitle: "Hindustan Aeronautics Limited (HAL), Korwa",
      description: "Worked in the IT Department to build the 'CyberSaarthi' website for H.A.L's intranet framework."
    },
    {
      date: "2023 - Present", 
      title: "Pursuing B.Tech in Computer Science",
      subtitle: "Manipal Academy of Higher Education (MAHE), Bengaluru",
      description: "Focusing on cybersecurity, network protocols, and secure software development."
    },
    {
      date: "Graduated 2022",
      title: "High School", 
      subtitle: "H.A.L School, Korwa, Uttar Pradesh",
      description: "Completed secondary education with a focus on science and mathematics."
    }
  ];

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <div className="relative">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <TimelineSection 
              id="news" 
              title="Cyber News" 
              items={cyberNewsItems} 
            />
            <VulnerabilitiesSection />
            <TimelineSection 
              id="education" 
              title="Education & Experience" 
              items={educationItems} 
            />
            <NotesSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
