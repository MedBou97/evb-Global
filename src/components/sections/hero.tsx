import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[calc(100vh-5rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
              Finansal Yönetim Danışmanlığı
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-accent sm:text-3xl font-headline">ECB GLOBAL</h2>
            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              Finans süreçlerini uçtan uca yönetecek uzman desteği için iletişime geçebilirsiniz.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="#contact">İletişime Geç</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
