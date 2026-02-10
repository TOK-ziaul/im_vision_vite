import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { Navigation } from '@/components/Navigation';
import { AboutHeroSection } from '@/components/AboutHeroSection';
import { AboutStatsSection } from '@/components/AboutStatsSection';
import { AboutWhoWeAreSection } from '@/components/AboutWhoWeAreSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';

export default function AboutPage() {
  const heroImage = 'https://images.unsplash.com/photo-1690964099658-b619682704ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzY3JlZW4lMjBkaXNwbGF5JTIwdGVjaG5vbG9neSUyMGluc3RhbGxhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzAwMzU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  const contactImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  return (
    <SmoothScrollProvider>
      <div className="w-full" style={{ position: 'relative' }}>
        <AnimatedBackground />
        <Navigation />
        <AboutHeroSection backgroundImage={heroImage} />
        <AboutStatsSection />
        <AboutWhoWeAreSection />
        <ContactSection backgroundImage={contactImage} />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}