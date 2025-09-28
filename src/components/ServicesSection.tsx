'use client';

import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function ServicesSection() {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push('/about');
  };
  const services = [
    {
      number: '01',
      title: 'QUALITY ENERGY SOLUTIONS',
      description: 'Empowering industries with reliable, sustainable energy solutions. Committed to delivering quality power for a brighter future.'
    },
    {
      number: '02',
      title: 'GROWTH WITH RELIABILITY',
      description: 'We empower progress with dependable solutions, ensuring your growth is sustained, secure, and unstoppable.'
    },
    {
      number: '03',
      title: "TOMORROW'S ENERGY LANDSCAPE",
      description: 'Innovating today to power a cleaner tomorrow. Building sustainable energy pathways for all investors.'
    }
  ];

  return (
    <section className="relative py-20 min-h-screen">
      {/* Standardized Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-slate-900"></div>
        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        {/* Additional subtle texture */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-orange-500 uppercase tracking-wide text-sm font-semibold">OUR SERVICES</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              HOW WE CAN
              <br />
              <span className="text-gray-300">HELP YOU GROW</span>
            </h2>

            <p className="text-gray-300 mb-12 text-lg leading-relaxed">
              We meet industries&apos; energy needs with quality, cost-competitive coal and minerals sourced ethically worldwide while ensuring timely, professional delivery with trust and transparency.
            </p>

            <button 
              onClick={handleLearnMore}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 font-semibold transition-colors"
            >
              Learn More
            </button>
          </div>

          {/* Right Content - Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-600 pb-8 last:border-b-0">
                <div className="flex items-start justify-between group cursor-pointer">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className="text-6xl font-bold text-gray-500 mr-8">{service.number}</span>
                      <div>
                        <h3 className="text-xl font-bold text-orange-500 mb-2 group-hover:text-orange-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-8 flex-shrink-0">
                    <div className="w-12 h-12 border border-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <ArrowUpRightIcon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
