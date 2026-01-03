import React, { useState } from 'react';

export default function MediaBenefits() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const benefits = [
    {
      title: "CUSTOM  ",
      subtitle: "DESIGN",
      description: "Every website is built from scratch to match your brand, your goals, and your audience.",
      color: "text-[#2593DA]"
    },
    {
      title: "SMOOTH  ",
      subtitle: "EXPERIENCE",
      description: "We design with usability in mind — fast, intuitive, and made for real people.",
      color: "text-[#2593DA]"
    },
    {
      title: "STRATEGY",
      subtitle: "-DRIVEN",
      description: "Every layout, color, and word is backed by a clear goal: to turn visitors into customers.",
      color: "text-[#2593DA]"
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-auto max-w-[1440px] mx-auto bg-[#171719] text-white p-4 md:p-8 lg:p-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider mb-4">
            BENEFITS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            What we put on the table with Web Design
          </h1>
        </div>

        {/* Mobile Accordion View */}
        <div className="md:hidden space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleExpand(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div>
                  <span className={`${benefit.color} text-2xl font-light`}>
                    {benefit.title}{" "}
                  </span>
                  <span className="text-white text-2xl font-light">
                    {benefit.subtitle}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-300 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-r border-[#5D5D5D] pr-6 lg:pr-8 py-4"
            >
              <h3 className="text-xl lg:text-2xl font-light mb-4">
                <span className={benefit.color}>{benefit.title}</span>{" "}
                <span className="text-white">{benefit.subtitle}</span>
              </h3>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}