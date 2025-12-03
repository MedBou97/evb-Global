'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, Info, Briefcase, Users, MessageSquare, Contact } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { EcbLogo } from '@/components/icons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const navLinks = [
  { href: '#about', label: 'About', icon: Info },
  {
    href: '#services',
    label: 'Services',
    icon: Briefcase,
    subLinks: [
      { href: '#services', label: 'Strategic Consulting' },
      { href: '#services', label: 'Financial Advisory' },
      { href: '#services', label: 'Marketing Solutions' },
    ],
  },
  { href: '#team', label: 'Our Team', icon: Users },
  { href: '#testimonials', label: 'Testimonials', icon: MessageSquare },
  { href: '#contact', label: 'Contact', icon: Contact },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="ECB Global Home">
          <EcbLogo className="h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
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
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="flex h-full flex-col p-6">
                <Link href="/" className="mb-8 flex items-center gap-2" onClick={() => setOpen(false)}>
                  <EcbLogo className="h-10 w-auto" />
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
                                onClick={() => setOpen(false)}
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
                        href={link.href}
                        className="flex items-center gap-2 rounded-md py-2 text-base font-medium transition-colors hover:text-primary"
                        onClick={() => setOpen(false)}
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
