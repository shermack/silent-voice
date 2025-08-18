import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send, Bot } from 'lucide-react';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = ({ isOpen, onClose }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello, I am Silent Voice AI assistant built by Sharmake Salat. My purpose is to bridge the communication gap between the hearing and the deaf community.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();
    
    // Simple rule-based responses
    if (input.includes('silent voice') || input.includes('what is silent voice')) {
      return "Silent Voice is an AI-powered desktop application that enables seamless communication between deaf or hard-of-hearing individuals and the general public through real-time hand gesture recognition, speech-to-text transcription, and intelligent chatbot assistance.";
    }
    
    if (input.includes('how does it work') || input.includes('features')) {
      return "The application works by combining four key technologies: 1) Real-time hand gesture recognition using computer vision, 2) Advanced speech-to-text conversion, 3) An intelligent local AI assistant, and 4) Bidirectional communication bridging between sign language and spoken language.";
    }
    
    if (input.includes('technology') || input.includes('libraries') || input.includes('built')) {
      return "Silent Voice is built using Python with libraries including OpenCV for computer vision, TensorFlow for machine learning, MediaPipe for gesture recognition, SpeechRecognition for voice processing, and NLTK for natural language processing.";
    }
    
    if (input.includes('developer') || input.includes('sharmake') || input.includes('creator')) {
      return "Silent Voice was developed by Sharmake Salat, an AI/ML developer passionate about creating inclusive technology solutions. Sharmake specializes in computer vision, machine learning, and accessibility-focused applications.";
    }
    
    if (input.includes('accessibility') || input.includes('deaf') || input.includes('hearing')) {
      return "This project addresses the critical need for accessible communication tools in our society. It empowers deaf and hard-of-hearing individuals by providing them with advanced technology to communicate more effectively with the hearing community.";
    }
    
    if (input.includes('demo') || input.includes('try') || input.includes('download')) {
      return "The Silent Voice application is currently in development. For demo requests or more information about the project, please reach out to Sharmake Salat through the contact information provided in the About section.";
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! I'm here to help you learn more about the Silent Voice project. Feel free to ask me about its features, technology, or the developer behind it.";
    }
    
    if (input.includes('thank') || input.includes('thanks')) {
      return "You're welcome! I'm glad I could help you learn more about Silent Voice. Is there anything else you'd like to know about the project?";
    }
    
    // Default response
    return "I'm here to help you learn about the Silent Voice project! You can ask me about what Silent Voice is, how it works, the technology behind it, or about the developer Sharmake Salat. What would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-6 pointer-events-none">
      <Card className={`glass-surface border-primary/20 w-96 h-[600px] flex flex-col pointer-events-auto ${isOpen ? 'slide-in-right' : 'slide-out-right'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Saxiib</h3>
              <p className="text-xs text-primary">Silent Voice Assistant</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-destructive/20">
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-dark-surface border border-primary/20 text-foreground'
                    : 'bg-gradient-primary text-primary-foreground'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-primary/20">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Silent Voice..."
              className="flex-1 bg-dark-surface border-primary/20 focus:border-primary"
            />
            <Button 
              onClick={handleSendMessage}
              size="sm"
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatBot;