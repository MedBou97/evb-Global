'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

const servicesHighlights = [
  {
    id: 'service-feasibility',
    description: 'Corporate Finance',
    href: '#services',
    subItems: [
      'Investment Consulting',
      'International Loans',
      'Hermes Loans',
      'International Restructuring',
      'M&A (Merger & Acquisition)',
    ],
  },
  {
    id: 'service-governance',
    description: 'Corporate Governance',
    href: '#services',
    subItems: [
      'Enterprise Risk Management',
      'Institutionalization in Family Businesses',
      'Sustainability',
    ],
  },
  {
    id: 'service-structuring',
    description: 'Public Offering',
    href: '#services',
    subItems: [],
  },
  {
    id: 'service-analysis',
    description: 'Capital Markets',
    href: '#services',
    subItems: [
      'Venture Capital Investment Partnership',
      'Real Estate Investment Trust',
      'Real Estate Investment Fund',
      'Debt Instruments',
    ],
  },
  {
    id: 'service-foreign-funds',
    description: 'Foreign Funds',
    href: '#services',
    subItems: ['Fund Establishment', 'Structuring', 'Tax Planning'],
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


export function HighlightsSection() {
  return (
    <section id="highlights" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Hizmetlerimiz</h2>
          <p className="mt-4 text-lg text-muted-foreground">Görsel bir bakışla sunduğumuz temel hizmet alanları.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {highlightImages.map((image, index) => (
             <Link key={image.id} href={image.href} className="block group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg mb-4">
                {image.imageUrl && (
                  <Image
                    src={image.imageUrl}
                    alt={image.altText}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                )}
                 <div className="absolute inset-0 bg-black/40 flex items-end">
                    <h3 className="text-white font-semibold p-4 text-lg">{image.description}</h3>
                  </div>
              </div>
              {image.subItems && image.subItems.length > 0 && (
                <ul className="space-y-2 mt-4 text-sm">
                  {image.subItems.map((item) => (
                    <li key={item} className="flex items-start text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
