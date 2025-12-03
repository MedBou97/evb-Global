import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Building,
  Users,
  Globe,
  TrendingUp,
  FileText,
  Scale,
  ShieldCheck,
  Award,
  Handshake,
  Shield,
  Truck,
  Landmark,
} from 'lucide-react';
import Image from 'next/image';

const services = [
    {
      title: 'Kurumsal Finansman ve Operasyonel Finans Yönetimi',
      description: "Bir şirketin finansal gücünü ve operasyonel etkinliğini yönetmek başarı için kritik öneme sahiptir. Uzman kurumsal ve operasyonel finans danışmanlarımız, şirketinizin büyüme ve sürdürülebilirlik hedeflerine odaklanır.",
      icon: Building,
    },
    {
      title: 'Aile Şirketlerinde Kurumsallaşma Yol Haritası',
      description: 'Aile şirketlerinin kurumsallaşma sürecinde izlenmesi gereken stratejik adımları belirlemeniz ve uygulamanız için size rehberlik ediyoruz.',
      icon: Users,
    },
    {
      title: 'İhracat, Dış Pazarlara Açılma ve Küreselleşme Danışmanlığı',
      description: "Şirketlerin ihracat ve uluslararası pazar genişleme süreçlerini yöneterek küreselleşme stratejilerini destekliyoruz.",
      icon: Globe,
    },
    {
      title: 'İş Geliştirme ve Yabancı Yatırımlar',
      description: 'Uluslararası iş geliştirme, yatırım fırsatları ve finansman konularında uzman danışmanlık hizmetleri sunuyoruz. ECA kredileri gibi finansal araçlar için de çözümler sunuyoruz.',
      icon: TrendingUp,
    },
    {
      title: 'Yönetim Raporları, Bütçe Yönetimi ve ERP Projeleri Danışmanlığı',
      description: 'Yönetim raporları oluşturma, bütçe birimi kurma, ERP projelerini yönetme ve başarılı SAP proje danışmanlığı sağlama konularında size destek oluyoruz.',
      icon: FileText,
    },
    {
      title: 'Kârlılık ve Maliyet Yönetimi',
      description: 'Kârlılık analizi, maliyet yönetimi ve kârlılık artırma stratejileri konularındaki uzman danışmanlarımızla işletmenizin performansını optimize etmenize yardımcı oluyoruz.',
      icon: Scale,
    },
    {
      title: 'Aile Şirketlerinde Kurumsallaşma ve İç Denetim',
      description: 'Aile şirketlerinde aile anayasası hazırlama, iç denetim birimi kurma ve dolandırıcılık kontrolü gibi konularda danışmanlık hizmetleri sunuyoruz.',
      icon: ShieldCheck,
    },
    {
      title: 'Turquality ve Marka Teşvikleri',
      description: 'Turquality ve marka teşvikleri gibi destek programlarından yararlanmanız için size rehberlik ediyoruz.',
      icon: Award,
    },
    {
      title: 'M&A (Birleşme ve Devralma) Danışmanlığı ve Borsa Listeleme Süreci',
      description: 'Şirketlerin M&A süreçlerine hazırlanması, borsa listeleme süreçleri ve yatırımcı ilişkileri konularında uzman danışmanlarımızla hizmetinizdeyiz.',
      icon: Handshake,
    },
    {
      title: 'İhracat Alacakları ve Risk Yönetimi',
      description: 'İhracat alacakları yönetimi, faktoring, alacak sigortası ve Exim sigortası gibi risk yönetimi konularında size çözümler sunuyoruz.',
      icon: Shield,
    },
    {
      title: 'Tedarik Zinciri Yönetimi ve Kurumsal Performans Yönetimi',
      description: 'Tedarik zinciri yönetimi, KPI\'lar ile kurumsal performans yönetimi ve risk yönetimi danışmanlığı alanlarında size rehberlik ediyoruz.',
      icon: Truck,
    },
    {
      title: 'Gayrimenkul ve Finansal Yeniden Yapılandırma',
      description: "Gayrimenkul danışmanlığı ve finansal yeniden yapılandırma konularında uzman danışmanlarımızla işletmenizin ihtiyaçlarına özel çözümler sunuyoruz.",
      icon: Landmark,
    },
];

export default function InvestmentConsultingPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3NjU4NjkwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Yatırım Danışmanlığı"
          fill
          className="object-cover"
          priority
          data-ai-hint="investment consulting"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Yatırım Danışmanlığı
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            Şirketinizin büyümesini ve sürdürülebilirliğini sağlamak için uzman rehberlik.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-start gap-4">
                    <service.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground pl-12">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
