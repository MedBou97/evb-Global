
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Briefcase,
  Handshake,
  Target,
  LineChart,
  Gavel,
  Activity,
  CheckCircle,
  Users,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Portföy Değerlendirme ve Analiz',
    description: 'Mevcut gayrimenkul portföylerinin değerlendirilmesi, analiz edilmesi ve stratejik planlamaların yapılması konularında danışmanlık hizmetleri sunuyoruz.',
    icon: Briefcase,
  },
  {
    title: 'Yatırım Ortaklığı Oluşturma',
    description: 'Yatırım ortaklıklarının oluşturulması, ortaklık yapısının belirlenmesi ve yatırım stratejilerinin oluşturulması konularında uzmanız.',
    icon: Handshake,
  },
  {
    title: 'Pazar Araştırması ve Risk Yönetimi',
    description: 'Gayrimenkul piyasasının analizi, pazar araştırmaları, rekabet analizi ve risk yönetimi konularında danışmanlık sağlıyoruz.',
    icon: Target,
  },
  {
    title: 'Finansal Analiz ve Raporlama',
    description: 'Gayrimenkul yatırımlarında finansal analizler, raporlamalar ve stratejik öneriler sunuyoruz.',
    icon: LineChart,
  },
  {
    title: 'Hukuki Danışmanlık',
    description: 'Gayrimenkul yatırımlarının hukuki boyutunu ele alarak gerektiğinde hukuki danışmanlık hizmetleri sağlıyoruz.',
    icon: Gavel,
  },
  {
    title: 'Performans Takibi ve İyileştirme',
    description: 'Yatırım ortaklıklarının performans takibi, raporlama ve iyileştirme çalışmaları konusunda destek sağlıyoruz.',
    icon: Activity,
  },
];

const advantages = [
    'Diversifiye portföylerle riskleri azaltma ve getiri potansiyelini artırma imkanı.',
    'Profesyonel yönetim ve uzman ekibin sağladığı avantajlarla gayrimenkul yatırımlarınızı optimize etme şansı.',
    'Yatırım ortaklığı yaparak büyük projelere ortak olma ve getirilerden pay alma imkanı.',
    'Gayrimenkul sektöründeki gelişmelerden en iyi şekilde faydalanma ve yatırım stratejilerini güncelleme şansı.',
];

const whyUs = [
    {
        title: 'Deneyimli ve Uzman Ekip',
        icon: Users,
    },
    {
        title: 'İhtiyaçlarınıza Özel Çözümler',
        icon: Target,
    },
    {
        title: 'Profesyonel Risk Yönetimi',
        icon: ShieldCheck,
    },
    {
        title: 'Müşteri Memnuniyeti Odaklılık',
        icon: CheckCircle,
    }
]

export default function RealEstateInvestmentTrustPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxyZWFsJTIwZXN0YXRlJTIwaW52ZXN0bWVudHxlbnwwfHx8fDE3NjU4NjkwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gayrimenkul Yatırım Ortaklığı"
          fill
          className="object-cover"
          priority
          data-ai-hint="real estate investment"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Gayrimenkul Yatırım Ortaklığı
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-6 text-center">
              ECB Danışmanlık olarak, gayrimenkul sektöründe yatırım ortaklıklarına yönelik danışmanlık hizmetleri sunuyoruz. İşletmenizin gayrimenkul portföyünü yönetmek, değerlendirmek ve büyütmek için uzman ekibimizle yanınızdayız.
            </p>
            <p className="text-lg text-foreground mb-12 text-center">
              Gayrimenkul Yatırım Ortaklığı Danışmanlığı, yatırımcılara belirli gayrimenkul projeleri veya portföylerine odaklanarak özel ve derinlemesine analizler sunar. Bu analizler, yatırımcılara projelerin veya portföylerin özellikleri ve potansiyeli hakkında detaylı bilgi sağlar ve uzmanlık gerektiren sektörel stratejiler sunar. Özellikle uzun vadeli yatırımlar ve sektörel gelecek projeksiyonları üzerine odaklanır.
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
                <CardTitle className="font-headline text-2xl">Gayrimenkul Yatırım Ortaklığı Avantajları</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                    {advantages.map((advantage) => (
                        <li key={advantage} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-foreground">{advantage}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none text-foreground mb-12">
              <h2 className='text-2xl font-headline font-semibold mb-4'>GYF ve GYO Arasındaki Farklar</h2>
              <p>Gayrimenkul Yatırım Fonu (GYF) ve Gayrimenkul Yatırım Ortaklığı (GYO), gayrimenkul sektöründe farklı yatırım araçlarıdır ve temelde birbirlerinden belirli noktalarda ayrılırlar. İşte bu iki yatırım aracı arasındaki temel farklar:</p>

              <h3 className='text-xl font-headline font-semibold mt-6 mb-2'>Yatırım Yapılan Varlık:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="font-semibold">GYF:</strong> Gayrimenkul Yatırım Fonları, genellikle çeşitli gayrimenkul varlıklarına yatırım yaparlar. Bu varlıklar, ticari binalar, konutlar, alışveriş merkezleri, oteller gibi farklı gayrimenkul türlerini içerebilir.</li>
                <li><strong className="font-semibold">GYO:</strong> Gayrimenkul Yatırım Ortaklıkları ise genellikle belirli bir gayrimenkul projesine veya portföye odaklanırlar. Örneğin, bir GYO, bir alışveriş merkezine veya bir ofis kompleksine yatırım yapabilir.</li>
              </ul>

              <h3 className='text-xl font-headline font-semibold mt-6 mb-2'>Portföy Çeşitliliği:</h3>
               <ul className="list-disc pl-6 space-y-2">
                <li><strong className="font-semibold">GYF:</strong> Gayrimenkul Yatırım Fonları, çeşitli gayrimenkul varlıklarına yatırım yaptıkları için portföylerinde genellikle daha geniş bir çeşitlilik bulunur. Bu çeşitlilik, riskleri dağıtarak yatırımcılara daha dengeli bir getiri sağlayabilir.</li>
                <li><strong className="font-semibold">GYO:</strong> Gayrimenkul Yatırım Ortaklıkları ise genellikle belirli bir projeye veya varlık türüne odaklandıkları için portföy çeşitliliği GYF’lere göre daha sınırlı olabilir. Ancak bu durum, belirli bir alanda uzmanlaşma ve daha derin analiz imkanı sunabilir.</li>
              </ul>

              <h3 className='text-xl font-headline font-semibold mt-6 mb-2'>Yatırım Süresi ve Likidite:</h3>
               <ul className="list-disc pl-6 space-y-2">
                <li><strong className="font-semibold">GYF:</strong> Gayrimenkul Yatırım Fonları, genellikle likit bir yatırım aracıdır. Yatırımcılar, genellikle belirli bir dönem sonunda veya istedikleri zaman hisselerini satabilirler.</li>
                <li><strong className="font-semibold">GYO:</strong> Gayrimenkul Yatırım Ortaklıkları ise hisse senetleri aracılığıyla yatırımcılara ortaklık imkanı sunarlar, ancak hisse senetleri borsada işlem gördüğü için likidite, GYF’lere kıyasla biraz daha sınırlı olabilir.</li>
              </ul>

              <h3 className='text-xl font-headline font-semibold mt-6 mb-2'>Yatırımcı Profili:</h3>
               <ul className="list-disc pl-6 space-y-2">
                <li><strong className="font-semibold">GYF:</strong> Genellikle bireysel yatırımcılar ve kurumsal yatırımcılar tarafından tercih edilir. Daha geniş bir yatırımcı kitlesiyle çalışabilirler.</li>
                <li><strong className="font-semibold">GYO:</strong> Gayrimenkul Yatırım Ortaklıkları ise genellikle daha büyük yatırımcılar ve kurumsal yatırımcılar tarafından tercih edilir. Bu yatırımcılar genellikle belirli bir projeye veya sektöre odaklanmış uzun vadeli yatırımlar yapmayı tercih ederler.</li>
              </ul>
              <p className="mt-4">Bu farklılıklar göz önüne alındığında, yatırımcılar GYF ve GYO arasındaki farkları değerlendirerek kendi yatırım stratejilerine uygun olanı seçebilirler.</p>
            </div>

            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Neden ECB Danışmanlık?</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-2">
                 {whyUs.map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                ))}
              </CardContent>
            </Card>

             <div className="text-center">
                <p className="text-lg text-foreground mb-4">Gayrimenkul yatırım ortaklığı konusunda danışmanlık hizmetlerimizle ilgili daha fazla bilgi almak ve işbirliği için ECB Danışmanlık olarak sizinle görüşmekten memnuniyet duyarız.</p>
                <p className="text-lg text-foreground">Bizimle iletişime geçin ve gayrimenkul yatırımlarınızı profesyonelce yönetmenin avantajlarını keşfedin.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
