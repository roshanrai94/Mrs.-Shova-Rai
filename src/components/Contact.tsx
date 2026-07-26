import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Send, Facebook, Instagram, Youtube, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-[#100e0c] relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={16} className="text-amber-400" />
            <h2 className="text-xs font-sans tracking-[0.25em] text-amber-400 uppercase font-bold">Atelier Concierge</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-normal">
            Get in <span className="text-white font-semibold">Touch</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#151311] p-8 md:p-14 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-amber-500/30">
          
          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-serif text-white mb-4 font-normal">Contact Information</h4>
            <p className="text-amber-100/75 font-sans mb-10 leading-relaxed font-light text-justify">
              Whether you're looking for bespoke styling, entrepreneurial collaboration, or community mentorship in Sikkim, feel free to get in touch with Mrs. Shova Rai.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 mr-4 shadow-md">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="font-serif text-amber-300 font-medium mb-1">Atelier & Salon</h5>
                  <p className="text-sm font-sans text-amber-100/80 font-light text-justify">Cutting Edge Hair & Beauty Salon,<br/>Namnang, Gangtok, Sikkim, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 mr-4 shadow-md">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="font-serif text-amber-300 font-medium mb-1">Direct Correspondence</h5>
                  <a href="mailto:cuttingedge723@gmail.com" className="text-sm font-sans text-amber-100/80 hover:text-amber-300 transition-colors font-light text-justify">
                    cuttingedge723@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-serif text-amber-300 font-medium mb-4">Official Channels</h5>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/198oPZucyN/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#201c18] border border-amber-500/30 text-amber-300 flex items-center justify-center hover:bg-amber-400 hover:text-black hover:border-amber-300 transition-all shadow-md">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/cuttingedge_hair_salon_gtk__?igsh=aG8xamhqcHlvMmpx" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#201c18] border border-amber-500/30 text-amber-300 flex items-center justify-center hover:bg-amber-400 hover:text-black hover:border-amber-300 transition-all shadow-md">
                  <Instagram size={18} />
                </a>
                <a href="https://youtube.com/@shovarai963?si=m2ZVekHjhlaEsZDR" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#201c18] border border-amber-500/30 text-amber-300 flex items-center justify-center hover:bg-amber-400 hover:text-black hover:border-amber-300 transition-all shadow-md">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-amber-300 mb-2 font-bold">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-2xl bg-[#0e0d0b] border border-amber-500/30 text-amber-100 placeholder-amber-100/30 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all font-sans text-sm"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-amber-300 mb-2 font-bold">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-2xl bg-[#0e0d0b] border border-amber-500/30 text-amber-100 placeholder-amber-100/30 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all font-sans text-sm"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-amber-300 mb-2 font-bold">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-2xl bg-[#0e0d0b] border border-amber-500/30 text-amber-100 placeholder-amber-100/30 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all font-sans text-sm resize-none"
                  placeholder="How can Mrs. Shova Rai assist you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-serif font-bold text-base hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed border border-amber-300"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                ) : isSuccess ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Correspondence</span>
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Map Frame */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-amber-500/30 h-[380px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.137021151608!2d88.6111111150567!3d27.331444482949774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a541604085b5%3A0x80356c3619db3a13!2sGangtok%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.6) invert(0.85) contrast(1.2)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

