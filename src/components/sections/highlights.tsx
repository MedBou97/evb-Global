'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const servicesHighlights = [
  {
    id: 'service-feasibility',
    description: 'Corporate Finance',
    href: '#services',
  },
  {
    id: 'service-governance',
    description: 'Corporate Governance',
    href: '#services',
  },
  {
    id: 'service-structuring',
    description: 'Public Offering',
    href: '#services',
  },
  {
    id: 'service-analysis',
    description: 'Capital Markets',
    href: '#services',
  },
  {
    id: 'service-foreign-funds',
    description: 'Foreign Funds',
    href: '#services',
  },
];

const highlightImages = servicesHighlights.map((service) => {
  const placeholder = PlaceHolderImages.find((img) => img.id === service.id);
  return {
    ...service,
    imageUrl: placeholder?.imageUrl,
    imageHint: placeholder?.imageHint,
    altText: placeholder?.description || service.description,
  };
});

function HighlightCard({
  image,
  index,
  total,
  progress,
}: {
  image: (typeof highlightImages)[0];
  index: number;
  total: number;
  progress: any;
}) {
  const scale = useTransform(progress, (latest) => {
    const center = index / (total -1);
    const distanceFromCenter = Math.abs(latest - center);
    
    // The scaling effect is strongest at the center (0.5) and weakest at the edges (0 and 1)
    const normalizedDistance = distanceFromCenter / 0.5;
    const scaleValue = 1 - normalizedDistance * 0.2; // Scale down by up to 20%
    
    // Add a "lens" effect by scaling up the item in the very center
    const lensEffect = Math.max(0, 1 - Math.abs(latest - 0.5) * 4);
    
    return scaleValue + lensEffect * 0.2;
  });

  return (
    <motion.div
      style={{ scale }}
      className="relative aspect-video overflow-hidden rounded-lg shadow-lg group flex-shrink-0 w-80"
    >
      <Link href={image.href} className="block w-full h-full">
        {image.imageUrl && (
          <Image
            src={image.imageUrl}
            alt={image.altText}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-4">
          <p className="text-white font-semibold">{image.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export function HighlightsSection() {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const duplicatedImages = [...highlightImages, ...highlightImages];

  return (
    <section id="highlights" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Hizmetlerimiz</h2>
          <p className="mt-4 text-lg text-muted-foreground">Görsel bir bakışla sunduğumuz temel hizmet alanları.</p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto relative no-scrollbar"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}
      >
        <motion.div
          className="flex gap-8 px-[calc(50%-10rem)]"
          style={{ x: useTransform(scrollXProgress, [0, 1], ['0%', '-50%']) }}
          animate={{ x: [null, '0%', '-50%'] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
          }}
        >
          {duplicatedImages.map((image, index) => (
            image.imageUrl && (
              <HighlightCard 
                key={`${image.id}-${index}`} 
                image={image} 
                index={index}
                total={duplicatedImages.length}
                progress={useTransform(scrollXProgress, (latest) => (latest + index / duplicatedImages.length) % 1)}
              />
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
}
