"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Apply a gentle spring to the scroll progress to make ALL animations buttery smooth & cinematic
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  // Responsive target values for transformation
  // At scroll 0, both share the same origin point to prevent SSR layout shifting
  const finalWidth = isMobile ? "90vw" : "45vw";
  const finalHeight = isMobile ? "45vh" : "80vh";
  const finalRight = isMobile ? "5vw" : "4vw";
  const finalTop = isMobile ? "30%" : "50%";

  // Video Transformations synchronized with the cinematic spring
  const videoWidth = useTransform(smoothProgress, [0, 0.5], ["100vw", finalWidth]);
  const videoHeight = useTransform(smoothProgress, [0, 0.5], ["100vh", finalHeight]);
  const videoRight = useTransform(smoothProgress, [0, 0.5], ["0vw", finalRight]);
  const videoTop = useTransform(smoothProgress, [0, 0.5], ["50%", finalTop]);
  const videoBorderRadius = useTransform(smoothProgress, [0, 0.5], ["0px", "24px"]);
  const videoShadow = useTransform(smoothProgress, [0, 0.5], ["0px 0px 0px rgba(0,0,0,0)", "0px 20px 40px rgba(0,0,0,0.5)"]);

  // Core Text Transformations
  // Fades out immediately within the very first 10-12% of the scroll space
  const initialTextOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const initialTextY = useTransform(smoothProgress, [0, 0.12], ["0%", "-10%"]);
  const initialTextScale = useTransform(smoothProgress, [0, 0.12], [1, 0.95]);

  // Revealed Text Transformations
  // Starts appearing instantly as the video shrinks and completes fully synchronized at 0.5
  const newTextOpacity = useTransform(smoothProgress, [0.15, 0.5], [0, 1]);
  const newTextX = useTransform(smoothProgress, [0.15, 0.5], ["-5vw", "0vw"]); // Animate correctly from the left

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-[#1a0f0a]">
      {/* Sticky container stays fixed while user scrolls remaining 200vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Transforming Cinematic Video */}
        <motion.div
          style={{
            width: videoWidth,
            height: videoHeight,
            right: videoRight, // Positioned firmly on the Right side
            top: videoTop,
            y: "-50%", // Anchor to vertical center ensures perfect scaling trajectory
            borderRadius: videoBorderRadius,
            boxShadow: videoShadow
          }}
          className="absolute z-10 overflow-hidden"
        >
          {/* Subtle overlay for contrast */}
          <div className="absolute inset-0 bg-[#1a0f0a]/30 z-10 pointer-events-none transition-opacity duration-1000" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            {/* Primary Local Video Priority */}
            <source src="/video.mp4" type="video/mp4" />
            <source src="https://player.vimeo.com/external/406180556.sd.mp4?s=25af776b32fed5a56baf8fbeacefa648c6883ba5&profile_id=164" type="video/mp4" />
          </video>
        </motion.div>

        {/* 1. Initial State Text Layer */}
        <motion.div
          style={{ opacity: initialTextOpacity, y: initialTextY, scale: initialTextScale }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
            <span className="font-sans font-light tracking-[0.3em] uppercase text-sm md:text-base text-[#f5f2eb]/80 mb-6 drop-shadow-md block">
              Bungalow No. 6
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-xl">
              Not a café. <br className="hidden md:block" />
              {/* <span className="italic text-[#c3a166]">Your second home.</span> */}
              <span className="italic text-[#c3a166] [text-shadow:0_2px_5px_rgba(0,0,0,0.5)]">
  Your second home.
</span>
            </h1>
          </motion.div>
        </motion.div>

        {/* 2. Revealed Scroll Text Layer */}
        <motion.div
          style={{ opacity: newTextOpacity, x: newTextX }}
          className="absolute left-0 z-20 w-full lg:w-[50vw] px-6 lg:px-0 lg:pl-[8vw] flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-auto top-[75%] lg:top-1/2 -translate-y-1/2"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-md max-w-2xl">
            A space designed <br className="hidden lg:block"/> 
            <span className="italic text-[#c3a166]">to slow you down.</span>
          </h2>
          <p className="font-sans font-light text-[#f5f2eb]/80 text-base md:text-lg lg:text-xl mb-10 leading-relaxed max-w-xl drop-shadow-sm">
            Work, read, or simply unwind — a calm bungalow space designed to feel like your own.
          </p>
          <button className="px-10 py-4 border border-[#c3a166] text-[#f5f2eb] font-sans font-medium uppercase tracking-widest text-xs hover:bg-[#c3a166] hover:text-[#1a0f0a] transition-all duration-500">
            Explore the space
          </button>
        </motion.div>

      </div>
    </section>
  );
}
