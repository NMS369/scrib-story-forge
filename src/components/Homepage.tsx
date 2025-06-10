import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, BookOpen, Brain, Users, Shield, Sparkles } from "lucide-react";
const Homepage = () => {
  const features = [{
    icon: Brain,
    title: "Story Memory",
    description: "Remembers characters, plot line and emotional beats for holistic intelligence."
  }, {
    icon: PenTool,
    title: "Writing Agents",
    description: "Get help with storyboarding, style, research, and revisions from specialized AI assistants."
  }, {
    icon: Users,
    title: "Expert Network",
    description: "Connect with subject matter experts in a variety of fields & industries through Scrib curated marketplace."
  }, {
    icon: Shield,
    title: "Privacy First",
    description: "Your stories are yours. Complete data control with encryption and export options."
  }];
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/c4d58183-ee58-4bb9-b2f7-00e2f3bd9ceb.png" alt="Scrib Logo" className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Your Personalized Fiction Writing Assistant</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Scrib enhances human creativity to empower fiction writers with intelligent tools to assist with brainstorming, drafting, and revising while enhancing psychological depth, emotional acuity, and consistent narrative memory.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                <Sparkles className="mr-2 h-5 w-5" />
                Sign Up Now
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Free trial • No credit card required • Your stories, your ownership</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Craft Compelling Fiction</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">From initial concept to final draft, Scrib provides intelligent support that enhances your story and respects your creative process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">
                  Write with Confidence, Keep Your Voice
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Story-aware suggestions</strong> that understand your characters and plot
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Emotional consistency checks</strong> to maintain authentic character development
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Private AI models</strong> that learn your style without sharing your work
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <div className="space-y-3">
                  <div className="h-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded"></div>
                  <div className="h-3 bg-gradient-to-r from-secondary/20 to-primary/20 rounded w-4/5"></div>
                  <div className="h-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded w-3/5"></div>
                  <div className="mt-6 p-3 bg-secondary/10 rounded border-l-4 border-secondary">
                    <p className="text-sm text-muted-foreground italic">
                      "Scrib noticed that Emma's emotional arc might benefit from a moment of vulnerability here..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Writing Process</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Join writers creating emotionally resonant stories with AI built for fiction.</p>
          <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
            Start Your Free Trial
          </Button>
          <p className="text-sm opacity-75 mt-4">
            14-day free trial • Cancel anytime • Full data export
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/lovable-uploads/c4d58183-ee58-4bb9-b2f7-00e2f3bd9ceb.png" alt="Scrib Logo" className="h-6 w-auto" />
              <span className="text-muted-foreground">© 2024 Scrib. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Homepage;