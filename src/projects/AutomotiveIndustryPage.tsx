import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { AutomotiveContent } from '@/components/AutomotiveContent';

export default function AutomotiveIndustryPage() {
  return (
    <SmoothScrollProvider>
      <div className="w-full" style={{ position: 'relative' }}>
        <AnimatedBackground />
        <Navigation />
        <AutomotiveContent />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
