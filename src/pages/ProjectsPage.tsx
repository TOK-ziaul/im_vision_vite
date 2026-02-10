import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { Navigation } from '@/components/Navigation';
import { ProjectsHeroSection } from '@/components/ProjectsHeroSection';
import { ProjectsGridSection } from '@/components/ProjectsGridSection';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';

export default function ProjectsPage() {
  // Hero image - LED display projects/portfolio theme
  const heroImage = 'https://images.unsplash.com/photo-1712903911104-cf22c142c04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBkaXNwbGF5JTIwcG9ydGZvbGlvJTIwcHJvamVjdHMlMjBzaG93Y2FzZXxlbnwxfHx8fDE3NzAxOTkyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  return (
    <SmoothScrollProvider>
      <div className="w-full" style={{ position: 'relative' }}>
        <AnimatedBackground />
        <Navigation />
        <ProjectsHeroSection backgroundImage={heroImage} />
        <ProjectsGridSection />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}