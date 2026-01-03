'use client';

import React, { useState, useEffect } from 'react';

const FloatingAvatar = ({ name, color, initialX, initialY, delay }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  
  useEffect(() => {
    const moveAvatar = () => {
      setPosition({
        x: Math.random() * 85 + 5,
        y: Math.random() * 80 + 10
      });
    };
    
    const interval = setInterval(moveAvatar, 4000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);
  
  const colorMap = {
    purple: 'bg-purple-600',
    cyan: 'bg-cyan-400',
    orange: 'bg-orange-500',
    blue: 'bg-blue-400',
    green: 'bg-green-400',
    white: 'bg-white'
  };
  
  const pointerColors = {
    purple: '#9333ea',
    cyan: '#22d3ee',
    orange: '#f97316',
    blue: '#60a5fa',
    green: '#4ade80',
    white: '#ffffff'
  };
  
  return (
    <div
      className="absolute transition-all duration-[3000ms] ease-in-out z-20"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}ms`
      }}
    >
      <div className="flex items-center gap-2">
        {/* Mouse cursor icon */}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path 
            d="M2 2L6.5 14L8.5 8.5L14 6.5L2 2Z" 
            fill={pointerColors[color]}
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
        
        {/* Name label */}
        <div className={`px-3 py-1 ${colorMap[color]} ${color === 'white' ? 'text-black' : 'text-white'} text-sm font-medium rounded shadow-lg whitespace-nowrap`}>
          {name}
        </div>
      </div>
    </div>
  );
};

const AvatarCircle = ({ image, color, initialX, initialY, delay }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  
  useEffect(() => {
    const moveAvatar = () => {
      setPosition({
        x: Math.random() * 85 + 5,
        y: Math.random() * 80 + 10
      });
    };
    
    const interval = setInterval(moveAvatar, 4500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);
  
  const colorMap = {
    purple: 'border-purple-600',
    cyan: 'border-cyan-400',
    orange: 'border-orange-500',
    blue: 'border-blue-400',
    green: 'border-green-400'
  };
  
  const bgColorMap = {
    purple: 'bg-purple-400',
    cyan: 'bg-cyan-400',
    orange: 'bg-orange-400',
    blue: 'bg-blue-400',
    green: 'bg-green-400'
  };
  
  return (
    <div
      className="absolute transition-all duration-[3500ms] ease-in-out z-10"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}ms`
      }}
    >
      <div className={`w-14 h-14 sm:w-16 sm:h-16  ${bgColorMap[color]}  ${colorMap[color]} shadow-lg overflow-hidden flex items-center justify-center`}>
        <img 
          src={image} 
          alt="avatar" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default function HeroSection() {
  const labels = [
    { name: 'Michael', color: 'purple', initialX: 15, initialY: 25, delay: 0 },
    { name: 'You', color: 'green', initialX: 75, initialY: 15, delay: 500 },
    { name: 'Cris', color: 'white', initialX: 10, initialY: 70, delay: 1000 },
    { name: 'Antonia', color: 'blue', initialX: 85, initialY: 35, delay: 1500 },
    { name: 'Robert', color: 'orange', initialX: 80, initialY: 85, delay: 2000 },
  ];
  
  const circles = [
    { image: '/icon/p1.png',  initialX: 8, initialY: 15, delay: 0 },
    { image: '/icon/p2.png',  initialX: 78, initialY: 12, delay: 700 },
    { image: '/icon/p3.png',  initialX: 12, initialY: 45, delay: 1200 },
    { image: '/icon/p4.png',  initialX: 18, initialY: 80, delay: 1700 },
    { image: '/icon/p1.png',  initialX: 88, initialY: 68, delay: 2200 },
  ];
  
  return (
    <div className="relative min-h-auto max-w-[1440px] mx-auto w-full bg-black overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating Avatar Circles */}
      {circles.map((circle, index) => (
        <AvatarCircle key={`circle-${index}`} {...circle} />
      ))}
      
      {/* Floating Labels */}
      {labels.map((label, index) => (
        <FloatingAvatar key={`label-${index}`} {...label} />
      ))}
      
      {/* Main Content */}
      <div className="relative z-30 flex items-center justify-center min-h-auto px-6 py-20">
        <div className="text-center max-w-6xl">
          <h1 className="text-[48px] sm:text-[48px] md:text-[90px] lg:text-[140px] font-normal text-white mb-6 sm:mb-8 leading-tight tracking-tight font-[Degular Demo]">
            Together,
            <br />
            we create impact
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Our clients aren't just customers — they're part of the process, 
            part of the result, part of the success.
          </p>
        </div>
      </div>
    </div>
  );
}