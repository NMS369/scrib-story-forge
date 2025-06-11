import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Users,
  Settings,
  Bell,
  FileText,
  Target,
  Heart
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  console.log('Dashboard component mounting...');
  const projects = [
    {
      title: "The Midnight Garden",
      genre: "Fantasy Romance",
      progress: 75,
      wordCount: 45000,
      targetWords: 80000,
      lastEdited: "2 hours ago",
      status: "active",
      characters: 5,
      emotionalArc: "Rising tension"
    },
    {
      title: "City of Echoes",
      genre: "Urban Fantasy",
      progress: 30,
      wordCount: 18000,
      targetWords: 70000,
      lastEdited: "1 day ago",
      status: "active",
      characters: 3,
      emotionalArc: "Character development"
    },
    {
      title: "The Last Lighthouse",
      genre: "Literary Fiction",
      progress: 90,
      wordCount: 67000,
      targetWords: 75000,
      lastEdited: "3 days ago",
      status: "revision",
      characters: 7,
      emotionalArc: "Climax resolution"
    }
  ];

  const recentInsights = [
    {
      type: "character",
      message: "Emma's emotional consistency could be strengthened in Chapter 7",
      project: "The Midnight Garden",
      priority: "medium"
    },
    {
      type: "plot",
      message: "Consider developing the relationship between Marcus and Sarah",
      project: "City of Echoes", 
      priority: "low"
    },
    {
      type: "style",
      message: "Your dialogue has improved 15% in emotional authenticity",
      project: "The Midnight Garden",
      priority: "positive"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="./lovable-uploads/c4d58183-ee58-4bb9-b2f7-00e2f3bd9ceb.png" 
                alt="Scrib Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  console.warn('Dashboard logo failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h1 className="text-2xl font-bold text-primary">Writer's Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, Jane!</h2>
          <p className="text-muted-foreground text-lg">Ready to continue crafting your stories? Let's see what's inspiring today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Words Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Target className="h-8 w-8 text-secondary" />
                <span className="text-3xl font-bold text-secondary">1,247</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Writing Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <span className="text-3xl font-bold">7 days</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">AI Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-red-500" />
                <span className="text-3xl font-bold">12</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Projects Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Your Projects</h3>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search projects..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="flex items-center space-x-4">
                          <Badge variant="secondary">{project.genre}</Badge>
                          <span className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span className="text-xs">{project.lastEdited}</span>
                          </span>
                        </CardDescription>
                      </div>
                      <Badge variant={project.status === 'active' ? 'default' : 'outline'}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{project.wordCount.toLocaleString()} / {project.targetWords.toLocaleString()} words</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{project.characters} characters</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="h-4 w-4 text-red-500" />
                          <span>{project.emotionalArc}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <FileText className="h-4 w-4 mr-2" />
                          Continue Writing
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Recent AI Insights</span>
                  <Badge variant="secondary" className="text-xs">3 new</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentInsights.map((insight, index) => (
                  <div key={index} className="p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs capitalize">
                        {insight.type}
                      </Badge>
                      <Badge 
                        variant={insight.priority === 'positive' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {insight.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{insight.message}</p>
                    <p className="text-xs text-primary font-medium">{insight.project}</p>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Insights
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Start New Project
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Find Expert
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Import from Scrivener
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Privacy Settings
                </Button>
              </CardContent>
            </Card>

            {/* Writing Goal */}
            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10">
              <CardHeader>
                <CardTitle className="text-lg">Daily Writing Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">83%</div>
                  <p className="text-sm text-muted-foreground mb-4">831 / 1000 words today</p>
                  <Progress value={83} className="mb-4" />
                  <p className="text-xs text-muted-foreground">Just 169 more words to reach your goal!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;