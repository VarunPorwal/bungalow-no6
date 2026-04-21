"use client";

import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Espresso Bar",
    items: [
      { name: "Bungalow Reserve", price: "$5.50", desc: "Our signature double shot with hazelnut notes." },
      { name: "Velvet Flat White", price: "$6.00", desc: "Micro-steamed oat milk, perfectly balanced." },
      { name: "Slow Drip Cold Brew", price: "$6.50", desc: "Steeped for 24 hours, served over artisanal ice." }
    ]
  },
  {
    category: "From the Bakery",
    items: [
      { name: "Warm Almond Croissant", price: "$7.00", desc: "Flaky, buttery, baked fresh every morning." },
      { name: "Truffle Mushroom Toast", price: "$14.00", desc: "Sourdough, wild mushrooms, ricotta, truffle oil." },
      { name: "Burnt Basque Cheesecake", price: "$9.00", desc: "Caramelized top, molten center." }
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="relative py-24 md:py-40 px-6 md:px-12 bg-[#1a0f0a] text-[#f5f2eb]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="font-sans text-[#c3a166] text-xs tracking-[0.3em] uppercase mb-4 block">
            Crafted with Care
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white">
            The Menu.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {menuItems.map((category, idx) => (
            <div key={idx}>
              <h3 className="font-serif text-2xl md:text-3xl text-[#c3a166] mb-10 pb-4 border-b border-[#c3a166]/30">
                {category.category}
              </h3>
              <div className="space-y-8">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: itemIdx * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="font-serif text-xl tracking-wide text-white group-hover:text-[#c3a166] transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-sans font-medium text-[#f5f2eb]/80">
                        {item.price}
                      </span>
                    </div>
                    <div className="border border-transparent group-hover:border-[#c3a166]/20 p-4 -ml-4 rounded-lg bg-transparent group-hover:bg-white/5 transition-all duration-300">
                      <p className="font-sans font-light text-sm text-[#f5f2eb]/60">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-transparent border border-[#c3a166] text-[#c3a166] font-sans font-medium uppercase tracking-widest text-sm hover:bg-[#c3a166] hover:text-[#1a0f0a] transition-all duration-500 rounded-full">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
