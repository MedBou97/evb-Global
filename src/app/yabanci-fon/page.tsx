
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Banknote,
  Landmark,
  ShieldCheck,
  Globe,
  Briefcase,
  LineChart,
  Search,
  Gavel,
  FileText
} from 'lucide-react';

const advantages = [
    {
        title: 'Vergi Avantajları',
        description: 'Kurumlar vergisi, KDV, veraset ve intikal vergisi gibi yüklerden muafiyet.',
        icon: ShieldCheck,
    },
    {
        title: 'Uluslararası Yatırımlar',
        description: 'Uluslararası gayrimenkul yatırımlarına iştirak etme ve kira gelirlerinden vergi avantajı sağlama.',
        icon: Landmark,
    },
    {
        title: 'Fon Toplama İmkanı',
        description: 'ISIN Kodu alarak uluslararası yatırımcılardan fon toplama ve dünya borsalarından hisse alımı.',
        icon: Globe,
    },
    {
        title: 'Finansal Esneklik',
        description: 'Yabancı kurumsal yatırımcı statüsüyle uluslararası bankalara transfer yapma ve kredi kullanma.',
        icon: Banknote,
    },
];

const services = [
    {
        title: 'Fon Kurulum ve Yönetim',
        description: 'Yurt dışında fonların kurulması, portföy yönetimi ve performans takibi.',
        icon: Briefcase,
    },
    {
        title: 'Portföy Analizi ve Strateji',
        description: 'Mevcut portföylerin analizi, stratejik planlama ve yatırım fırsatlarının belirlenmesi.',
        icon: LineChart,
    },
    {
        title: 'Pazar Araştırması ve Risk Yönetimi',
        description: 'Piyasa analizi, pazar araştırmaları ve risk yönetimi konularında danışmanlık.',
        icon: Search,
    },
    {
        title: 'Yatırım Danışmanlığı ve Raporlama',
        description: 'Doğru kararlar için analizler, raporlamalar ve stratejik öneriler.',
        icon: FileText,
    },
    {
        title: 'Hukuki Danışmanlık',
        description: 'Fon yatırımlarının hukuki boyutunu ele alarak gerektiğinde hukuki danışmanlık.',
        icon: Gavel,
    }
]

export default function ForeignFundsPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmb3JlaWduJTIwZnVuZHN8ZW58MHx8fHwxNzY1MTEzODc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Yurt Dışı Fonlar"
          fill
          className="object-cover"
          priority
          data-ai-hint="foreign funds"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Yurt Dışı Fonlar
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              Yurt Dışı Fonlar, uluslararası yatırımcılar için çeşitli avantajlar sunan bir finansal araçtır. Vergi avantajlarından yararlanarak önemli vergisel yüklerden muafiyet elde edebilirsiniz. Ayrıca, uluslararası gayrimenkul yatırımlarına iştirak edebilir, ISIN Kodu alarak uluslararası yatırımcılardan fon toplayabilir ve dünya genelindeki borsalardan hisse alımı yapabilirsiniz.
            </p>

            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Yurt Dışı Fonların Avantajları</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-1">
                {advantages.map((advantage) => (
                  <div key={advantage.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/20 text-accent">
                      <advantage.icon className="h-6 w-6 " />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{advantage.title}</h3>
                      <p className="text-muted-foreground mt-1">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Yurt Dışı Fonlar Konusunda Sunduğumuz Hizmetler</CardTitle>
              </CardHeader>
               <CardContent className="grid gap-8 md:grid-cols-1">
                {services.map((service) => (
                  <div key={service.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <service.icon className="h-6 w-6" />
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
              Yurt dışı fonlar hakkında daha fazla bilgi almak ve danışmanlık hizmetlerimizden yararlanmak için lütfen bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
