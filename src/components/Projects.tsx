import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OnFit AI Healthcare Platform",
      category: "AI/Healthcare",
      gradient: "ai-gradient",
      description: "24/7 personalized precision care platform with AI-powered health bot, doctor-patient communication, prescription management, and vital tracking. Integrated with HealthKit for comprehensive health monitoring.",
      tech: ["React Native", "AI/ML", "HealthKit", "Node.js", "PostgreSQL", "OpenAI API"],
      company: "ARThink AI",
      impact: ["Healthcare automation", "24/7 patient care", "Vital tracking", "AI diagnostics"],
      status: "Production"
    },
    {
      title: "Real Estate Tokenization Platform",
      category: "Web3/Blockchain",
      gradient: "web3-gradient",
      description: "Complete real estate tokenization ecosystem with P2P DEX, SSO authentication, on-chain dividend distribution, and integrated payment solutions on Polygon blockchain.",
      tech: ["Solidity", "Polygon", "React", "Node.js", "Web3.js", "Smart Contracts"],
      company: "Tassests",
      impact: ["Property liquidity", "Decentralized trading", "Automated dividends", "Blockchain indexing"],
      status: "Production"
    },
    {
      title: "Facial Recognition Attendance System",
      category: "AI/Government",
      gradient: "tech-gradient",
      description: "Government-grade facial recognition system for Telangana state with video-to-video comparison, supporting various lighting conditions, angles, and facial expressions.",
      tech: ["OpenCV", "Python", "AI/ML", "Computer Vision", "Flask", "PostgreSQL"],
      company: "ARThink AI",
      impact: ["Government deployment", "Accurate detection", "Fraud prevention", "Real-time processing"],
      status: "Production"
    },
    {
      title: "Smokesea NFT Marketplace",
      category: "Web3/NFT",
      gradient: "web3-gradient",
      description: "Premium NFT marketplace enabling digital-to-physical NFT conversion. Built with modern React architecture and deployed on AWS cloud infrastructure.",
      tech: ["React", "Node.js", "Docker", "AWS", "Web3", "Smart Contracts"],
      company: "Personal Project",
      impact: ["NFT trading", "Physical conversion", "Cloud deployment", "Scalable architecture"],
      status: "Live"
    },
    {
      title: "DeFund - Decentralized Funding",
      category: "DeFi/Web3",
      gradient: "ai-gradient",
      description: "DeFi investment platform built on Ethereum blockchain with smart contract automation and modern Next.js frontend for seamless user experience.",
      tech: ["Solidity", "Ethereum", "Next.js", "Smart Contracts", "DeFi", "Web3.js"],
      company: "Personal Project",
      impact: ["Decentralized investing", "Smart contracts", "DeFi protocols", "Modern UX"],
      status: "Live"
    },
    {
      title: "Bechho E-commerce Platform",
      category: "Full-Stack",
      gradient: "tech-gradient",
      description: "India's first O2O e-commerce and recommerce platform with advanced recommendation engine, deployed using modern DevOps practices on AWS.",
      tech: ["React", "Node.js", "Docker", "Kubernetes", "AWS", "PostgreSQL"],
      company: "Personal Project",
      impact: ["E-commerce innovation", "Recommerce system", "Container deployment", "Scalable infrastructure"],
      status: "Live"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-ai rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-web3 rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative solutions spanning AI healthcare, Web3 platforms, and full-stack applications.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-8 bg-card-gradient border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                {/* Project header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`px-3 py-1 rounded-full bg-${project.gradient} text-white text-sm font-medium`}>
                        {project.category}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.company}
                    </p>
                  </div>
                </div>

                {/* Project description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Impact highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Impact:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.impact.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight size={14} className="mr-2 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary/30 text-secondary-foreground border border-border/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-hero hover:opacity-90 text-primary-foreground flex-1"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/50 text-foreground hover:bg-primary/10"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and innovative projects. 
              Let's build something amazing together.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-semibold px-8"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;