import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, TrendingUp, Users, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WaitlistDialog from "@/components/WaitlistDialog";

const Demo = () => {
  const navigate = useNavigate();
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'writing' | 'industry' | 'community'>('writing');

  const mockStoryData = {
    title: "The Last Library",
    genre: "Science Fiction",
    wordCount: 2847,
    chapters: 3,
    lastUpdated: "2 hours ago"
  };

  const mockTrends = [
    { genre: "Fantasy Romance", change: "+15%", status: "rising" },
    { genre: "Climate Fiction", change: "+23%", status: "hot" },
    { genre: "Historical Mystery", change: "-5%", status: "declining" },
    { genre: "Young Adult Dystopian", change: "+8%", status: "stable" }
  ];

  const mockAgents = [
    { name: "Sarah Johnson", agency: "Literary Partners Inc.", genre: "Contemporary Fiction", status: "Open" },
    { name: "Michael Chen", agency: "BookWorld Agency", genre: "Science Fiction", status: "Closed" },
    { name: "Emma Rodriguez", agency: "Creative Minds Literary", genre: "Romance", status: "Open" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold">Scrib Demo Experience</h1>
          </div>
          <Button
            onClick={() => setWaitlistOpen(true)}
            className="gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Join Waitlist
          </Button>
        </div>
      </div>

      {/* Demo Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Demo Navigation */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Scrib's Features</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Explore how Scrib empowers fiction writers with AI-driven tools and industry insights
          </p>
          
          <div className="flex gap-4 justify-center mb-8">
            <Button
              variant={activeDemo === 'writing' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('writing')}
              className="gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Writing Assistant
            </Button>
            <Button
              variant={activeDemo === 'industry' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('industry')}
              className="gap-2"
            >
              <TrendingUp className="h-4 w-4" />
              Industry Agent
            </Button>
            <Button
              variant={activeDemo === 'community' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('community')}
              className="gap-2"
            >
              <Users className="h-4 w-4" />
              Writer Community
            </Button>
          </div>
        </div>

        {/* Demo Content Sections */}
        {activeDemo === 'writing' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Current Project</CardTitle>
                <CardDescription>Continue working on your latest story</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{mockStoryData.title}</h3>
                    <Badge variant="secondary">{mockStoryData.genre}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Word Count:</span>
                      <div className="font-medium">{mockStoryData.wordCount.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Chapters:</span>
                      <div className="font-medium">{mockStoryData.chapters}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Last updated: {mockStoryData.lastUpdated}
                  </div>
                  <Button className="w-full" disabled>
                    Continue Writing (Demo)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Writing Assistant</CardTitle>
                <CardDescription>Get intelligent suggestions for your story</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Character Development Suggestion:</p>
                    <p className="text-sm text-muted-foreground">
                      "Consider exploring Maya's backstory through a flashback scene. Her mysterious past with the library could add depth to her motivation in Chapter 3."
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Plot Enhancement:</p>
                    <p className="text-sm text-muted-foreground">
                      "The pacing in your current chapter could benefit from a tension break. Perhaps a quiet moment of reflection before the climactic discovery?"
                    </p>
                  </div>
                  <Button variant="outline" className="w-full" disabled>
                    Get More Suggestions (Demo)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeDemo === 'industry' && (
          <div className="space-y-8">
            <Tabs defaultValue="trends" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="trends">Publishing Trends</TabsTrigger>
                <TabsTrigger value="agents">Literary Agents</TabsTrigger>
                <TabsTrigger value="releases">New Releases</TabsTrigger>
              </TabsList>
              
              <TabsContent value="trends" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Genre Performance This Quarter</CardTitle>
                    <CardDescription>Track what's trending in the publishing world</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockTrends.map((trend, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                          <div>
                            <h4 className="font-medium">{trend.genre}</h4>
                            <p className="text-sm text-muted-foreground">Market interest</p>
                          </div>
                          <div className="text-right">
                            <div className={`font-semibold ${
                              trend.status === 'rising' || trend.status === 'hot' 
                                ? 'text-green-600' 
                                : trend.status === 'declining' 
                                ? 'text-red-600' 
                                : 'text-muted-foreground'
                            }`}>
                              {trend.change}
                            </div>
                            <Badge variant={
                              trend.status === 'hot' ? 'destructive' :
                              trend.status === 'rising' ? 'default' :
                              trend.status === 'declining' ? 'secondary' : 'outline'
                            }>
                              {trend.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="agents" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Literary Agent Database</CardTitle>
                    <CardDescription>Find agents actively seeking new clients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockAgents.map((agent, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                          <div>
                            <h4 className="font-medium">{agent.name}</h4>
                            <p className="text-sm text-muted-foreground">{agent.agency}</p>
                            <p className="text-sm text-muted-foreground">Represents: {agent.genre}</p>
                          </div>
                          <Badge variant={agent.status === 'Open' ? 'default' : 'secondary'}>
                            {agent.status} to Queries
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="releases" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Releases to Watch</CardTitle>
                    <CardDescription>Stay updated with new books in your genre</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium">The Seven Moons of Maali Almeida</h4>
                        <p className="text-sm text-muted-foreground">Literary Fiction • Booker Prize Winner</p>
                        <p className="text-sm mt-2">A groundbreaking work that blends magical realism with contemporary themes.</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium">Book Lovers</h4>
                        <p className="text-sm text-muted-foreground">Romance • Bestseller</p>
                        <p className="text-sm mt-2">A fresh take on the romance genre that's taking the publishing world by storm.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeDemo === 'community' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Writer Groups</CardTitle>
                <CardDescription>Connect with writers in your genre</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium">Sci-Fi Writers United</h4>
                    <p className="text-sm text-muted-foreground">1,247 members • Active discussions</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium">Romance Authors Circle</h4>
                    <p className="text-sm text-muted-foreground">892 members • Weekly challenges</p>
                  </div>
                  <Button variant="outline" className="w-full" disabled>
                    Join Groups (Demo)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Writing Challenges</CardTitle>
                <CardDescription>Participate in community events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium">December Flash Fiction</h4>
                    <p className="text-sm text-muted-foreground">Write a complete story in 500 words</p>
                    <Badge variant="outline">5 days left</Badge>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium">Character Development Workshop</h4>
                    <p className="text-sm text-muted-foreground">Weekly exercises to develop compelling characters</p>
                    <Badge variant="default">Ongoing</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center bg-primary/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Writing Journey?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of writers already using Scrib to enhance their storytelling
          </p>
          <Button
            size="lg"
            onClick={() => setWaitlistOpen(true)}
            className="gap-2"
          >
            <Sparkles className="h-5 w-5" />
            Join the Waitlist
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Early access • Be first to know • Your stories, your ownership
          </p>
        </div>
      </div>

      <WaitlistDialog 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen} 
      />
    </div>
  );
};

export default Demo;