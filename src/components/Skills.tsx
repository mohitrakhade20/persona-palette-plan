import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Blocks, Code, Cloud, Database, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      gradient: "ai-gradient",
      skills: ["LLMs", "NLP", "OpenCV", "LangChain", "NumPy", "Streamlit", "Vector Databases", "OpenAI API"]
    },
    {
      title: "Web3 & Blockchain",
      icon: <Blocks className="w-8 h-8" />,
      gradient: "web3-gradient",
      skills: ["Solidity", "Ethereum", "Polygon", "Smart Contracts", "DeFi", "NFTs", "Web3.js", "Tokenization"]
    },
    {
      title: "Full-Stack Development",
      icon: <Code className="w-8 h-8" />,
      gradient: "tech-gradient",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "Python", "Django", "Flask"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      gradient: "hero-gradient",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Microservices", "CI/CD", "Serverless"]
    },
    {
      title: "Databases & APIs",
      icon: <Database className="w-8 h-8" />,
      gradient: "ai-gradient",
      skills: ["PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Redis", "Elasticsearch", "SQL", "NoSQL"]
    },
    {
      title: "Mobile & Frontend",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "web3-gradient",
      skills: ["React Native", "Angular", "Vue.js", "Tailwind CSS", "Material UI", "Responsive Design", "PWA", "Mobile Apps"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-ai rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-gradient-web3 rounded-full blur-3xl opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit spanning modern technologies, from AI and Web3 to cloud-native development.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-card-gradient border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                {/* Category header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-${category.gradient} mr-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground border border-border/30 hover:bg-primary/20 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional certifications/achievements */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card-gradient border border-border/50 shadow-card">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-muted-foreground font-medium">AI Projects Delivered</div>
              </Card>
              <Card className="p-6 bg-card-gradient border border-border/50 shadow-card">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-muted-foreground font-medium">Blockchain Platforms Built</div>
              </Card>
              <Card className="p-6 bg-card-gradient border border-border/50 shadow-card">
                <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                <div className="text-muted-foreground font-medium">Full-Stack Applications</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;