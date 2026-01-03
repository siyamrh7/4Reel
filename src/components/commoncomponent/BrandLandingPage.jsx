import Image from "next/image";

export default function BrandLandingPage() {
  return (
    <div className="min-h-auto bg-white ">
      
      {/* CTA Section with Image */}
      <section className="  text-black max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - CTA Content */}
          <div className="space-y-6 px-4 pb-12 md:pb-16 lg:pb-20 pt-10">
            <h2 className="text-[32px] md:text-[104px] leading-[40px] md:leading-[88px]
 font-[Degular Demo] ">
              Accelerate<br className="hidden md:block" />your launch
            </h2>
            
            <p className="text-sm md:text-base text-gray-700 max-w-md">
              Get a free consultation with our experts<br />
              to find the right solutions for your project.
            </p>
            
            <button className="w-full md:w-[187px] bg-black text-white px-14 py-2.5 text-base md:text-base hover:bg-gray-800 transition-colors duration-200 rounded">
              Book Now
            </button>
          </div>
          
          {/* Right - Image */}
          <div className="relative">
            <div className="relative w-full aspect-square md:aspect-auto h-[275px] md:h-96 lg:h-[500px]">
              {/* Purple fabric/material image placeholder */}
              
              {/* THREE text overlay */}
              <div className="absolute bottom-0 left-0 right-0">
                <Image
  src="/home/logoimg.png"
  alt="External Image"
  width={500}
  height={300}
  className="w-full h-full"
/>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}