import { Mail, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-[#3d3d3d] mb-8">
          Let's create something amazing.
        </h2>

        <p className="text-lg md:text-xl text-[#6b6b6b] mb-16 max-w-2xl mx-auto leading-relaxed">
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sarwanikumari41@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-3 bg-[#3d3d3d] text-[#f5f3ed] px-8 py-4 rounded-full hover:bg-[#2d2d2d] transition-all duration-300 hover:scale-105"
>
  <Mail size={20} />
  <span className="text-lg">Get in Touch</span>
</a>

          <a
            href="https://www.linkedin.com/in/sarwani-kumari-640857143/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white text-[#3d3d3d] border-2 border-[#3d3d3d] px-8 py-4 rounded-full hover:bg-[#3d3d3d] hover:text-[#f5f3ed] transition-all duration-300 hover:scale-105"
          >
            <Linkedin size={20} />
            <span className="text-lg">LinkedIn</span>
          </a>
        </div>

        
      </div>
    </section>
  );
}
