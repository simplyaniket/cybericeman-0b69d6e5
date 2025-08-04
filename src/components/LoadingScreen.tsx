import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 floating">
          Welcome to Cyber <span className="text-gradient">ICEMAN</span>
        </h1>
        
        <div className="glass-panel w-96 mx-auto">
          <div className="mb-4">
            <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;