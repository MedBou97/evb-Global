
import Image from 'next/image';
import {
  ShieldAlert,
  Target,
  ShieldCheck,
  Activity,
  Users,
  BrainCircuit,
  Globe,
  CheckCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Risk Değerlendirmesi',
    description: 'Şirketinizin faaliyetlerinden kaynaklanan risklerin belirlenmesi ve analiz edilmesi.',
    icon: ShieldAlert,
  },
  {
    title: 'Risk Stratejileri',
    description: 'Risklere karşı stratejiler oluşturma ve uygulama süreçleri.',
    icon: Target,
  },
  {
    title: 'İç Kontrol Sistemleri',
    description: 'Şirket içi kontrol sistemlerinin oluşturulması ve güçlendirilmesi.',
    icon: ShieldCheck,
  },
  {
    title: 'Risk İzleme ve Raporlama',
    description: 'Risklerin sürekli olarak izlenmesi, raporlanması ve yönetim kuruluna sunulması.',
    icon: Activity,
  },
];

const whyUs = [
    {
        title: 'Deneyimli ve Uzman Kadro',
        icon: Users,
    },
    {
        title: 'Kapsamlı Çözümler',
        icon: BrainCircuit,
    },
    {
        title: 'Sektörel ve Yerel Bilgi Birikimi',
        icon: Globe,
    },
    {
        title: 'Uluslararası Standartlara Uyum',
        icon: CheckCircle,
    }
]

export default function CorporateRiskManagementPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1665686306574-1ace09918530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyaXNrJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3NjU4NjkwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Kurumsal Risk Yönetimi"
          fill
          className="object-cover"
          priority
          data-ai-hint="risk management"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Kurumsal Risk Yönetimi
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              Şirketinizin karşılaştığı riskleri belirlemek, değerlendirmek ve yönetmek için uzmanız.
            </p>

            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Kurumsal Risk Yönetimi Hizmetlerimiz</CardTitle>
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

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Neden ECB Global?</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-2">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
