import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface FloatingChatButtonProps {
  onClick: () => void;
}

const FloatingChatButton = ({ onClick }: FloatingChatButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-primary hover:shadow-neon transition-all duration-300 transform hover:scale-110 pulse-glow z-40"
      size="lg"
    >
      <MessageCircle className="w-8 h-8 text-primary-foreground" />
      <span className="sr-only">Open Saxiib Chat</span>
      
      {/* Floating label */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-dark-surface border border-primary/20 rounded-lg px-3 py-1 text-sm text-foreground whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
        Chat with Saxiib
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-dark-surface"></div>
      </div>
    </Button>
  );
};

export default FloatingChatButton;