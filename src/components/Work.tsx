import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  brand: string;
  title: string;
  description: string;
  category: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: '1',
    brand: 'Volvo',
    title: 'The Most Ignored Painting',
    description:
      "A powerful campaign that uses art to highlight road safety awareness, showcasing Volvo's commitment to saving lives.",
    category: 'Brand Campaign',
    videoUrl: 'https://www.youtube.com/watch?v=WVoRoJ0zUEs'
  },
  {
    id: '2',
    brand: 'Volvo',
    title: 'Home Calling',
    description:
      'For the creative council at Grey, one simple yet powerful insight emerged - one that spoke directly to solo drivers.',
    category: 'Concept Development',
    videoUrl: 'public/image1.png'
  },
  {
    id: '3',
    brand: 'SENSODYNE  ',
    title: 'Consumer Testimonial 2.0',
    description:
      'Sensodyne’s Consumer Testimonial part 2 looked simple but simplicity is hard. The challenge was crafting the right words and strategy to make it truly authentic. Sensodyne’s biggest lesson for me? Simplicity backed by logic.',
    category: 'TVCs',
    videoUrl: 'https://www.youtube.com/playlist?list=PLk_4RIzZvcwEWzFlXm1XTyP4pE8E62rl2'
  },
  {
    id: '4',
    brand: 'Iodex',
    title: 'Active Muscle Care',
    description:
      "For Iodex Active Muscle Care's launch, we rolled out digital-first DVCs targeting homemakers, store owners, and teachers. The magic? The format and the song that make these ads truly stand out.",
    category: ' DVCs',
    videoUrl: 'https://www.youtube.com/playlist?list=PLk_4RIzZvcwGahAKCUn16m1j9eGyr-1lE'
  },
  {
    id: '5',
    brand: 'ENO ',
    title: 'Vicky Kaushal Campaign',
    description:
      'The brief was simple: “ENO’s onboarding Vicky Kaushal. Make it go viral.” The idea? Simple, effective, and totally organic. Minimal publicity needed. 90% of the buzz happened on its own, making Vicky the talk of the town.',
    category: 'Product Marketing',
    videoUrl: 'public/vid1.mp4'
  },
  {
    id: '6',
    brand: 'Sensodyne ',
    title: 'Soft Toothbrush ',
    description:'How do you make a country that barely thinks about oral health realize that hard toothbrushes can damage teeth? The solution was a simple metaphor that clearly showed the harm hard brushes can do.',
    category: 'DVC',
    videoUrl: 'https://www.youtube.com/watch?v=fag7Fzn1Qaw'
  },
  {
    id: '7',
    brand: 'Sensodyne',
    title: 'World Oral Health Day ',
    description:
      "It all began with a manifesto. Simple, authentic, and easy to grasp! Just 16 lines capturing the idea for Sensodyne’s World Oral Health Day… and they made it to the front page of The Times of India (exactly as written, no edits, no feedback).",
    category: 'Print',
    videoUrl: 'public/img3.jpg'
  },
  {
    id: '8',
    brand: 'Real Juices',
    title: "Women's Day",
    description:
      "Real Activ wanted influencers on board for Women’s Day. Concept, script, execution - everything got finalized at the eleventh hour. And yet, the film went LIVE in just 3 days.",
    category: 'DVC',
    videoUrl: 'https://www.youtube.com/watch?v=rrMTAeiF_Pw'
  },
  {
    id: '9',
    brand: 'Pulse',
    title: 'Compliment Day',
    description:
      'Pulse Candy owns Compliment Day but they wanted to do something different. So we went a step further: complimenting the brands that make our lives easier with billboards right outside their offices.',
    category: 'OOH + Digital Activation',
    videoUrl: '/gallery-9.html'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 bg-[#f5f3ed]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-[#3d3d3d] mb-4 text-center">
          Work
        </h2>
        <p className="text-lg text-[#6b6b6b] mb-16 text-center max-w-2xl mx-auto">
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.videoUrl || '#'}
              target={project.videoUrl ? '_blank' : undefined}
              rel={project.videoUrl ? 'noopener noreferrer' : undefined}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-medium text-[#6b6b6b] uppercase tracking-wider bg-[#f5f3ed] px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.videoUrl && (
                    <ExternalLink
                      size={18}
                      className="text-[#6b6b6b] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>

                <h3 className="text-xl font-medium text-[#3d3d3d] mb-2">
                  {project.brand}
                </h3>

                <h4 className="text-lg text-[#6b6b6b] mb-4 font-light">
                  {project.title}
                </h4>

                <p className="text-[#6b6b6b] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="h-1 bg-gradient-to-r from-[#d0ccb9] to-[#f5f3ed] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#6b6b6b] text-lg italic">
            Each project represents a unique challenge and an opportunity to make words work harder.
          </p>
        </div>
      </div>
    </section>
  );
}
