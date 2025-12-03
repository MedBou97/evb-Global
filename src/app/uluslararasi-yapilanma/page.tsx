import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Globe,
  Search,
  ArrowRight,
  Gavel,
  Settings,
  DollarSign,
} from 'lucide-react';

const services = [
  {
    title: 'Küresel Strateji Belirleme',
    description: 'Şirketlerin küresel pazarda rekabet avantajı elde etmeleri için stratejik yol haritasının oluşturulması ve uygulanması.',
    icon: Globe,
  },
  {
    title: 'Pazar Analizi ve Fırsatlar',
    description: 'Küresel pazarlarda doğru fırsatları belirleme ve analiz etme süreci. Hedeflenen pazarlarda iş yapma potansiyelini değerlendirme.',
    icon: Search,
  },
  {
    title: 'Yabancı Pazarlara Açılma Stratejileri',
    description: 'Yurtdışında yeni pazarlara açılma stratejilerinin belirlenmesi ve uygulanması. İş ortaklıkları, satın almalar ve birleşmeler gibi yöntemlerle büyüme stratejileri.',
    icon: ArrowRight,
  },
  {
    title: 'Hukuki ve Regülasyonel Danışmanlık',
    description: 'Küresel iş yapma süreçlerindeki hukuki ve regülasyonel gerekliliklerin belirlenmesi ve yönetilmesi.',
    icon: Gavel,
  },
  {
    title: 'Operasyonel Yeniden Yapılanma',
    description: 'Küresel yapılanma sürecinde operasyonel işleyişin optimize edilmesi ve verimliliğin artırılması.',
    icon: Settings,
  },
  {
    title: 'Fon Akışı ve Finansal Strateji',
    description: 'Küresel pazarda fon akışı yönetimi ve finansal strateji belirleme süreçlerinde danışmanlık.',
    icon: DollarSign,
  },
];

export default function InternationalStructuringPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXJrZXQlMjBhbmFseXNpc3xlbnwwfHx8fDE3NjQ4OTg4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Uluslararası Yapılanma"
          fill
          className="object-cover"
          priority
          data-ai-hint="global strategy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Uluslararası Yapılanma
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Şirketlerin küresel pazarda başarılı bir şekilde faaliyet gösterebilmesi için gerekli olan yapılanma ve stratejik adımları belirleme sürecinde uzman danışmanlık hizmetleri sunuyoruz. Uluslararası yapılanma danışmanlığı kapsamında, şirketlerin küresel vizyonlarını gerçeğe dönüştürebilmeleri için gereken adımları planlıyor ve uygulamalarını sağlıyoruz.
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

            <p className="text-lg text-muted-foreground mt-12 text-center">
              Uluslararası yapılanma danışmanlığı hizmetleriyle şirketinizin küresel pazarda başarılı ve sürdürülebilir bir şekilde büyümesini destekliyoruz. Müşterilerimizin ihtiyaçlarına özel çözümler üretmek ve küresel rekabet ortamında güçlü bir konum elde etmelerini sağlamak için uzman ekibimizle birlikte çalışıyoruz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
