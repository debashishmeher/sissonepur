import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="relative min-h-[400px] bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMTBoMnYyMHptLTIgMGgtMlYxMGgydjIwek0zMCAzMGgtMlYxMGgydjIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover opacity-30"
          alt="School Building"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/30 to-gray-900/50" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <ChevronRight size={16} />
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Shaping Future Leaders 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400">
              
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Discover our journey of excellence in education, our values, and our commitment to nurturing the next generation of leaders.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}