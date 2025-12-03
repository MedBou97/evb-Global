import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { ApexLogo } from '@/components/icons';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <ApexLogo className="h-6 w-6" />
            <span className="text-lg font-semibold font-headline">Apex Consulting</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Apex Consulting. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
