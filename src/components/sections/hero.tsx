import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
      <div className="relative z-10 flex h-full items-center justify-start text-left">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl relative">
            
            <div
              className="absolute -top-16 -right-12 md:-right-32 w-64 h-64 md:w-80 md:h-80 opacity-50"
              style={{
                background: 'linear-gradient(to right, #eab308, #84cc16, #22d3ee, #a855f7)',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 4px, 4px 4px, 4px 100%, 0 100%)',
                transform: 'rotate(180deg)'
              }}
            />
            <div
               className="absolute -bottom-16 -left-12 md:-left-24 w-64 h-64 md:w-80 md:h-80 opacity-50"
               style={{
                background: 'linear-gradient(to right, #eab308, #84cc16, #22d3ee, #a855f7)',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 4px, 4px 4px, 4px 100%, 0 100%)'
               }}
            />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent font-headline">
                Geleceği Güvenle Şekillendirin
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
                Bugünün liderleri, nasıl yarının liderlerine dönüşüyor?
              </h1>
              <p className="mt-6 text-lg text-gray-200 md:text-xl">
                ECB Global Danışmanlık, kendi alanında uzman ve tecrübeli kadrosu ile uçtan uca bütüncül bir şekilde şirketlerin kurumsal altyapılarının oluşturulmasını sağlar.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
