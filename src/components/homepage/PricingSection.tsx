import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose the plan that works best for your writing journey</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Monthly Plan */}
          <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">Monthly</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">$30</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Access to all writing agents</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Scrib Life Slack community access</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Prompt suggestions & writing tricks</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Connect with beta readers & critique partners</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Community support & networking</p>
              </div>
            </CardContent>
          </Card>

          {/* Annual Plan */}
          <Card className="border-2 border-primary relative hover:border-primary transition-all duration-300 hover:shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Save $60
              </span>
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">Annual</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">$300</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">$25/month when billed annually</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Access to all writing agents</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Scrib Life Slack community access</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Prompt suggestions & writing tricks</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Connect with beta readers & critique partners</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Community support & networking</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-6 bg-muted/30 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2 text-primary">Subject Matter Expert Network</h3>
            <p className="text-muted-foreground mb-4">
              Connect with industry experts for specialized guidance on your fiction projects. Coming soon!
            </p>
            <p className="text-sm text-muted-foreground">
              Fee-based consultations • Scrib takes 10% platform fee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;