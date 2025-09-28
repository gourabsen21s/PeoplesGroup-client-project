'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter signup
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  const handleSocialClick = (platform: string) => {
    // Handle social media links
    console.log(`Opening ${platform}`);
  };
  const mainLinks = [
    'Home',
    'About Us',
    'Products',
    'Book a Call'
  ];

  const services = [
    'Indian Coal',
    'Indonesian Coal',
    'Australian Coal',
    'Manganese Ore'
  ];

  const support = [
    'Port Operations',
    'Quality Assurance',
    'Blog',
    'Contact Us',
    'Privacy Policy'
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section - Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              GET STARTED - YOUR JOURNEY STARTS RIGHT HERE
            </h3>
            <p className="text-gray-400 mb-4">
              Book a free 30min call and we&apos;ll show you how to meet your energy needs with quality coal and minerals.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex mt-8">
              <input
                type="email"
                placeholder="your.email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-gray-800 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 transition-colors"
              >
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Links */}
            <div>
              <h4 className="text-orange-500 font-bold text-lg mb-6 uppercase font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>Main Link</h4>
              <ul className="space-y-4">
                {mainLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link === 'Home' ? '/' : link === 'About Us' ? '/about' : link === 'Products' ? '/products' : link === 'Book a Call' ? '/contact' : '#'} className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-orange-500 font-bold text-lg mb-6 uppercase font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>Services</h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-orange-500 font-bold text-lg mb-6 uppercase font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>Support</h4>
              <ul className="space-y-4">
                {support.map((item, index) => (
                  <li key={index}>
                    <Link href={
                      item === 'Contact Us' ? '/contact' : 
                      item === 'Privacy Policy' ? '/privacy' : 
                      item === 'Blog' ? '/blog' : '#'
                    } className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <div className="flex items-center">
                <img 
                  src="/company-logo-preview.png" 
                  alt="People's Group Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <span className="text-gray-400 text-sm">
                PEOPLE&apos;S GROUP – Delivering quality coal and minerals worldwide with trust and excellence since 2018.
              </span>
            </div>

            {/* Social Links and Legal */}
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              {/* Social Media */}
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleSocialClick('Facebook')}
                  className="border border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-500 px-4 py-2 text-sm transition-colors"
                >
                  Facebook
                </button>
                <button 
                  onClick={() => handleSocialClick('Instagram')}
                  className="border border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-500 px-4 py-2 text-sm transition-colors"
                >
                  Instagram
                </button>
                <button 
                  onClick={() => handleSocialClick('Twitter')}
                  className="border border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-500 px-4 py-2 text-sm transition-colors"
                >
                  X (Twitter)
                </button>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6">
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Term of Use
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
