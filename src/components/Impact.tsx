import { motion } from 'motion/react';
import { skillsTraining } from '../data';
import { Target, Lightbulb, Users, HeartHandshake, Sparkles } from 'lucide-react';

export default function Impact() {
  return (
    <section id="impact" className="py-28 bg-[#0c0b09] text-white relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#151311] p-10 rounded-3xl border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group hover:border-amber-400/60 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-6 shadow-inner">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 font-normal group-hover:text-amber-300 transition-colors">My Vision</h3>
            <p className="text-amber-100/80 font-sans leading-relaxed font-light text-base sm:text-lg">
              To create a self-reliant and creatively vibrant Sikkim where every individual, especially women and youth, has the skills and opportunities to build sustainable livelihoods and preserve our rich cultural heritage.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#151311] p-10 rounded-3xl border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group hover:border-amber-400/60 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-6 shadow-inner">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 font-normal group-hover:text-amber-300 transition-colors">My Mission</h3>
            <p className="text-amber-100/80 font-sans leading-relaxed font-light text-base sm:text-lg">
              To empower communities through hands-on training, mentorship, and fostering entrepreneurship in beauty, culinary arts, and traditional crafts, ensuring financial independence and growth.
            </p>
          </motion.div>
        </div>

        {/* Skill Development Banner */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={16} className="text-amber-400" />
            <h2 className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Community Legacy</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-normal">
            Empowering Through <span className="text-gradient-gold">Skill Development</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-lg font-sans text-amber-100/90 leading-relaxed mb-8 font-light">
              Over the years, I have dedicated myself to training and uplifting various groups within our community. By sharing knowledge and practical skills, we build a stronger, more resilient society.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Women Empowerment', icon: HeartHandshake, desc: 'Fostering financial independence through skill mastery.' },
                { title: 'Youth Mentorship', icon: Users, desc: 'Guiding the next generation of entrepreneurs.' },
                { title: 'SHG Support', icon: Target, desc: 'Strengthening Self-Help Groups with viable business models.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 mr-4 shadow-md">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-lg font-medium">{item.title}</h4>
                    <p className="text-sm font-sans text-amber-100/70 mt-1 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-[#151311] p-8 rounded-3xl border border-amber-500/30 shadow-2xl">
              <h4 className="font-serif text-xl text-amber-300 mb-6 font-medium flex items-center gap-2">
                <Sparkles size={18} className="text-amber-400" />
                Specialized Training Domains
              </h4>
              <div className="flex flex-wrap gap-3">
                {skillsTraining.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2.5 rounded-full bg-[#1e1a16] border border-amber-500/25 text-sm font-sans text-amber-100 hover:bg-amber-500 hover:text-black hover:border-amber-300 transition-all duration-300 cursor-default shadow-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

