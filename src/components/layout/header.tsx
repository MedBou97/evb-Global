'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, Building, Landmark, TrendingUp, Handshake, Globe, Rss, Mail } from 'lucide-react';

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
      { href: '#', label: 'Investment Consulting' },
      { href: '#', label: 'International Loans' },
      { href: '#', label: 'Hermes Loans' },
      { href: '#', label: 'International Restructuring' },
      { href: '#', label: 'M&A (Merger & Acquisition)' },
    ],
  },
  {
    label: 'Corporate Governance',
    icon: Landmark,
    href: '#services',
    subLinks: [
      { href: '#', label: 'Enterprise Risk Management' },
      { href: '#', label: 'Institutionalization in Family Businesses' },
      { href: '#', label: 'Sustainability' },
    ],
  },
  { href: '#services', label: 'Public Offering', icon: TrendingUp },
  {
    label: 'Capital Market',
    icon: Handshake,
    href: '#services',
    subLinks: [
      { href: '#', label: 'Venture Capital Investment Partnership' },
      { href: '#', label: 'Real Estate Investment Trust' },
      { href: '#', label: 'Real Estate Investment Fund' },
      { href: '#', label: 'Debt Instruments' },
    ],
  },
  {
    label: 'Foreign Fund',
    icon: Globe,
    href: '#',
    subLinks: [
      { href: '#', label: 'Fund Establishment' },
      { href: '#', label: 'Structuring' },
      { href: '#', label: 'Tax Planning' },
    ],
  },
  { href: '#', label: 'Blog', icon: Rss },
  { href: '#contact', label: 'Communication', icon: Mail },
];


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 bg-background/95 shadow-md backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <EcbLogo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.subLinks ? (
              <DropdownMenu key={link.label} open={openMenu === link.label} onOpenChange={(isOpen) => setOpenMenu(isOpen ? link.label : null)}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium transition-colors hover:text-primary"
                     onMouseEnter={() => setOpenMenu(link.label)}
                     onMouseLeave={() => setOpenMenu(null)}
                  >
                    {link.label}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {link.subLinks.map((subLink) => (
                    <DropdownMenuItem key={subLink.label} asChild>
                      <Link href={subLink.href}>{subLink.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="text-sm font-medium transition-colors hover:text-primary"
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
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="flex h-full flex-col p-6">
                <Link href="/" className="mb-8 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <EcbLogo />
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) =>
                    link.subLinks ? (
                      <Accordion type="single" collapsible key={link.label}>
                        <AccordionItem value="item-1" className="border-b-0">
                          <AccordionTrigger className="flex w-full items-center justify-between rounded-md py-2 text-base font-medium hover:no-underline">
                             <div className="flex items-center gap-2">
                               <link.icon className="h-5 w-5" />
                               <span>{link.label}</span>
                             </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-0 pl-7">
                            <div className="mt-2 flex flex-col gap-2">
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
                      </Accordion>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href!}
                        className="flex items-center gap-2 rounded-md py-2 text-base font-medium transition-colors hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <link.icon className="h-5 w-5" />
                        <span>{link.label}</span>
                      </Link>
                    )
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
