'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
        setIsPageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBookCall = () => {
    router.push('/contact');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/' && window.location.pathname === '/') {
      // Already on home page, just scroll
      if (sectionId) {
        scrollToSection(sectionId);
      }
    } else {
      // Navigate to page first, then scroll
      router.push(path);
      if (sectionId) {
        setTimeout(() => scrollToSection(sectionId), 300);
      }
    }
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/company-logo-preview.png" 
                alt="People's Group Logo" 
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  About Us
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* About Us Dropdown */}
                {isAboutDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-black/90 backdrop-blur-sm border border-gray-700 shadow-lg z-50"
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <Link 
                      href="/about" 
                      onClick={() => setIsAboutDropdownOpen(false)}
                      className="block px-4 py-3 text-sm text-white hover:text-orange-500 hover:bg-gray-800 transition-colors"
                    >
                      Company Overview
                    </Link>
                    <Link 
                      href="/about#values" 
                      onClick={() => setIsAboutDropdownOpen(false)}
                      className="block px-4 py-3 text-sm text-white hover:text-orange-500 hover:bg-gray-800 transition-colors"
                    >
                      Our Values
                    </Link>
                    <Link 
                      href="/about#journey" 
                      onClick={() => setIsAboutDropdownOpen(false)}
                      className="block px-4 py-3 text-sm text-white hover:text-orange-500 hover:bg-gray-800 transition-colors"
                    >
                      Our Journey
                    </Link>
                    <button 
                      onClick={() => {
                        handleNavigation('/', 'stats');
                        setIsAboutDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-sm text-white hover:text-orange-500 hover:bg-gray-800 transition-colors"
                    >
                      Company Stats
                    </button>
                  </div>
                )}
              </div>
              <Link href="/products" className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Products
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setIsPageDropdownOpen(!isPageDropdownOpen)}
                  onMouseEnter={() => setIsPageDropdownOpen(true)}
                  className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Page
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${isPageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Page Dropdown */}
                {isPageDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-black/90 backdrop-blur-sm border border-gray-700 shadow-lg z-50"
                    onMouseLeave={() => setIsPageDropdownOpen(false)}
                  >
                    <button 
                      onClick={() => {
                        handleNavigation('/', 'services');
                        setIsPageDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-sm text-white hover:text-orange-500 hover:bg-gray-800 transition-colors"
                    >
                      Our Services
                    </button>
                    <button 
                      onClick={() => {
                        handleNavigation('/', 'testimonials');
                        setIsPageDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-sm text-white hover:text-orange-500 hover:bg-gray-800 transition-colors"
                    >
                      Testimonials
                    </button>
                    <button 
                      onClick={() => {
                        handleNavigation('/', 'faq');
                        setIsPageDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-sm text-white hover:text-orange-500 hover:bg-gray-800 transition-colors"
                    >
                      FAQ
                    </button>
                    <Link 
                      href="/blog"
                      onClick={() => setIsPageDropdownOpen(false)}
                      className="block px-4 py-3 text-sm text-white hover:text-orange-500 hover:bg-gray-800 transition-colors"
                    >
                      Blog
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/contact" className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Call Us Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleBookCall}
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 text-sm font-medium transition-colors"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-500 p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`block h-0.5 w-6 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm">
              <Link href="/" className="text-white hover:text-orange-500 block px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-orange-500 block px-3 py-2 text-sm font-medium">
                About Us
              </Link>
              <Link href="/products" className="text-white hover:text-orange-500 block px-3 py-2 text-sm font-medium">
                Products
              </Link>
              <button 
                onClick={() => {
                  handleNavigation('/', 'services');
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-orange-500 block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Services
              </button>
              <Link 
                href="/blog" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-orange-500 block px-3 py-2 text-sm font-medium"
              >
                Blog
              </Link>
              <Link href="/contact" className="text-white hover:text-orange-500 block px-3 py-2 text-sm font-medium">
                Contact Us
              </Link>
              <button 
                onClick={handleBookCall}
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 py-2 text-sm font-medium transition-colors w-full mt-3"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
