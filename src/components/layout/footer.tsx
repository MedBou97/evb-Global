import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { EcbLogo } from '../icons';

const sectors = [
  { name: 'Kurumsal Finansman', href: '/kurumsal-finansman' },
  { name: 'Kurumsal Yönetim', href: '/kurumsal-yonetim' },
  { name: 'Halka Arz', href: '/halka-arz' },
  { name: 'Sermaye Piyasaları', href: '/sermaye-piyasasi' },
  { name: 'Yurt Dışı Fonlar', href: '/yabanci-fon' },
];

const institutional = [
  { name: 'Hakkımızda', href: '#about' },
  { name: 'Blog', href: '#' },
  { name: 'İletişim', href: '#contact' },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <EcbLogo />
            </Link>
            <div className="flex items-start gap-3 mt-4">
              <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">Hadımköy, Şahmaran Sk., 34555 Arnavutköy/İstanbul</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold font-headline tracking-wider text-foreground">Sektörler</h3>
            <ul className="mt-4 space-y-2">
              {sectors.map((sector) => (
                <li key={sector.name}>
                  <Link href={sector.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold font-headline tracking-wider text-foreground">Kurumsal</h3>
            <ul className="mt-4 space-y-2">
              {institutional.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-semibold font-headline tracking-wider text-foreground">İletişim</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+905324168827" className="text-sm text-muted-foreground hover:text-primary">
                  +90 532 416 88 27
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@ecbglobal.com.tr" className="text-sm text-muted-foreground hover:text-primary">
                  info@ecbglobal.com.tr
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ECB Global. Tüm hakları saklıdır.</p>
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
