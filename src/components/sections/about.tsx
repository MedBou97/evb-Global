import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Target, Eye, Gem } from 'lucide-react';

const aboutData = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses with transformative strategies and actionable insights that drive sustainable growth and create lasting value for our clients and their stakeholders.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the most trusted and respected consulting partner, renowned for our innovative solutions, deep industry expertise, and unwavering commitment to client success.',
  },
  {
    icon: Gem,
    title: 'Our Values',
    description: 'Integrity, Excellence, Collaboration, and Innovation are the cornerstones of our work. We uphold the highest standards in every engagement, fostering a culture of partnership and forward-thinking.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            The Apex Advantage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are a team of dedicated professionals committed to excellence and innovation. Discover the principles that guide our success.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {aboutData.map((item) => (
            <Card key={item.title} className="text-center flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center p-0">
                <div className="p-4 rounded-full bg-accent/20 text-accent mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-4 text-base">
                {item.description}
              </CardDescription>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold font-headline">Our History</h3>
          <p className="mt-4 text-muted-foreground">
            Founded in 2010, Apex Consulting was born from a desire to provide more than just advice. We aimed to become true partners to our clients. Over the past decade, we have grown from a small team of passionate experts into a leading firm, helping hundreds of businesses navigate complex challenges and seize new opportunities. Our journey is a testament to the power of strategic collaboration and a relentless pursuit of excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
