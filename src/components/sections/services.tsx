import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { LineChart, Landmark, Megaphone } from 'lucide-react';

const services = [
  {
    id: 'service-strategy',
    icon: LineChart,
    title: 'Strategic Consulting',
    description: 'We help you navigate market complexities with data-driven strategies for growth, innovation, and competitive advantage. Our experts work with you to build a roadmap for long-term success.',
  },
  {
    id: 'service-finance',
    icon: Landmark,
    title: 'Financial Advisory',
    description: 'Our financial advisory services provide clarity and confidence in your financial decisions. From M&A to capital raising, we offer comprehensive support to optimize your financial performance.',
  },
  {
    id: 'service-marketing',
    icon: Megaphone,
    title: 'Marketing Solutions',
    description: 'Unlock your brand\'s potential with our cutting-edge marketing solutions. We combine creative campaigns with analytics to build brand equity and drive customer engagement in a digital-first world.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions designed to meet your unique business needs and drive impactful results.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const serviceImage = PlaceHolderImages.find((img) => img.id === service.id);
            return (
              <Card key={service.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {serviceImage && (
                  <div className="aspect-video relative">
                    <Image
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={serviceImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-accent/20 text-accent">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
