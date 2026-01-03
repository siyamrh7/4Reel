import React, { useState } from 'react';

export default function PlanYourSuccess() {
  const [activeView, setActiveView] = useState('Week');

  const events = [
    { day: 'MON', date: 22, time: '8:00 AM', title: 'Post New Highlight Reel', color: 'bg-blue-700', span: 1 },
    { day: 'MON', date: 22, time: '9:00 AM', title: 'Range Stories / Meta', color: 'bg-blue-600', span: 1 },
    { day: 'MON', date: 22, time: '10:00 AM', title: 'Instagram Live', color: 'bg-blue-600', span: 2 },
    { day: 'MON', date: 22, time: '11:00 AM', title: 'Facebook comment', color: 'bg-purple-500', span: 1 },
    { day: 'TUE', date: 23, time: '9:00 AM', title: 'Post New Stories', color: 'bg-blue-500', span: 1 },
    { day: 'TUE', date: 23, time: '11:00 AM', title: 'Onboarding', color: 'bg-purple-400', span: 1 },
    { day: 'WED', date: 24, time: '8:00 AM', title: 'Post New Post', color: 'bg-blue-500', span: 2 },
    { day: 'WED', date: 24, time: '10:00 AM', title: 'Instagram Live', color: 'bg-blue-400', span: 1 },
    { day: 'THU', date: 25, time: '10:00 AM', title: 'Health Bene Walkthrough', color: 'bg-purple-400', span: 2 }
  ];

  const days = [
    { day: 'SUN', date: 21 },
    { day: 'MON', date: 22 },
    { day: 'TUE', date: 23 },
    { day: 'WED', date: 24 },
    { day: 'THU', date: 25 }
  ];

  const hours = ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Plan Your Success
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              A social media content calendar isn't just a tool—it's your strategy hub for consistent visibility and engagement. Visualizing your posts in a calendar view makes it easy to organize content across days, weeks, or months, align posts with important dates, and spot gaps in your messaging. Effortlessly schedule posts, assign tasks, track deadlines, and ensure campaigns launch on time.
            </p>

            <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
              Let's Talk
            </button>
          </div>

          {/* Calendar Section */}
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-gray-700 font-medium">Today</span>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex gap-2">
                {['Day', 'Week', 'Month', 'Year'].map((view) => (
                  <button
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeView === view
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Day Headers */}
                <div className="grid grid-cols-6 gap-2 mb-4">
                  <div className="w-16"></div>
                  {days.map((day) => (
                    <div key={day.date} className="text-center">
                      <div className="text-xs text-gray-500 font-medium">{day.day}</div>
                      <div className="text-2xl font-semibold text-gray-900">{day.date}</div>
                    </div>
                  ))}
                </div>

                {/* Time Grid */}
                <div className="space-y-0">
                  {hours.map((hour, hourIndex) => (
                    <div key={hour} className="grid grid-cols-6 gap-2 relative" style={{ minHeight: '80px' }}>
                      <div className="text-xs text-gray-400 pt-1 w-16">{hour}</div>
                      
                      {days.map((day, dayIndex) => {
                        const dayEvents = events.filter(e => e.day === day.day && e.time === hour);
                        
                        return (
                          <div key={`${day.date}-${hour}`} className="relative border-t border-gray-100">
                            {dayEvents.map((event, eventIndex) => (
                              <div
                                key={eventIndex}
                                className={`${event.color} text-white p-2 rounded-lg text-xs font-medium mb-1`}
                                style={{ 
                                  height: event.span > 1 ? `${event.span * 80}px` : 'auto',
                                  position: event.span > 1 ? 'absolute' : 'relative',
                                  width: event.span > 1 ? 'calc(100% - 4px)' : 'auto',
                                  zIndex: 10
                                }}
                              >
                                <div className="font-semibold">{event.time}</div>
                                <div className="mt-1">{event.title}</div>
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
  );
}