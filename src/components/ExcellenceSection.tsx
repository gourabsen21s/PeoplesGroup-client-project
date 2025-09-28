'use client';

import { PlayIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function ExcellenceSection() {
  const [showVideo, setShowVideo] = useState(false);

  const stats = [
    { label: 'QUALITY ASSURANCE', percentage: 98 },
    { label: 'CUSTOMER SATISFACTION', percentage: 95 }
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

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              WHO WE ARE
              <br />
              <span className="text-gray-300">OUR LEGACY</span>
            </h2>

            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              At PEOPLE&apos;S GROUP, we have ethically built our legacy since 2018, beginning as a proprietary firm and evolving into a dynamic force in coal trading. We specialize in sourcing and supplying Indian, Indonesian, Russian, U.S., and South African coal, serving diverse industrial segments with unwavering dedication to quality and value.
            </p>

            {/* Progress Bars */}
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-orange-500 font-bold text-lg font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>{stat.label}</span>
                    <span className="text-white font-bold text-lg">{stat.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2">
                    <div 
                      className="bg-orange-500 h-2 transition-all duration-1000 ease-out"
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Video and Images */}
          <div className="space-y-6">
            {/* Main Video/Image */}
            <div className="relative group cursor-pointer" onClick={() => setShowVideo(true)}>
              <div 
                className="w-full h-80 bg-cover bg-center rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url('/company-operations.jpg')"
                }}
              >
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayIcon className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Image */}
            <div className="relative">
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url('/mining-operations-1.jpg')"
                }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm leading-relaxed max-w-xs">
                  Advanced coal processing facilities equipped with modern screening and washing technologies ensure premium quality standards for all our mineral exports.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <div className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden">
            <button 
              className="absolute top-4 right-4 text-white text-xl z-10 hover:text-orange-500"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Company Overview Video</h3>
                <p className="text-gray-300">Discover our coal trading operations, quality processes, and global supply chain network.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
