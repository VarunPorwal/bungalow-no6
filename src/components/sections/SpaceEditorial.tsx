"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

const spaces = [
  {
    id: "01",
    title: "The Balcony",
    desc: "Sun-drenched mornings and a gentle breeze. Perfect for your first espresso or a quiet read before the city wakes up.",
    img: "/balcony1.jpg",
    reverse: false,
  },
  {
    id: "02",
    title: "Reading Corner",
    desc: "Plush leather, amber lighting, and absolute silence. A sanctuary strictly designed for you to lose yourself entirely in pages.",
    img: "/Bookreading.jpg",
    reverse: true,
  },
  {
    id: "03",
    title: "Co-working Hub",
    desc: "High-speed Wi-Fi, ample power, and an atmosphere that demands focus. Custom built for creators, remote workers, and visionaries.",
    img: "/working.jpg",
    reverse: false,
  },
  {
    id: "04",
    title: "Indoor Seating",
    desc: "The living heart of the bungalow. Meet, chat, and share stories over delicate lattes in a warm, communal atmosphere.",
    img: "/indoor.jpg",
    reverse: true,
  }
];

interface EditorialPanelProps {
  space: typeof spaces[0];
  i: number;
  smoothProgress: MotionValue<number>;
}

function HeaderPanel({ smoothProgress }: { smoothProgress: MotionValue<number> }) {
  const center = 0;
  const dist = 0.25;

  const panelScale = useTransform(smoothProgress, [center - dist, center, center + dist], [0.9, 1.05, 0.9]);
  const panelOpacity = useTransform(smoothProgress, [center - dist, center, center + dist], [0.3, 1, 0.3]);

  return (
    <motion.div 
      style={{ scale: panelScale, opacity: panelOpacity }}
      className="flex flex-col justify-center items-start text-left w-[85vw] md:w-[60vw] max-w-[1000px] shrink-0 pl-16 md:pl-0"
    >
      <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-lg whitespace-nowrap">
        Discover <br />
        <span className="text-[#c3a166] italic">Every Corner.</span>
      </h2>
    </motion.div>
  );
}

function EditorialPanel({ space, i, smoothProgress }: EditorialPanelProps) {
  // Since Header is index 0, spaces start at index 1 conceptually in the 5-item track
  const center = (i + 1) * 0.25;
  const dist = 0.25;

  // Cinematic Scaling and Focus specific to this horizontal editorial layout
  const panelScale = useTransform(smoothProgress, [center - dist, center, center + dist], [1,1.05,1]);
  const panelOpacity = useTransform(smoothProgress, [center - dist, center, center + dist], [0.3, 1, 0.3]);

  return (
    <motion.div 
      style={{ scale: panelScale, opacity: panelOpacity }} 
      className="flex flex-col md:flex-row items-center gap-8 lg:gap-16 w-[85vw] md:w-[60vw] max-w-[1000px] shrink-0"
    >
      {/* Image Block */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[420px] aspect-[4/5] md:aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl">
          <img 
            src={space.img} 
            alt={space.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Block */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 md:px-0">
        <span className="font-sans font-medium text-[#c3a166] tracking-widest text-sm uppercase mb-4 opacity-80">
          {space.id}
        </span>
        <h3 className="font-serif text-4xl lg:text-5xl text-white mb-6 leading-tight drop-shadow-md">
          {space.title}
        </h3>
        <p className="font-sans font-light text-lg lg:text-xl text-[#f5f2eb]/80 leading-relaxed max-w-md mx-auto md:mx-0 mb-10 drop-shadow-sm">
          {space.desc}
        </p>
        
        <div>
           <button className="text-[#c3a166] border-b border-[#c3a166]/30 pb-1 font-sans text-sm uppercase tracking-widest transition-colors duration-300 hover:border-[#c3a166] hover:text-white">
             Explore more
           </button>
        </div>
      </div>
    </motion.div>
  );
}

export function SpaceEditorial() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

  // Reconnecting X to smoothProgress ensures the dragging cinematic spring physics 
  // exactly match the buttery scroll type utilized in the main Spaces gallery
  const x = useTransform(smoothProgress, [0, 1], ["calc(0% + 0vw)", "calc(-100% + 100vw)"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] w-full bg-[#1a0f0a]">
      <div className="sticky top-8 h-screen w-full flex items-center overflow-hidden">
        
        {/* Edge Vignette Gradients for cinematic immersion */}
        {/* <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[#1a0f0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[#1a0f0a] to-transparent z-20 pointer-events-none" /> */}

        {/* Physical Track */ }
        <motion.div style={{ x }} className="flex h-full items-center gap-16 md:gap-32 px-[7.5vw] md:px-[20vw] w-max">
          <HeaderPanel smoothProgress={smoothProgress} />
          {spaces.map((space, i) => (
            <EditorialPanel key={space.id} space={space} i={i} smoothProgress={smoothProgress} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
