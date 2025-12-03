
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Landmark,
  LineChart,
  Receipt,
} from 'lucide-react';

const whatYouCanDo = [
    {
        title: 'Ticari Banka İşlevselliği',
        description: 'Para çekme ve kredi kartı işlemleri haricinde neredeyse her şeyi yapabilir; akreditifler düzenleyebilir, teminatlar verebilir, banka transferleri yapabilir.',
        icon: Landmark,
    },
    {
        title: 'Geniş Yatırım Yelpazesi',
        description: 'Gayrimenkul satın alabilir, listelenmiş hisselere yatırım yapabilir, Borsa’ya kote olabilir ve harici yatırımcılardan fon kabul edebilir.',
        icon: LineChart,
    },
    {
        title: 'Vergi Yönetimi Avantajları',
        description: 'KDV, kurumlar vergisi veya temettü stopaj vergisi gibi vergilerden muafiyet sağlayarak vergi yönetimi avantajları sunar.',
        icon: Receipt,
    },
];

export default function StructuringPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1520607162513-77705c6f0d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHN0cnVjdHVyZXxlbnwwfHx8fDE3NjU4NjkwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Yapılandırma"
          fill
          className="object-cover"
          priority
          data-ai-hint="business structure"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Yapılandırma
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              Fon yapılandırması, yatırım hedeflerinize ulaşmanız için esnek ve avantajlı çözümler sunar. ECB Global olarak, fonunuzu en verimli şekilde yapılandırmanız için size özel stratejiler geliştiriyoruz.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Fonunuzla Neler Yapabilirsiniz?</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-1">
                {whatYouCanDo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <p className="text-lg text-foreground mt-12 text-center">
              Uzman ekibimizle fonunuzu doğru yapılandırarak finansal esneklik kazanın ve vergisel avantajlardan yararlanın. Daha fazla bilgi için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
