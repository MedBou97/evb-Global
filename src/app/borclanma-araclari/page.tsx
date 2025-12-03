
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Settings,
  ShieldCheck,
  FileText,
  Users,
  BarChart,
  AlertTriangle,
  FileSignature,
  BookOpen,
  Landmark,
} from 'lucide-react';

const services = [
  {
    title: 'Borçlanma Stratejileri',
    description: 'Müşterilerimizin finansal hedeflerini ve ihtiyaçlarını değerlendirerek, uygun borçlanma stratejileri belirlemek.',
    icon: LineChart,
  },
  {
    title: 'Borçlanma Aracı Yapılandırma',
    description: 'Borçlanma araçlarının türünü, vadesini, faiz oranlarını ve diğer özelliklerini belirleyerek yapılandırma sürecini yönetmek.',
    icon: Settings,
  },
  {
    title: 'Sermaye Piyasası Düzenlemeleri',
    description: 'İlgili sermaye piyasası düzenlemeleri ve gereklilikleri konusunda danışmanlık sağlamak ve uyumluluk sağlamak.',
    icon: ShieldCheck,
  },
  {
    title: 'İhraç Süreci Yönetimi',
    description: 'Borçlanma araçlarının sermaye piyasalarında ihraç edilme sürecini yönetmek ve koordinasyon sağlamak.',
    icon: FileText,
  },
   {
    title: 'Yatırımcı İlişkileri',
    description: 'İhraç edilen borçlanma araçlarıyla ilgili yatırımcı ilişkilerini yönetmek ve iletişim stratejileri geliştirmek.',
    icon: Users,
  },
  {
    title: 'Borçlanma Aracı Değerlendirmesi',
    description: 'Mevcut borçlanma araçlarının değerlendirilmesi ve portföy yönetimi stratejilerinin oluşturulması.',
    icon: BarChart,
  },
  {
    title: 'Risk Yönetimi',
    description: 'Borçlanma araçlarına ilişkin riskleri analiz etmek ve yönetim stratejileri geliştirmek.',
    icon: AlertTriangle,
  },
];

const instruments = [
    {
        title: "Bono ve Tahvil",
        description: "Bono ve tahviller, şirketlerin veya devletlerin finansman ihtiyaçlarını karşılamak için çıkardıkları borçlanma araçlarıdır. Bu araçlar genellikle belirli bir vadeye sahiptir ve yatırımcılara sabit bir faiz getirisi sunarlar. Şirketler için finansman kaynağı olarak kullanıldığı gibi yatırımcılar için de düzenli gelir sağlayabilirler.",
        icon: FileSignature,
    },
    {
        title: "Varlığa Dayalı Menkul Kıymet (VDMK)",
        description: "Varlığa dayalı menkul kıymetler, genellikle bir varlığın gelir akışlarına dayalı olarak yapılandırılan finansal araçlardır. Özellikle gayrimenkul varlıklarına dayalı olan VDMK’ler, yatırımcılara belirli bir süre içinde sabit getiriler sunabilir. Bu araçlar, yatırımcılara portföylerini çeşitlendirmek ve risklerini dağıtmak için fırsatlar sunabilir.",
        icon: Landmark,
    },
    {
        title: "Sukuk – Kira Sertifikası",
        description: "Sukuk, İslami finans prensiplerine uygun olarak yapılandırılan ve genellikle bir varlığın kira gelirlerine dayalı olan menkul kıymetlerdir. Sukuklar, geleneksel tahvil ve bono gibi sabit getiri sağlayabilirken aynı zamanda İslami finans kurallarına uygun olmasıyla dikkat çekerler. Kira sertifikaları olarak da bilinen sukuklar, yatırımcılara İslami finans prensipleri çerçevesinde yatırım yapma imkanı sunarlar.",
        icon: BookOpen,
    }
]

export default function DebtInstrumentsPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1559223607-a43c943c7a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiYW5raW5nJTIwZmluYW5jZXxlbnwwfHx8fDE3NjU4NjkwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Borçlanma Araçları"
          fill
          className="object-cover"
          priority
          data-ai-hint="banking finance"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Borçlanma Araçları
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-6 text-center">
              Sermaye Piyasası Borçlanma Aracı Danışmanlığı, şirketlerin veya kurumların sermaye piyasalarında borçlanma araçları çıkarma süreçlerini yöneterek, finansal stratejilerini ve borçlanma politikalarını optimize etmeyi hedefler.
            </p>
            <p className="text-lg text-foreground mb-12 text-center">
              Bu danışmanlık hizmeti, müşterilerin borçlanma araçları ihraç etme sürecindeki adımları planlamasına ve uygulamasına yardımcı olurken, aynı zamanda sermaye piyasaları düzenlemeleri ve gereklilikleri konusunda da danışmanlık sağlar.
            </p>

            <Card className="shadow-lg mb-12">
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

            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Borçlanma Araçları</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-1">
                {instruments.map((instrument) => (
                  <div key={instrument.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <instrument.icon className="h-6 w-6 " />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{instrument.title}</h3>
                      <p className="text-muted-foreground mt-1">{instrument.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

             <div className="text-center">
                <p className="text-lg text-foreground">Bizimle çalışarak, sermaye piyasalarında borçlanma araçlarıyla ilgili kararlarınızı daha etkili bir şekilde yönetebilir, uygun finansal çözümlerle iş stratejilerinizi destekleyebilirsiniz.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
