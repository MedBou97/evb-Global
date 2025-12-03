import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  'Uluslararası kredi tespiti ve değerlendirmesi',
  'Yabancı finansman seçeneklerinin analizi ve öneriler',
  'Kredi başvurularının hazırlanması ve takibi',
  'Kredi sözleşmelerinin müzakeresi',
  'Kredi kullandırıldıktan sonra risk yönetimi ve raporlama süreçlerinin yönetimi',
  'Finansal performansın uluslararası standartlara uygunluğunun sağlanması',
];

export default function InternationalLoansPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1563089145-599997674d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxpbnRlcm5hdGlvbmFsJTIwZmluYW5jZXxlbnwwfHx8fDE3NjU4NjkwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Uluslararası Kredi Danışmanlığı"
          fill
          className="object-cover"
          priority
          data-ai-hint="international finance"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Uluslararası Kredi Danışmanlığı
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              Şirketlerin uluslararası finansman ihtiyaçlarını karşılamak ve uluslararası yatırımlarını desteklemek için uzman danışmanlık hizmetleri sunuyoruz. Uluslararası kredi danışmanlığımız, müşterilerimize küresel finansal piyasalarda doğru kredi ürünlerini seçme, finansal yapılarını optimize etme ve risk yönetimlerini iyileştirme konularında rehberlik etmektedir.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Hizmetlerimiz:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {services.map((service) => (
                    <li key={service} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <p className="text-lg text-foreground mt-12 text-center">
              Küresel iş dünyasında başarıya ulaşmak için doğru finansman stratejileri ve kapsamlı risk yönetimi çok önemlidir. Uluslararası kredi danışmanlığındaki uzman ekibimiz bu alanlarda size destek olmak için burada.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
