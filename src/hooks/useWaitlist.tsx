import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface WaitlistData {
  email: string;
  name?: string;
  writing_genre?: string;
  experience_level?: string;
  referral_source?: string;
}

export const useWaitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const joinWaitlist = async (data: WaitlistData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([data]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already on waitlist",
            description: "You're already signed up for our waitlist!",
            variant: "default",
          });
        } else {
          throw error;
        }
        return { success: false, error };
      }

      toast({
        title: "Welcome to the waitlist!",
        description: "We'll notify you when Scrib is ready for you.",
      });

      return { success: true, error: null };
    } catch (error) {
      console.error('Error joining waitlist:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    joinWaitlist,
    isSubmitting,
  };
};