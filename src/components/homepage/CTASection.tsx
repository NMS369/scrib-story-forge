import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Writing Process</h3>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Join writers creating emotionally resonant stories with AI built for fiction.</p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="px-8 py-6 text-lg"
          onClick={() => navigate(user ? '/dashboard' : '/auth')}
        >
          {user ? 'Go to Dashboard' : 'Start Your Free Trial'}
        </Button>
        <p className="text-sm opacity-75 mt-4">
          14-day free trial • Cancel anytime • Full data export
        </p>
      </div>
    </section>
  );
};

export default CTASection;