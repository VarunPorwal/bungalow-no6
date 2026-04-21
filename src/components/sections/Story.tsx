"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="story" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-[#fbfbf8] relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Text content */}
        <div className="flex-1 w-full order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-8 leading-tight text-[#1a0f0a]">
              Born from a <br/>
              <span className="italic text-[#c3a166]">quiet desire.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 font-sans font-light text-lg text-[#1a0f0a]/80 max-w-lg"
          >
            <p>
              Bungalow No. 6 wasn't built to be a passing spot for a quick caffeine fix. It was conceived as an antidote to the rush of modern life.
            </p>
            <p>
              We took a forgotten 1960s residential bungalow, stripped it back to its bones, and filled it with warmth, art, and the aroma of expertly roasted beans. The creaky wooden floors remained. The overgrown balcony was embraced.
            </p>
            <p>
              Here, you don't just grab a coffee. You take a breath. You stay awhile.
            </p>
            
            <div className="pt-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Signature_placeholder.svg" 
                alt="Founder Signature" 
                className="h-12 opacity-80 mix-blend-multiply filter contrast-200 sepia"
              />
              <p className="mt-2 text-sm uppercase tracking-widest text-[#8e9b86] font-medium">The Founders</p>
            </div>
          </motion.div>
        </div>

        {/* Image content */}
        <div className="flex-1 w-full order-1 md:order-2 h-[60vh] md:h-[80vh] relative overflow-hidden rounded-md">
          <motion.img
            style={{ y: imgY }}
            src="/Coffee.jpg"
            alt="Warm coffee details"
            className="absolute inset-0 w-full h-[120%] object-cover"
          />
          {/* Overlay gradient for softer feel */}
          <div className="absolute inset-0 bg-[#c3a166]/10 mix-blend-overlay"></div>
        </div>
      </div>
    </section>
  );
}
