import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Sparkles } from "lucide-react";

interface StoryData {
  title: string;
  genre: string;
  wordCount: string;
  synopsis: string;
  targetAudience: string;
  themes: string[];
}

interface StoryInputFormProps {
  onAnalyze: (data: StoryData) => void;
  isAnalyzing: boolean;
}

const genres = [
  "Literary Fiction",
  "Commercial Fiction", 
  "Mystery/Thriller",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Historical Fiction",
  "Young Adult",
  "Middle Grade",
  "Women's Fiction",
  "Horror",
  "Crime/Noir"
];

const commonThemes = [
  "Love & Relationships",
  "Coming of Age", 
  "Family Drama",
  "Social Issues",
  "Identity",
  "Good vs Evil",
  "Redemption",
  "Sacrifice",
  "Power & Corruption",
  "Survival"
];

export const StoryInputForm = ({ onAnalyze, isAnalyzing }: StoryInputFormProps) => {
  const [storyData, setStoryData] = useState<StoryData>({
    title: "",
    genre: "",
    wordCount: "",
    synopsis: "",
    targetAudience: "",
    themes: []
  });

  const handleThemeToggle = (theme: string) => {
    setStoryData(prev => ({
      ...prev,
      themes: prev.themes.includes(theme) 
        ? prev.themes.filter(t => t !== theme)
        : [...prev.themes, theme]
    }));
  };

  const handleSubmit = () => {
    onAnalyze(storyData);
  };

  const isFormValid = storyData.title && storyData.genre && storyData.synopsis && storyData.wordCount;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Describe Your Manuscript
        </CardTitle>
        <CardDescription>
          Tell us about your story so our AI can provide personalized agent recommendations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter your book title"
              value={storyData.title}
              onChange={(e) => setStoryData(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="genre">Genre</Label>
            <Select value={storyData.genre} onValueChange={(value) => setStoryData(prev => ({ ...prev, genre: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select genre" />
              </SelectTrigger>
              <SelectContent>
                {genres.map(genre => (
                  <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="wordCount">Word Count</Label>
            <Input
              id="wordCount"
              placeholder="e.g., 80,000"
              value={storyData.wordCount}
              onChange={(e) => setStoryData(prev => ({ ...prev, wordCount: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="audience">Target Audience</Label>
            <Input
              id="audience"
              placeholder="e.g., Adult readers of literary fiction"
              value={storyData.targetAudience}
              onChange={(e) => setStoryData(prev => ({ ...prev, targetAudience: e.target.value }))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="synopsis">Synopsis</Label>
          <Textarea
            id="synopsis"
            placeholder="Provide a compelling synopsis of your story (2-3 paragraphs recommended)"
            value={storyData.synopsis}
            onChange={(e) => setStoryData(prev => ({ ...prev, synopsis: e.target.value }))}
            className="min-h-32"
          />
        </div>

        <div className="space-y-3">
          <Label>Key Themes (Select all that apply)</Label>
          <div className="flex flex-wrap gap-2">
            {commonThemes.map(theme => (
              <Badge
                key={theme}
                variant={storyData.themes.includes(theme) ? "default" : "outline"}
                className="cursor-pointer hover-scale"
                onClick={() => handleThemeToggle(theme)}
              >
                {theme}
              </Badge>
            ))}
          </div>
        </div>

        <Button 
          onClick={handleSubmit}
          disabled={!isFormValid || isAnalyzing}
          className="w-full gap-2"
        >
          <Sparkles className="h-4 w-4" />
          {isAnalyzing ? "Analyzing..." : "Get AI Analysis & Agent Recommendations"}
        </Button>
      </CardContent>
    </Card>
  );
};