import { useEffect, useState } from "react";

const sarcasticMessages = [
  "Initializing awesomeness...",
  "Downloading more RAM... (just kidding, that's not how it works)",
  "Convincing pixels to cooperate...",
  "Debugging the coffee machine...",
  "Teaching AI to understand human emotions... still loading...",
  "Compiling excuses for why this is taking so long...",
  "Converting caffeine to code...",
  "Asking the rubber duck for debugging advice...",
  "Pretending to understand blockchain...",
  "Loading... because instant gratification takes time",
  "Spinning up the hamster wheel powering this website...",
  "Negotiating with the server... it's being difficult today"
];

const Loading = ({ onComplete }: { onComplete: () => void }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % sarcasticMessages.length);
    }, 1500);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center z-50">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo or Icon */}
        <div className="relative">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary animate-spin border-4 border-transparent border-t-primary/50"></div>
          <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-l from-secondary to-primary animate-spin border-4 border-transparent border-b-secondary/50 animate-reverse"></div>
        </div>

        {/* Sarcastic Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {sarcasticMessages[currentMessage]}
          </h2>
          
          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          
          <p className="text-muted-foreground text-sm">
            {Math.floor(Math.min(progress, 100))}% - Because progress bars make everything look professional
          </p>
        </div>

        {/* Fun Facts */}
        <div className="text-xs text-muted-foreground/70 italic">
          Fun fact: 73.6% of loading screen statistics are made up on the spot
        </div>
      </div>
    </div>
  );
};

export default Loading;