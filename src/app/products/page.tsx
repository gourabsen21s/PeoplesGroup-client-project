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
      image: '/indian-coal.png'
    },
    {
      title: 'INDONESIAN COAL',
      description: 'Premium low-ash thermal coal perfect for power generation and industrial applications.',
      features: ['Low sulfur content', 'Eco-friendly', 'High BTU value', 'Reliable logistics'],
      image: '/indonesian-coal.png'
    },
    {
      title: 'AUSTRALIAN COAL',
      description: 'World-renowned hard coking coal ideal for steel manufacturing and metallurgical applications.',
      features: ['Premium quality', 'High heat value', 'Low impurities', 'Global standards'],
      image: '/australian-coal.png'
    },
    {
      title: 'SOUTH AFRICAN COAL',
      description: 'Balanced price-performance thermal coal widely trusted for large-scale industrial operations.',
      features: ['Reliable quality', 'Competitive pricing', 'Large-scale supply', 'Proven performance'],
      image: '/south-coal.png'
    },
    {
      title: 'MANGANESE ORE',
      description: 'High-grade manganese ore essential for steel production and chemical manufacturing.',
      features: ['High manganese content', 'Low phosphorus', 'Consistent quality', 'Global sourcing'],
      image: '/manganese-ore-1.jpeg'
    },
    {
      title: 'RUSSIAN COAL',
      description: 'Premium thermal and coking coal from established Russian mining operations.',
      features: ['High energy content', 'Reliable supply chain', 'Quality assurance', 'Competitive rates'],
      image: '/russian-coal.png'
    },
    // New Products
    {
      title: 'BROWN CHICKPEA (Origin: Australia)',
      description: 'Australian Brown Chickpeas are a versatile and nutrient-rich legume, widely used in various culinary applications globally. They are known for their nutty flavor and firm texture.',
      features: ['Rich in protein and fiber', 'Ideal for curries and stews', 'Nutrient-dense', 'Versatile culinary use'],
      image: '/b-pea.png'
    },
    {
      title: 'WHITE PEA (Origin: Canada)',
      description: 'Canadian White Peas are a staple in split pea soups and a variety of dishes. They provide a smooth, creamy texture when cooked and are packed with essential nutrients.',
      features: ['High in protein', 'Excellent source of dietary fiber', 'Quick-cooking', 'Creamy texture'],
      image: '/w-pea.png'
    },
    {
      title: 'PETCOKE',
      description: 'Petroleum coke (petcoke) is a carbon-rich solid material derived from oil refining. It is primarily used as a fuel in cement kilns and power plants, and as a feedstock for producing anodes in the aluminum and steel industries.',
      features: ['High calorific value', 'Low moisture content', 'Efficient fuel source', 'Versatile industrial applications'],
      image: '/petcoke.png'
    },
    {
      title: 'STEAM COKE',
      description: 'Steam coke is a form of fuel derived from steam-cracking of petroleum. It is used as a high-carbon additive in steel production and for various metallurgical processes.',
      features: ['High fixed carbon', 'Low ash and sulfur content', 'Efficient metallurgical fuel', 'Consistent quality'],
      image: '/steam-coke.png'
    },
    {
      title: 'HMS SCRAP',
      description: 'Heavy Melting Steel (HMS) scrap is a widely traded ferrous scrap material. It is a critical raw material for steel mills, used in the production of new steel products through electric arc furnaces.',
      features: ['Recycled steel', 'Cost-effective alternative', 'Reduces environmental impact', 'High iron content'],
      image: '/HMS.png'
    },
    {
      title: 'UBC SCRAP',
      description: 'Used Beverage Can (UBC) scrap consists of baled aluminum cans. This material is highly sought after for recycling, as it is a pure and efficient source of aluminum for remelting.',
      features: ['High-grade aluminum', 'Efficient for recycling', 'Reduces energy consumption', 'Low impurity content'],
      image: '/UBC.png'
    },
    {
      title: 'ALUMINIUM 6063',
      description: 'Aluminium 6063 is an alloy with magnesium and silicon as its primary alloying elements. It is known for its excellent extrudability, good corrosion resistance, and high surface finish, making it a popular choice for architectural applications.',
      features: ['Good formability', 'Excellent corrosion resistance', 'High strength-to-weight ratio', 'Aesthetic finish'],
      image: '/al-6063.png'
    },
    {
      title: 'BILLETS',
      description: 'Steel billets are semi-finished products of steel casting. They are the primary feedstock for producing long steel products like bars, rods, and wires, and are essential for various construction and manufacturing industries.',
      features: ['Consistent shape and size', 'High metallurgical quality', 'Ideal for forging and rolling', 'Versatile for long products'],
      image: '/billets.png'
    },
    {
      title: 'SUGAR S30',
      description: 'Sugar S30 is a refined sugar grade characterized by its fine grain size, making it ideal for a wide range of food and beverage applications. It is known for its high purity and consistent sweetness.',
      features: ['Fine grain size', 'High purity', 'Consistent sweetness', 'Versatile food ingredient'],
      image: '/s-30.png'
    },
    {
      title: 'SUGAR M30',
      description: 'Sugar M30 is a medium-grained refined sugar, commonly used in industrial food processing. It provides a balanced texture and sweetness, suitable for bakery, confectionery, and other manufacturing processes.',
      features: ['Medium grain size', 'Standard sweetness', 'Ideal for bulk processing', 'Reliable supply'],
      image: '/sm-30.png'
    },
    {
      title: 'ALUMINIUM INGOT',
      description: 'Aluminium ingots are a primary form of refined aluminum, cast into a specific shape for further processing. They serve as a foundational material for various aluminum alloy products in the automotive, construction, and aerospace industries.',
      features: ['Standardized purity', 'Easy to transport and store', 'Efficient for remelting', 'Versatile for alloy production'],
      image: '/al-ig.png'
    },
    {
      title: 'COPPER INGOT',
      description: 'Copper ingots are a fundamental raw material in the metal industry, used for the production of wires, pipes, sheets, and various alloys. They are valued for their excellent electrical conductivity, corrosion resistance, and malleability.',
      features: ['High electrical conductivity', 'Corrosion resistant', 'Durable and malleable', 'Essential for electrical and plumbing industries'],
      image: '/c-ig.png'
    },
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
