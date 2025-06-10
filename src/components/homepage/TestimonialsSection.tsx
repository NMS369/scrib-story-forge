import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Scrib's Story Memory module has completely changed the way I approach my novels. No more flipping back and forth between documents—I can keep every character's arc and emotion at my fingertips.",
      author: "Tessa K.",
      role: "Indie Fantasy Author"
    },
    {
      quote: "I used to dread revisions, but Scrib's AI agents make it feel like I have a supportive writing coach by my side. The emotional tone checker helps me stay consistent—and makes my characters feel alive!",
      author: "Jorge M.",
      role: "Aspiring Fiction Writer"
    },
    {
      quote: "The dashboard is so clean and intuitive. I love being able to track multiple projects and instantly jump into whatever I'm working on. It's like a home base for my writing life.",
      author: "Emily S.",
      role: "Romance Novelist"
    },
    {
      quote: "Scrib's privacy controls are a game-changer. Knowing that my data is encrypted and that my work stays mine gives me total peace of mind while I write.",
      author: "Derek L.",
      role: "Indie Author"
    },
    {
      quote: "Scrib's AI feels like a real collaborator, not just a tool. It understands my characters and helps me keep everything consistent—even when I jump between scenes. It's like having a writing partner who never forgets the details.",
      author: "Priya R.",
      role: "Science Fiction Writer"
    },
    {
      quote: "I never thought I'd feel excited to open a writing app. But Scrib feels like it was built by writers, for writers—every feature, from the Storyboard Agent to the SME Marketplace, feels like it's exactly what I need.",
      author: "James W.",
      role: "Self-Published Author"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Loved by Writers Everywhere
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Scrib is transforming the writing process for authors across genres
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                  <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-4">
                          <blockquote className="text-muted-foreground leading-relaxed italic">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="border-t pt-4">
                            <div className="font-semibold text-foreground">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;