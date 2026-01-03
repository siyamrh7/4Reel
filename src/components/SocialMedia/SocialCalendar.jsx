import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SocialCalendar() {
  const [view, setView] = useState('week');
  
  const events = [
    { day: 22, time: 8, duration: 1, title: 'Post New Highlight Reel', color: 'bg-[#0C7BB3]' },
    { day: 22, time: 9, duration: 1, title: 'Range Stories / Meta', color: 'bg-[#0C7BB3]' },
    { day: 22, time: 10, duration: 1, title: 'Instagram Live', color: 'bg-[#0C7BB3]' },
    { day: 22, time: 11, duration: 1, title: 'Facebook comment', color: 'text-[#6D28D9]' },
    { day: 23, time: 9, duration: 2, title: 'Post New Stories', color: 'bg-[#3B9DD8]' },
    { day: 24, time: 8, duration: 1, title: 'Instagram Live', color: 'bg-[#3B9DD8]' },
    { day: 24, time: 10, duration: 1, title: 'Post New Post', color: 'bg-[#3B9DD8]' },
    { day: 25, time: 10, duration: 2, title: 'Health Benefit Walkthrough', color: 'text-[#6D28D9]' }
  ];

  const days = [
    { day: 'SUN', date: 21 },
    { day: 'MON', date: 22 },
    { day: 'TUE', date: 23 },
    { day: 'WED', date: 24 },
    { day: 'THU', date: 25 }
  ];

  const timeSlots = [
    { time: 7, label: '7 AM' },
    { time: 8, label: '8 AM' },
    { time: 9, label: '9 AM' },
    { time: 10, label: '10 AM' },
    { time: 11, label: '11 AM' }
  ];

  return (
    <div className="min-h-auto ">
      <div className="max-w-[1440px] mx-auto bg-white py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-start">
          
          {/* Left Content Section */}
          <div className="h-full flex  justify-center items-center">
               <div className="space-y-6 lg:pt-8 px-4 lg:px-10 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
              Plan Your Success
            </h1>
            
            <p className="text-base leading-relaxed text-gray-700 max-w-xl">
              A social media content calendar isn't just a tool—it's your strategy hub for consistent visibility and engagement. Visualizing your posts in a calendar view makes it easy to organize content across days, weeks, or months, align posts with important dates, and spot gaps in your messaging. Effortlessly schedule posts, assign tasks, track deadlines, and ensure campaigns launch on time.
            </p>

            <button className="bg-black text-white px-8 py-2 rounded font-medium hover:bg-gray-800 transition-colors text-base">
              Let's Talk
            </button>
          </div>

          </div>
         
          {/* Calendar Section */}
          <div className="w-full">
            <div className=" border border-gray-200 overflow-hidden ">
              
              {/* Calendar Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white">
                <div className="flex items-center gap-3">
                  <button className="p-1.5 hover:bg-gray-100  transition-colors">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <span className="text-sm font-medium text-gray-700">Today</span>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="flex gap-2">
                  <button className="px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
                    Day
                  </button>
                  <button className="px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium bg-[#3B9DD8] text-white">
                    Week
                  </button>
                  <button className="px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
                    Month
                  </button>
                  <button className="px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
                    Year
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="overflow-x-auto bg-white">
                <div className="min-w-[650px] p-4 md:p-6">
                  
                  {/* Days Header */}
                  <div className="grid gap-0 mb-4" style={{ gridTemplateColumns: '60px repeat(5, 1fr)' }}>
                    <div className="w-14"></div>
                    {days.map((day, idx) => (
                      <div key={idx} className="text-center px-2">
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">
                          {day.day}
                        </div>
                        <div className="text-3xl font-light text-gray-900">
                          {day.date}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Time Slots Grid */}
                  <div className="relative">
                    {timeSlots.map((slot, idx) => (
                      <div key={idx} className="grid gap-0 h-16" style={{ gridTemplateColumns: '60px repeat(5, 1fr)' }}>
                        
                        {/* Time Label */}
                        <div className="text-xs text-gray-500 pt-1 pr-3 text-right">
                          {slot.label}
                        </div>
                        
                        {/* Day Columns */}
                        {days.map((day, dayIdx) => {
                          const dayEvents = events.filter(e => e.day === day.date && e.time === slot.time);
                          
                          return (
                            <div 
                              key={dayIdx} 
                              className="relative border-l border-t border-gray-200 "
                            >
                              {dayEvents.map((event, eventIdx) => (
                                <div
                                  key={eventIdx}
                                  className={`text-white ${event.color}  p-2  text-xs font-medium h-full flex flex-col justify-start overflow-hidden`}
                                  style={{ 
                                    height: event.duration === 2 ? '168px' : '100%',
                                    position: event.duration === 2 ? 'absolute' : 'relative',
                                    top: event.duration === 2 ? '4px' : 'auto',
                                    left: event.duration === 2 ? '4px' : 'auto',
                                    right: event.duration === 2 ? '4px' : 'auto',
                                    zIndex: event.duration === 2 ? 10 : 1
                                  }}
                                >
                                  <div className="text-[10px] opacity-90 mb-1 font-normal">
                                    {slot.time}:00 AM
                                  </div>
                                  <div className="font-semibold text-xs leading-tight">
                                    {event.title}
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}