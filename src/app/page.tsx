import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { TeamSection } from '@/components/sections/team';
import { TestimonialsSection } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
