
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShieldCheck,
  Handshake,
  Users,
  LineChart,
  History,
  Eye,
  Scale,
  Receipt,
  Landmark,
} from 'lucide-react';

const advantages = [
  {
    text: 'Temettü stopajı veya kurumlar vergisi yok',
    icon: Receipt,
  },
  {
    text: 'Birleşme ve devralma karları üzerinde stopaj veya kurumlar vergisi yok',
    icon: Handshake,
  },
  {
    text: 'KDV vergi avantajı (fonlarımız gelirlerinde katma değer vergisi ödemez)',
    icon: Receipt,
  },
  {
    text: 'Harici yatırımcıları ve onların finansmanlarını kabul etmez',
    icon: Users,
  },
  {
    text: 'Kurumsal yatırımcı olarak hisse satın alma',
    icon: LineChart,
  },
  {
    text: 'Hisse senetleri vergi olmaksızın aile üyelerine devredilebilir',
    icon: Users,
  },
  {
    text: 'Bir borsada listelenmiş bir şirket gibi yönetilebilir ve finansman kabul edebilir',
    icon: Landmark,
  },
  {
    text: 'Geçmiş performans kaydı',
    icon: History,
  },
  {
    text: 'Şeffaflık',
    icon: Eye,
  },
  {
    text: 'Güvenilirlik',
    icon: ShieldCheck,
  },
  {
    text: 'Tüm Avrupa yasaları ve düzenlemelerine tam uyumlu düzenlenmiş araç',
    icon: Scale,
  },
];

export default function TaxPlanningPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1554224155-16954405a255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0YXglMjBwbGFubmluZ3xlbnwwfHx8fDE3NjU2MTI5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Vergi Planlaması"
          fill
          className="object-cover"
          priority
          data-ai-hint="tax planning finance"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Vergi Planlaması
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              Doğru vergi planlaması, fonunuzun finansal verimliliğini ve yasal uyumluluğunu en üst düzeye çıkarır. ECB Global olarak, fonunuzun tüm vergi avantajlarından yararlanmasını sağlamak için uzman danışmanlık sunuyoruz.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Fonunuzun Avantajları</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-1">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <advantage.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-foreground text-lg">{advantage.text}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <p className="text-lg text-foreground mt-12 text-center">
              Uzman ekibimizle fonunuz için en uygun vergi stratejilerini belirleyerek finansal hedeflerinize güvenle ulaşın. Daha fazla bilgi için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
