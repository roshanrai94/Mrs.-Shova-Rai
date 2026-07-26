import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryImages } from '../data';
import { X, Sparkles, Eye } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-28 bg-[#0c0b09] relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative background lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={16} className="text-amber-400" />
            <h2 className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Editorial Collection</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-normal">
            Visual <span className="text-gradient-gold">Chronicles</span>
          </h3>
        </div>

        {/* Couture Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.08 }}
              className="relative group overflow-hidden rounded-2xl break-inside-avoid border border-amber-500/25 bg-[#14120f] shadow-2xl hover:border-amber-400/60 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.category} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-mono uppercase tracking-widest font-bold mb-1">
                  <Eye size={14} /> Tap to expand
                </span>
                <p className="text-white font-serif text-xl font-normal">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-amber-400/70 hover:text-amber-300 bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)] border-2 border-amber-500/40"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

