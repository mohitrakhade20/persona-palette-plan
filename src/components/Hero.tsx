import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-ai rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-web3 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-tech rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Senior Software</span>
            <span className="block gradient-text animate-glow">Engineer</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            AI • Web3 • Full-Stack Development
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Engineering Manager with 5+ years building complex systems from POC to production. 
            Leading teams in AI-driven healthcare and Web3 innovations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 text-lg shadow-glow"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/mohitrakhade20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-primary/10 rounded-full"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-rakhade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-primary/10 rounded-full"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/mohitrakhade20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-primary/10 rounded-full"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://devmohit.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-primary/10 rounded-full"
            >
              <MessageSquare size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;