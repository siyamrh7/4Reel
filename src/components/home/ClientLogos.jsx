import Image from 'next/image';
import React from 'react'

const ClientLogos = () => {
  return (
    <> 
      {/* Client Logos */}
      <div className="max-w-[1440px] mx-auto pt-5 pb-5 px-4 md:px-10 bg-[#171719]">
        
     <div className="md:flex justify-between">
        <p className="text-gray-400 mb-8">
          Our experts worked with <span className="text-white font-semibold">50+</span> market leaders
        </p>
    
        <div className="w-full md:max-w-[736px]">
            
          <Image 
                    src="/icon/logoimg.png"
                    alt="Background"
                    width={400}
                    height={53}
                    className="w-full h-auto"
                
                  />
        </div>
     </div>
      </div>
    </>
  )
}

export default ClientLogos;
