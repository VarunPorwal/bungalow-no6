"use client";

import { motion } from "framer-motion";

export function Reviews() {
  const reviews = [
    {
      name: "himanshu neema",
      text: "Korean Mac & Cheese Pasta: This is a masterclass in fusion."
    },
    {
      name: "Akshita Vohra",
      text: "Absolutely love the warm aesthetic and cozy corners here. A perfect spot to grab a specialty coffee and spend hours reading or working."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#1a0f0a] overflow-hidden flex items-center justify-center relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-full max-w-2xl h-full bg-gradient-to-l from-[#c3a166]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 relative z-10">
        
        {/* Left Side: Review Heading & Score */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:w-1/3 flex flex-col justify-center text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="text-[#c3a166] font-sans text-xl font-medium tracking-wider">4.4</span>
            <div className="flex gap-1" title="Google Reviews">
              {[1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-5 h-5 text-[#c3a166] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-5 h-5 text-[#c3a166] fill-transparent stroke-current stroke-2" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-white/60 font-sans text-sm ml-2">Google &bull; 4,271 reviews</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            What they say <br className="hidden lg:block"/>
            <span className="text-[#c3a166] italic">about us.</span>
          </h2>
        </motion.div>

        {/* Right Side: Review Cards */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white/[0.03] border border-white/5 p-8 rounded-lg text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-[#c3a166] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-sans font-light text-base text-[#f5f2eb]/90 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <p className="font-sans text-xs font-medium tracking-widest text-[#8e9b86] uppercase mt-auto">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
