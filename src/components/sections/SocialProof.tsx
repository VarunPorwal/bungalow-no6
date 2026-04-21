"use client";

import { motion } from "framer-motion";

const images = [
  { src: "/image1.jpg", classes: "col-span-2 row-span-2 md:col-span-2 md:row-span-2" }, // BIG FIRST IMAGE
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop", classes: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2000&auto=format&fit=crop", classes: "col-span-1 row-span-1" },
  { src: "/image2.jpg", classes: "col-span-2 md:col-span-1 row-span-2" },
  { src: "/working.jpg", classes: "col-span-1 row-span-1" }, // Replaced failing Unsplash URL
  { src: "/image3.jpg", classes: "col-span-1 row-span-1" },
  { src: "/image4.jpg", classes: "col-span-1 row-span-1" },
  { src: "/indoor.jpg", classes: "col-span-1 row-span-1" } // Filler to prevent blank spots
];

export function SocialProof() {
  return (
    <section className="py-24 bg-[#fbfbf8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1a0f0a] mb-4">
            Through your <span className="italic text-[#c3a166]">lens.</span>
          </h2>
          <p className="font-sans font-light text-[#1a0f0a]/70">Tag @bungalowno6 to be featured.</p>
        </div>
        <a href="#" className="hidden md:inline-block font-sans uppercase tracking-widest text-[#1a0f0a] text-xs font-medium hover:text-[#c3a166] transition-colors relative group">
          Follow us
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#1a0f0a] group-hover:bg-[#c3a166] transition-colors" />
        </a>
      </div>

      {/* Grid Bento Container */}
      <div className="w-full flex justify-center px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className={`relative group overflow-hidden rounded-md shadow-sm border-[4px] md:border-[6px] border-white ${img.classes}`}
            >
              <img 
                src={img.src} 
                alt={`Instagram Photo ${i+1}`} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1a0f0a]/0 group-hover:bg-[#1a0f0a]/20 transition-colors duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <a href="#" className="inline-block font-sans uppercase tracking-widest text-[#1a0f0a] text-xs font-medium hover:text-[#c3a166] transition-colors">
          Follow us
        </a>
      </div>
    </section>
  );
}
