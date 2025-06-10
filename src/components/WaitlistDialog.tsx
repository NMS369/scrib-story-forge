import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import WaitlistForm from './WaitlistForm';

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog = ({ open, onOpenChange }: WaitlistDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join the Scrib Waitlist</DialogTitle>
          <DialogDescription>
            Be the first to know when Scrib launches. We'll notify you as soon as it's ready!
          </DialogDescription>
        </DialogHeader>
        
        <WaitlistForm 
          variant="detailed"
          onSuccess={() => onOpenChange(false)}
        />
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          No spam, ever. Just launch notifications and writing tips.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;