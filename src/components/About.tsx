import { motion } from 'motion/react';
import { aboutContent } from '../data';
import { Sparkles, Award, ShieldCheck } from 'lucide-react';
import shovaRai from '../assets/shova_rai.jpg';

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#100e0c] relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative Ambient Gold Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-amber-400" />
                <h2 className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Digital Legacy & Vision</h2>
              </div>
              <h3 className="text-4xl sm:text-5xl font-serif text-white leading-tight font-normal">
                Empowering Communities Through <span className="text-white font-semibold">Passion & Purpose</span>
              </h3>
            </div>
            
            <p className="text-xl font-serif text-amber-200/90 italic border-l-2 border-amber-400/80 pl-6 py-2 bg-amber-500/5 rounded-r-xl">
              "{aboutContent.openingMessage}"
            </p>
            
            <div className="space-y-4 text-amber-100/80 font-sans leading-relaxed text-base sm:text-lg font-light text-justify">
              {aboutContent.intro}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-amber-500/20">
              <div className="bg-[#171411] p-5 rounded-2xl border border-amber-500/20 shadow-xl">
                <h4 className="font-serif text-lg text-amber-300 mb-4 font-medium flex items-center gap-2">
                  <ShieldCheck size={18} className="text-amber-400" />
                  Professional Roles
                </h4>
                <ul className="space-y-3">
                  {aboutContent.roles.slice(0, 4).map((role, idx) => {
                    const Icon = role.icon;
                    return (
                      <li key={idx} className="flex items-center text-sm font-sans text-amber-100/90">
                        <span className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mr-3 text-amber-300 shrink-0">
                          <Icon size={15} />
                        </span>
                        {role.name}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="bg-[#171411] p-5 rounded-2xl border border-amber-500/20 shadow-xl">
                <h4 className="font-serif text-lg text-amber-300 mb-4 font-medium flex items-center gap-2">
                  <Award size={18} className="text-amber-400" />
                  Qualifications
                </h4>
                <ul className="space-y-3">
                  {aboutContent.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start text-sm font-sans text-amber-100/90">
                      <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 mr-3 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Image & Quick Facts (Couture Frame Style) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-2 border-amber-500/30 bg-[#161311] p-2">
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src={shovaRai} 
                  alt="Mrs. Shova Rai" 
                  className="w-full h-auto object-cover filter contrast-[1.05]"
                  
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09] via-transparent to-transparent opacity-80"></div>
              </div>
              
              {/* Overlay Quick Facts */}
              <div className="mt-2 p-6 bg-[#171411]/95 backdrop-blur-md rounded-2xl border border-amber-500/30">
                <div className="grid grid-cols-3 gap-3 text-center divide-x divide-amber-500/20">
                  {aboutContent.quickFacts.map((fact, idx) => (
                    <div key={idx} className="px-2">
                      <p className="text-[10px] text-amber-400/90 uppercase tracking-widest font-mono font-bold mb-1">{fact.label}</p>
                      <p className="text-sm font-serif text-white font-medium">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Luxury Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 bg-[#1a1714] p-4 rounded-2xl shadow-2xl border border-amber-500/40 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300">
                <span className="font-serif text-xl font-bold">20+</span>
              </div>
              <div className="text-xs font-sans text-amber-100/90 leading-tight">
                Years of <br/><span className="font-serif font-bold text-amber-300 text-sm">Excellence</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

