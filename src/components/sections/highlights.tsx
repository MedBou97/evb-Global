
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

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
  {
    id: 'service-blog',
    description: 'Blog',
    href: '/blog',
    subItems: [],
    status: 'coming-soon'
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

const ServiceCard = ({ item, className }: { item: (typeof highlightImages)[0]; className?: string }) => {
    const isComingSoon = item.status === 'coming-soon';
    const CardLink = isComingSoon ? 'div' : Link;

    return (
        <div className={cn("flex flex-col group", className)}>
        <CardLink href={item.href} className={cn("block relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg mb-4", isComingSoon ? "cursor-not-allowed" : "")}>
            {item.imageUrl && (
            <Image
                src={item.imageUrl}
                alt={item.altText}
                fill
                className={cn("object-cover transition-transform duration-300", !isComingSoon && "group-hover:scale-105")}
                data-ai-hint={item.imageHint}
            />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-end">
                <h3 className="text-white font-semibold p-4 text-lg">{item.description}</h3>
            </div>
            {isComingSoon && (
                <Badge variant="secondary" className="absolute top-3 right-3">Çok Yakında</Badge>
            )}
        </CardLink>
        {item.subItems && item.subItems.length > 0 && (
            <ul className="space-y-2 mt-4 text-sm flex-grow">
            {item.subItems.map((subItem) => (
                <li key={subItem.label}>
                <Link href={subItem.href} className="flex items-start text-muted-foreground transition-colors hover:text-primary">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{subItem.label}</span>
                </Link>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};


export function HighlightsSection() {
  return (
    <section id="highlights" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Hizmetlerimiz</h2>
          <p className="mt-4 text-lg text-muted-foreground">Görsel bir bakışla sunduğumuz temel hizmet alanları.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightImages.map((item) => (
                <ServiceCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}

    