
'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Menu,
  Building,
  Landmark,
  TrendingUp,
  Handshake,
  Globe,
  Mail,
  ChevronDown,
  Rocket,
  Home as HomeIcon,
  FileSignature,
  Briefcase,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { EcbLogo } from '../icons';

const navLinks = [
  {
    label: 'Kurumsal Finans',
    icon: Building,
    href: '/kurumsal-finansman',
    subLinks: [
      { href: '/investment-consulting', label: 'Yatırım Danışmanlığı', icon: Building },
      { href: '/international-loans', label: 'Uluslararası Krediler', icon: Globe },
      { href: '/hermes-loans', label: 'Hermes Kredileri', icon: Handshake },
      { href: '/uluslararasi-yapilanma', label: 'Uluslararası Yapılanma', icon: Building },
      { href: '/mergers-and-acquisitions', label: 'M&A (Birleşme ve Satın Alma)', icon: Handshake },
    ],
  },
  {
    label: 'Kurumsal Yönetim',
    icon: Landmark,
    href: '/kurumsal-yonetim',
    subLinks: [
      { href: '/kurumsal-risk-yonetimi', label: 'Kurumsal Risk Yönetimi', icon: Landmark },
      { href: '/aile-sirketlerinde-kurumsallasma', label: 'Aile Şirketlerinde Kurumsallaşma', icon: Landmark },
      { href: '/surdurulebilirlik', label: 'Sürdürülebilirlik', icon: Landmark },
    ],
  },
  { href: '/halka-arz', label: 'Halka Arz', icon: TrendingUp },
  {
    label: 'Sermaye Piyasası',
    icon: Handshake,
    href: '/sermaye-piyasasi',
    subLinks: [
      { href: '/girisim-sermayesi-yatirim-ortakligi', label: 'Girişim Sermayesi Yatırım Ortaklığı', icon: Rocket },
      { href: '/gayrimenkul-yatirim-ortakligi', label: 'Gayrimenkul Yatırım Ortaklığı', icon: Building },
      { href: '/gayrimenkul-yatirim-fonu', label: 'Gayrimenkul Yatırım Fonu', icon: HomeIcon },
      { href: '/borclanma-araclari', label: 'Borçlanma Araçları', icon: FileSignature },
    ],
  },
  {
    label: 'Yurt Dışı Fon',
    icon: Globe,
    href: '/yabanci-fon',
    subLinks: [
      { href: '/fon-kurulumu', label: 'Fon Kurulumu', icon: Briefcase },
      { href: '/yapilandirma', label: 'Yapılandırma', icon: Globe },
      { href: '/vergi-planlamasi', label: 'Vergi Planlaması', icon: Globe },
    ],
  },
  { href: '/iletisim', label: 'İletişim', icon: Mail },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 bg-background/95 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-2">
            <HomeIcon className="h-6 w-6 text-primary" />
            <EcbLogo />
          </Link>
        </div>
        
        <nav className="hidden items-center gap-8 md:flex flex-1 justify-center">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div
                key={link.label}
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownMenu open={openDropdown === link.label}>
                  <DropdownMenuTrigger asChild>
                    <Button asChild variant="ghost" className="group flex items-center gap-1 rounded-md px-3 py-2 text-lg font-headline font-medium transition-colors hover:bg-accent/50 hover:text-primary">
                      <Link href={link.href!}>
                        {link.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Link>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-64 animate-in fade-in-0 zoom-in-95"
                  >
                    {link.subLinks.map((subLink) => (
                      <DropdownMenuItem key={subLink.label} asChild>
                        <Link href={subLink.href} className="flex items-center gap-2">
                          {subLink.icon && <subLink.icon className="h-4 w-4 text-muted-foreground" />}
                          <span>{subLink.label}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Button key={link.label} asChild variant="ghost">
                <Link
                  href={link.href!}
                  className="rounded-md px-3 py-2 text-lg font-headline font-medium transition-colors hover:bg-accent/50 hover:text-primary"
                >
                  {link.label}
                </Link>
              </Button>
            )
          )}
        </nav>
        
        <div className="hidden md:flex flex-1 justify-end">
           
        </div>

        <div className="md:hidden flex-1 flex justify-end">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Navigasyon menüsünü aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
              <div className="flex h-full flex-col">
                <div className="p-6 border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                      <HomeIcon className="h-6 w-6 text-primary" />
                      <EcbLogo />
                    </Link>
                </div>
                <nav className="flex-1 overflow-y-auto">
                <Accordion type="multiple" className="flex flex-col gap-1 p-4">
                  {navLinks.map((link) =>
                    link.subLinks ? (
                      <AccordionItem value={link.label} key={link.label} className="border-b-0">
                          <AccordionTrigger className="flex w-full items-center gap-2 rounded-md py-2 px-3 text-base font-medium transition-colors hover:bg-accent/50 hover:no-underline justify-start">
                            <Link href={link.href!} className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                             <link.icon className="h-5 w-5" />
                             <span>{link.label}</span>
                            </Link>
                          </AccordionTrigger>
                          <AccordionContent className="pb-0 pl-8">
                            <div className="mt-2 flex flex-col gap-1">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.label}
                                href={subLink.href}
                                className="block rounded-md py-2 text-muted-foreground transition-colors hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subLink.label}
                              </Link>
                            ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href!}
                        className="flex items-center gap-2 rounded-md py-2 px-3 text-base font-medium transition-colors hover:bg-accent/50 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <link.icon className="h-5 w-5" />
                        <span>{link.label}</span>
                      </Link>
                    )
                  )}
                  </Accordion>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
