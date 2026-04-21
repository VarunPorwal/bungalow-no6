"use client";

import { motion } from "framer-motion";

export function JeepSpotlight() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 bg-[#0C4229] overflow-hidden flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-[#c3a166]/15 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 md:gap-16 relative z-10">
        
        {/* Left Side: Text */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
          className="flex-1 w-full text-center lg:text-left pr-0 lg:pr-8"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="font-serif text-6xl md:text-8xl text-white mb-6 drop-shadow-md tracking-tight"
          >
            The Icon.
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="font-sans font-light text-2xl md:text-3xl text-[#fbfbf8]/90 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-sm"
          >
            Our signature 4x4. <br className="hidden md:block" />
            Parked right in the living area.
          </motion.p>
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="mt-14"
          >
            <button className="px-10 py-4 border border-[#fbfbf8]/30 text-[#fbfbf8] font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-[#0C4229] transition-all duration-300">
              Discover our space
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="flex-1 w-full flex justify-center lg:justify-end pl-0 lg:pl-10"
        >
          <div className="relative w-full max-w-lg aspect-[3/4] rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src="/jeep-portrait.jpg"
              alt="Bungalow No. 6 Vintage Jeep" 
              className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-[2s] group-hover:scale-110"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
