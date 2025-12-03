
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ClipboardCheck,
  FileText,
  MessageSquareQuote,
  ShieldCheck,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    title: 'Hermes Kredisi Değerlendirmesi',
    description:
      "Şirketinizin uluslararası ticaret projelerinde Hermes kredilerinden yararlanma potansiyelini değerlendirin. Hangi projelerin bu tür bir kredi için uygun olduğunu belirleyin.",
    icon: ClipboardCheck,
  },
  {
    title: 'Başvuru Hazırlığı',
    description:
      'Hermes kredi başvuru sürecinin hazırlanması ve yönetimi. Gerekli belgelerin toplanması, başvuru dosyasının oluşturulması ve başvuru sürecinin izlenmesi.',
    icon: FileText,
  },
  {
    title: 'Müzakere ve İletişim',
    description:
      'Hermes kredi sözleşmelerinin müzakere edilmesi ve şirketiniz ile finansal kurumlar arasındaki iletişimin sağlanması.',
    icon: MessageSquareQuote,
  },
  {
    title: 'Risk Yönetimi',
    description:
      'Hermes kredilerinden doğabilecek finansal ve ticari risklerin yönetimi. Proje ve işlem risklerinin analizi ve uygun risk yönetimi stratejilerinin belirlenmesi.',
    icon: ShieldCheck,
  },
  {
    title: 'Uluslararası Hukuki ve Finansal Danışmanlık',
    description:
      'Hermes kredileriyle ilgili uluslararası hukuki ve finansal konularda danışmanlık hizmetleri. Kredi sözleşmelerinin hukuki incelemesi ve şirketinizin çıkarlarını korumak için stratejiler geliştirilmesi.',
    icon: Briefcase,
  },
  {
    title: 'Raporlama ve Takip',
    description:
      'Hermes kredisi kullandırıldıktan sonra raporlama ve takip süreçlerinin yönetimi. Kredi geri ödeme planının izlenmesi ve gerekli raporların hazırlanması.',
    icon: TrendingUp,
  },
];

export default function HermesLoansPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmb3JlaWduJTIwZnVuZHN8ZW58MHx8fHwxNzY1MTEzODc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hermes Kredileri"
          fill
          className="object-cover"
          priority
          data-ai-hint="international trade"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Hermes Kredileri
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              Hermes kredileri, Alman hükümeti tarafından desteklenen ve uluslararası ticaret işlemlerinde kullanılan bir finansman aracıdır. Bu krediler genellikle ihracatçı firmaların yurt dışındaki alıcılarına sağladığı finansmanı temsil eder.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Hermes Kredileri İçin Danışmanlık Hizmetleri</CardTitle>
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

            <p className="text-lg text-foreground mt-12 text-center">
              Bu danışmanlık hizmetleri, şirketinizin uluslararası ticaret projelerinde Hermes kredilerinden en iyi şekilde yararlanmasını sağlayarak finansal başarı ve güvenilirlik sağlar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
