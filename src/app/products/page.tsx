'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const router = useRouter();

  const handleGetQuote = (productName: string) => {
    // Navigate to contact page with product info
    router.push(`/contact?product=${encodeURIComponent(productName)}`);
  };

  const handleRequestQuote = () => {
    router.push('/contact?inquiry=general-quote');
  };

  const handleDownloadCatalog = () => {
    // This would typically trigger a file download
    alert('Catalog download will be available soon. Please contact us for more information.');
  };
  const products = [
    {
      title: 'INDIAN COAL',
      description: 'High-quality thermal and coking coal sourced from premier Indian mines. Known for consistent quality and competitive pricing.',
      features: ['High calorific value', 'Low ash content', 'Consistent supply', 'Cost-effective'],
      image: '/coal-processing-1.jpg'
    },
    {
      title: 'INDONESIAN COAL',
      description: 'Premium low-ash thermal coal perfect for power generation and industrial applications.',
      features: ['Low sulfur content', 'Eco-friendly', 'High BTU value', 'Reliable logistics'],
      image: '/coal-processing-2.jpg'
    },
    {
      title: 'AUSTRALIAN COAL',
      description: 'World-renowned hard coking coal ideal for steel manufacturing and metallurgical applications.',
      features: ['Premium quality', 'High heat value', 'Low impurities', 'Global standards'],
      image: '/industrial-facility-1.jpg'
    },
    {
      title: 'SOUTH AFRICAN COAL',
      description: 'Balanced price-performance thermal coal widely trusted for large-scale industrial operations.',
      features: ['Reliable quality', 'Competitive pricing', 'Large-scale supply', 'Proven performance'],
      image: '/industrial-facility-2.jpg'
    },
    {
      title: 'MANGANESE ORE',
      description: 'High-grade manganese ore essential for steel production and chemical manufacturing.',
      features: ['High manganese content', 'Low phosphorus', 'Consistent quality', 'Global sourcing'],
      image: '/company-operations.jpg'
    },
    {
      title: 'RUSSIAN COAL',
      description: 'Premium thermal and coking coal from established Russian mining operations.',
      features: ['High energy content', 'Reliable supply chain', 'Quality assurance', 'Competitive rates'],
      image: '/mining-operations-2.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/mining-operations-1.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              OUR PRODUCTS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Premium coal and minerals sourced from trusted suppliers worldwide, meeting the highest industry standards.
            </p>
          </div>
        </section>

        {/* Products Grid */}
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
          
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg overflow-hidden hover:border-orange-500 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="relative h-64">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 text-sm font-semibold">
                        PREMIUM QUALITY
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-500 mb-3 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
                      {product.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => handleGetQuote(product.title)}
                      className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
          
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-8 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              READY TO GET STARTED?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us today to discuss your coal and mineral requirements. Our experts are ready to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleRequestQuote}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transition-colors"
              >
                Request Quote
              </button>
              <button 
                onClick={handleDownloadCatalog}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-colors"
              >
                Download Catalog
              </button>
            </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
