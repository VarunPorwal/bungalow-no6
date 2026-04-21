"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

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

interface SpacePanelProps {
  space: typeof spaces[0];
  i: number;
  smoothProgress: MotionValue<number>;
}

function SpacePanel({ space, i, smoothProgress }: SpacePanelProps) {
  // Title block is 0, so images start mapping from 1..4 (meaning spacing shifts to 0.25 intervals)
  const center = (i + 1) * 0.25;
  const dist = 0.35; // Transition window roughly spanning one full panel view

  // 1. Panel Scale: 1.05 exactly at center, shrinks smoothly down to 0.9 off-center
  const cardScale = useTransform(smoothProgress, [center - dist, center, center + dist], [0.85, 1.05, 0.85]);
  
  // 2. Image Parallax Scale: Subtle continuous zoom tracking throughout its visibility
  const imgScale = useTransform(smoothProgress, [center - dist, center + dist], [1.0, 1.1]);

  // 3. Depth Overlay: Heavy shadows when off-center, lifts directly at center to increase clarity
  const overlayOpacity = useTransform(smoothProgress, [center - dist, center, center + dist], [0.7, 0.15, 0.7]);

  // 4. Cinematic Text Animation
  // Text gracefully fades in and floats down gently ONLY when approaching center
  const textOpacity = useTransform(smoothProgress, [center - 0.2, center, center + 0.2], [0, 1, 0]);
  const textY = useTransform(smoothProgress, [center - 0.2, center, center + 0.2], [30, 0, 30]);

  return (
    <motion.div 
      style={{ scale: cardScale }} 
      className="relative w-[75vw] sm:w-[50vw] md:w-[30vw] max-w-[450px] shrink-0 aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
    >
      <motion.img 
        style={{ scale: imgScale }}
        src={space.img} 
        alt={space.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dynamic Dark Overlay for depth interaction */}
      <motion.div 
        style={{ opacity: overlayOpacity }} 
        className="absolute inset-0 bg-black pointer-events-none" 
      />

      {/* Cinematic Scroll Text Reveal */}
      <motion.div 
        style={{ opacity: textOpacity, y: textY }}
        className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none"
      >
        <span className="font-sans font-medium text-[#c3a166] tracking-widest text-sm uppercase mb-4 drop-shadow-md">
          0{i + 1}
        </span>
        <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2 drop-shadow-xl leading-tight">
          {space.title}
        </h3>
        <p className="font-sans font-light text-sm md:text-base text-white/90 drop-shadow-md line-clamp-3">
          {space.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Spaces() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Global physical elasticity for supreme cinematic smoothness
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20, restDelta: 0.001 });

  // Smoothly pushes the track leftward exactly until the final card touches the right boundary, 
  // keeping the calculation perfectly precise via CSS interpolator so we don't need manual JS measurement
  const x = useTransform(smoothProgress, [0, 1], ["calc(0% + 0vw)", "calc(-100% + 100vw)"]);

  return (
    <section id="spaces" ref={targetRef} className="relative h-[400vh] w-full hidden md:block bg-[#1a0f0a]">
      {/* Sticky base */ }
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Subtle Edge Gradients for Cinematic Vignette */}
        <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[#1a0f0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[#1a0f0a] to-transparent z-20 pointer-events-none" />



        {/* Physical Track */ }
        {/* Asymmetrical padding strictly sets the left title perfectly flush left, 
            forces Image 0 to the right-half frame, and rigidly kicks Image 1 completely off screen natively */}
        <motion.div style={{ x }} className="flex h-full items-center gap-8 md:gap-16 pl-[10vw] pr-[10vw] md:pl-[12vw] md:pr-[35vw] w-max">
          
          {/* Leading Text Panel functioning exactly as the 0th panel natively sliding with the gallery */}
          <div className="shrink-0 w-[75vw] sm:w-[50vw] md:w-[30vw] max-w-[450px] flex justify-start items-center h-full">
             <h2 className="font-serif text-5xl md:text-5xl lg:text-7xl text-white leading-tight drop-shadow-lg whitespace-nowrap transform -translate-y-8 md:-translate-y-16">
               Discover <br />
               <span className="text-[#c3a166] italic">Every Corner.</span>
             </h2>
          </div>

          {spaces.map((space, i) => (
            <SpacePanel key={i} space={space} i={i} smoothProgress={smoothProgress} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
