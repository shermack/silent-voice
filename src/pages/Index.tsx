import { useState } from 'react';
// Main portfolio page
import Hero from '@/components/portfolio/Hero';
import ProjectDescription from '@/components/portfolio/ProjectDescription';
import Gallery from '@/components/portfolio/Gallery';
import AboutMe from '@/components/portfolio/AboutMe';
import ChatBot from '@/components/portfolio/ChatBot';
import FloatingChatButton from '@/components/portfolio/FloatingChatButton';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 bg-gradient-glow opacity-20 pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Main content */}
      <Hero />
      <ProjectDescription />
      <Gallery />
      <AboutMe />
      
      {/* Floating chat button */}
      <FloatingChatButton onClick={() => setIsChatOpen(true)} />
      
      {/* Chatbot */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;