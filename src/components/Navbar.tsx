import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import { navigation } from '../data';

const buttonColors = [
  'bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-600 hover:to-rose-500 text-white shadow-rose-950/50',
  'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-amber-950/50',
  'bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white shadow-emerald-950/50',
  'bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white shadow-teal-950/50',
  'bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-600 hover:to-cyan-500 text-white shadow-cyan-950/50',
  'bg-gradient-to-r from-indigo-700 to-indigo-600 hover:from-indigo-600 hover:to-indigo-500 text-white shadow-indigo-950/50',
  'bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white shadow-purple-950/50',
  'bg-gradient-to-r from-yellow-700 to-amber-600 hover:from-yellow-600 hover:to-amber-500 text-white shadow-yellow-950/50',
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 via-black/70 to-transparent py-4 backdrop-blur-sm">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          
          {/* Brand Monogram & Title */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a 
              href="#home" 
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] flex items-center gap-2" 
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse hidden sm:block" />
              <span>Mrs. Shova Rai</span>
            </a>
          </div>

          {/* 1-Line Desktop Navigation Buttons */}
          <nav className="hidden md:flex flex-nowrap items-center justify-end gap-1 sm:gap-1.5 lg:gap-2 xl:gap-2.5 shrink-0">
            {navigation.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className={`${buttonColors[idx % buttonColors.length]} transition-all duration-300 font-semibold text-[11px] md:text-xs xl:text-sm px-2.5 py-1 md:px-2.5 md:py-1 lg:px-3 lg:py-1.5 xl:px-3.5 xl:py-1.5 rounded-full shadow-md whitespace-nowrap border border-white/30 hover:scale-105 hover:border-amber-300 tracking-wider uppercase`}
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amber-300 p-2 rounded-lg bg-black/50 border border-amber-500/30 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#12100e]/95 backdrop-blur-xl border-b border-amber-500/30 absolute top-full left-0 w-full shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navigation.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 text-base font-semibold ${buttonColors[idx % buttonColors.length]} rounded-xl transition-all shadow-md border border-white/20`}
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

