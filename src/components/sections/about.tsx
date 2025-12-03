import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Target } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground">
              Ecb Global Danışmanlık kendi alanında uzman ve tecrübeli kadrosu ile uçtan-uca bütüncül bir şekilde şirketlerin kurumsal alt yapılarının oluşturulmasını sağlar.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
                <div className="p-4 rounded-full bg-accent/20 text-accent mb-4 inline-block">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold">Çözüm Odaklı ve Yenilikçi</h3>
                <p className="mt-4 text-muted-foreground text-lg">
                  Şirketinizin öncelikleri ve hedefleri doğrultusunda bütünleşik kurumsal gelişim ve büyüme çözümleri sunuyoruz.
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
