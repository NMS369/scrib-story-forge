import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, TrendingUp, Target, AlertCircle, CheckCircle } from "lucide-react";

interface AIAnalysisProps {
  storyData: {
    title: string;
    genre: string;
    wordCount: string;
    synopsis: string;
    targetAudience: string;
    themes: string[];
  };
}

export const AIAnalysis = ({ storyData }: AIAnalysisProps) => {
  // Mock AI analysis based on story data
  const analysis = {
    marketability: 78,
    strengths: [
      "Strong character-driven narrative",
      "Timely and relevant themes",
      "Compelling hook in opening",
      "Well-developed world-building"
    ],
    improvements: [
      "Consider tightening the middle act",
      "Strengthen romantic subplot",
      "Add more sensory details in key scenes"
    ],
    comparables: [
      { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", similarity: 85 },
      { title: "Circe", author: "Madeline Miller", similarity: 72 },
      { title: "The Midnight Library", author: "Matt Haig", similarity: 68 }
    ],
    targetAgents: 12,
    marketTrend: "Rising interest in " + storyData.genre.toLowerCase()
  };

  return (
    <div className="space-y-6">
      {/* Analysis Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI Analysis Results
          </CardTitle>
          <CardDescription>
            Based on your manuscript details and current market trends
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Marketability Score */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">Marketability Score</span>
              <span className="text-2xl font-bold text-primary">{analysis.marketability}%</span>
            </div>
            <Progress value={analysis.marketability} className="h-3" />
            <p className="text-sm text-muted-foreground">
              Your manuscript shows strong commercial potential in the current market
            </p>
          </div>

          {/* Market Trend */}
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium text-green-800">Positive Market Trend</p>
              <p className="text-sm text-green-700">{analysis.marketTrend}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strengths and Areas for Improvement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <CheckCircle className="h-5 w-5" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analysis.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-700">
              <AlertCircle className="h-5 w-5" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analysis.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Comparable Titles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Comparable Titles
          </CardTitle>
          <CardDescription>
            Books with similar themes and market positioning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.comparables.map((comp, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">{comp.title}</h4>
                  <p className="text-sm text-muted-foreground">by {comp.author}</p>
                </div>
                <Badge variant="outline">{comp.similarity}% similar</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Agent Match Summary */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">Ready for Agent Research?</h3>
            <p className="text-muted-foreground">
              We found <span className="font-semibold text-primary">{analysis.targetAgents} agents</span> who represent your genre and are currently seeking clients
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};