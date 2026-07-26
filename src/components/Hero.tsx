import { motion } from 'motion/react';
import { heroContent } from '../data';
import { Award, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0b09] pt-24 pb-16">
      {/* High-fashion ambient gold dust background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-amber-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-yellow-600/10 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-[#12100e]/90 backdrop-blur-2xl p-8 sm:p-12 md:p-14 rounded-3xl max-w-5xl w-full border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
        >
          {/* Gold Filigree Crest / Tag */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-inner">
            <Award size={16} className="text-amber-400" />
            <span>✦ Sikkim's Visionary Leader & Mentor ✦</span>
          </div>

          {/* Heading in Max 2 Lines on Desktop in White */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.6rem] font-serif text-white mb-6 leading-[1.18] tracking-tight text-center text-balance max-w-4xl mx-auto drop-shadow-md"
          >
            Empowering Sikkim Through <span className="text-white">Entrepreneurship, Creativity</span><br className="hidden md:block" /> & Skill Development
          </motion.h1>

          {/* Gold Decorative Line Divider */}
          <div className="flex items-center justify-center gap-3 my-6 opacity-80">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-amber-400"></div>
            <span className="text-amber-400 text-sm">✦ ❖ ✦</span>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          
          {/* Subheading explicitly in Times New Roman */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-amber-100/90 font-medium tracking-wide text-justify max-w-3xl mb-10 mx-auto leading-relaxed"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            {heroContent.subheading}
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative luxury scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-amber-400/80 hover:text-amber-300 transition-colors">
          <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}

