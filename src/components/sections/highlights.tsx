import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HighlightsSection() {
  // We'll use the service images for the highlights section
  const highlightImages = PlaceHolderImages.filter(img => img.id.startsWith('service-'));

  return (
    <section id="highlights" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlightImages.map((image) => (
            <div key={image.id} className="relative aspect-video overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/40" />
               <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white font-semibold">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
