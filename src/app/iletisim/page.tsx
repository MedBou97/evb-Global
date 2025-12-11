
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Phone,
    text: '+90 532 416 88 27',
    href: 'tel:+905324168827',
  },
  {
    icon: Mail,
    text: 'info@ecbglobal.com.tr',
    href: 'mailto:info@ecbglobal.com.tr',
  },
  {
    icon: MapPin,
    text: 'Hadımköy, Şahmaran Sk., 34555 Arnavutköy/İstanbul',
  },
  {
    icon: MapPin,
    text: 'Parc d Activities 2-4 Capellen L-8308 Luxembourg',
  },
  {
    icon: MapPin,
    text: '2597 LC The Hague, The Netherlands',
  },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Gönderiliyor...' : 'Mesajı Gönder'}
    </Button>
  );
}

export default function ContactPage() {
  const initialState = { message: null, success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Başarılı!' : 'Hata!',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNzY2MzQxODg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="İletişim"
          fill
          className="object-cover"
          priority
          data-ai-hint="contact us"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Bizimle İletişime Geçin
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            Sorularınız, önerileriniz veya işbirliği talepleriniz için buradayız.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Bize Ulaşın</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Adınız</Label>
                    <Input id="name" name="name" placeholder="Adınız ve Soyadınız" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta Adresiniz</Label>
                    <Input id="email" name="email" type="email" placeholder="ornek@mail.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mesajınız</Label>
                    <Textarea id="message" name="message" placeholder="Mesajınızı buraya yazın..." rows={5} required />
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">İletişim Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/20 text-accent flex-shrink-0">
                      <item.icon className="h-6 w-6" />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-primary pt-2.5">
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-muted-foreground pt-2.5">{item.text}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
