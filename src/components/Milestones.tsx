import { motion } from 'motion/react';
import { milestones, nationalInitiatives } from '../data';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function Milestones() {
  return (
    <section className="py-28 bg-[#100e0c] relative overflow-hidden border-t border-amber-500/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Gold Counters / Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-28">
          {milestones.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="text-center p-6 bg-[#151311] rounded-2xl border border-amber-500/25 shadow-xl hover:border-amber-400/60 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-serif text-amber-400 font-normal mb-2 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                {item.value}
              </div>
              <div className="text-xs font-mono text-amber-200/80 uppercase tracking-widest font-bold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose & Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Why Choose */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-amber-400" />
              <h2 className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Why Choose</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-8 font-normal">
              A Legacy of <span className="text-white font-semibold">Trust & Quality</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Self-Made Entrepreneur', 'MSME Registered', 'FSSAI Certified', 'Block Printing Pioneer', 
                'Passionate Trainer', 'Women Empowerment Advocate'
              ].map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-center p-4 rounded-2xl bg-[#151311] border border-amber-500/20 hover:border-amber-400/50 transition-colors shadow-md"
                >
                  <CheckCircle2 className="text-amber-400 mr-3 shrink-0" size={20} />
                  <span className="font-sans text-sm text-amber-100 font-light">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* National Initiatives */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-amber-400" />
              <h2 className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">National Alignment</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-8 font-normal">
              National <span className="text-white font-semibold">Initiatives</span>
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {nationalInitiatives.map((initiative, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-5 py-3 rounded-full bg-[#151311] border border-amber-500/25 text-sm font-sans text-amber-100 font-light hover:border-amber-400 transition-all shadow-md"
                >
                  {initiative}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

