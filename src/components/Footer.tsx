import { Facebook, Instagram, Youtube, Sparkles } from 'lucide-react';
import { navigation } from '../data';

export default function Footer() {
  return (
    <footer className="bg-[#0c0b09] text-white pt-20 pb-10 border-t border-amber-500/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <a href="#" className="font-serif text-3xl font-bold tracking-wide text-white block">
              <span className="text-gradient-gold">Mrs. Shova Rai</span>
            </a>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase font-bold">
              <Sparkles size={14} /> Atelier of Entrepreneurship
            </div>
            <p className="text-sm font-sans text-amber-100/70 leading-relaxed pr-4 font-light">
              Empowering Sikkim through entrepreneurship, creativity, and skill development. A digital legacy celebrating resilience, craftsmanship, and community impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-wrap md:justify-end gap-x-12 gap-y-8">
            <div>
              <h4 className="font-serif text-sm text-amber-300 mb-6 uppercase tracking-[0.2em] font-bold">Explore</h4>
              <ul className="space-y-3">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm font-sans text-amber-100/70 hover:text-amber-300 transition-all font-light">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-sm text-amber-300 mb-6 uppercase tracking-[0.2em] font-bold invisible hidden md:block">More</h4>
              <ul className="space-y-3">
                {navigation.slice(4).map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm font-sans text-amber-100/70 hover:text-amber-300 transition-all font-light">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm text-amber-300 mb-6 uppercase tracking-[0.2em] font-bold">Connect</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/198oPZucyN/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#181512] border border-amber-500/30 text-amber-300 flex items-center justify-center hover:bg-amber-400 hover:text-black transition-all shadow-md">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/cuttingedge_hair_salon_gtk__?igsh=aG8xamhqcHlvMmpx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#181512] border border-amber-500/30 text-amber-300 flex items-center justify-center hover:bg-amber-400 hover:text-black transition-all shadow-md">
                  <Instagram size={18} />
                </a>
                <a href="https://youtube.com/@shovarai963?si=m2ZVekHjhlaEsZDR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#181512] border border-amber-500/30 text-amber-300 flex items-center justify-center hover:bg-amber-400 hover:text-black transition-all shadow-md">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-amber-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs font-sans text-amber-100/50">
            © 2026 Mrs. Shova Rai. All Rights Reserved.
          </p>
          <p className="text-xs font-sans text-amber-100/50">
            Designed to celebrate entrepreneurship, creativity, women empowerment, and community development.
          </p>
        </div>

      </div>
    </footer>
  );
}

