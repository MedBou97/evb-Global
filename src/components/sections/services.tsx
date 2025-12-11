import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, ClipboardList, TrendingUp, DraftingCompass, BarChart, Rocket } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const services = [
    {
      icon: ClipboardList,
      title: 'Fizibilite Hizmetleri',
      description: 'İşletme sahiplerine veya yatırımcılara gelecekteki performans hakkında bilgi sağlamak ve riskleri minimize etmek için önemlidir.',
      items: [
        'Finansal Check-up',
        'Finansal Performans Yönetimi',
        'Finansal İzleme',
        'Finansal Raporlama'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Bütçe ve Planlama',
      description: 'Finansal planlama ve bütçeleme, kişisel mali durumdan büyük ölçekli kurumsal finans yönetimine kadar her düzeyde önemlidir.',
      items: [
        'Finansal Strateji ve Modelleme',
        'CFO Ofisi Dönüşümü',
        'Yönetim Yetkinlik Analizleri',
        'Finansal Risk Yönetimi'
      ]
    },
    {
      icon: DraftingCompass,
      title: 'Yapılandırma',
      description: 'Şirketlerin veya varlıkların değerlerini belirleme ve bu değerlerin optimize edilmesi için yapısal düzenlemeler yapma sürecidir.',
      items: [
        'Finansal Durum Tespiti',
        'Finansal Rehabilitasyon',
        'Finansal İletişim Stratejileri',
        'Yapılandırma Koçluğu'
      ]
    },
    {
      icon: BarChart,
      title: 'Sektörel Analiz',
      description: 'Finansal tabloların incelenmesi, piyasa verilerinin analizi, sektörel trendlerin ve düzenleyici değişikliklerin takibi gibi yöntemlerle yapılır.',
      items: [
        'Hedef Sektör Analizi',
        'Firma Odaklı İnceleme',
        'Rekabet Analizi',
        'Risk Analizi'
      ]
    }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-full bg-accent/20 text-accent">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mt-auto">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
          <AnimatedSection delay={services.length * 100} className="md:col-span-2 lg:col-span-2">
             <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-full bg-accent/20 text-accent">
                        <Rocket className="h-8 w-8" />
                      </div>
                      <CardTitle className="font-headline text-2xl">Çözüm Odaklı ve Yenilikçi</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Şirketinizin öncelikleri ve hedefleri doğrultusunda bütünleşik kurumsal gelişim ve büyüme çözümleri sunuyoruz.
                  </p>
                </CardContent>
              </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
