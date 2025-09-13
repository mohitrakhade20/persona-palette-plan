import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Engineering Manager",
      company: "ARThink AI",
      location: "Hyderabad, India",
      period: "July 2023 - Present",
      type: "Promotion from Senior Fullstack Developer",
      description: "Leading a team of 10 developers in building AI-driven healthcare projects, overseeing system design and implementation.",
      achievements: [
        "Lead development of AI-automated HRMS platform (Empledo)",
        "Built facial recognition attendance system for Telangana government",
        "Spearheaded AI integration initiatives including LLMs and voice technology",
        "Developed scalable backend systems using Django, Flask, Node.js, and Frappe",
        "Created OnFit AI healthcare platform with 24/7 personalized care"
      ],
      technologies: ["AI/ML", "LLMs", "Django", "Flask", "Node.js", "React", "OpenAI API", "Computer Vision", "Healthcare Tech"]
    },
    {
      title: "Sr. Backend Developer",
      company: "Tassests",
      location: "United States (Remote)",
      period: "August 2022 - June 2023",
      type: "Remote Contract",
      description: "Spearheaded real estate tokenization projects utilizing Security Token standards, enhancing property investment accessibility and liquidity.",
      achievements: [
        "Developed peer-to-peer decentralized exchange (P2P DEX) for token trading",
        "Implemented Single Sign-On (SSO) system for seamless authentication",
        "Built on-chain dividend distribution mechanism for tokenized assets",
        "Engineered robust payment solution integrated with blockchain transactions",
        "Designed high-performance Blockchain Indexer for efficient data retrieval"
      ],
      technologies: ["Blockchain", "Solidity", "Polygon", "Web3.js", "Smart Contracts", "DeFi", "Node.js", "React", "Security Tokens"]
    }
  ];

  const stats = [
    { icon: <Users size={24} />, value: "10+", label: "Team Members Led" },
    { icon: <Award size={24} />, value: "20+", label: "Projects Delivered" },
    { icon: <Building size={24} />, value: "5+", label: "Years Experience" },
    { icon: <Calendar size={24} />, value: "2", label: "Companies" }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-ai rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-web3 rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              5+ years of building innovative solutions, from startup environments to leading engineering teams.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-card-gradient border border-border/50 shadow-card text-center">
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Experience timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-card-gradient border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <Badge className="bg-gradient-hero text-primary-foreground">{exp.type}</Badge>
                    </div>
                    <div className="flex items-center text-lg font-semibold text-primary mb-2">
                      <Building size={18} className="mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Calendar size={16} className="mr-2" />
                      {exp.period} • {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h4>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary/30 text-secondary-foreground border border-border/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Career highlights */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Career Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card-gradient border border-border/50 shadow-card">
                <div className="text-ai-primary text-3xl font-bold mb-2">AI Healthcare</div>
                <div className="text-muted-foreground">Led groundbreaking healthcare AI projects with government deployment</div>
              </Card>
              <Card className="p-6 bg-card-gradient border border-border/50 shadow-card">
                <div className="text-web3-primary text-3xl font-bold mb-2">Web3 Innovation</div>
                <div className="text-muted-foreground">Pioneered real estate tokenization with complete DeFi ecosystem</div>
              </Card>
              <Card className="p-6 bg-card-gradient border border-border/50 shadow-card">
                <div className="text-tech-accent text-3xl font-bold mb-2">Team Leadership</div>
                <div className="text-muted-foreground">Successfully promoted to Engineering Manager, leading 10+ developers</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;