import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('project-description');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full floating-animation"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
          Silent Voice
        </h1>
        
        {/* Subtitle */}
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          <span className="text-primary">AI-Powered Communication Bridge</span>
          <br />
          Connecting the deaf and hearing communities through technology
        </div>
        
        {/* Description */}
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          A revolutionary desktop application that combines real-time hand gesture recognition, 
          speech-to-text transcription, and intelligent chatbot assistance to break down 
          communication barriers.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300 transform hover:scale-105"
            onClick={scrollToNextSection}
          >
            Explore Project
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="cyber-border hover:bg-primary/10 transition-all duration-300"
          >
            View Demo
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown 
            className="w-8 h-8 text-primary mx-auto cursor-pointer pulse-glow" 
            onClick={scrollToNextSection}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;