import { Github, Linkedin, Twitter, MessageSquare, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/mohitrakhade20",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/mohit-rakhade",
      label: "LinkedIn"
    },
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/mohitrakhade20",
      label: "Twitter"
    },
    {
      icon: <MessageSquare size={20} />,
      href: "https://devmohit.medium.com/",
      label: "Medium"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-card border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Mohit Rakhade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Senior Software Engineer & Engineering Manager specializing in AI, Web3, and full-stack development. 
                Building innovative solutions that bridge technology and real-world impact.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-full transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong> mohitrakhade20@gmail.com
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Phone:</strong> +91 7448248283
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Location:</strong> Bhandara, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-muted-foreground text-sm">
              <span>© {currentYear} Mohit Rakhade. Made with</span>
              <Heart size={16} className="mx-1 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>
            <div className="text-muted-foreground text-sm">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;