'use client';

import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleProductsClick = () => {
    router.push('/products');
  };

  const handleBookCallClick = () => {
    router.push('/contact');
  };
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="relative">
          <h1 
            className="text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-black mb-8 tracking-widest leading-none select-none font-serif"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 40%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 0.3) 90%, rgba(255, 255, 255, 0.05) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
              fontFamily: 'var(--font-cinzel)'
            }}
          >
            ETHICALLY MINED, RELIABLY DELIVERED
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          We are PEOPLE&apos;S GROUP, your trusted partner for importing and supplying quality coal, manganese ore, and allied minerals for your energy needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleProductsClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transition-colors"
          >
            Our Products
          </button>
          <button 
            onClick={handleBookCallClick}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-colors"
          >
            Book a Call
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
