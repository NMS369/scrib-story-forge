import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useWaitlist } from '@/hooks/useWaitlist';

interface WaitlistFormProps {
  onSuccess?: () => void;
  variant?: 'simple' | 'detailed';
}

const WaitlistForm = ({ onSuccess, variant = 'simple' }: WaitlistFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    writing_genre: '',
    experience_level: '',
    referral_source: '',
  });

  const { joinWaitlist, isSubmitting } = useWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) return;

    const result = await joinWaitlist({
      email: formData.email,
      ...(variant === 'detailed' && {
        name: formData.name || undefined,
        writing_genre: formData.writing_genre || undefined,
        experience_level: formData.experience_level || undefined,
        referral_source: formData.referral_source || undefined,
      }),
    });

    if (result.success) {
      setFormData({
        email: '',
        name: '',
        writing_genre: '',
        experience_level: '',
        referral_source: '',
      });
      onSuccess?.();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (variant === 'simple') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          className="flex-1"
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          disabled={!formData.email || isSubmitting}
          size="lg"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="genre">Writing Genre</Label>
        <Input
          id="genre"
          type="text"
          placeholder="e.g., Fantasy, Romance, Sci-Fi"
          value={formData.writing_genre}
          onChange={(e) => handleInputChange('writing_genre', e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Experience Level</Label>
        <Select
          value={formData.experience_level}
          onValueChange={(value) => handleInputChange('experience_level', value)}
          disabled={isSubmitting}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
            <SelectItem value="professional">Professional</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="referral">How did you hear about us?</Label>
        <Input
          id="referral"
          type="text"
          placeholder="Twitter, Blog, Friend, etc."
          value={formData.referral_source}
          onChange={(e) => handleInputChange('referral_source', e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <Button 
        type="submit" 
        disabled={!formData.email || isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
      </Button>
    </form>
  );
};

export default WaitlistForm;