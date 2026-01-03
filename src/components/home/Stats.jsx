import React, { useState } from 'react';

const State = () => {

  return (
    <div className="max-w-[1440PX] mx-auto min-h-auto bg-[#171719] ">
      {/* Hero Stats Section */}
      <section className="bg-[#171719] text-white py-3 px-4 md:px-6 lg:px-10 text-white">
        <div className="max-w-[1440PX] mx-auto">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Discover How</p>
         <div className=" flex flex-col  md:flex-row md:justify-around">
           <h1 className="font-degular font-medium text-[32px]  md:text-[64px] leading-[67.2px] md:align-middle">
            Our tailored strategies<br />have driven growth
          </h1>
          
          <div className="max-w-[700px] flex flex-col  md:flex-row text-left gap-5">
            <div className='flex flex-nowrap justify-start md:justify-evenly items-end gap-3'>
              <div className="font-degular font-medium  text-[72px] md:text-[96px]  md:align-middle ">40+</div>
              <div className="font-degular font-medium text-[32px]">projects</div>
            </div>
            <div className='flex flex-nowrap justify-start md:justify-evenly items-end gap-3 text-left'>
              <div className="font-degular font-medium  text-[72px] md:text-[96px]   md:align-middle ">60+</div>
              <div className="font-degular font-medium text-[32px]">happy clients</div>
            </div>
          </div>
         </div>
        </div>
      </section>   
    </div>
  );
};

export default State;