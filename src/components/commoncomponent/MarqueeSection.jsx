import React from 'react'

const MarqueeSection = () => {
  return (
    <div className='bg-white '>  <section className="max-w-[1440px] mx-auto overflow-hidden text-black bg-white pb-8">
  <marquee
    direction="right"
    scrollamount="5"
    className="font-degular font-medium text-[80px] md:text-[160px] leading-[90px] md:leading-[170px] whitespace-nowrap"
  >
    Real motion. Real impact.
  </marquee>
</section></div>
  )
}

export default MarqueeSection;