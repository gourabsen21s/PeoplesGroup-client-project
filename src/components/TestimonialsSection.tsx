export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "PEOPLE'S GROUP DELIVERED QUALITY COAL ON TIME WITH EXCEPTIONAL PROFESSIONALISM. THEIR TEAM MADE THE ENTIRE PROCUREMENT PROCESS SEAMLESS FROM START TO FINISH",
      author: "Rajesh Kumar",
      role: "Procurement Manager, Steel Industries Ltd",
      location: "Visakhapatnam, India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      quote: "THEIR DEEP MARKET EXPERTISE, COMPETITIVE PRICING & RELIABLE SUPPLY CHAIN MADE A HUGE DIFFERENCE IN OUR ENERGY PROCUREMENT STRATEGY",
      author: "Michael Chen",
      role: "Energy Manager, PowerGen Solutions",
      location: "Jakarta, Indonesia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
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
          {/* Left Content - Testimonials */}
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-600 bg-black/30 backdrop-blur-sm p-8 hover:border-orange-500 transition-colors">
                <blockquote className="text-xl lg:text-2xl font-bold text-white mb-8 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-sm overflow-hidden mr-4">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${testimonial.image}')` }}
                    ></div>
                  </div>
                  
                  <div>
                    <div className="text-orange-500 font-semibold mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-right">
                  <span className="text-gray-400 text-sm">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-right">
            <div className="mb-6">
              <span className="text-orange-500 uppercase tracking-wide text-sm font-semibold">TESTIMONIAL</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              EXPERIENCE BACKED BY
              <br />
              <span className="text-gray-300">REAL TRUST</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
