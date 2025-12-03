import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 'testimonial-avatar-1',
    quote: "Apex Consulting transformed our business. Their strategic insights were game-changing, leading to a 40% increase in revenue. We couldn't have done it without them.",
    author: 'Sarah Lee',
    company: 'CEO, Innovate Corp',
  },
  {
    id: 'testimonial-avatar-2',
    quote: "The team at Apex is unparalleled. Their dedication and expertise in financial advisory provided us with the clarity and confidence we needed to secure our Series B funding.",
    author: 'David Chen',
    company: 'Founder, Enterprise Solutions',
  },
  {
    id: 'testimonial-avatar-3',
    quote: "Working with Apex on our marketing strategy was a fantastic experience. They are creative, data-driven, and truly understand how to build a brand in the modern age.",
    author: 'Maria Garcia',
    company: 'CMO, Future Tech',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from businesses we've helped transform.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatarImage = PlaceHolderImages.find((img) => img.id === testimonial.id);
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="shadow-lg">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <Quote className="h-8 w-8 text-accent mb-4" />
                        <p className="text-lg italic text-foreground mb-6">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            {avatarImage && (
                              <AvatarImage 
                                src={avatarImage.imageUrl} 
                                alt={testimonial.author} 
                                data-ai-hint={avatarImage.imageHint}
                              />
                            )}
                            <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
