import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Brain, Users, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Story Memory",
      description: "Remembers characters, plot line and emotional beats for holistic intelligence."
    },
    {
      icon: PenTool,
      title: "Writing Agents",
      description: "Get help with storyboarding, style, research, and revisions from specialized AI assistants."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with subject matter experts in a variety of fields & industries through Scrib curated marketplace."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your stories are yours. Complete data control with encryption and export options."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Craft Compelling Fiction</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">From initial concept to final draft, Scrib provides intelligent support that enhances your story and respects your creative process.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;