import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Play } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import WaitlistDialog from "@/components/WaitlistDialog";

const HeroSection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Your Personalized Fiction Writing Assistant</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Scrib enhances human creativity to empower fiction writers with intelligent tools to assist with brainstorming, drafting, and revising while enhancing psychological depth, emotional acuity, and consistent narrative memory.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {user ? (
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                onClick={() => navigate('/dashboard')}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                  onClick={() => setWaitlistOpen(true)}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Join Waitlist
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 text-lg"
                  onClick={() => navigate('/demo')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Try Demo
                </Button>
              </>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-4">Join 1,000+ writers • Early access • Your stories, your ownership</p>
        </div>
      </div>
      
      <WaitlistDialog 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen} 
      />
    </section>
  );
};

export default HeroSection;