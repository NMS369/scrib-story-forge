import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, BookOpen, TrendingUp, Users, Sparkles, Bot, MessageCircle, Send, Heart, Star, Award, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WaitlistDialog from "@/components/WaitlistDialog";
import { StoryInputForm } from "@/components/research/StoryInputForm";
import { AIAnalysis } from "@/components/research/AIAnalysis";
import { AgentDatabase } from "@/components/research/AgentDatabase";
import { ResearchChat } from "@/components/research/ResearchChat";

const Demo = () => {
  const navigate = useNavigate();
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'writing' | 'industry' | 'community'>('writing');
  const [activeAgent, setActiveAgent] = useState('character');
  const [chatMessage, setChatMessage] = useState('');
  const [agentChatMessages, setAgentChatMessages] = useState<Array<{sender: string, message: string, time: string}>>([
    { sender: 'Agent', message: "Hi! I'm Sarah from Literary Partners Inc. I specialize in contemporary fiction. What kind of project are you working on?", time: '2:34 PM' }
  ]);

  // Research Assistant State
  const [researchStep, setResearchStep] = useState<'input' | 'analysis' | 'agents' | 'chat'>('input');
  const [storyData, setStoryData] = useState<any>(null);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

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

  const writingAgents = [
    { id: 'character', name: 'Character Development Agent', icon: Users, description: 'Develops rich, multi-dimensional characters with psychological depth' },
    { id: 'plot', name: 'Plot Structure Agent', icon: BookOpen, description: 'Crafts compelling story arcs, pacing, and narrative tension' },
    { id: 'dialogue', name: 'Dialogue Agent', icon: MessageCircle, description: 'Creates authentic, engaging conversations and voice consistency' },
    { id: 'world', name: 'World-Building Agent', icon: Sparkles, description: 'Builds immersive fictional worlds with consistent rules' },
    { id: 'style', name: 'Style & Voice Agent', icon: Bot, description: 'Refines writing style, narrative voice, and prose quality' },
    { id: 'research', name: 'Research Agent', icon: BookOpen, description: 'Provides accurate research and fact-checking for authenticity' },
    { id: 'emotion', name: 'Emotional Resonance Agent', icon: Heart, description: 'Enhances emotional depth and reader connection' },
    { id: 'pacing', name: 'Pacing & Tension Agent', icon: TrendingUp, description: 'Optimizes story rhythm and maintains reader engagement' }
  ];

  const betaReaders = [
    { name: "Alex Chen", genre: "Science Fiction", rating: 4.8, reviews: 23, available: true, bio: "PhD in Physics, loves hard sci-fi with accurate science" },
    { name: "Maya Patel", genre: "Fantasy Romance", rating: 4.9, reviews: 45, available: true, bio: "Romance author and beta reader with 8+ years experience" },
    { name: "Jordan Kim", genre: "Literary Fiction", rating: 4.7, reviews: 18, available: false, bio: "MFA graduate, specializes in character-driven narratives" }
  ];

  const critiquePartners = [
    { name: "Sam Williams", genre: "Mystery/Thriller", experience: "5 years", status: "Looking for partner", compatibility: 95 },
    { name: "Emma Davis", genre: "Young Adult", experience: "3 years", status: "Available", compatibility: 88 },
    { name: "Riley Chen", genre: "Historical Fiction", experience: "7 years", status: "Looking for partner", compatibility: 92 }
  ];

  const bestsellerLists = [
    {
      name: "NY Times Bestsellers",
      icon: Crown,
      books: [
        { title: "Fourth Wing", author: "Rebecca Yarros", genre: "Fantasy Romance", weeks: 12 },
        { title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", genre: "Literary Fiction", weeks: 8 }
      ]
    },
    {
      name: "Amazon Hot New Releases",
      icon: Star,
      books: [
        { title: "The Atlas Six", author: "Olivie Blake", genre: "Dark Academia", weeks: 3 },
        { title: "Klara and the Sun", author: "Kazuo Ishiguro", genre: "Science Fiction", weeks: 5 }
      ]
    },
    {
      name: "Indie Bestsellers",
      icon: Heart,
      books: [
        { title: "The Midnight Library", author: "Matt Haig", genre: "Literary Fiction", weeks: 15 },
        { title: "Project Hail Mary", author: "Andy Weir", genre: "Science Fiction", weeks: 9 }
      ]
    }
  ];

  const sendMessage = () => {
    if (chatMessage.trim()) {
      const newMessages = [
        ...agentChatMessages,
        { sender: 'You', message: chatMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
        { sender: 'Agent', message: "That sounds fascinating! I'd love to learn more about your protagonist. Based on what you've shared, I think this could be a great fit for our contemporary fiction list. What's the word count you're targeting?", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ];
      setAgentChatMessages(newMessages);
      setChatMessage('');
    }
  };

  // Research Assistant Functions
  const handleStoryAnalyze = (data: any) => {
    setStoryData(data);
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setResearchStep('analysis');
    }, 2000);
  };

  const handleAgentSelect = (agent: any) => {
    setSelectedAgent(agent);
    setResearchStep('chat');
  };

  const resetResearchFlow = () => {
    setResearchStep('input');
    setStoryData(null);
    setSelectedAgent(null);
    setIsAnalyzing(false);
  };

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
              onClick={() => {
                setActiveDemo('industry');
                resetResearchFlow();
              }}
              className="gap-2"
            >
              <TrendingUp className="h-4 w-4" />
              AI Agent Research
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
          <div className="space-y-8">
            {/* Project Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Your Current Project</CardTitle>
                <CardDescription>Continue working on your latest story</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <div className="flex flex-col justify-center">
                    <Button className="w-full" disabled>
                      Continue Writing (Demo)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Multi-Agent Writing Assistant */}
            <Card>
              <CardHeader>
                <CardTitle>Multi-Agent Writing Assistant</CardTitle>
                <CardDescription>Collaborate with specialized AI agents to enhance your story</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Agent Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {writingAgents.map((agent) => {
                      const IconComponent = agent.icon;
                      return (
                        <Button
                          key={agent.id}
                          variant={activeAgent === agent.id ? 'default' : 'outline'}
                          onClick={() => setActiveAgent(agent.id)}
                          className="h-auto p-4 flex flex-col gap-2 hover-scale"
                        >
                          <IconComponent className="h-5 w-5" />
                          <span className="text-xs font-medium text-center">{agent.name}</span>
                        </Button>
                      );
                    })}
                  </div>

                  {/* Active Agent Content */}
                  <div className="border rounded-lg p-6 bg-muted/30">
                    {(() => {
                      const currentAgent = writingAgents.find(a => a.id === activeAgent);
                      const IconComponent = currentAgent?.icon || Bot;
                      
                      return (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{currentAgent?.name}</h4>
                              <p className="text-sm text-muted-foreground">{currentAgent?.description}</p>
                            </div>
                          </div>
                          
                          {activeAgent === 'character' && (
                            <div className="space-y-3">
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Character Analysis:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Maya needs stronger internal motivation. Consider giving her a personal stake in saving the library beyond duty - perhaps a childhood memory or lost love connected to the books."
                                </p>
                              </div>
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Relationship Dynamics:</p>
                                <p className="text-sm text-muted-foreground">
                                  "The tension between Maya and the AI guardian could mirror her internal conflict about technology vs. tradition."
                                </p>
                              </div>
                            </div>
                          )}

                          {activeAgent === 'plot' && (
                            <div className="space-y-3">
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Story Structure:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Your inciting incident is strong, but consider adding a false victory before the final climax to deepen the emotional impact."
                                </p>
                              </div>
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Pacing Suggestion:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Chapter 2 feels rushed. Try adding a quiet character moment to let readers connect with Maya before the next action sequence."
                                </p>
                              </div>
                            </div>
                          )}

                          {activeAgent === 'dialogue' && (
                            <div className="space-y-3">
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Voice Consistency:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Maya's dialogue shifts between formal and casual. Choose one voice and stick with it, or use the shifts to show character growth."
                                </p>
                              </div>
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Dialogue Tag Alternative:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Instead of 'she said angrily,' try: 'Her words cut through the silence like broken glass.'"
                                </p>
                              </div>
                            </div>
                          )}

                          {activeAgent === 'world' && (
                            <div className="space-y-3">
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Setting Details:</p>
                                <p className="text-sm text-muted-foreground">
                                  "The library feels alive but lacks sensory details. What does it smell like? What sounds echo through the halls?"
                                </p>
                              </div>
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">World Rules:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Establish clear rules for how the AI guardian works. Consistency in your magic system builds reader trust."
                                </p>
                              </div>
                            </div>
                          )}

                          {activeAgent === 'style' && (
                            <div className="space-y-3">
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Prose Style:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Your sentences are well-crafted but consider varying length more. Short, punchy sentences can create tension."
                                </p>
                              </div>
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Voice Enhancement:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Your narrative voice has potential. Try leaning into Maya's perspective more - what would she notice that others wouldn't?"
                                </p>
                              </div>
                            </div>
                          )}

                          {activeAgent === 'research' && (
                            <div className="space-y-3">
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Historical Accuracy:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Your 1950s setting needs more authentic details. Consider the limited technology available - no computers, different social norms."
                                </p>
                              </div>
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Technical Details:</p>
                                <p className="text-sm text-muted-foreground">
                                  "The library preservation technology described seems advanced for the era. Research period-appropriate methods."
                                </p>
                              </div>
                            </div>
                          )}

                          {activeAgent === 'emotion' && (
                            <div className="space-y-3">
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Emotional Arc:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Maya's emotional journey needs more variation. Show her vulnerability before her strength to create deeper reader connection."
                                </p>
                              </div>
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Reader Impact:</p>
                                <p className="text-sm text-muted-foreground">
                                  "The loss of knowledge theme is powerful. Add sensory details to help readers feel the weight of what's being lost."
                                </p>
                              </div>
                            </div>
                          )}

                          {activeAgent === 'pacing' && (
                            <div className="space-y-3">
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Scene Rhythm:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Chapter 3 moves too quickly. Add a breathing moment between action sequences to let tension build naturally."
                                </p>
                              </div>
                              <div className="bg-background p-4 rounded-lg border">
                                <p className="text-sm font-medium mb-2">Tension Maintenance:</p>
                                <p className="text-sm text-muted-foreground">
                                  "Great job maintaining suspense, but consider raising stakes gradually rather than all at once in the climax."
                                </p>
                              </div>
                            </div>
                          )}

                          <div className="flex gap-2">
                            <Button variant="outline" className="flex-1" disabled>
                              Apply Suggestions (Demo)
                            </Button>
                            <Button variant="secondary" className="flex-1" disabled>
                              Get More Feedback (Demo)
                            </Button>
                          </div>
                          
                          <div className="bg-primary/5 p-4 rounded-lg mt-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkles className="h-4 w-4 text-primary" />
                              <span className="text-sm font-medium">AI Collaboration</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Each agent specializes in different aspects of storytelling, working together to provide comprehensive feedback tailored to your story's needs.
                            </p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeDemo === 'industry' && (
          <div className="space-y-8">
            {/* Research Assistant Header */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">AI-Powered Agent Research Assistant</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get intelligent manuscript analysis, personalized agent recommendations, and deep research into literary agents' preferences and recent deals.
              </p>
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className={`flex items-center gap-2 ${researchStep === 'input' ? 'text-primary' : 'text-green-600'}`}>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                    researchStep === 'input' ? 'border-primary bg-primary/10' : 'border-green-600 bg-green-600/10'
                  }`}>
                    1
                  </div>
                  <span className="hidden sm:inline">Story Input</span>
                </div>
                
                <div className="w-8 h-px bg-border"></div>
                
                <div className={`flex items-center gap-2 ${researchStep === 'analysis' ? 'text-primary' : ['agents', 'chat'].includes(researchStep) ? 'text-green-600' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                    researchStep === 'analysis' ? 'border-primary bg-primary/10' : 
                    ['agents', 'chat'].includes(researchStep) ? 'border-green-600 bg-green-600/10' : 'border-muted-foreground'
                  }`}>
                    2
                  </div>
                  <span className="hidden sm:inline">AI Analysis</span>
                </div>
                
                <div className="w-8 h-px bg-border"></div>
                
                <div className={`flex items-center gap-2 ${researchStep === 'agents' ? 'text-primary' : researchStep === 'chat' ? 'text-green-600' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                    researchStep === 'agents' ? 'border-primary bg-primary/10' : 
                    researchStep === 'chat' ? 'border-green-600 bg-green-600/10' : 'border-muted-foreground'
                  }`}>
                    3
                  </div>
                  <span className="hidden sm:inline">Agent Research</span>
                </div>
                
                <div className="w-8 h-px bg-border"></div>
                
                <div className={`flex items-center gap-2 ${researchStep === 'chat' ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                    researchStep === 'chat' ? 'border-primary bg-primary/10' : 'border-muted-foreground'
                  }`}>
                    4
                  </div>
                  <span className="hidden sm:inline">Interactive Research</span>
                </div>
              </div>
            </div>

            {/* Research Assistant Content */}
            {researchStep === 'input' && (
              <StoryInputForm onAnalyze={handleStoryAnalyze} isAnalyzing={isAnalyzing} />
            )}

            {researchStep === 'analysis' && storyData && (
              <div className="space-y-6">
                <AIAnalysis storyData={storyData} />
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={resetResearchFlow}>
                    Start Over
                  </Button>
                  <Button onClick={() => setResearchStep('agents')} className="gap-2">
                    <Users className="h-4 w-4" />
                    Browse Agent Database
                  </Button>
                </div>
              </div>
            )}

            {researchStep === 'agents' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Button variant="outline" onClick={() => setResearchStep('analysis')}>
                    ← Back to Analysis
                  </Button>
                  <Button variant="outline" onClick={() => setResearchStep('chat')}>
                    Skip to Research Chat →
                  </Button>
                </div>
                <AgentDatabase 
                  storyGenre={storyData?.genre} 
                  onAgentSelect={handleAgentSelect}
                />
              </div>
            )}

            {researchStep === 'chat' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Button variant="outline" onClick={() => setResearchStep('agents')}>
                    ← Back to Agent Database
                  </Button>
                  <Button variant="outline" onClick={resetResearchFlow}>
                    Start New Research
                  </Button>
                </div>
                <ResearchChat selectedAgent={selectedAgent} />
              </div>
            )}
          </div>
        )}

        {activeDemo === 'industry' && (
          <div className="space-y-8">
            <Tabs defaultValue="trends" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="trends">Publishing Trends</TabsTrigger>
                <TabsTrigger value="agents">Literary Agents</TabsTrigger>
                <TabsTrigger value="releases">Bestseller Lists</TabsTrigger>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Agent List */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Literary Agent Database</CardTitle>
                      <CardDescription>Connect directly with agents seeking new clients</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockAgents.map((agent, index) => (
                          <div key={index} className="p-4 bg-muted rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{agent.name}</h4>
                              <Badge variant={agent.status === 'Open' ? 'default' : 'secondary'}>
                                {agent.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{agent.agency}</p>
                            <p className="text-sm text-muted-foreground mb-3">Represents: {agent.genre}</p>
                            <Button 
                              size="sm" 
                              className="w-full gap-2" 
                              disabled={agent.status === 'Closed'}
                            >
                              <MessageCircle className="h-4 w-4" />
                              {agent.status === 'Open' ? 'Start Chat (Demo)' : 'Closed to Queries'}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Chat Interface */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Chat with Sarah Johnson
                      </CardTitle>
                      <CardDescription>Literary Partners Inc. • Contemporary Fiction</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Chat Messages */}
                        <ScrollArea className="h-80 w-full border rounded-lg p-4 bg-muted/30">
                          <div className="space-y-4">
                            {agentChatMessages.map((msg, index) => (
                              <div key={index} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-lg p-3 ${
                                  msg.sender === 'You' 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'bg-background border'
                                }`}>
                                  <p className="text-sm">{msg.message}</p>
                                  <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>

                        {/* Chat Input */}
                        <div className="flex gap-2">
                          <Input
                            placeholder="Type your message..."
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            className="flex-1"
                          />
                          <Button onClick={sendMessage} size="sm" className="gap-2">
                            <Send className="h-4 w-4" />
                            Send
                          </Button>
                        </div>
                        
                        <div className="bg-primary/5 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            💡 Demo Tip: This is a simulation of our real-time agent chat feature. Connect with literary agents instantly!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="releases" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {bestsellerLists.map((list, index) => {
                    const IconComponent = list.icon;
                    return (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <IconComponent className="h-5 w-5" />
                            {list.name}
                          </CardTitle>
                          <CardDescription>Current trending books</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {list.books.map((book, bookIndex) => (
                              <div key={bookIndex} className="p-4 bg-muted rounded-lg">
                                <h4 className="font-medium">{book.title}</h4>
                                <p className="text-sm text-muted-foreground">by {book.author}</p>
                                <div className="flex items-center justify-between mt-2">
                                  <Badge variant="outline">{book.genre}</Badge>
                                  <span className="text-xs text-muted-foreground">
                                    {book.weeks} weeks on list
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Agent Info Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Agents Representing These Authors</CardTitle>
                    <CardDescription>See which agents represent current bestselling authors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium">Rebecca Yarros (Fourth Wing)</h4>
                        <p className="text-sm text-muted-foreground">Represented by: Louise Fury at The Bent Agency</p>
                        <p className="text-sm text-muted-foreground mt-1">Specializes in: Romance, Fantasy, Young Adult</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium">Andy Weir (Project Hail Mary)</h4>
                        <p className="text-sm text-muted-foreground">Represented by: David Fugate at LaunchBooks Literary</p>
                        <p className="text-sm text-muted-foreground mt-1">Specializes in: Science Fiction, Thriller</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium">Matt Haig (The Midnight Library)</h4>
                        <p className="text-sm text-muted-foreground">Represented by: Francis Bickmore at Canongate</p>
                        <p className="text-sm text-muted-foreground mt-1">Specializes in: Literary Fiction, Mental Health</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium">Gabrielle Zevin (Tomorrow, and Tomorrow, and Tomorrow)</h4>
                        <p className="text-sm text-muted-foreground">Represented by: Doug Stewart at Sterling Lord Literistic</p>
                        <p className="text-sm text-muted-foreground mt-1">Specializes in: Literary Fiction, Contemporary</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeDemo === 'community' && (
          <div className="space-y-8">
            {/* Community Navigation */}
            <Tabs defaultValue="groups" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="groups">Writer Groups</TabsTrigger>
                <TabsTrigger value="beta">Beta Readers</TabsTrigger>
                <TabsTrigger value="critique">Critique Partners</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
              </TabsList>

              <TabsContent value="groups" className="space-y-6">
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
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium">Mystery Writers Guild</h4>
                          <p className="text-sm text-muted-foreground">564 members • Monthly critiques</p>
                        </div>
                        <Button variant="outline" className="w-full" disabled>
                          Join Groups (Demo)
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Active Discussions</CardTitle>
                      <CardDescription>Recent conversations in your groups</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium">World-building in Hard Sci-Fi</h4>
                          <p className="text-sm text-muted-foreground">23 replies • Last activity 2h ago</p>
                          <p className="text-sm mt-2">Discussion about creating believable future technologies...</p>
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium">Trope Subversion Ideas</h4>
                          <p className="text-sm text-muted-foreground">18 replies • Last activity 4h ago</p>
                          <p className="text-sm mt-2">Fresh takes on classic romance tropes...</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="beta" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Find Beta Readers</CardTitle>
                    <CardDescription>Professional beta readers for your genre</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {betaReaders.map((reader, index) => (
                        <div key={index} className="p-4 bg-muted rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium">{reader.name}</h4>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{reader.rating}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="mb-2">{reader.genre}</Badge>
                          <p className="text-sm text-muted-foreground mb-3">{reader.bio}</p>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-muted-foreground">{reader.reviews} reviews</span>
                            <Badge variant={reader.available ? 'default' : 'secondary'}>
                              {reader.available ? 'Available' : 'Busy'}
                            </Badge>
                          </div>
                          <Button 
                            size="sm" 
                            className="w-full" 
                            disabled={!reader.available}
                          >
                            {reader.available ? 'Request Beta Read (Demo)' : 'Currently Unavailable'}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="critique" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Critique Partner Matching</CardTitle>
                    <CardDescription>Find compatible critique partners based on your writing style and genre</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {critiquePartners.map((partner, index) => (
                        <div key={index} className="p-6 bg-muted rounded-lg">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h4 className="font-medium">{partner.name}</h4>
                              <p className="text-sm text-muted-foreground">{partner.genre} • {partner.experience} experience</p>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{partner.compatibility}%</div>
                              <div className="text-xs text-muted-foreground">Match</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{partner.status}</Badge>
                            <Button size="sm" className="gap-2">
                              <MessageCircle className="h-4 w-4" />
                              Connect (Demo)
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <div className="text-center p-6 bg-primary/5 rounded-lg">
                        <h4 className="font-medium mb-2">Perfect Match Algorithm</h4>
                        <p className="text-sm text-muted-foreground">Our AI matches you with critique partners based on writing style, genre preferences, experience level, and feedback style.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="challenges" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Challenges</CardTitle>
                      <CardDescription>Participate in community writing events</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">December Flash Fiction</h4>
                            <Badge variant="outline">5 days left</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">Write a complete story in 500 words</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">142 participants</span>
                            <Button size="sm" disabled>Join Challenge (Demo)</Button>
                          </div>
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">Character Development Workshop</h4>
                            <Badge variant="default">Ongoing</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">Weekly exercises to develop compelling characters</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">89 participants</span>
                            <Button size="sm" disabled>Join Workshop (Demo)</Button>
                          </div>
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">Daily Writing Streak</h4>
                            <Badge variant="secondary">Your Streak: 7 days</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">Write at least 250 words every day</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">1,247 active streakers</span>
                            <Button size="sm" disabled>Log Today's Words (Demo)</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Leaderboards</CardTitle>
                      <CardDescription>See how you rank against other writers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium mb-3">Flash Fiction Winners</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Crown className="h-4 w-4 text-yellow-500" />
                                <span className="text-sm">Sarah_Writes</span>
                              </div>
                              <span className="text-sm text-muted-foreground">487 votes</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-gray-400" />
                                <span className="text-sm">NovelDreamer</span>
                              </div>
                              <span className="text-sm text-muted-foreground">423 votes</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-orange-400" />
                                <span className="text-sm">WordSmith_99</span>
                              </div>
                              <span className="text-sm text-muted-foreground">398 votes</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium mb-3">Writing Streak Champions</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">DailyPenPusher</span>
                              <span className="text-sm text-muted-foreground">365 days</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">WriteOrDie</span>
                              <span className="text-sm text-muted-foreground">289 days</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">StoryAddict</span>
                              <span className="text-sm text-muted-foreground">234 days</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
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