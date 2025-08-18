import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Mic, Hand, MessageSquare, Eye, Cpu, Database, Zap, BarChart3, Headphones, Globe, Code2 } from 'lucide-react';

const ProjectDescription = () => {
  const features = [
    {
      icon: Hand,
      title: "Hand Gesture Recognition",
      description: "Real-time computer vision to interpret sign language and hand gestures"
    },
    {
      icon: Mic,
      title: "Speech-to-Text",
      description: "Advanced speech recognition for seamless voice-to-text conversion"
    },
    {
      icon: Brain,
      title: "AI Assistant",
      description: "Intelligent local chatbot for enhanced communication support"
    },
    {
      icon: MessageSquare,
      title: "Bidirectional Communication",
      description: "Two-way communication bridge between hearing and deaf communities"
    }
  ];

  const libraries = [
    {
      name: "TensorFlow",
      icon: Brain,
      category: "Deep Learning",
      description: "The main deep learning library used to train and run the gesture recognition model.",
      purpose: "Helps the system \"learn\" hand signs and translate them into text.",
      color: "text-neon-cyan"
    },
    {
      name: "Keras", 
      icon: Zap,
      category: "Deep Learning API",
      description: "High-level API for TensorFlow.",
      purpose: "Makes it easier to design, train, and test deep learning models.",
      color: "text-neon-purple"
    },
    {
      name: "OpenCV",
      icon: Eye,
      category: "Computer Vision",
      description: "Used for handling video input from the camera.",
      purpose: "Processes each video frame, flips images, and helps detect hands before prediction.",
      color: "text-neon-green"
    },
    {
      name: "MediaPipe",
      icon: Hand,
      category: "Hand Tracking",
      description: "A Google library specialized in hand and body tracking.",
      purpose: "Detects hand landmarks (points on fingers and palm) that are later fed to the AI model.",
      color: "text-accent"
    },
    {
      name: "NumPy",
      icon: Database,
      category: "Mathematical Computing",
      description: "Handles mathematical calculations.",
      purpose: "Converts hand coordinates into data the model can understand.",
      color: "text-primary"
    },
    {
      name: "PyQt5",
      icon: Code2,
      category: "GUI Framework",
      description: "Used to build the Graphical User Interface (GUI).",
      purpose: "Displays the live video, the recognized sign language, and speech-to-text results.",
      color: "text-neon-cyan"
    },
    {
      name: "SpeechRecognition",
      icon: Mic,
      category: "Audio Processing",
      description: "Converts spoken words into text.",
      purpose: "Enables two-way communication between sign language users and non-signers.",
      color: "text-neon-purple"
    },
    {
      name: "PyAudio",
      icon: Headphones,
      category: "Audio Capture",
      description: "Works together with SpeechRecognition to capture audio from the microphone.",
      purpose: "Essential for real-time audio input processing.",
      color: "text-neon-green"
    },
    {
      name: "Matplotlib",
      icon: BarChart3,
      category: "Data Visualization",
      description: "Mainly used for visualizations during development.",
      purpose: "Plotting accuracy/loss curves of the AI model for performance analysis.",
      color: "text-accent"
    },
    {
      name: "Scikit-learn",
      icon: Cpu,
      category: "Machine Learning",
      description: "Provides machine learning tools.",
      purpose: "Used in model preprocessing and performance evaluation.",
      color: "text-primary"
    },
    {
      name: "BeautifulSoup4",
      icon: Globe,
      category: "Web Scraping",
      description: "A web scraping tool for data collection.",
      purpose: "Used in experimenting and dataset preparation phases.",
      color: "text-neon-cyan"
    }
  ];

  return (
    <section id="project-description" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Project Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        {/* Main Description */}
        <Card className="glass-surface border-primary/20 p-8 mb-12 hover:shadow-neon transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-primary">The Silent Voice</h3>
          <p className="text-lg leading-relaxed text-foreground/90 mb-6">
            The Silent Voice is an AI-powered desktop application built using Python that allows 
            seamless communication between deaf or hard-of-hearing individuals and the general public. 
            It does this by combining real-time hand gesture recognition with speech-to-text 
            transcription and an intelligent local chatbot assistant.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            This system serves as a bridge for inclusivity and accessibility, ensuring that 
            communication barriers are broken down through innovative technology solutions.
          </p>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-surface border-primary/20 p-6 hover:shadow-purple transition-all duration-300 group hover:scale-105"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h4 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Technologies & Libraries */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technologies & Libraries</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powering Silent Voice with cutting-edge AI and machine learning technologies
            </p>
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraries.map((lib, index) => (
              <Card 
                key={index} 
                className="glass-surface border-primary/20 p-6 hover:shadow-neon transition-all duration-500 group hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* Icon and Category */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <lib.icon className={`w-8 h-8 ${lib.color} group-hover:scale-110 transition-all duration-300`} />
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary/80">
                    {lib.category}
                  </Badge>
                </div>
                
                {/* Library Name */}
                <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {lib.name}
                </h4>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {lib.description}
                </p>
                
                {/* Purpose */}
                <div className="border-t border-primary/20 pt-3 mt-3">
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1">
                    Purpose
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {lib.purpose}
                  </p>
                </div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 rounded-lg"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;