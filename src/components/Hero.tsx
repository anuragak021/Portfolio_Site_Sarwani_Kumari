import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#3d3d3d] mb-8 leading-tight">
          Hi! I am
          <br />
          <span className="italic">Sarwani Kumari.</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#6b6b6b] mb-12 max-w-3xl mx-auto leading-relaxed">
Title says Group Head - Copy.
Heart says copywriter who can't stop saying, “Wish I had written this!”
        </p>

        <button
          onClick={scrollToWork}
          className="group inline-flex items-center gap-2 bg-[#3d3d3d] text-[#f5f3ed] px-8 py-4 rounded-full hover:bg-[#2d2d2d] transition-all duration-300 hover:scale-105"
        >
          <span className="text-lg">View My Work</span>
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
