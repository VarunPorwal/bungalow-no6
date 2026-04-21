export function Footer() {
  return (
    <footer id="footer" className="bg-[#1a0f0a] text-[#f5f2eb] py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex flex-col items-center md:items-start max-w-md">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-center md:text-left leading-tight">
            Come over. <br/>
            <span className="text-[#c3a166] italic">Stay longer.</span>
          </h2>
          <p className="text-[#8e9b86] font-sans font-light text-center md:text-left mb-8 max-w-lg">
            A refuge from the ordinary. Savor specialty coffee and globally inspired cuisine in our uniquely designed, six-section slow-living space. Beyond a cafe, we are a business incubator cultivating culture, community, and the next generation of local startups.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
            <button className="px-8 py-3 bg-[#c3a166] text-[#1a0f0a] font-medium uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 w-full md:w-auto">
              Get Directions
            </button>
            <button className="px-8 py-3 border border-[#c3a166] text-[#c3a166] font-medium uppercase tracking-widest text-sm hover:bg-[#c3a166] hover:text-[#1a0f0a] transition-colors duration-300 w-full md:w-auto">
              Book a Table
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4 font-sans font-light">
          <div className="text-sm md:text-base">
            <h3 className="font-medium text-lg uppercase tracking-widest text-[#c3a166] mb-2">Location</h3>
            <p>A37, MIG Main Rd,</p>
            <p>behind CHL Appollo Hospital, near LIG sq,</p>
            <p>Rss Nagar, Indore, Madhya Pradesh 452001</p>
          </div>
          <div className="mt-6 text-sm md:text-base">
            <h3 className="font-medium text-lg uppercase tracking-widest text-[#c3a166] mb-2">Hours</h3>
            <p>Mon - Sun: Open · Closes 11:30 pm</p>
          </div>
          <div className="mt-6 text-sm md:text-base">
            <h3 className="font-medium text-lg uppercase tracking-widest text-[#c3a166] mb-2">Contact</h3>
            <p>062322 23227</p>
            <a href="https://swiggy.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c3a166] transition-colors mt-2 inline-block">
              Order on Swiggy
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 border-t border-[#f5f2eb]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#8e9b86] font-light">
        <p>&copy; {new Date().getFullYear()} Bungalow No. 6. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
