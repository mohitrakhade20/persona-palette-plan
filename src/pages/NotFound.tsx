import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-ai rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-web3 rounded-full blur-3xl opacity-20" />

      <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text mb-4 animate-glow">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.history.back()}
            size="lg"
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10"
          >
            <ArrowLeft size={20} className="mr-2" />
            Go Back
          </Button>
          <Button
            onClick={() => window.location.href = "/"}
            size="lg"
            className="bg-gradient-hero hover:opacity-90 text-primary-foreground"
          >
            <Home size={20} className="mr-2" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
