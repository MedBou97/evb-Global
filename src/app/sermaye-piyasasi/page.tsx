
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Rocket,
  Building,
  Briefcase,
  Home,
  FileSignature,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Girişim Sermayesi Yatırım Ortaklığı Danışmanlığı',
    description: 'İşletmeniz için büyüme stratejileri oluşturmak, yeni fırsatlar değerlendirmek ve yatırımınızın en verimli şekilde yönetilmesini sağlamak için buradayız.',
    icon: Rocket,
    href: '/girisim-sermayesi-yatirim-ortakligi'
  },
  {
    title: 'Gayrimenkul Yatırım Ortaklığı Danışmanlığı',
    description: 'İşletmenizin gayrimenkul portföyünü yönetmek, değerlendirmek ve büyütmek için uzman ekibimizle yanınızdayız.',
    icon: Building,
    href: '/gayrimenkul-yatirim-ortakligi'
  },
  {
    title: 'Girişim Sermayesi Yatırım Fonu Danışmanlığı',
    description: 'Türkiye’deki Risk Sermayesi Yatırımları için etkili bir araç olan GSYF’leri müşterilerimize sunuyoruz. Bu modelde, yatırımcılar fon payları aracılığıyla bir varlık havuzunun mülkiyetini elde ederler.',
    icon: Briefcase,
    href: '/girisim-sermayesi-yatirim-ortakligi' // Note: Link to the most relevant existing page
  },
  {
    title: 'Gayrimenkul Yatırım Fonu Danışmanlığı',
    description: 'Gayrimenkul sektöründe yatırım fonlarına yönelik danışmanlık hizmetleri sunuyoruz. İşletmenizin gayrimenkul yatırımlarını sermaye piyasasında yönetmek ve büyütmek için uzman ekibimizle yanınızdayız.',
    icon: Home,
    href: '/gayrimenkul-yatirim-fonu'
  },
  {
    title: 'Borçlanma Araçları',
    description: 'Şirketlerin veya kurumların sermaye piyasalarında borçlanma araçları çıkarma süreçlerini yöneterek, finansal stratejilerini ve borçlanma politikalarını optimize etmeyi hedefler.',
    icon: FileSignature,
    href: '/borclanma-araclari'
  }
];

export default function CapitalMarketsPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1628872425969-63168bcb0814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXBpdGFsJTIwbWFya2V0c3xlbnwwfHx8fDE3NjU4NjkwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sermaye Piyasası"
          fill
          className="object-cover"
          priority
          data-ai-hint="capital markets"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Sermaye Piyasası
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {services.map((service) => (
                <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/20 text-primary flex-shrink-0">
                        <service.icon className="h-6 w-6 " />
                      </div>
                      <span>{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='pl-20'>
                    <p className="text-muted-foreground">{service.description}</p>
                     <Button asChild variant="link" className="px-0 mt-2">
                        <Link href={service.href}>
                            Daha Fazla Bilgi
                        </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-foreground mb-4">Sermaye piyasaları ve yatırım danışmanlığı hizmetlerimizle ilgili daha fazla bilgi almak için ECB Global olarak sizinle görüşmekten memnuniyet duyarız.</p>
               <Button asChild size="lg">
                <Link href="#contact">Bizimle İletişime Geçin</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
