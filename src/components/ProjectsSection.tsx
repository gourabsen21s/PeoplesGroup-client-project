import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ProjectsSection() {
  const projects = [
    {
      country: 'AUSTRALIAN COAL',
      title: 'PREMIUM QUALITY HARD COKING COAL',
      description: 'Globally renowned for premium quality, high heat, low impurities. Best for steel manufacturing.',
      image: '/australian-coal.png'
    },
    {
      country: 'INDONESIAN COAL',
      title: 'LOW ASH ECO-FRIENDLY THERMAL COAL',
      description: 'Low ash and sulfur content, lightweight, cost-effective. Ideal for boilers and thermal plants.',
      image: '/indonesian-coal.png'
    },
    {
      country: 'SOUTH AFRICAN COAL',
      title: 'BALANCED PRICE-PERFORMANCE THERMAL COAL',
      description: 'Known for balanced price-performance ratio. Widely exported for reliability in large-scale applications.',
      image: '/south-coal.png'
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
        <div className="flex justify-between items-start mb-16">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-orange-500 uppercase tracking-wide text-sm font-semibold">OUR PRODUCTS</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight max-w-2xl font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              DIFFERENT COUNTRY COALS WE DELIVER AND ITS FEATURES
            </h2>
          </div>

          {/* Right Content */}
          <div className="hidden lg:block max-w-md">
            <p className="text-gray-300 text-lg leading-relaxed">
              We specialize in sourcing and supplying high-quality coal from India, Indonesia, Russia, U.S., South Africa, and Australia, each with distinct characteristics tailored to different industrial needs.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden h-96">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                  
                  {/* Country Label */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-black/60 text-white px-3 py-1 text-sm font-semibold">
                      {project.country}
                    </span>
                  </div>

                  {/* Project Info - Bottom Left */}
                  <div className="absolute bottom-6 left-6 right-20 z-10">
                    <h3 className="text-lg font-bold text-orange-500 mb-2 group-hover:text-orange-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                      <ArrowRightIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
