"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Spaceold() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the overarching container (which is 400vh tall to allow scrolling)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // "start start" means when the top of target hits top of viewport
    // "end end" means when the bottom of target hits bottom of viewport
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal translation.
  // We have 4 panels. To show the last panel, we translate by -75% of the total width.
  // 400vw width * -75% = -300vw (which is exactly 3 viewports left)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const spaces = [
    {
      title: "The Balcony",
      desc: "Sun-drenched mornings and a gentle breeze. Perfect for your first espresso.",
      img: "/balcony.jpg"
    },
    {
      title: "Reading Corner",
      desc: "Plush leather, amber lighting, and absolute silence. Lose yourself in pages.",
      img: "/Bookreading.jpg"
    },
    {
      title: "Co-working Hub",
      desc: "High-speed Wi-Fi, ample power, and an atmosphere that demands focus.",
      img: "/working.jpg"
    },
    {
      title: "Indoor Seating",
      desc: "The heart of the bungalow. Meet, chat, and share stories over lattes.",
      img: "/indoor.jpg"
    }
  ];

  return (
    <section id="spaces-old" ref={targetRef} className="relative h-[400vh] w-full hidden md:block bg-[#1a0f0a]">
      {/* Sticky container that stays in viewport while scrolling through the 400vh */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Absolute headers inside sticky container */}
        <div className="absolute top-20 left-0 z-10 w-full flex justify-center items-center pointer-events-none">
          <h2 className="font-serif text-3xl md:text-5xl text-white">
            Wander <span className="text-[#c3a166] italic">through.</span>
          </h2>
        </div>

        {/* The horizontal track moving based on vertical scroll */}
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {spaces.map((space, i) => (
            <div key={i} className="panel w-screen h-full flex items-center justify-center p-12 lg:p-24 relative">
              {/* Background Image Panel */}
              <div className="relative w-full h-[85vh] max-w-5xl mt-15 rounded-lg overflow-hidden cursor-pointer group">
                <img 
                  src={space.img} 
                  alt={space.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay darkens on hover to reveal text more clearly */}
                <div className="absolute inset-0 bg-[#1a0f0a]/30 transition-opacity duration-700 group-hover:bg-[#1a0f0a]/60" />

                {/* Text Reveal */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="font-sans font-medium text-[#c3a166] tracking-widest text-sm uppercase mb-4 opacity-0 transform translate-y-4 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-4xl lg:text-5xl text-white mb-4 transform translate-y-8 transition-transform duration-700 ease-out group-hover:translate-y-0">
                    {space.title}
                  </h3>
                  <p className="font-sans font-light text-lg text-white/80 max-w-md opacity-0 transform translate-y-4 transition-all duration-700 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                    {space.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
