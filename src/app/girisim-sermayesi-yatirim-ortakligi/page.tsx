
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Briefcase,
  FileText,
  Target,
} from 'lucide-react';

const services = [
  {
    title: 'Yatırım Analizi ve Değerlendirme',
    description: 'Potansiyel yatırım fırsatlarını değerlendirme ve yatırımın finansal ve operasyonel analizleri.',
    icon: LineChart,
  },
  {
    title: 'Portföy Yönetimi',
    description: 'Yatırım portföyünün etkin yönetimi ve çıkış stratejilerinin belirlenmesi.',
    icon: Briefcase,
  },
  {
    title: 'Yatırım Süreci Yönetimi',
    description: 'Yatırımın tüm aşamalarında danışmanlık, rehberlik, gerekli belgelerin hazırlanması ve izin süreçlerinin takibi.',
    icon: FileText,
  },
  {
    title: 'Stratejik Yönlendirme',
    description: 'İşletme stratejilerinin belirlenmesi, geliştirilmesi ve büyüme ve genişleme planlarının oluşturulması.',
    icon: Target,
  },
];

export default function VentureCapitalPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx2ZW50dXJlJTIwY2FwaXRhbHxlbnwwfHx8fDE3NjU0MDE5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Girişim Sermayesi Yatırım Ortaklığı"
          fill
          className="object-cover"
          priority
          data-ai-hint="venture capital startup"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Girişim Sermayesi Yatırım Ortaklığı
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-6 text-center">
              ECB Global olarak, girişim sermayesi yatırım ortaklığı danışmanlığı hizmetleri sunmaktan gurur duyuyoruz. İşletmeniz için büyüme stratejileri oluşturmak, yeni fırsatlar değerlendirmek ve yatırımınızın en verimli şekilde yönetilmesini sağlamak için buradayız.
            </p>
            <p className="text-lg text-foreground mb-12 text-center">
              ECB Global, finansal danışmanlık alanında uzmanlaşmış bir ekip tarafından kurulmuştur. Girişim sermayesi yatırım ortaklığı konusunda geniş bir deneyime sahibiz ve müşterilerimize stratejik yönlendirme, portföy yönetimi ve yatırım süreci danışmanlığı sağlıyoruz.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Hizmetlerimiz</CardTitle>
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

          </div>
        </div>
      </section>
    </>
  );
}
