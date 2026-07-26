import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../data';
import { Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-28 bg-[#0c0b09] text-white relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles size={16} className="text-amber-400" />
          <span className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Endorsements & Testimonials</span>
        </div>

        <Quote className="text-amber-400/30 w-20 h-20 mx-auto mb-6" />
        
        <div className="min-h-[180px] sm:min-h-[140px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xl sm:text-2xl font-serif text-white/90 leading-relaxed italic font-light max-w-3xl mx-auto">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <h4 className="text-lg font-serif text-amber-300 font-medium">{testimonials[currentIndex].name}</h4>
                <p className="text-xs font-sans tracking-widest uppercase text-amber-100/60 mt-1">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2.5 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-amber-400 shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'w-2 bg-amber-500/30 hover:bg-amber-500/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

