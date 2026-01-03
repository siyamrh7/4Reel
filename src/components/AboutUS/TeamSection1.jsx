import React from 'react';

export default function TeamSection() {
  const teamMembers = [
    { id: 1, name: 'John Smith', position: 'Lead Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { id: 2, name: 'Alex Johnson', position: 'UI/UX Designer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
    { id: 3, name: 'Mike Davis', position: 'Product Manager', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop' },
    { id: 4, name: 'Sarah Williams', position: 'Frontend Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 5, name: 'Emily Carter', position: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop' },
    { id: 6, name: 'David Brown', position: 'Senior Engineer', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop' },
    { id: 7, name: 'Lisa Anderson', position: 'Creative Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
    { id: 8, name: 'James Wilson', position: 'Backend Developer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-0 mb-12">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="relative group overflow-hidden aspect-square"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-white/90 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
          
       <div className="flex justify-end items-end">
  {/* Text Content */}
  <div className="hidden md:block max-w-2xl p-6">
    <h2 className="text-2xl font-medium text-BLACK mb-4">
      ...and many other people
      <br />
      we work well with.
    </h2>
    <p className="text-gray-600 text-lg mb-8">
      Our group of partners and contractors is wide and varied, which lets us
      handle projects of any size or level of difficulty.
    </p>
    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors font-medium">
      Let's Work
    </button>
  </div>
</div>
        </div>
        
        {/* Text Content */}
        <div className="block md:hidden  max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ...and many other people
            <br />
            we work well with.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Our group of partners and contractors is wide and varied, which lets us handle projects of any size or level of difficulty.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors font-medium">
            Let's Work
          </button>
        </div>

      </div>
    </div>
  );
}