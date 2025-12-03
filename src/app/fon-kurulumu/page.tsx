
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Banknote,
  ShieldCheck,
  Landmark,
  Globe,
  BadgeCheck,
} from 'lucide-react';

const advantages = [
    {
        text: 'Bir yatırım fonu, müşterilerin hesaplarını maksimum esneklikle kullanmalarını sağlayarak bir ticaret bankası gibi çalışır, örneğin banka transferleri yapmak, teminat mektupları, krediler düzenlemek gibi.',
        icon: Banknote,
    },
    {
        text: 'Bir yatırım fonu itibar, itibar ve işletme kolaylığından faydalanır.',
        icon: BadgeCheck,
    },
    {
        text: 'Bir yatırım fonunun vergi ve yasal avantajları vardır.',
        icon: ShieldCheck,
    },
    {
        text: 'Bir yatırım fonu, Avrupa’da bir holding şirketi yapısını kullanmanın en avantajlı yoludur.',
        icon: Landmark,
    },
    {
        text: 'Yatırım fonu İsviçre ve Avrupa düzenlemelerine tabi olacaktır.',
        icon: Globe,
    }
];

export default function FundEstablishmentPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmb3JlaWduJTIwZnVuZHN8ZW58MHx8fHwxNzY1MTEzODc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Fon Kurulumu"
          fill
          className="object-cover"
          priority
          data-ai-hint="investment fund setup"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Fon Kurulumu
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              ECB Global olarak, uluslararası yatırım fonları kurulumu sürecinde size özel çözümler ve uzman danışmanlık hizmetleri sunuyoruz. Küresel piyasalarda avantaj elde etmeniz için karmaşık yasal, vergisel ve operasyonel süreçleri yönetiyoruz.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Neden Bir Yatırım Fonu?</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-1">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <advantage.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-foreground">{advantage.text}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <p className="text-lg text-foreground mt-12 text-center">
              Uzman ekibimizle yatırım fonu kurarak uluslararası alanda rekabet avantajı sağlayın. Daha fazla bilgi ve danışmanlık hizmetlerimiz için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
