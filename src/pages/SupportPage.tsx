import { Navigation } from '@/components/Navigation';
import { SupportPageDark } from '@/components/SupportPageDark';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';

export default function SupportPage() {
  return (
    <SmoothScrollProvider>
      <div className="w-full" style={{ position: 'relative' }}>
        <AnimatedBackground />
        <Navigation />
        <SupportPageDark />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}