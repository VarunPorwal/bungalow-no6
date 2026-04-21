"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Coffee, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Story", href: "#story" },
    { name: "Spaces", href: "#spaces" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500",
        isScrolled
          ? "bg-[#1a0f0a]/80 backdrop-blur-md text-[#f5f2eb] py-4 shadow-lg"
          : "bg-transparent text-white"
      )}
    >
      <Link href="/" className="flex items-center gap-2 group z-50">
        <Coffee className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
        <span className="font-serif text-xl sm:text-2xl tracking-wider font-medium">Bungalow No. 6</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm tracking-widest uppercase">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-[#c3a166] transition-colors duration-300 relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c3a166] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      <button className="hidden md:block px-6 py-2 border border-current rounded-full uppercase tracking-widest text-xs hover:bg-white hover:text-[#1a0f0a] transition-colors duration-300">
        Book a Table
      </button>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
        className="fixed inset-0 bg-[#1a0f0a] text-[#f5f2eb] flex flex-col items-center justify-center gap-8 z-40"
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-serif text-4xl hover:text-[#c3a166] transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
        <button className="mt-8 px-8 py-4 border border-[#c3a166] text-[#c3a166] rounded-full uppercase tracking-widest text-sm font-sans hover:bg-[#c3a166] hover:text-[#1a0f0a] transition-colors duration-300">
          Book a Table
        </button>
      </motion.div>
    </motion.header>
  );
}
