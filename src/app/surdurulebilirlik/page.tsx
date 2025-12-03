
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Recycle,
  Leaf,
  Heart,
  LineChart,
  FileText,
} from 'lucide-react';

const services = [
  {
    title: 'Sürdürülebilirlik Stratejileri',
    description: 'Şirketiniz için özelleştirilmiş sürdürülebilirlik stratejileri oluşturarak, çevresel ve sosyal etkinizi artırın.',
    icon: Recycle,
  },
  {
    title: 'Yeşil Dönüşüm Projeleri',
    description: 'Daha çevreci ve sürdürülebilir iş süreçleri için projeler geliştirme ve uygulama desteği.',
    icon: Leaf,
  },
  {
    title: 'Sosyal Sorumluluk Projeleri',
    description: 'Topluma ve çevreye katkı sağlayacak sosyal sorumluluk projelerinin planlanması ve yönetilmesi.',
    icon: Heart,
  },
  {
    title: 'Çevresel Performans Değerlendirmesi',
    description: 'Şirketinizin çevresel etkisini değerlendirme, iyileştirme önerileri sunma ve raporlama süreçlerinde danışmanlık.',
    icon: LineChart,
  },
  {
    title: 'Sürdürülebilirlik Raporlama',
    description: 'Şeffaf ve doğru sürdürülebilirlik raporları hazırlama süreçlerinde rehberlik sağlama.',
    icon: FileText,
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGJ1c2luZXNzfGVufDB8fHx8MTc2NTg2OTA4OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sürdürülebilirlik"
          fill
          className="object-cover"
          priority
          data-ai-hint="sustainable business"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Sürdürülebilirlik
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              ECB Global olarak, şirketlerin sürdürülebilirlik hedeflerine ulaşmalarına yardımcı olmak için kapsamlı danışmanlık hizmetleri sunuyoruz. Sürdürülebilirlik stratejileri geliştirme, çevresel etkiyi azaltma, sosyal sorumluluk projeleri oluşturma ve şeffaflık sağlama konularında uzmanız.
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

            <p className="text-lg text-foreground mt-12 text-center">
              Sürdürülebilirlik konusunda şirketinizin performansını artırmak ve gelecek nesillere sağlıklı bir dünya bırakmak için bize katılın. Bizimle iletişime geçerek daha fazla bilgi alabilir ve danışmanlık hizmetlerimizden faydalanabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
