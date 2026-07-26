import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#0c0b09] text-white relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Endorsements & Testimonials</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-normal">
            Voices of <span className="text-amber-300 font-semibold">Community Impact</span>
          </h3>
        </div>

        {/* 2-Column Grid layout displaying only photos (2 photos per line, 6 total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-amber-500/25 bg-[#14120f] shadow-2xl hover:border-amber-400/60 transition-all duration-500 aspect-[4/3] group"
            >
              <img 
                src={item.image} 
                alt={`Testimonial endorsement ${idx + 1}`} 
                className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


