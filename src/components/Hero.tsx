import { motion } from 'motion/react';
import { heroContent } from '../data';
import { Award, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import heroImg from '../assets/Hero.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0b09] pt-28 pb-20">
      {/* High-fashion ambient gold dust background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-amber-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-yellow-600/10 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-7 bg-[#12100e]/95 backdrop-blur-2xl p-7 sm:p-10 md:p-12 rounded-3xl border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
          >
            {/* Gold Filigree Crest / Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-inner">
              <Award size={16} className="text-amber-400" />
              <span>✦ Sikkim's Visionary Leader & Mentor ✦</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 leading-[1.18] tracking-tight text-left drop-shadow-md">
              Empowering Sikkim Through <span className="text-amber-300">Entrepreneurship, Creativity</span> & Skill Development
            </h1>

            {/* Gold Decorative Line Divider */}
            <div className="flex items-center gap-3 my-6 opacity-80">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-amber-400 to-transparent"></div>
              <span className="text-amber-400 text-sm">✦ ❖ ✦</span>
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-amber-400 to-transparent"></div>
            </div>
            
            {/* Subheading explicitly in Times New Roman */}
            <p 
              className="text-lg sm:text-xl text-amber-100/90 font-medium tracking-wide text-left mb-8 leading-relaxed"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              {heroContent.subheading}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-serif font-bold text-sm hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center gap-2 border border-amber-300 cursor-pointer"
              >
                <span>Explore Ventures</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full bg-[#1c1814] text-amber-200 hover:text-white border border-amber-500/30 hover:border-amber-400 text-sm font-serif font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Discover Story</span>
                <Sparkles size={16} className="text-amber-400" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Prominent Portrait Frame of Mrs. Shova Rai */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border-2 border-amber-500/40 bg-[#161311] p-2 sm:p-3 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[540px]">
                <img 
                  src={heroImg} 
                  alt="Mrs. Shova Rai - Sikkim Entrepreneur & Community Leader" 
                  className="w-full h-full object-cover object-top filter contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Floating Bottom Name & Location Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#14110e]/95 backdrop-blur-md rounded-2xl border border-amber-500/40 shadow-xl flex items-center justify-between">
                <div>
                  <h2 className="text-base font-serif font-bold text-white">Mrs. Shova Rai</h2>
                  <p className="text-xs font-sans text-amber-300/90 font-light">Gangtok, Sikkim, India</p>
                </div>
                <span className="px-3 py-1 bg-amber-500/20 border border-amber-400/40 rounded-full text-[11px] font-mono text-amber-300 uppercase tracking-widest font-semibold">
                  Founder
                </span>
              </div>
            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-amber-500/20 via-amber-300/10 to-amber-600/20 blur-xl pointer-events-none -z-10"></div>
          </motion.div>

        </div>
      </div>

      {/* Decorative luxury scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <button 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }} 
          className="flex flex-col items-center gap-1 text-amber-400/80 hover:text-amber-300 transition-colors bg-transparent border-none cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
          <ChevronDown size={20} />
        </button>
      </motion.div>
    </section>
  );
}

