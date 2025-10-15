import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Social from './components/Social'; // ✅ Add this import

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f3ed]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#f5f3ed]/95 backdrop-blur-sm z-50 border-b border-[#d0ccb9]/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-light tracking-wider text-[#3d3d3d] hover:text-[#6b6b6b] transition-colors"
            >
              Sarwani Kumari
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-[#3d3d3d] hover:text-[#6b6b6b] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('work')} className="text-[#3d3d3d] hover:text-[#6b6b6b] transition-colors">
                Work
              </button>
              {/* ✅ New Social button */}
              <button onClick={() => scrollToSection('social')} className="text-[#3d3d3d] hover:text-[#6b6b6b] transition-colors">
                Social
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#3d3d3d] hover:text-[#6b6b6b] transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#3d3d3d]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-[#3d3d3d] hover:text-[#6b6b6b] transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('work')} className="text-[#3d3d3d] hover:text-[#6b6b6b] transition-colors text-left">
                Work
              </button>
              {/* ✅ New Social button for mobile */}
              <button onClick={() => scrollToSection('social')} className="text-[#3d3d3d] hover:text-[#6b6b6b] transition-colors text-left">
                Social
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#3d3d3d] hover:text-[#6b6b6b] transition-colors text-left">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <Hero />
      <About />
      <Work />
      <Social /> {/* ✅ New Social section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-[#3d3d3d] text-[#f5f3ed] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">© 2025 Sarwani Kumari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
