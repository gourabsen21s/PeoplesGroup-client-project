'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'industry', name: 'Industry News' },
    { id: 'operations', name: 'Operations' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'market', name: 'Market Insights' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Global Coal Market Trends: What to Expect in 2024',
      excerpt: 'Analyzing the current state of global coal markets and emerging trends that will shape the industry throughout 2024.',
      category: 'market',
      author: 'Market Research Team',
      date: 'December 15, 2024',
      readTime: '5 min read',
      image: '/coal-processing-1.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Port Operations Excellence: Visakhapatnam Success Story',
      excerpt: 'How our strategic operations at Visakhapatnam port have enabled us to maintain over 100,000 tons of coal stock across various grades.',
      category: 'operations',
      author: 'Operations Team',
      date: 'December 10, 2024',
      readTime: '4 min read',
      image: '/industrial-facility-1.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Quality Assurance: Our 98% Success Rate',
      excerpt: 'Deep dive into our quality control processes that have helped us achieve and maintain a 98% quality assurance rate.',
      category: 'operations',
      author: 'Quality Control Team',
      date: 'December 5, 2024',
      readTime: '6 min read',
      image: '/coal-processing-2.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Sustainable Mining Practices: Our Ethical Approach',
      excerpt: 'Exploring how ethical sourcing and sustainable practices are integral to our operations since 2018.',
      category: 'sustainability',
      author: 'Sustainability Team',
      date: 'November 28, 2024',
      readTime: '7 min read',
      image: '/company-operations.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Indonesian Coal: Low Ash, High Value',
      excerpt: 'Understanding the unique characteristics of Indonesian coal and why it\'s ideal for thermal power generation.',
      category: 'industry',
      author: 'Product Specialists',
      date: 'November 22, 2024',
      readTime: '5 min read',
      image: '/mining-operations-1.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Third-Party Inspections: Building Trust Through Transparency',
      excerpt: 'How independent quality verification strengthens our customer relationships and ensures material specifications.',
      category: 'operations',
      author: 'Quality Assurance',
      date: 'November 15, 2024',
      readTime: '4 min read',
      image: '/industrial-facility-2.jpg',
      featured: false
    },
    {
      id: 7,
      title: 'Channel Partner Network: Real-Time Market Intelligence',
      excerpt: 'Leveraging our extensive partner network for real-time vessel movement updates and market forecasts.',
      category: 'market',
      author: 'Business Development',
      date: 'November 8, 2024',
      readTime: '6 min read',
      image: '/mining-operations-2.jpg',
      featured: false
    },
    {
      id: 8,
      title: 'Australian Hard Coking Coal: Premium Quality for Steel Manufacturing',
      excerpt: 'Why Australian coal remains the gold standard for metallurgical applications in steel production.',
      category: 'industry',
      author: 'Technical Team',
      date: 'October 30, 2024',
      readTime: '5 min read',
      image: '/coal-processing-1.jpg',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/mining-operations-2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              INDUSTRY INSIGHTS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest news, insights, and analysis from the coal and mineral trading industry.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
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
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-80 lg:h-96">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 text-sm font-semibold uppercase">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-orange-500 font-semibold uppercase text-sm">
                      {categories.find(cat => cat.id === featuredPost.category)?.name}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <span>By {featuredPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="relative py-12">
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
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
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
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg overflow-hidden hover:border-orange-500 hover:transform hover:scale-105 transition-all duration-300 group">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 text-white px-2 py-1 text-xs font-semibold uppercase">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400 text-sm">{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        By {post.author}
                      </span>
                      
                      <button className="text-orange-500 hover:text-orange-400 text-sm font-semibold transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative py-20">
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
              STAY UPDATED
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our newsletter for the latest industry insights, market analysis, and company updates.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="your.email@company.com"
                className="flex-1 px-6 py-3 bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. No spam, unsubscribe at any time.
            </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
