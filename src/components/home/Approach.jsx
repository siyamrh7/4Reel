import React from 'react'

const Approach = () => {
  return (
    <>{/* Our Approach Section */}
          <div className="bg-white">
            <section className="px-4 py-8 md:py-10 lg:py-10 max-w-[1440px] mx-auto text-black bg-white">
            <h2 className="text-[32px] md:text-[64px] font-medium mb-12 md:mb-16">
              Our approach
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-xl">
              {/* Left Column */}
              <div className="space-y-8 md:space-y-12">
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="  font-normal mb-3">
                    A simple philosophy:<br />quality over quantity.
                  </h3>
                </div>
                
                <div className="hidden md:block border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-normal mb-3">
                    Performance & emotion.<br />You need both.
                  </h3>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6 md:space-y-8">
                <p className="text-xl font-[Suisse Intl] ">
                  We build brands that stand out on shelves, in their fields. Our brands have helped 
                  rapidly delivering strategic vision. Combine with profile nurturing among 
                  emotional connection with our clients, and ensuring exceptional quality, that 
                  come over to get there.
                </p>
    
                 <div className="block md:hidden border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-normal mb-3">
                    Performance & emotion.<br />You need both.
                  </h3>
                </div>
                
                <p className="text-xl font-[Suisse Intl]">
                  We craft brands that become category leaders. These brands aren't built on 
                  products alone. Emotional connection and sustainable growth are the two essen 
                  tials to get there. This is how you drive retention and a dvocacy.
                </p>
              </div>
            </div>
          </section>
          </div>
          
          </>
  )
}

export default Approach