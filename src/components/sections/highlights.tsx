
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const servicesHighlights = [
  {
    id: 'service-feasibility',
    description: 'Kurumsal Finansman',
    href: '/kurumsal-finansman',
    subItems: [
      {label: 'Yatırım Danışmanlığı', href: '/investment-consulting'},
      {label: 'Uluslararası Krediler', href: '/international-loans'},
      {label: 'Hermes Kredileri', href: '/hermes-loans'},
      {label: 'Uluslararası Yapılanma', href: '/uluslararasi-yapilanma'},
      {label: 'M&A (Birleşme ve Satın Alma)', href: '/mergers-and-acquisitions'},
    ],
  },
  {
    id: 'service-governance',
    description: 'Kurumsal Yönetim',
    href: '/kurumsal-yonetim',
    subItems: [
      {label: 'Kurumsal Risk Yönetimi', href: '/kurumsal-risk-yonetimi'},
      {label: 'Aile Şirketlerinde Kurumsallaşma', href: '/aile-sirketlerinde-kurumsallasma'},
      {label: 'Sürdürülebilirlik', href: '/surdurulebilirlik'},
    ],
  },
  {
    id: 'service-structuring',
    description: 'Halka Arz',
    href: '/halka-arz',
    subItems: [],
  },
  {
    id: 'service-analysis',
    description: 'Sermaye Piyasası',
    href: '/sermaye-piyasasi',
    subItems: [
      {label: 'Girişim Sermayesi Yatırım Ortaklığı', href: '/girisim-sermayesi-yatirim-ortakligi'},
      {label: 'Gayrimenkul Yatırım Ortaklığı', href: '/gayrimenkul-yatirim-ortakligi'},
      {label: 'Gayrimenkul Yatırım Fonu', href: '/gayrimenkul-yatirim-fonu'},
      {label: 'Borçlanma Araçları', href: '/borclanma-araclari'},
    ],
  },
  {
    id: 'service-foreign-funds',
    description: 'Yurt Dışı Fonlar',
    href: '/yabanci-fon',
    subItems: [
      {label: 'Fon Kurulumu', href: '/fon-kurulumu'}, 
      {label: 'Yapılandırma', href: '/yapilandirma'}, 
      {label: 'Vergi Planlaması', href: '/vergi-planlamasi'}
    ],
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

const PyramidCard = ({ image, className }: { image: (typeof highlightImages)[0]; className?: string }) => (
    <div className={cn("flex flex-col group", className)}>
      <Link href={image.href} className="block relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg mb-4">
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
      </Link>
      {image.subItems && image.subItems.length > 0 && (
        <ul className="space-y-2 mt-4 text-sm flex-grow">
          {image.subItems.map((item) => (
             <li key={item.label}>
             <Link href={item.href} className="flex items-start text-muted-foreground transition-colors hover:text-primary">
                <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );


export function HighlightsSection() {
  const topRow = highlightImages.slice(0, 2);
  const bottomRow = highlightImages.slice(2);

  return (
    <section id="highlights" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Hizmetlerimiz</h2>
          <p className="mt-4 text-lg text-muted-foreground">Görsel bir bakışla sunduğumuz temel hizmet alanları.</p>
        </div>
        <div className="flex flex-col items-center gap-8">
            {/* Top row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
                {topRow.map((image) => (
                    <PyramidCard key={image.id} image={image} />
                ))}
            </div>
            {/* Bottom row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {bottomRow.map((image) => (
                    <PyramidCard key={image.id} image={image} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
