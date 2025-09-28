export default function BlogSection() {
  const blogPosts = [
    {
      date: { day: '15', month: 'Dec' },
      title: 'PORTS OPERATIONS STOCK HOLDING',
      excerpt: 'We actively operate through major ports including Visakhapatnam, Vizag, Gannavaram, Krishnapatnam, maintaining over 100,000 tons of coal stock across various grades.',
      image: '/industrial-facility-1.jpg'
    },
    {
      date: { day: '10', month: 'Dec' },
      title: 'BUSINESS IN-SIGHT & STRATEGIES',
      excerpt: 'With strong support of our channel partners, we maintain real-time updates on incoming vessel movements and provide informed forecasts to our valued customers.',
      image: '/company-operations.jpg'
    },
    {
      date: { day: '05', month: 'Dec' },
      title: 'QUALITY CHECKS & INSPECTIONS',
      excerpt: 'We encourage bulk buyers to visit the port and personally verify quality. We also facilitate independent third-party inspections to validate material specifications.',
      image: '/coal-processing-2.jpg'
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-orange-500 uppercase tracking-wide text-sm font-semibold">OUR BLOG</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
            LATEST INSIGHTS
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden h-80 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-600 hover:border-orange-500 transition-colors">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${post.image}')` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-orange-500 text-white p-3 text-center min-w-[60px]">
                      <div className="text-2xl font-bold leading-none">{post.date.day}</div>
                      <div className="text-sm font-semibold">{post.date.month}</div>
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg font-bold text-orange-500 mb-3 group-hover:text-orange-400 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
