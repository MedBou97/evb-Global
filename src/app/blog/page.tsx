
import { FileCode } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-background">
      <div className="p-8 rounded-full bg-accent/20 text-accent mb-6">
        <FileCode className="h-16 w-16" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
        Blog Çok Yakında
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Finans ve danışmanlık dünyasından en son haberleri, analizleri ve uzman görüşlerini paylaşacağımız blog sayfamız yakında yayında olacak.
      </p>
    </div>
  );
}

    