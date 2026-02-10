import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Minus } from 'lucide-react';

interface Stat {
  value: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export function AboutStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats: Stat[] = [
    {
      value: '10+',
      title: 'Years',
      description: 'With more than 10 years of experience, we are the market leader in large LED screens.',
      category: 'EXPERIENCE',
      image: 'https://images.unsplash.com/photo-1653998894571-ae645e479e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzY3JlZW4lMjBleHBlcmllbmNlJTIwdGVjaG5vbG9neSUyMHllYXJzfGVufDF8fHx8MTc3MDAzNTkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      value: '+3000',
      title: 'm²',
      description: 'LED screens available for rent with flexible sizing. Delivered to your needs.',
      category: 'RENTAL SOLUTIONS',
      image: 'https://images.unsplash.com/photo-1740968984962-29087e16ceff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMExFRCUyMHNjcmVlbiUyMHJlbnRhbCUyMGRpc3BsYXl8ZW58MXx8fHwxNzcwMDM1OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      value: '8',
      title: 'St',
      description: 'We have mobile screens in sizes 7-28 sq m for quick delivery and easy set up.',
      category: 'MOBILE SCREENS',
      image: 'https://images.unsplash.com/photo-1701656626623-23ba4581f458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBMRUQlMjBzY3JlZW4lMjB0cnVjayUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzAwMzU5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      value: '220',
      title: 'm²',
      description: 'We always have sales stock of LEDs for quick installations.',
      category: 'STOCK READY',
      image: 'https://images.unsplash.com/photo-1653998894571-ae645e479e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzY3JlZW4lMjBleHBlcmllbmNlJTIwdGVjaG5vbG9neSUyMHllYXJzfGVufDF8fHx8MTc3MDAzNTkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: '100vh', position: 'relative' }}
    >
      {/* Green border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2BCC07] z-20" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-24"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="mb-16 text-center"
          >
            <h2
              className="text-white leading-tight tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 300,
              }}
            >
              Why Choose <span className="italic">IMvision</span>
            </h2>
          </motion.div>

          {/* Expandable Cards Grid */}
          <div className="flex gap-0 h-[600px]">
            {stats.map((stat, index) => {
              const isExpanded = expandedIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => handleCardClick(index)}
                  animate={{
                    flex: isExpanded ? '1 1 60%' : '1 1 10%',
                  }}
                  style={{
                    borderRight: index < stats.length - 1 ? '1px solid rgba(43, 204, 7, 0.2)' : 'none',
                  }}
                >
                  {/* Collapsed State - Vertical Number */}
                  <AnimatePresence>
                    {!isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="flex flex-col items-center justify-center h-full relative">
                          {/* Number Index */}
                          <span
                            className="text-white/30 mb-8"
                            style={{
                              fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                              fontWeight: 300,
                              writingMode: 'vertical-rl',
                              letterSpacing: '0.2em',
                            }}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          {/* Value */}
                          <div className="flex flex-col items-center">
                            <span
                              className="text-white"
                              style={{
                                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                fontWeight: 200,
                                writingMode: 'vertical-rl',
                                letterSpacing: '0.05em',
                              }}
                            >
                              {stat.value}
                            </span>
                            <span
                              className="text-white/60 mt-2"
                              style={{
                                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                                fontWeight: 300,
                                writingMode: 'vertical-rl',
                              }}
                            >
                              {stat.title}
                            </span>
                          </div>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-[#2BCC07]/0 hover:bg-[#2BCC07]/5 transition-all duration-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expanded State - Full Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="absolute inset-0 bg-black"
                      >
                        {/* Close Button */}
                        <motion.button
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="absolute top-6 right-6 z-30 w-12 h-12 rounded-full bg-black border border-[#2BCC07] flex items-center justify-center hover:bg-[#2BCC07] hover:text-black transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedIndex(null);
                          }}
                        >
                          <Minus size={20} className="text-[#2BCC07] hover:text-black" />
                        </motion.button>

                        {/* Vertical Category Text */}
                        <motion.div
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -50, opacity: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="absolute left-8 top-0 bottom-0 flex items-center z-20"
                        >
                          <span
                            className="text-white/20 uppercase tracking-widest"
                            style={{
                              fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
                              fontWeight: 400,
                              writingMode: 'vertical-rl',
                              letterSpacing: '0.3em',
                            }}
                          >
                            {stat.category}
                          </span>
                        </motion.div>

                        {/* Content Container */}
                        <div className="absolute inset-0 flex flex-col p-12 pl-20">
                          {/* Number Badge */}
                          <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-baseline gap-2 mb-6"
                          >
                            <span
                              className="text-white"
                              style={{
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                fontWeight: 200,
                                lineHeight: 1,
                              }}
                            >
                              {stat.value}
                            </span>
                            <span
                              className="text-white/70"
                              style={{
                                fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                                fontWeight: 300,
                              }}
                            >
                              {stat.title}
                            </span>
                          </motion.div>

                          {/* Description */}
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-white/80 mb-8 max-w-md"
                            style={{
                              fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                              fontWeight: 300,
                              lineHeight: '1.7',
                            }}
                          >
                            {stat.description}
                          </motion.p>

                          {/* Image */}
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex-1 rounded-lg overflow-hidden"
                            style={{
                              maxWidth: '500px',
                              maxHeight: '320px',
                            }}
                          >
                            <img
                              src={stat.image}
                              alt={stat.category}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </div>

                        {/* Green accent line */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2BCC07] origin-left"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}