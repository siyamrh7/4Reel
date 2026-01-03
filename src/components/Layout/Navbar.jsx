"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

const servicesData = [
  {
    title: "Video Content",
    duration: "2-3 Weeks",
    href: "/video-content",
    icon: "/icon/a.png"
  },
  {
    title: "Social Media Content Planner",
    duration: "1-3 Weeks",
    href: "/social-media",
    icon: "/icon/b.png"
  },
  {
    title: "Web Design",
    duration: "2-5 Weeks",
    href: "/web-design",
    icon: "/icon/c.png"
  },
  {
    title: "Development",
    duration: "4-8 Weeks",
    href: "/development",
    icon: "/icon/d.png"
  }
];

const services = [
  'Video Content',
  'Social Media Content Planner',
  'Web Design',
  'Development'
];

const timelines = [
  'Less than 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months'
];

export default function Navbar() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    projectDetails: '',
    timeline: ''
  });

  // Close all menus when route changes
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
    setIsSideMenuOpen(false);
    setStep(1);
  }, [pathname]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceSelect = (service) => {
    setFormData({
      ...formData,
      service
    });
  };
  
   const toggleService = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleTimelineSelect = (timeline) => {
    setFormData({
      ...formData,
      timeline
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setStep(2);
    console.log('Form submitted:', formData);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
    setTimeout(() => setStep(1), 300);
  };

  const openSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  const closeAll = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="relative max-w-[1440px] mx-auto bg-black text-white p-4 md:p-8 flex items-center justify-between z-40">
        <div className="flex items-center gap-12 bg-[#151515E0] rounded-lg p-4">
          <Link href="/" className="">
            <Image 
              src="/logo/Logo.png" 
              alt="4REEL Logo" 
              width={72} 
              height={22}
              className="h-6 w-auto"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-base font-[250] text-[#FAFAFA]">
            <button 
              className="flex items-center gap-2"
              onClick={toggleServices}
            >
              Services 
              {isServicesOpen ? (
                <Image 
                  src="/icon/plusr.png" 
                  alt="Close" 
                  width={8} 
                  height={8}
                  className="h-3 w-auto"
                />
              ) : (
                <Image 
                  src="/icon/plus.png" 
                  alt="Open" 
                  width={8} 
                  height={8}
                  className="h-3 w-auto"
                />
              )}
            </button>
            <Link href="/case-studies" className="" onClick={closeAll}>
              Case studies
            </Link>
            <Link href="/about-us" className="mr-7" onClick={closeAll}>
              About
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 bg-[#151515E0] rounded-lg px-4 py-2.5">  
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-[#FAFAFA] font-[250]">Available for Q4</span>
          </div>
          <button 
            onClick={openSideMenu} 
            className="bg-white text-black px-4 py-2 rounded-[5px] font-[500]"
          >
            Let's Work
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <Image 
              src="/icon/menur.png" 
              alt="Close Menu" 
              width={44} 
              height={44}
              className="h-11 w-11"
            />
          ) : (
            <Image 
              src="/icon/menu.png" 
              alt="Open Menu" 
              width={44} 
              height={44}
              className="h-11 w-11"
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[36px] bg-white text-black z-50 overflow-y-auto h-screen">
          <div className="flex justify-between items-center px-10 pt-6">
            <Link href="/">
              <Image 
                src="/logo/Logob.png" 
                alt="4REEL Logo" 
                width={72} 
                height={22}
                className="h-6 w-auto"
              />
            </Link>
            <button 
              className="p-2"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <Image 
                src="/icon/menur.png" 
                alt="Close Menu" 
                width={44} 
                height={44}
                className="h-11 w-11"
              />
            </button>
          </div>
          
          <div className="flex flex-col justify-between p-4 space-y-0 min-h-[calc(100vh-92px)]">
            <div>
              {/* Services Toggle */}
              <button 
                className="flex items-center justify-between w-full text-2xl border-b border-[#D5D5D5] py-2"
                onClick={toggleServices}
              >
                Services 
                {isServicesOpen ? (
                  <Image 
                    src="/icon/plusbr.png" 
                    alt="Close" 
                    width={9} 
                    height={9}
                    className="h-3 w-auto"
                  />
                ) : (
                  <Image 
                    src="/icon/plusb.png" 
                    alt="Open" 
                    width={8} 
                    height={8}
                    className="h-3 w-auto"
                  />
                )}
              </button>
              
              {/* Mobile Services Cards */}
              {isServicesOpen && (
                <div className="space-y-4 py-6">
                  {servicesData.map((service, index) => (
                    <Link 
                      key={index}
                      href={service.href}
                      onClick={closeAll}
                      className="flex items-center gap-4 p-3 border border-[#D5D5D5] rounded-lg hover:border-gray-400 transition-colors"
                    >
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <Image 
                          src={service.icon} 
                          alt={service.title} 
                          width={48} 
                          height={48}
                          className="h-12 w-12"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-normal text-lg">{service.title}</h3>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1.5 rounded-md whitespace-nowrap">
                        {service.duration}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
              
              <Link href="/case-studies" className="block text-2xl py-6 border-b border-[#D5D5D5]" onClick={closeAll}>
                Case studies
              </Link>
              <Link href="/about-us" className="block text-2xl py-6 border-b border-[#D5D5D5]" onClick={closeAll}>
                About
              </Link>
            </div>

            {/* Bottom Section - Testimonial */}
            <div className="mt-8 pt-6">
              <div className="bg-[#DDEFFC] p-6 rounded-lg">
                <p className="text-base leading-relaxed mb-4">
                  "4Reel helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way."
                </p>
                <div className="text-base text-[#50515B]">
                  <p>Fleur Heyns</p>
                  <p>Co-founder & CEO at PROOF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Services Dropdown */}
      {isServicesOpen && !isMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="hidden md:block fixed inset-0 top-[92px] bg-black/50 z-30"
            // onClick={closeAll}
            onClick={toggleServices}
          />

          {/* Dropdown Container */}
          <div className="hidden md:block fixed top-[140px] left-0 right-0 z-40">
            <div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row px-4 py-12 bg-white rounded-lg shadow-2xl gap-6">
              
              {/* Left Section: Heading + Testimonial */}
              <div className="flex-1 flex flex-col justify-between text-black">
                {/* Heading */}
                <div>
                  <h2 className="text-[56px] font-degular font-medium mb-3">
                    Accelerate your launch
                  </h2>
                  <p>
                    Get a free consultation with our experts to find the right solutions for your project.
                  </p>
                </div>

                {/* Testimonial */}
                <div className="max-w-[636px]">
                  <div className="bg-[#DDEFFC] p-4 rounded-lg">
                    <p className="mb-4">
                      "4Reel helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way."
                    </p>
                    <div className="text-sm text-[#50515B]">
                      <p>Fleur Heyns</p>
                      <p>Co-founder & CEO at PROOF</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section: Services Grid */}
              <div className="flex-1 grid grid-cols-2 gap-6 text-black">
                {servicesData.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    onClick={closeAll}
                    className="group relative p-6 border border-[#D5D5D5] rounded-2xl hover:bg-[radial-gradient(40.23%_37.63%_at_50%_50%,_#FF6EC7_0%,_rgba(255,255,255,0)_100%)] transition-all cursor-pointer bg-white"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex gap-2 bg-[#F2F2F2] rounded-[4px] px-2 py-3">
                        <div className="w-10 h-10 bg-[#FAFAFA] rounded-[3px] flex items-center justify-center">   
                          <Image 
                            src="/icon/plusb.png" 
                            alt="Icon" 
                            width={16} 
                            height={16}
                            className="h-4 w-4"
                          />
                        </div>
                        <span className="text-sm text-gray-600 px-3 flex items-center justify-center">
                          {service.duration}
                        </span>
                      </div>
                      <div className="w-16 h-16 text-blue-500 mb-6">
                        <Image 
                          src={service.icon} 
                          alt={service.title} 
                          width={64} 
                          height={64}
                          className="h-16 w-16"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-[500]">{service.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Side Menu Overlay */}
      {isSideMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
            onClick={closeSideMenu}
          />
          
          {/* Side Menu Panel */}
          <div className={`fixed top-0 right-5 h-full w-full md:w-[390px] lg:w-[500px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-full overflow-y-auto">
              
              {/* Step 1: Contact Information */}
              {step === 1 && (
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-8 text-black">
          <h1 className="text-3xl md:text-4xl font-light">
            Accelerate your launch
          </h1>
          <button
              onClick={closeSideMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

                  <div className="space-y-6 text-black">
                    {/* Your Information Section */}
          <div>
            <h2 className="text-xs font-semibold tracking-wider mb-4 uppercase">
              Your Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 text-base"
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 text-base"
              />
            </div>
            <textarea
              placeholder="Tell us about your project"
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none text-base"
            />
          </div>
          {/* Choose Your Service Section */}
          <div>
            <h2 className="text-xs font-semibold tracking-wider mb-4 uppercase">
              Choose Your Service
            </h2>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-6 py-2 rounded-full border-2 transition-all text-base ${
                    selectedServices.includes(service)
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-900 bg-white text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>


                   {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-2 rounded font-medium text-base hover:bg-gray-800 transition-colors"
          >
            Start Your Project
          </button>

          {/* Privacy Policy */}
          <p className="text-xs text-[#1E1F20] text-center">
            By clicking on the button, you consent to the processing of personal data and agree to the site's{' '}
            <span className="underline hover:text-[#1E1F20] cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
                  </div>

                   {/* Testimonial Section */}
        <div className="mt-12 bg-[#DDEFFC] rounded-lg p-8">
          <blockquote className="mb-6">
            <p className="text-base md:text-xl leading-relaxed text-gray-900">
              "4Reel helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way."
            </p>
          </blockquote>
          <div>
            <p className="font-medium text-[#50515B]">Fleur Heyns</p>
            <p className="text-sm text-[#50515B]">Co-founder & CEO at PROOF</p>
          </div>
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-1 bg-gray-900 rounded-full"></div>
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>
                  </div>
              )}

              {/* Step 2: Service Selection */}
              {step === 2 && (
                <div className="p-4 md:p-6">
                 <div className="flex items-center justify-between mb-8 text-black">
          <h1 className="text-3xl md:text-4xl font-light">
            Accelerate your launch
          </h1>
          <button
              onClick={closeSideMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
                <div className="p-4 md:p-6  flex flex-col items-center justify-center min-h-full text-center">
                  

                  <div className="w-20 h-15  flex items-center justify-center mb-8">
                    <Image 
                      src="/icon/crt.png" 
                      alt="Success"
                      width={80} 
                      height={55}
                      className="h-15 w-20"
                    />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-medium mb-4 text-black">
                    Thanks, we received your message!
                  </h2>
                  <p className="text-gray-600 mb-10 text-lg max-w-md">
                    We'll get back to you soon. In the meantime, schedule a free consultation with our team by visiting our contact page.
                  </p>
                  
                  <button
                    onClick={closeSideMenu}
                    className="bg-black text-white px-12 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
                </div>
              )}

            </div>
          </div>
        </>
      )}
    </>
  );
}