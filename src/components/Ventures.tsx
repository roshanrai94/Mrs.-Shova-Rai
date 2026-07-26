import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ventures } from '../data';
import { ArrowRight, Sparkles, Building2, Layers, Eye, X } from 'lucide-react';

export default function Ventures() {
  const [activeVenture, setActiveVenture] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption?: string } | null>(null);

  const handleVentureClick = (idx: number, id: string) => {
    setActiveVenture(idx);
    const element = document.getElementById(`venture-${id}`);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="ventures" className="py-28 bg-[#100e0c] relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative ambient background blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={16} className="text-amber-400" />
            <h2 className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Couture Portfolio & Enterprises</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-normal mb-4">
            Business & Creative <span className="text-white font-semibold">Ventures</span>
          </h3>
          <p className="text-amber-100/70 font-sans max-w-2xl mx-auto font-light text-sm md:text-base">
            Explore our curated enterprises spanning luxury salon care, designer fashion, Himalayan culinary preservation, and traditional textile arts.
          </p>
        </div>

        {/* Venture Selection Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {ventures.map((venture, idx) => (
            <button
              key={venture.id || idx}
              onClick={() => handleVentureClick(idx, venture.id || `v-${idx}`)}
              className={`px-5 py-2.5 rounded-full font-serif text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                activeVenture === idx 
                  ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-white border-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105 font-bold' 
                  : 'bg-[#181512] text-amber-100/80 border-amber-500/20 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              <Layers size={14} />
              <span>{venture.title}</span>
            </button>
          ))}
        </div>

        {/* Ventures Showcase Container */}
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            {ventures.map((venture, vIdx) => {
              // Determine images to display: show up to 3 for ventures with 3+ images
              const displayImages = (venture.id === 'cutting-edge' || venture.id === 'block-printing' || venture.images.length >= 3)
                ? venture.images.slice(0, 3) 
                : venture.images.slice(0, 2);

              return (
                <motion.div
                  key={venture.id || vIdx}
                  id={`venture-${venture.id || `v-${vIdx}`}`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: vIdx * 0.1 }}
                  className={`bg-[#151311] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border transition-all duration-500 ${
                    activeVenture === vIdx 
                      ? 'border-amber-400/80 shadow-[0_0_30px_rgba(212,175,55,0.25)]' 
                      : 'border-amber-500/20 opacity-90'
                  }`}
                >
                  {/* 1. Picture Showcase Frame - Placed Directly ABOVE the Write-up */}
                  <div className="p-4 sm:p-6 bg-[#0d0c0a] border-b border-amber-500/20">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 px-1">
                      <span className="text-xs font-serif text-amber-400/90 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                        <Sparkles size={13} className="text-amber-400" />
                        {venture.id === 'cutting-edge' 
                          ? 'Cutting Edge Gallery Showcase' 
                          : venture.id === 'zayels-pickle'
                          ? "Zayel's Pickle Product Showcase"
                          : venture.id === 'block-printing'
                          ? 'Block Printing & Art Gallery'
                          : 'Visual Gallery & Space'}
                      </span>
                      <span className="text-xs font-mono text-amber-300/60 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                        Est. {venture.est}
                      </span>
                    </div>

                    <div className={`grid grid-cols-1 ${displayImages.length >= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-4 sm:gap-6`}>
                      {displayImages.map((img, imgIdx) => {
                        const fallback = (venture as { imageFallbacks?: string[] }).imageFallbacks?.[imgIdx];
                        const caption = (venture as { imageCaptions?: string[] }).imageCaptions?.[imgIdx] || `${venture.title} View ${imgIdx + 1}`;

                        return (
                          <div 
                            key={imgIdx} 
                            onClick={() => setSelectedImage({ src: img, caption })}
                            className="group relative rounded-2xl border border-amber-500/25 bg-[#12100e] p-3 sm:p-4 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[320px] shadow-lg hover:border-amber-400/70 transition-all duration-300 cursor-pointer overflow-hidden"
                          >
                            <div className="w-full h-[220px] sm:h-[260px] flex items-center justify-center overflow-hidden rounded-xl bg-[#0a0908]">
                              <img 
                                src={img} 
                                alt={`${venture.title} visual ${imgIdx + 1}`}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                                loading="lazy"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.onerror = null;
                                  if (fallback) {
                                    target.src = fallback;
                                  }
                                }}
                              />
                            </div>

                            <div className="mt-3 w-full flex items-center justify-between text-xs text-amber-200/80 font-serif px-1">
                              <span className="truncate pr-2 font-medium">{caption}</span>
                              <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 font-mono uppercase tracking-wider shrink-0 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                <Eye size={12} /> Expand
                              </span>
                            </div>

                            {/* Hover overlay prompt */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 rounded-2xl pointer-events-none">
                              <span className="inline-flex items-center gap-2 text-xs font-serif text-amber-300 bg-black/80 border border-amber-400/40 px-3.5 py-2 rounded-full shadow-xl">
                                <Eye size={14} className="text-amber-400" /> Tap for Full Screen View
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Write-up & Detailed Description Section */}
                  <div className="p-8 sm:p-12">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-500/10 text-amber-300 text-xs font-bold font-mono rounded-full border border-amber-500/30">
                          <Building2 size={14} className="text-amber-400" />
                          Est. {venture.est}
                        </span>
                        {venture.tagline && (
                          <span className="text-xs font-serif text-amber-400/80 italic hidden sm:inline-block">
                            "{venture.tagline}"
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-3xl sm:text-4xl font-serif text-white mb-4 font-normal">
                      {venture.title}
                    </h4>

                    <p className="text-base sm:text-lg font-sans text-amber-100/90 leading-relaxed mb-8 font-light text-justify">
                      {venture.description}
                    </p>

                    <div className="mb-8 bg-[#0e0c0a] p-6 rounded-2xl border border-amber-500/15">
                      <h5 className="font-serif text-xs text-amber-400 uppercase tracking-[0.2em] font-bold mb-4">
                        Key Highlights & Offerings
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {venture.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm font-sans text-amber-100/90">
                            <div className="w-2 h-2 rounded-full bg-amber-400 mr-3 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-white font-semibold font-serif hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all group w-max border border-amber-300"
                    >
                      <span>Enquire For Services</span>
                      <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal for Full View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-amber-400/80 hover:text-amber-300 bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-full transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close photo preview"
            >
              <X size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.caption || 'Expanded view'} 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)] border-2 border-amber-500/40"
              />
              {selectedImage.caption && (
                <p className="mt-4 text-center font-serif text-sm text-amber-300/90 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
                  {selectedImage.caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


