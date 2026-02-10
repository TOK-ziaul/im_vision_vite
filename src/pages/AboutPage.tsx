import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { AboutHeroSection } from "@/components/AboutHeroSection";
import { AboutStatsSection } from "@/components/AboutStatsSection";
import { AboutWhoWeAreSection } from "@/components/AboutWhoWeAreSection";
import { ContactSection } from "@/components/ContactSection";

export default function AboutPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1690964099658-b619682704ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzY3JlZW4lMjBkaXNwbGF5JTIwdGVjaG5vbG9neSUyMGluc3RhbGxhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzAwMzU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const contactImage =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Hero card
  const heroY = useTransform(scrollYProgress, [0, 0.25], ["0%", "0%"]);
  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45],
    [1, 0.97, 0.9],
  );

  // Stats card
  const statsY = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.55],
    ["100%", "0%", "0%"],
  );
  const statsScale = useTransform(
    scrollYProgress,
    [0.35, 0.6, 0.8],
    [1, 0.97, 0.9],
  );

  // Who We Are card
  const whoY = useTransform(
    scrollYProgress,
    [0.45, 0.65, 0.85],
    ["100%", "0%", "0%"],
  );
  const whoScale = useTransform(
    scrollYProgress,
    [0.6, 0.85, 1],
    [1, 0.97, 0.92],
  );

  // Contact card
  const contactY = useTransform(
    scrollYProgress,
    [0.7, 0.88, 1],
    ["100%", "0%", "0%"],
  );
  const contactScale = useTransform(scrollYProgress, [0.88, 1], [1, 1]);

  return (
    <SmoothScrollProvider>
      <section
        ref={containerRef}
        className="relative h-[850vh] bg-black"
        style={{ position: "relative" }}
      >
        <div className="sticky top-0 h-screen w-full">
          {/* Hero */}
          <motion.div
            className="absolute inset-0"
            style={{ y: heroY, scale: heroScale, zIndex: 1 }}
          >
            <AboutHeroSection backgroundImage={heroImage} />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="absolute inset-0"
            style={{ y: statsY, scale: statsScale, zIndex: 2 }}
          >
            <AboutStatsSection />
          </motion.div>

          {/* Who We Are */}
          <motion.div
            className="absolute inset-0"
            style={{ y: whoY, scale: whoScale, zIndex: 3 }}
          >
            <AboutWhoWeAreSection />
          </motion.div>

          {/* Contact */}
          <motion.div
            className="absolute inset-0"
            style={{ y: contactY, scale: contactScale, zIndex: 4 }}
          >
            <ContactSection backgroundImage={contactImage} />
          </motion.div>
        </div>
      </section>
    </SmoothScrollProvider>
  );
}
