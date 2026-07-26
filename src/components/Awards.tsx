import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { awards, mediaFeatures, speakingEngagements, awardPhotos } from '../data';
import { Award, Mic, Newspaper, Sparkles, Eye, X } from 'lucide-react';

export default function Awards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="recognition" className="py-28 bg-[#100e0c] relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative ambient background lighting */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={16} className="text-amber-400" />
            <h2 className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Prestigious Accolades</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-normal">
            Honours & <span className="text-white font-semibold">Media Features</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Awards List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center mb-6">
              <Award className="text-amber-400 mr-3" size={28} />
              <h4 className="text-2xl font-serif text-white font-normal">Awards & Accolades</h4>
            </div>
            
            <div className="space-y-4">
              {awards.map((award, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-[#151311] border border-amber-500/25 hover:border-amber-400/60 transition-all shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="pr-4">
                    <h5 className="font-serif text-lg text-white font-medium mb-1">{award.title}</h5>
                    <p className="text-sm font-sans text-amber-100/70 font-light">{award.venue}</p>
                  </div>
                  <span className="shrink-0 px-3.5 py-1.5 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold font-mono rounded-full w-max shadow-inner">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Media & Speaking */}
          <div className="space-y-12">
            
            {/* Speaking Engagements */}
            <div>
              <div className="flex items-center mb-6">
                <Mic className="text-amber-400 mr-3" size={24} />
                <h4 className="text-xl font-serif text-white font-normal">Public Speaking</h4>
              </div>
              <div className="space-y-4">
                {speakingEngagements.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-[#171411] text-amber-100 shadow-xl border border-amber-500/30"
                  >
                    <p className="text-xs text-amber-400 uppercase tracking-widest mb-1 font-mono font-bold">{item.title}</p>
                    <p className="text-sm font-serif text-white">{item.venue}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Featured In */}
            <div>
              <div className="flex items-center mb-6">
                <Newspaper className="text-amber-400 mr-3" size={24} />
                <h4 className="text-xl font-serif text-white font-normal">Featured In</h4>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {mediaFeatures.map((item, idx) => (
                  <motion.span 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="px-4 py-2 rounded-xl bg-[#171411] border border-amber-500/25 text-sm font-serif text-amber-200 shadow-md"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Award Photos & Certificates Gallery (Placed at the end of Awards & Honours section) */}
        <div className="mt-20 pt-16 border-t border-amber-500/20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles size={16} className="text-amber-400" />
              <span className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Visual Recognition & Certificates</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-white font-normal mb-2">
              Awards & Honours <span className="text-amber-300 font-semibold">Photo Gallery</span>
            </h3>
            <p className="text-amber-200/60 font-serif text-sm max-w-xl mx-auto">
              Visual glimpses of felicitations, certificates, and honorific ceremonies.
            </p>
          </div>

          {/* 2-Column Grid (Two photos per line, 6 photos total) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {awardPhotos.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 2) * 0.1 }}
                className="relative group overflow-hidden rounded-2xl border border-amber-500/25 bg-[#14120f] shadow-2xl hover:border-amber-400/60 transition-all duration-500 cursor-pointer p-4 sm:p-5 flex items-center justify-center min-h-[300px] sm:min-h-[380px]"
                onClick={() => setSelectedImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={`Award & Honour Photo ${idx + 1}`} 
                  className="w-full h-full max-h-[460px] object-contain rounded-xl filter contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    if (item.fallbackImage) {
                      target.src = item.fallbackImage;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 rounded-2xl pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-mono uppercase tracking-widest font-bold">
                    <Eye size={14} /> Tap to expand full view
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Full View */}
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
              aria-label="Close photo preview"
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Expanded award photo" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)] border-2 border-amber-500/40"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

