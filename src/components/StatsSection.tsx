'use client';

import { useRouter } from 'next/navigation';

export default function StatsSection() {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push('/about');
  };
  const stats = [
    {
      number: '100K+',
      label: 'Tons Coal Stock',
      description: 'Maintained across various grades'
    },
    {
      number: '5+',
      label: 'Major Ports Operations',
      description: 'Strategic locations coverage'
    },
    {
      number: '2018',
      label: 'Established Since',
      description: 'Years of trusted service'
    }
  ];

  return (
    <section className="relative py-20 min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/industrial-facility-2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-orange-500 uppercase tracking-wide text-sm font-semibold">ABOUT US</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              OUR VISION IS TO LEAD THE GLOBAL ENERGY SUPPLY CHAIN THROUGH INNOVATION AND EXCELLENCE, EMPOWERING OUR CLIENTS&apos; GROWTH SUSTAINABLY
            </h2>

            <button 
              onClick={handleLearnMore}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 font-semibold transition-colors"
            >
              Learn More
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {stat.label}
                </h3>
                <p className="text-gray-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
