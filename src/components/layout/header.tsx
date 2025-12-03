'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, Building, Landmark, TrendingUp, Handshake, Globe, Rss, Mail, ChevronDown } from 'lucide-react';

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
    label: 'Corporate Finance',
    icon: Building,
    href: '#services',
    subLinks: [
      { href: '/investment-consulting', label: 'Investment Consulting', icon: Building },
      { href: '/international-loans', label: 'International Loans', icon: Globe },
      { href: '/hermes-loans', label: 'Hermes Loans', icon: Handshake },
      { href: '#', label: 'International Restructuring', icon: Building },
      { href: '#', label: 'M&A (Merger & Acquisition)', icon: Building },
    ],
  },
  {
    label: 'Corporate Governance',
    icon: Landmark,
    href: '#services',
    subLinks: [
      { href: '#', label: 'Enterprise Risk Management', icon: Landmark },
      { href: '#', label: 'Institutionalization in Family Businesses', icon: Landmark },
      { href: '#', label: 'Sustainability', icon: Landmark },
    ],
  },
  { href: '#services', label: 'Public Offering', icon: TrendingUp },
  {
    label: 'Capital Market',
    icon: Handshake,
    href: '#services',
    subLinks: [
      { href: '#', label: 'Venture Capital Investment Partnership', icon: Handshake },
      { href: '#', label: 'Real Estate Investment Trust', icon: Handshake },
      { href: '#', label: 'Real Estate Investment Fund', icon: Handshake },
      { href: '#', label: 'Debt Instruments', icon: Handshake },
    ],
  },
  {
    label: 'Foreign Fund',
    icon: Globe,
    href: '#',
    subLinks: [
      { href: '#', label: 'Fund Establishment', icon: Globe },
      { href: '#', label: 'Structuring', icon: Globe },
      { href: '#', label: 'Tax Planning', icon: Globe },
    ],
  },
  { href: '#', label: 'Blog', icon: Rss },
  { href: '#contact', label: 'Communication', icon: Mail },
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
        <Link href="/" className="flex items-center gap-2">
          <EcbLogo />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div 
                key={link.label}
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownMenu open={openDropdown === link.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="group flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start"
                    className="w-64 animate-in fade-in-0 zoom-in-95"
                  >
                    {link.subLinks.map((subLink) => (
                      <DropdownMenuItem key={subLink.label} asChild>
                        <Link href={subLink.href} className='flex items-center gap-2'>
                          {subLink.icon && <subLink.icon className="h-4 w-4 text-muted-foreground" />}
                          <span>{subLink.label}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-primary"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
              <div className="flex h-full flex-col">
                <div className="p-6 border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                      <EcbLogo />
                    </Link>
                </div>
                <nav className="flex-1 overflow-y-auto">
                <Accordion type="multiple" className="flex flex-col gap-1 p-4">
                  {navLinks.map((link) =>
                    link.subLinks ? (
                      <AccordionItem value={link.label} key={link.label} className="border-b-0">
                          <AccordionTrigger className="flex w-full items-center gap-2 rounded-md py-2 px-3 text-base font-medium transition-colors hover:bg-accent/50 hover:no-underline justify-start">
                             <link.icon className="h-5 w-5" />
                             <span>{link.label}</span>
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
