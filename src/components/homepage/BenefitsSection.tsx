const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection;