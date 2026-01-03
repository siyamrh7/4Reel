
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Video Content",
    duration: "2-3 Weeks",
    icon: (
      <Link href="/video-content">
        <Image 
          src="/icon/a.png" 
          alt="Video Content Icon" 
          width={70} 
          height={70}
          className="h-18 w-18 object-contain"
        />
      </Link>
    )
},
  {
    title: "Social Media Content Planner",
    duration: "1-3 Weeks",
    icon: (
      <Link href="/social-media">
        <Image 
          src="/icon/b.png" 
          alt="Social Media Icon" 
          width={70} 
          height={70}
          className="h-18 w-18 object-contain"
        />
      </Link>
    )
  },
  {
    title: "Web Design",
    duration: "2-5 Weeks",
    icon: (
      <Link href="/web-design">
        <Image 
          src="/icon/c.png" 
          alt="Web Design Icon" 
          width={70} 
          height={70}
          className="h-18 w-18 object-contain"
        />
      </Link>
    )
  },
  {
    title: "Development",
    duration: "4-8 Weeks",
    icon: (
      <Link href="/development">
        <Image 
          src="/icon/d.png" 
          alt="Development Icon" 
          width={70} 
          height={70}
          className="h-18 w-18 object-contain"
        />
      </Link>
    )
  }
];



const Card = () => { 
  return (
    <div className="max-w-[1440px] mx-auto ">
     {/* Mobile Services Cards */}
<div className="space-y-4 py-6 md:hidden">
  {services.map((service, index) => (
    <div
      key={index}
      className="flex items-center gap-4 p-3 border border-[#2A2B2F] rounded-lg hover:border-gray-400 transition-colors h-[76px]"
    >
      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
        {service.icon}
      </div>

      <div className="flex-1">
        <h3 className="font-normal text-lg">{service.title}</h3>
      </div>

      <span className="text-sm text-[#FAFAFA] bg-[#2A2B2F] px-3 py-1.5 rounded-md whitespace-nowrap">
        {service.duration}
      </span>
    </div>
  ))}
</div>
{/* Desktop Services Cards */}
<div className="hidden md:grid flex-1 grid-cols-4 gap-6 text-white ">
  {services.map((service, index) => (
    <div
      key={index}
      className=" flex flex-col justify-between
        group relative p-6 h-[266px]
       border border-[#2A2B2F] rounded-lg
        hover:bg-[radial-gradient(40.23%_37.63%_at_50%_50%,_#FF6EC7_0%,_rgba(255,255,255,0)_100%)]
        transition-all duration-300 cursor-pointer"
    >
      {/* Top Row */}
      <div className="flex items-start justify-between mb-6">        
        <div className="flex items-center gap-2 bg-[#2A2B2F] rounded-[4px] px-2 py-2.5">          
          <div className="w-10 h-10 bg-[#FAFAFA] rounded-[3px] flex items-center justify-center">
            <Image 
              src="/icon/plusb.png" 
              alt="Plus Icon" 
              width={18} 
              height={18}
              className="h-4 w-4"
            />
          </div>
          <span className="text-sm text-[#FAFAFA]">
            {service.duration}
          </span>
        </div>
        <div className="w-16 h-16">
          {service.icon}
        </div>
      </div>
      {/* Title */}
      <h3 className="text-lg font-[500]">{service.title}</h3>
    </div>
   ))}
 </div>
</div> )
}
export default Card;