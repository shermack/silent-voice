import { Card } from '@/components/ui/card';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images with actual screenshots
  const galleryImages = [
    {
      title: "Main Interface",
      description: "The primary user interface showing gesture recognition in real-time",
      src: "/images/Gallery/main-interface.png"
    },
    {
      title: "Gesture Recognition",
      description: "Hand gesture detection and interpretation system",
      src: "/images/Gallery/gesture-recognition.png"
    },
    {
      title: "Speech-to-Text",
      description: "Voice recognition and text conversion interface",
      src: "/images/Gallery/speech-to-text.png"
    },
    {
      title: "AI Assistant",
      description: "Intelligent chatbot assistant for communication support",
      src: "/images/Gallery/ai-assistant.png"
    },
    {
      title: "Settings Panel",
      description: "Configuration options for personalized experience",
      src: "/images/Gallery/settings.png"
    },
    {
      title: "Communication Bridge",
      description: "Real-time translation between sign language and speech",
      src: "/images/Gallery/bridge.png"
    }
  ];

  return (
    <section className="py-20 px-6 bg-dark-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Project Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the various features and interfaces of the Silent Voice application
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="glass-surface border-primary/20 overflow-hidden group hover:shadow-neon transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Actual screenshot */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Larger</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{image.title}</h3>
                <p className="text-muted-foreground">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for enlarged view */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Card className="glass-surface border-primary/20 max-w-4xl w-full">
              <div className="aspect-video relative">
                <img 
                  src={galleryImages[selectedImage].src} 
                  alt={galleryImages[selectedImage].title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;