
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Gavel,
  Network,
  Users,
  Award,
} from 'lucide-react';

const services = [
  {
    title: 'Aile Anayasası Hazırlama',
    description: 'Aile şirketlerinde yönetişim ve miras planlaması için aile anayasalarının oluşturulması ve uygulanması.',
    icon: Gavel,
  },
  {
    title: 'Kurumsal Yapılandırma',
    description: 'Şirket içi organizasyon yapılarının güçlendirilmesi, görev ve sorumlulukların netleştirilmesi.',
    icon: Network,
  },
  {
    title: 'Gelecek Nesil Planlaması',
    description: 'Aile şirketlerinde gelecek nesillerin şirket içinde konumlanması ve liderlik rollerine hazırlanması.',
    icon: Users,
  },
  {
    title: 'Eğitim ve Gelişim Programları',
    description: 'Aile üyelerine ve yöneticilere özel eğitim ve gelişim programları.',
    icon: Award,
  },
];

export default function FamilyBusinessPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBidXNpbmVzc3xlbnwwfHx8fDE3NjUzODk0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Aile Şirketlerinde Kurumsallaşma"
          fill
          className="object-cover"
          priority
          data-ai-hint="family business"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Aile Şirketleri ve Kurumsallaşma
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              ECB Global olarak, aile şirketlerinin özel ihtiyaçlarına yönelik kurumsallaşma danışmanlığı sunuyoruz. Şirketinizi aile yönetiminden kurumsal yönetim yapısına geçişte destekliyoruz.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Bu Hizmetimiz Kapsamında Sunduklarımız:</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-1">
                {services.map((service) => (
                  <div key={service.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/20 text-accent">
                      <service.icon className="h-6 w-6 " />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <p className="text-lg text-foreground mt-12 text-center">
              ECB Global olarak, aile şirketlerinin kurumsallaşması ve şirketlerin risklerini etkin bir şekilde yönetmelerine yardımcı oluyoruz. Daha fazla bilgi almak ve danışmanlık hizmetlerimizden faydalanmak için bize ulaşın.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
