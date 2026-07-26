import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ventures } from '../data';
import { ArrowRight, Sparkles, Building2 } from 'lucide-react';

export default function Ventures() {
  const [activeVenture, setActiveVenture] = useState(0);

  return (
    <section id="ventures" className="py-28 bg-[#100e0c] relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative ambient background blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={16} className="text-amber-400" />
            <h2 className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Couture Portfolio & Enterprises</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-normal">
            Business & Creative <span className="text-gradient-gold">Ventures</span>
          </h3>
        </div>

        {/* Venture Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ventures.map((venture, idx) => (
            <button
              key={idx}
              onClick={() => setActiveVenture(idx)}
              className={`px-6 py-2.5 rounded-full font-serif text-sm md:text-base font-medium transition-all duration-300 border ${
                activeVenture === idx 
                  ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black border-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105 font-bold' 
                  : 'bg-[#181512] text-amber-200/90 border-amber-500/20 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              {venture.title}
            </button>
          ))}
        </div>

        {/* Active Venture Showcase Card */}
        <div className="bg-[#151311] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-amber-500/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVenture}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Image Grid Frame */}
              <div className="p-5 grid grid-cols-2 gap-4 bg-[#0d0c0a] border-b lg:border-b-0 lg:border-r border-amber-500/20">
                {ventures[activeVenture].images.slice(0,4).map((img, idx) => (
                  <div key={idx} className={`rounded-2xl overflow-hidden relative border border-amber-500/20 ${idx === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
                    <img 
                      src={img} 
                      alt={`${ventures[activeVenture].title} ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 filter brightness-[0.95] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>

              {/* Content Box */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-500/10 text-amber-300 text-xs font-bold font-mono rounded-full border border-amber-500/30">
                    <Building2 size={14} className="text-amber-400" />
                    Est. {ventures[activeVenture].est}
                  </span>
                </div>
                
                <h4 className="text-3xl sm:text-4xl font-serif text-white mb-4 font-normal">
                  {ventures[activeVenture].title}
                </h4>
                
                <p className="text-base sm:text-lg font-sans text-amber-100/80 leading-relaxed mb-8 font-light">
                  {ventures[activeVenture].description}
                </p>

                <div className="mb-10">
                  <h5 className="font-serif text-xs text-amber-400 uppercase tracking-[0.2em] font-bold mb-4">Key Highlights & Services</h5>
                  <ul className="space-y-3">
                    {ventures[activeVenture].highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm font-sans text-amber-100/90">
                        <div className="w-2 h-2 rounded-full bg-amber-400 mr-3 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-semibold font-serif hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all group w-max border border-amber-300"
                >
                  <span>Enquire For Services</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

