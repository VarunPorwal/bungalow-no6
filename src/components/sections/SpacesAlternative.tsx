"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

const spaces = [
  { title: "The Balcony", desc: "Sun-drenched mornings and a gentle breeze. Perfect for your first espresso.", img: "/balcony.jpg" },
  { title: "Reading Corner", desc: "Plush leather, amber lighting, and absolute silence. Lose yourself in pages.", img: "/Bookreading.jpg" },
  { title: "Co-working Hub", desc: "High-speed Wi-Fi, ample power, and an atmosphere that demands focus.", img: "/working.jpg" },
  { title: "Indoor Seating", desc: "The heart of the bungalow. Meet, chat, and share stories over lattes.", img: "/indoor.jpg" }
];

interface SpacePanelProps {
  space: typeof spaces[0];
  i: number;
  smoothProgress: MotionValue<number>;
}

function AlternativeSpacePanel({ space, i, smoothProgress }: SpacePanelProps) {
  // Peak center for each panel along the overall scroll (0, 0.33, 0.66, 1)
  const center = i * (1 / (spaces.length - 1));
  const dist = 0.35; // Transition window roughly spanning one full panel view

  // Overlay Starts Dark (0.8 opacity) and natively reveals bright image (0 opacity) at center
  const overlayOpacity = useTransform(smoothProgress, [center - dist, center, center + dist], [0.8, 0, 0.8]);

  // Text Animations: Text natively slides up and fades in precisely when centered
  const textOpacity = useTransform(smoothProgress, [center - 0.2, center, center + 0.2], [0, 1, 0]);
  const textY = useTransform(smoothProgress, [center - 0.2, center, center + 0.2], [40, 0, 40]);

  return (
    <div key={i} className="panel w-screen h-full flex items-center justify-center p-12 lg:p-24 relative">
      <div className="relative w-full h-[65vh] max-w-5xl mt-32 rounded-lg overflow-hidden shadow-2xl">
        {/* Background Image Panel */}
        <img
          src={space.img}
          alt={space.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
        />

        {/* Scroll-Driven Dynamic Dark Overlay - no hover required */}
        <motion.div 
          style={{ opacity: overlayOpacity }} 
          className="absolute inset-0 bg-[#1a0f0a] pointer-events-none" 
        />

        {/* Scroll-Driven Text Reveal */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 p-12 flex flex-col justify-end pointer-events-none"
        >
          <span className="font-sans font-medium text-[#c3a166] tracking-widest text-sm uppercase mb-4 drop-shadow-md">
            0{i + 1}
          </span>
          <h3 className="font-serif text-4xl lg:text-5xl text-white mb-4 drop-shadow-xl">
            {space.title}
          </h3>
          <p className="font-sans font-light text-lg text-white/90 max-w-md drop-shadow-lg">
            {space.desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function SpacesAlternative() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll position of the overarching container (which is 400vh tall to allow scrolling)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // "start start" means when the top of target hits top of viewport
    // "end end" means when the bottom of target hits bottom of viewport
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20, restDelta: 0.001 });

  // Calculate the horizontal translation.
  // We have 4 panels. To show the last panel, we translate by -75% of the total width.
  // 400vw width * -75% = -300vw (which is exactly 3 viewports left)
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="spaces-alt" ref={targetRef} className="relative h-[400vh] w-full hidden md:block bg-[#1a0f0a]">
      {/* Sticky container that stays in viewport while scrolling through the 400vh */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* Absolute headers inside sticky container */}
        <div className="absolute top-20 left-0 z-10 w-full flex justify-center items-center pointer-events-none">
          <h2 className="font-serif text-3xl md:text-5xl text-white">
            Wander <span className="text-[#c3a166] italic">through</span>
          </h2>
        </div>

        {/* The horizontal track moving based on vertical scroll */}
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {spaces.map((space, i) => (
            <AlternativeSpacePanel key={i} space={space} i={i} smoothProgress={smoothProgress} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
