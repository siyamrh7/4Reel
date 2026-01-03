import Image from 'next/image'
import React from 'react'

const ProcessSection = () => {
  return (
    <div className="min-h-auto bg-[#171719] text-white max-w-[1440px] mx-auto px-4 md:px-10 pb-10">
          {/* ProcessSection */}
        <div className="mb-2">
          <p className="text-base text-gray-400 uppercase tracking-wider ">
            HOW TO GET STARTED
          </p>
          <h2 className="text-[32px] md:text-[64px] font-[Degular Demo] leading-[40px] md:leading-[64px] font-medium mb-6">
            We ensure that every video we produce is<br className="hidden md:block" /> built on a strong foundation
          </h2>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Book a discovery call */}
          <div className="relative bg-[linear-gradient(138.39deg,_#DCEEF9_1.15%,_#1D6FA4_130.86%)] rounded-lg p-8 text-black overflow-hidden">
            <div className="absolute top-6 right-6">
            <Image
        src="/icon/Layer.png"
        alt="Hero Image"
        width={64}
        height={64}
        className="w-16 h-16"
      />
            </div>
            
            <div className="mb-4">
              <p className="text-sm font-medium mb-20">• Now</p>
              <h3 className="text-xl font-medium font-[Degular Demo] mb-4">Book a discovery call</h3>
              <p className="text-sm text-[#171719]">
                Consult with an expert to discuss your objectives and requirements. Receive a complimentary website launch checklist along with guidance for a successful launch.
              </p>
            </div>
            
            <button className="w-full bg-black text-white py-2 px-4 rounded font-medium hover:bg-gray-900 transition-colors">
              Book Now
            </button>
          </div>

          {/* Card 2 - Get a proposal */}
          <div className="relative bg-[#2C2C2C] rounded-lg p-8 border border-gray-700 overflow-hidden group hover:border-gray-600 transition-colors">
                 <div className="absolute top-6 right-6">
            <Image
        src="/icon/Bauhaus.png"
        alt="Hero Image"
        width={64}
        height={64}
        className="w-16 h-16"
      />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-20">• 1-2 Days</p>
              <h3 className="text-xl font-[Degular Demo] mb-4">Get a proposal</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                We provide more than just estimates. Our team will develop a strategic plan tailored to your project goals, complete with recommendations and a structured web framework.
              </p>
            </div>
          </div>

          {/* Card 3 - Launch your project */}
          <div className="relative bg-[#2C2C2C] rounded-lg p-8 border border-gray-700 overflow-hidden group hover:border-gray-600 transition-colors">
            <div className="absolute top-6 right-6">
               <Image
        src="/icon/Bauhaus.png"
        alt="Hero Image"
        width={64}
        height={64}
        className="w-16 h-16"
      />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-20">• 4-5 Weeks</p>
              <h3 className="text-xl font-[Degular Demo] mb-4">Launch your project</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                Experience seamless onboarding via Slack, ensuring we are prepared to begin promptly. We will conduct a kick-off meeting, provide weekly updates, and maintain regular communication through Loom videos and messages.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProcessSection