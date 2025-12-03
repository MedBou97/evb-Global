import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full">
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
              Driving Success Through Expert Strategy
            </h1>
            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              At ECB Global, we partner with you to unlock your business's full potential. Our innovative solutions and data-driven insights pave the way for sustainable growth and market leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
