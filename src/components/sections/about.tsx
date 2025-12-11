import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Target } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

export function AboutSection() {
  return (
    <section id="about" className="pt-16 md:pt-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Hakkımızda
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground">
              ECB Global Danışmanlık, kendi alanında uzman ve tecrübeli kadrosu ile uçtan uca bütüncül bir şekilde şirketlerin kurumsal altyapılarının oluşturulmasını sağlar.
            </p>
          </div>
        </AnimatedSection>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
           <AnimatedSection delay={100}>
              <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 h-full text-center">
                <CardContent className="flex flex-col flex-grow items-center justify-center p-6">
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Misyonumuz</h3>
                  <p className="text-muted-foreground">Müşterilerimize sürdürülebilir büyüme ve rekabet avantajı sağlayacak yenilikçi ve stratejik çözümler sunmak.</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 h-full text-center">
                <CardContent className="flex flex-col flex-grow items-center justify-center p-6">
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Vizyonumuz</h3>
                  <p className="text-muted-foreground">Finans ve danışmanlık sektöründe küresel ölçekte lider ve en güvenilir iş ortağı olmak.</p>
                </CardContent>
              </Card>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
