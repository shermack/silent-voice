import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const AboutMe = () => {
  const skills = [
    "Python", "Machine Learning", "Computer Vision", "AI/ML", 
    "OpenCV", "TensorFlow", "Natural Language Processing", 
    "Desktop Applications", "Accessibility Tech", "React"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About the Developer
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <Card className="glass-surface border-primary/20 p-8 hover:shadow-neon transition-all duration-300">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="md:col-span-1 text-center">
              {/* Replaced initials with profile image */}
              <div className="w-32 h-32 mx-auto mb-6">
                <img
                  src="/images/profile.jpg"
                  alt="Sharmake Salat"
                  className="w-32 h-32 rounded-full border-4 border-primary shadow-lg object-cover mx-auto"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-foreground">Sharmake Salat</h3>
              <p className="text-primary mb-4">AI/ML Developer</p>
              <div className="flex items-center justify-center text-muted-foreground mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Software Engineer</span>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm" className="cyber-border">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="cyber-border">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="cyber-border">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* About Content */}
            <div className="md:col-span-2">
              <h4 className="text-xl font-semibold mb-4 text-primary">Passionate About Accessibility</h4>
              <p className="text-foreground/90 leading-relaxed mb-6">
                I'm Sharmake Salat, a dedicated AI/ML developer with a passion for creating technology 
                that makes a real difference in people's lives. The Silent Voice project represents 
                my commitment to building inclusive solutions that bridge communication gaps and 
                promote accessibility for all.
              </p>
              
              <p className="text-foreground/90 leading-relaxed mb-6">
                With expertise in computer vision, natural language processing, and machine learning, 
                I focus on developing innovative applications that solve real-world problems. This 
                project specifically addresses the communication barriers faced by the deaf and 
                hard-of-hearing community.
              </p>

              <h5 className="text-lg font-semibold mb-4 text-primary">Technical Skills</h5>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="cyber-border hover:bg-primary/10 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="bg-dark-surface/50 rounded-lg p-4 border border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  "Technology should be a bridge, not a barrier. The Silent Voice project embodies 
                  my belief that AI and machine learning can create a more inclusive world where 
                  communication knows no boundaries."
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;