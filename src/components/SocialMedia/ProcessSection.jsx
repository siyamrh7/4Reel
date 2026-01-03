import React from 'react';

export default function ProcessSection() {
  const processes = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We begin with a comprehensive audit of your brand and social goals to identify opportunities, clarify objectives, and lay the groundwork for impactful content across every platform.',
      bg: 'bg-[#171719]',
      textColor: 'text-white',
      descColor: 'text-[#8C8E99]',
      numberColor: 'text-[#50515B]'
    },
    {
      number: '02',
      title: 'Content Strategy Workshops',
      description: 'Collaborative sessions with your team translate your brand story into tailored content themes, campaign calendars, and platform-specific messaging that resonates with your target audience.',
      bg: 'bg-[#171719]',
       textColor: 'text-white',
      descColor: 'text-[#8C8E99]',
      numberColor: 'text-[#50515B]'
    },
    {
      number: '03',
      title: 'Calendar & Execution Guide',
      description: 'We deliver a detailed, actionable content calendar and step-by-step workflow, ensuring timely posts, consistent engagement, and measurable results for your ongoing social presence.',
      bg: 'bg-[#171719]',
      textColor: 'text-white',
      descColor: 'text-[#8C8E99]',
      numberColor: 'text-[#50515B]'
    }
  ];

  return (
    <div className="min-h-auto max-w-[1440px] mx-auto bg-[#171719] text-white relative overflow-hidden">
      {/* Purple Curtain Image - Top Right Corner */}
      <div className="absolute top-0 right-0 w-64 h-80 md:w-96 md:h-[500px] lg:w-[600px] lg:h-[700px] pointer-events-none overflow-hidden">
        <img 
          src="/icon/sidelogo.png"
          alt="Purple curtain decoration"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8  py-10 md:py-10 lg:py-12">
        {/* Header */}
        <div className="mb-5">
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white  font-medium">PROCESS</p>
          <h2 className="text-[32px] lg:text-[48px] font-[Degular Demo] font-medium">Our proven process</h2>
        </div>

        {/* Process Cards - Mobile Vertical Layout */}
        <div className="block md:hidden space-y-6">
          {processes.map((process, index) => (
            <div
              key={index}
              className={`${process.bg} rounded-lg p-6 border ${
                index === 1 ? 'border-gray-200' : 'border-gray-800'
              } min-h-[320px] flex flex-col justify-between`}
            >
              <div>
                <h3 className={`text-xl font-medium mb-1  ${process.textColor}`}>{process.title}</h3>
                <p className={`text-sm leading-relaxed ${process.descColor}`}>
                  {process.description}
                </p>
              </div>
              <div className={`text-[120px] font-bold leading-none ${process.numberColor} mt-4`}>
                {process.number}
              </div>
            </div>
          ))}
        </div>

        {/* Process Cards - Desktop Horizontal Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className={`${process.bg} rounded-lg p-4 lg:p-6 border ${
                index === 1 ? 'border-[#DCEEF9]' : 'border-[#1D6FA4]'
              } min-h-[317px] lg:max-h-[416px] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]`}
            >
              <div>
                <h3 className={`text-xl lg:text-xl font-medium  ${process.textColor}`}>
                  {process.title}
                </h3>
                <p className={`text-sm lg:text-base leading-relaxed ${process.descColor}`}>
                  {process.description}
                </p>
              </div>
              <div className={`text-[100px] font-bold font-[Degular Demo] leading-none ${process.numberColor} mt-auto pt-4`}>
                {process.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}