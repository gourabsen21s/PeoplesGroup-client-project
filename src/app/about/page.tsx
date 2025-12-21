import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/company-operations.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ABOUT PEOPLE&apos;S GROUP
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ethically building our legacy since 2018, serving diverse industrial segments with unwavering dedication to quality and value.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section id="journey" className="relative py-20 min-h-screen">
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
          
          <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-8 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  OUR JOURNEY
                </h2>
                <p className="text-gray-400 mb-6 text-lg">
                  At PEOPLE&apos;S GROUP, we have ethically built our legacy since 2018, beginning as a proprietary firm and evolving into a dynamic force in coal trading. We specialize in sourcing and supplying Indian, Indonesian, Russian, U.S., and South African coal, serving diverse industrial segments with unwavering dedication to quality and value.
                </p>
                <p className="text-gray-400 text-lg">
                  Our commitment extend beyond mere transactions; we foster lasting partnerships built on trust, transparency, and mutual growth. With a deep understanding of global markets and an extensive network of reliable suppliers, we ensure that our clients receive the finest quality coal at competitive prices.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/mining-operations-1.jpg" 
                  alt="Our Mining Operations" 
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="relative py-20 min-h-screen">
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
          
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-8 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  OUR VALUES
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg hover:border-orange-500 transition-colors">
                  <h3 className="text-xl font-bold text-orange-500 mb-4 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>QUALITY ASSURANCE</h3>
                  <p className="text-gray-400">
                    We maintain the highest standards in all our coal and mineral supplies, ensuring 98% quality assurance across all deliveries.
                  </p>
                </div>
                <div className="text-center p-8 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg hover:border-orange-500 transition-colors">
                  <h3 className="text-xl font-bold text-orange-500 mb-4 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>ETHICAL SOURCING</h3>
                  <p className="text-gray-400">
                    All our materials are sourced through ethical practices, supporting sustainable mining operations worldwide.
                  </p>
                </div>
                <div className="text-center p-8 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg hover:border-orange-500 transition-colors">
                  <h3 className="text-xl font-bold text-orange-500 mb-4 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>RELIABLE DELIVERY</h3>
                  <p className="text-gray-400">
                    Timely and professional delivery is our commitment, maintaining 95% customer satisfaction rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
