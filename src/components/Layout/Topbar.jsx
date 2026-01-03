import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Topbar = () => {
  return (
      <>
       {/* Top Banner */}
      <div
  className="text-white"
  style={{
    background: "linear-gradient(269.72deg, #0B2D43 0%, #2593DA 100%)"
  }}
>
       <div className="max-w-[1440px] mx-auto flex items-center justify-between w-full px-6 py-2 flex items-center">
        
         <p className="text-sm">Discover potential for your business with us</p>
        <Link href="/" className="inline-block">
              <Image 
                src="/icon/arrow.png" 
                alt="arrow icon" 
                width={24} 
                height={24}
                className="h-4 w-4"
              />
            </Link>
       </div>
      </div>
      </>
  )
}

export default Topbar;