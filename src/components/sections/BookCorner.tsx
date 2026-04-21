"use client";

import { motion } from "framer-motion";

export function BookCorner() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#f5f2eb] flex justify-center items-center relative overflow-hidden">
      
      {/* Decorative book spine / fold in the middle for desktop */}
      <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-transparent via-[#1a0f0a]/10 to-transparent shadow-[0_0_20px_rgba(0,0,0,0.05)] transform -translate-x-1/2" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl w-full flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-sm overflow-hidden bg-[#fbfbf8]"
      >
        
        {/* Left Page (Image) */}
        <motion.div 
          initial={{ scale: 1.05, filter: "blur(4px)" }}
          whileInView={{ scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-[70vh] overflow-hidden bg-[#e0d6c8] flex items-center justify-center p-8"
        >
          {/* Photo 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute left-[10%] top-[15%] w-[55%] aspect-[3/4] rounded-lg shadow-xl overflow-hidden z-10 transition-transform duration-700 hover:scale-105 hover:z-30 cursor-pointer"
          >
             <img src="/library.jpg" alt="Library Decor" className="w-full h-full object-cover filter sepia-[0.1]" />
          </motion.div>

          {/* Photo 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="absolute right-[10%] bottom-[15%] w-[60%] aspect-[4/3] rounded-lg shadow-2xl overflow-hidden z-20 transition-transform duration-700 hover:scale-105 hover:z-30 cursor-pointer border-4 border-white"
          >
             <img src="/library2.jpg" alt="Library Space" className="w-full h-full object-cover filter sepia-[0.1]" />
          </motion.div>
          
          <div className="absolute inset-0 bg-[#c3a166]/5 mix-blend-multiply pointer-events-none" />
        </motion.div>

        {/* Right Page (Text) */}
        <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-[#fbfbf8] relative">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
              hidden: {}
            }}
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="font-serif italic text-xl text-[#c3a166] mb-4 block"
            >
              Chapter 01
            </motion.span>
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="font-serif text-3xl md:text-5xl text-[#1a0f0a] mb-8 leading-tight"
            >
              The Library <br/>
              Collection.
            </motion.h2>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="font-sans font-light text-[#1a0f0a]/80 space-y-6 leading-relaxed text-base md:text-lg"
            >
              <p>
                Our curated book corner is more than decor. It's a living library contributed by our patrons. Leave a book, take a book.
              </p>
              <p>
                From worn-out poetry collections to dog-eared philosophical texts, every spine tells a story of the hands it has passed through before finding a temporary home on our shelves.
              </p>
            </motion.div>

            <motion.button 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="mt-12 group flex items-center gap-4 text-[#1a0f0a] font-medium uppercase tracking-widest text-xs hover:text-[#c3a166] transition-colors"
            >
              <span className="w-8 h-[1px] bg-current transform origin-left group-hover:scale-x-150 transition-transform" />
              Explore our shelves
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
