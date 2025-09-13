import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const highlights = [
    "5+ years of engineering experience",
    "Engineering Manager at ARThink AI",
    "Led teams of 10+ developers",
    "AI-driven healthcare innovations",
    "Web3 & Blockchain expertise",
    "Full-stack development mastery"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-ai rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-web3 rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about building innovative solutions that bridge the gap between cutting-edge technology and real-world problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Senior Software Engineer & Engineering Manager
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently serving as Engineering Manager at ARThink AI, where I lead a team of 10 developers 
                  in building revolutionary AI-driven healthcare projects. My journey spans 5 years of hands-on 
                  experience in transforming proof-of-concepts into production-ready systems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My expertise lies at the intersection of Artificial Intelligence, Web3 technologies, and 
                  full-stack development. I've successfully architected scalable solutions ranging from 
                  real estate tokenization platforms to facial recognition systems for government applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about leveraging emerging technologies to solve complex problems and create 
                  meaningful impact. Whether it's integrating LLMs for healthcare automation or building 
                  decentralized exchanges, I thrive on turning innovative ideas into reality.
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Key Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="p-3 text-sm font-medium justify-start bg-card-gradient border border-border/50"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Stats/Info cards */}
            <div className="space-y-6">
              <Card className="p-6 bg-card-gradient border border-border/50 shadow-card">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-card-gradient border border-border/50 shadow-card">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ai-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                </Card>

                <Card className="p-4 bg-card-gradient border border-border/50 shadow-card">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-web3-primary mb-1">20+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-card-gradient border border-border/50 shadow-card">
                <h4 className="font-semibold mb-3 text-foreground">Current Focus</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-ai-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">AI/ML Healthcare Solutions</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-web3-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Web3 & Blockchain Innovation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-tech-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Team Leadership & Mentoring</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;