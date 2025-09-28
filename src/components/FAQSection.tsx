'use client';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'WHAT TYPES OF COAL DO YOU SUPPLY?',
      answer: 'We specialize in sourcing and supplying thermal coal and metallurgical coal from India, Indonesia, Russia, U.S., South Africa, and Australia. Our portfolio includes steam coal for power generation, coking coal for steel production, and various grades with different calorific values suited for industrial applications.'
    },
    {
      question: 'HOW DO YOU ENSURE COAL QUALITY AND CONSISTENCY?',
      answer: 'We maintain strict quality standards through our port operations and encourage bulk buyers to visit ports for personal verification. We also facilitate independent third-party inspections to validate material specifications and ensure complete transparency in all transactions.'
    },
    {
      question: 'WHAT IS YOUR STOCK HOLDING CAPACITY?',
      answer: 'We maintain over 100,000 tons of coal stock across various grades at major ports including Visakhapatnam, Vizag, Gannavaram, and Krishnapatnam. This ensures consistent availability and enables us to meet urgent delivery requirements.'
    },
    {
      question: 'WHAT ARE YOUR MINIMUM ORDER QUANTITIES?',
      answer: 'Our minimum order quantities typically start from 5,000 tons for coal shipments. However, we can accommodate smaller quantities for specialized grades or specific customer requirements after consultation with our sales team.'
    },
    {
      question: 'HOW DO YOU HANDLE LOGISTICS AND DELIVERY?',
      answer: 'We manage end-to-end logistics including vessel chartering, port handling, customs clearance, and delivery coordination. Our experienced team ensures timely shipments with real-time tracking and updates throughout the supply chain.'
    },
    {
      question: 'WHAT PAYMENT TERMS DO YOU OFFER?',
      answer: 'We offer flexible payment terms including Letters of Credit (LC), advance payments, and credit facilities for established customers. Payment structures are customized based on order size, delivery terms, and client relationship history.'
    },
    {
      question: 'DO YOU PROVIDE TECHNICAL SPECIFICATIONS AND CERTIFICATES?',
      answer: 'Yes, we provide comprehensive technical specifications, quality certificates, and third-party inspection reports for all coal shipments. This includes calorific value, ash content, moisture levels, sulfur content, and other relevant parameters.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-orange-500 uppercase tracking-wide text-sm font-semibold">OUR FAQ</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-serif" style={{ fontFamily: 'var(--font-cinzel)' }}>
              FAST FACTS THAT MATTER. CLEAR ANSWERS YOU CAN TRUST
            </h2>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Get quick answers to the most common questions about our coal, minerals, and commodity trading services. Our expertise spans quality assurance, logistics, and global sourcing.
            </p>
          </div>

          {/* Right Content - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-600 bg-black/30 backdrop-blur-sm p-6 rounded hover:border-orange-500 transition-colors">
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-bold text-orange-500 pr-4">
                    {faq.question}
                  </h3>
                  
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <MinusIcon className="w-6 h-6 text-orange-500" />
                    ) : (
                      <PlusIcon className="w-6 h-6 text-orange-500" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}