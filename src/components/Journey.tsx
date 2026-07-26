import { motion } from 'motion/react';
import { journeyTimeline } from '../data';
import { Sparkles } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="py-28 bg-[#0c0b09] relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Chronicles of Leadership</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white font-normal"
          >
            Two Decades of Excellence, <span className="text-white font-semibold">Empowerment & Trust</span>
          </motion.h3>
        </div>

        <div className="relative">
          {/* Vertical Gold Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/60 via-amber-400/30 to-amber-500/10 -translate-x-1/2"></div>

          <div className="space-y-12">
            {journeyTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Glowing Gold Timeline Node */}
                  <div className="absolute left-[20px] md:left-1/2 w-5 h-5 rounded-full bg-amber-400 border-4 border-[#0c0b09] shadow-[0_0_12px_rgba(212,175,55,0.9)] -translate-x-1/2 mt-1.5 z-10"></div>
                  
                  {/* Content Container */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-10' : 'md:pr-10 text-left md:text-right'}`}>
                    <div className="bg-[#151311] p-7 rounded-2xl border border-amber-500/25 shadow-xl hover:border-amber-400/60 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all duration-300 group">
                      <span className="inline-block px-3.5 py-1 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold font-mono tracking-widest rounded-full mb-3 shadow-inner">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-serif text-white font-medium mb-2 group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm font-sans text-amber-100/80 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

