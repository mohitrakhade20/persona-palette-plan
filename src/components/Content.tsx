import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Calendar, Clock } from "lucide-react";

const Content = () => {
  const youtubeVideos = [
    {
      title: "Building Scalable Web3 Applications",
      description: "Deep dive into building decentralized applications with modern React and smart contracts.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Replace with actual video ID
      videoId: "dQw4w9WgXcQ", // Replace with actual video ID
      duration: "15:30",
      views: "12K",
      publishDate: "2024-01-15"
    },
    {
      title: "AI in Healthcare: Real-world Implementation",
      description: "How we built OnFit AI platform to provide 24/7 personalized healthcare using AI and machine learning.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Replace with actual video ID
      videoId: "dQw4w9WgXcQ", // Replace with actual video ID
      duration: "22:45",
      views: "8.5K",
      publishDate: "2023-12-08"
    }
  ];

  const mediumBlogs = [
    {
      title: "The Future of Decentralized Finance",
      description: "Exploring how DeFi protocols are reshaping traditional financial systems and what developers need to know.",
      url: "https://devmohit.medium.com/future-of-defi", // Replace with actual URL
      readTime: "8 min read",
      claps: "245",
      publishDate: "2024-02-10",
      tags: ["DeFi", "Blockchain", "Web3"]
    },
    {
      title: "Computer Vision in Government: Lessons Learned",
      description: "Key insights from implementing facial recognition systems for government applications at scale.",
      url: "https://devmohit.medium.com/computer-vision-government", // Replace with actual URL
      readTime: "12 min read",
      claps: "189",
      publishDate: "2024-01-25",
      tags: ["AI/ML", "Computer Vision", "Government Tech"]
    },
    {
      title: "React Native Performance Optimization",
      description: "Practical strategies for building high-performance mobile apps with React Native and modern tooling.",
      url: "https://devmohit.medium.com/react-native-performance", // Replace with actual URL
      readTime: "10 min read",
      claps: "324",
      publishDate: "2023-11-30",
      tags: ["React Native", "Performance", "Mobile Development"]
    }
  ];

  return (
    <section id="content" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-tech rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-ai rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Content & Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing knowledge through videos and articles on cutting-edge technology, AI, and software development.
            </p>
          </div>

          {/* YouTube Videos Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Play className="text-primary" size={28} />
              YouTube Videos
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {youtubeVideos.map((video, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden bg-card-gradient border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
                >
                  {/* Video Thumbnail */}
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                        <Play className="text-primary-foreground ml-1" size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {video.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {video.description}
                    </p>
                    
                    {/* Video Stats */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span>{video.views} views</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(video.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <Button 
                      size="sm"
                      className="bg-gradient-hero hover:opacity-90 text-primary-foreground"
                      onClick={() => window.open(`https://youtube.com/watch?v=${video.videoId}`, '_blank')}
                    >
                      <Play size={16} className="mr-2" />
                      Watch Video
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Medium Blogs Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <svg className="text-primary" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
              </svg>
              Medium Articles
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {mediumBlogs.map((blog, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card-gradient border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-secondary/30 text-secondary-foreground border border-border/30 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {blog.description}
                    </p>
                  </div>
                  
                  {/* Blog Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {blog.readTime}
                      </span>
                      <span>{blog.claps} claps</span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(blog.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <Button 
                    size="sm"
                    variant="outline"
                    className="w-full border-primary/50 text-foreground hover:bg-primary/10"
                    onClick={() => window.open(blog.url, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Read Article
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Want to stay updated?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Follow me on Medium and YouTube for the latest insights on AI, Web3, and software development.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10"
                onClick={() => window.open('https://devmohit.medium.com/', '_blank')}
              >
                Follow on Medium
              </Button>
              <Button 
                size="lg"
                className="bg-gradient-hero hover:opacity-90 text-primary-foreground"
                onClick={() => window.open('https://youtube.com/@mohitrakhade', '_blank')}
              >
                Subscribe on YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;