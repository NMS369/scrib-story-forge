import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import WaitlistDialog from "@/components/WaitlistDialog";

const CTASection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Writing Process</h3>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Join writers creating emotionally resonant stories with AI built for fiction.</p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="px-8 py-6 text-lg"
          onClick={() => user ? navigate('/dashboard') : setWaitlistOpen(true)}
        >
          {user ? 'Go to Dashboard' : 'Join Waitlist'}
        </Button>
        <p className="text-sm opacity-75 mt-4">
          Early access • Be first to know • Your stories, your ownership
        </p>
      </div>
      
      <WaitlistDialog 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen} 
      />
    </section>
  );
};

export default CTASection;