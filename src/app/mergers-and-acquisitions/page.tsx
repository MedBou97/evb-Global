import Image from 'next/image';
import {
  Gem,
  LineChart,
  Target,
  Users,
  Handshake,
  Search,
  FileText,
  Gavel,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Varlık ve Şirket Değerlemesi',
    icon: Gem,
  },
  {
    title: 'Finansal Analiz ve Stratejik Planlama',
    icon: LineChart,
  },
  {
    title: 'Yatırım Uygunluk Değerlendirmesi',
    icon: Target,
  },
  {
    title: 'Yatırımcı İlişkileri Yönetimi',
    icon: Users,
  },
  {
    title: 'Satış ve Ortaklık Süreç Yönetimi',
    icon: Handshake,
  },
  {
    title: 'Due Diligence (Durum Tespiti) Süreçleri',
    icon: Search,
  },
  {
    title: 'Hisse Satışı ve Sözleşmeler',
    icon: FileText,
  },
  {
    title: 'Kapanış Prosedürleri ve Danışmanlık',
    icon: Gavel,
  },
];

export default function MergersAndAcquisitionsPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtZXJnZXJzJTIwYW5kJTIwYWNxdWlzaXRpb25zfGVufDB8fHx8MTc2NTg2OTA4OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="M&A (Birleşme ve Satın Alma)"
          fill
          className="object-cover"
          priority
          data-ai-hint="business handshake"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            M&A (Birleşme ve Satın Alma)
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              M&A (birleşme ve satın alma) stratejileri, şirketler büyüdükçe, pazarlarını genişlettikçe ve değer yarattıkça önem kazanmaktadır. Şirketlerin bu stratejileri başarıyla uygulamalarına destek oluyoruz.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Hizmetlerimiz</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-2">
                {services.map((service) => (
                  <div key={service.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/20 text-accent">
                      <service.icon className="h-6 w-6 " />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <p className="text-lg text-foreground mt-12 text-center">
              Kurumsal yapılanma, şeffaflık ve sürdürülebilirlik yoluyla müşterilerimizin büyüme ve başarı hedeflerine odaklanıyoruz. Sizin için doğru iş ortaklarını ve stratejileri belirlemek üzere uzman ekibimizle birlikte çalışıyoruz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
