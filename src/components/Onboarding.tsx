import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  Heart, 
  Users, 
  Shield,
  Sparkles,
  Check
} from "lucide-react";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    writingExperience: "",
    genres: [] as string[],
    projectName: "",
    projectGenre: "",
    projectDescription: "",
    writingGoals: [] as string[],
    privacyPreferences: {
      dataSharing: false,
      aiLearning: true,
      expertNetwork: true
    }
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const genres = [
    "Fantasy", "Romance", "Mystery", "Sci-Fi", "Literary Fiction", 
    "Thriller", "Historical Fiction", "Young Adult", "Horror", "Contemporary"
  ];

  const writingGoals = [
    "Complete my first novel",
    "Improve character development", 
    "Enhance emotional depth",
    "Maintain story consistency",
    "Develop writing routine",
    "Connect with other writers"
  ];

  const handleGenreToggle = (genre: string) => {
    setFormData(prev => ({
      ...prev,
      genres: prev.genres.includes(genre) 
        ? prev.genres.filter(g => g !== genre)
        : [...prev.genres, genre]
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      writingGoals: prev.writingGoals.includes(goal)
        ? prev.writingGoals.filter(g => g !== goal)
        : [...prev.writingGoals, goal]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-primary">Welcome to Scrib!</h2>
              <p className="text-lg text-muted-foreground">
                Let's personalize your writing experience. We'll help you set up 
                your space for creating emotionally resonant fiction.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">What should we call you?</Label>
                <Input
                  id="name"
                  placeholder="Your preferred name..."
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div>
                <Label>How would you describe your writing experience?</Label>
                <RadioGroup
                  value={formData.writingExperience}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, writingExperience: value }))}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner">Just starting my writing journey</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">I've written some stories/drafts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="experienced" id="experienced" />
                    <Label htmlFor="experienced">I'm an experienced writer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="published" id="published" />
                    <Label htmlFor="published">I'm a published author</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-primary">What genres call to you?</h2>
              <p className="text-lg text-muted-foreground">
                Select the genres you love to read and write. This helps our AI 
                understand the storytelling conventions that matter to you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant={formData.genres.includes(genre) ? "default" : "outline"}
                  onClick={() => handleGenreToggle(genre)}
                  className="h-auto py-3 px-4"
                >
                  {formData.genres.includes(genre) && (
                    <Check className="w-4 h-4 mr-2" />
                  )}
                  {genre}
                </Button>
              ))}
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Selected {formData.genres.length} genre{formData.genres.length !== 1 ? 's' : ''}
            </p>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-primary">Let's create your first project</h2>
              <p className="text-lg text-muted-foreground">
                Every great story starts with an idea. Tell us about the project 
                you're excited to work on.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="projectName">Project Title</Label>
                <Input
                  id="projectName"
                  placeholder="What's your story called?"
                  value={formData.projectName}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectName: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="projectGenre">Primary Genre</Label>
                <RadioGroup
                  value={formData.projectGenre}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, projectGenre: value }))}
                  className="mt-2 grid grid-cols-2 gap-2"
                >
                  {formData.genres.slice(0, 6).map((genre) => (
                    <div key={genre} className="flex items-center space-x-2">
                      <RadioGroupItem value={genre} id={`project-${genre}`} />
                      <Label htmlFor={`project-${genre}`} className="text-sm">{genre}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="projectDescription">Brief Description</Label>
                <Textarea
                  id="projectDescription"
                  placeholder="Tell us about your story's concept, main characters, or central conflict..."
                  value={formData.projectDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
                  rows={4}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-primary">What are your writing goals?</h2>
              <p className="text-lg text-muted-foreground">
                Help us understand how Scrib can best support your writing journey. 
                Select all that apply.
              </p>
            </div>

            <div className="grid gap-3">
              {writingGoals.map((goal) => (
                <div
                  key={goal}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.writingGoals.includes(goal)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleGoalToggle(goal)}
                >
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={formData.writingGoals.includes(goal)}
                      onChange={() => handleGoalToggle(goal)}
                    />
                    <span className="font-medium">{goal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-primary">Privacy & Data Preferences</h2>
              <p className="text-lg text-muted-foreground">
                Your stories are yours. Set your privacy preferences to feel 
                comfortable and in control.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Data Ownership</span>
                  </CardTitle>
                  <CardDescription>
                    You own all your writing. Export or delete your data anytime.
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">AI Model Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Allow AI to learn from your writing style (private to you only)
                    </p>
                  </div>
                  <Checkbox
                    checked={formData.privacyPreferences.aiLearning}
                    onCheckedChange={(checked) =>
                      setFormData(prev => ({
                        ...prev,
                        privacyPreferences: {
                          ...prev.privacyPreferences,
                          aiLearning: !!checked
                        }
                      }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Expert Network Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect with subject matter experts through our marketplace
                    </p>
                  </div>
                  <Checkbox
                    checked={formData.privacyPreferences.expertNetwork}
                    onCheckedChange={(checked) =>
                      setFormData(prev => ({
                        ...prev,
                        privacyPreferences: {
                          ...prev.privacyPreferences,
                          expertNetwork: !!checked
                        }
                      }))
                    }
                  />
                </div>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                <h4 className="font-medium text-secondary mb-2">Your Data, Your Control</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Private AI models trained only on your work</li>
                  <li>• Complete data export available anytime</li>
                  <li>• Instant deletion upon request</li>
                  <li>• No sharing with third parties</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (currentStep > totalSteps) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Welcome to your writing journey!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your workspace is ready. Let's start crafting stories that move hearts.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <BookOpen className="mr-2 h-5 w-5" />
              Enter Your Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <img 
              src="/lovable-uploads/c4d58183-ee58-4bb9-b2f7-00e2f3bd9ceb.png" 
              alt="Scrib Logo" 
              className="h-8 w-auto"
            />
            <Badge variant="outline">Step {currentStep} of {totalSteps}</Badge>
          </div>
          <Progress value={progress} className="mb-6" />
        </CardHeader>
        
        <CardContent className="px-8 pb-8">
          {renderStep()}
          
          <div className="flex justify-between pt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <Button
              onClick={nextStep}
              disabled={
                (currentStep === 1 && (!formData.name || !formData.writingExperience)) ||
                (currentStep === 2 && formData.genres.length === 0) ||
                (currentStep === 3 && (!formData.projectName || !formData.projectGenre))
              }
            >
              {currentStep === totalSteps ? "Complete Setup" : "Continue"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;