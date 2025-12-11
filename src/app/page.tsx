import { HeroSection } from '@/components/sections/hero';
import { HighlightsSection } from '@/components/sections/highlights';
import { ServicesSection } from '@/components/sections/services';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <HighlightsSection />
    </div>
  );
}
