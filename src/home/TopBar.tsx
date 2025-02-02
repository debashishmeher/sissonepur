import React from 'react';
import { MapPin, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 md:py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-2 md:mb-0">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin size={14} className="text-yellow-300" />
            <span>123 Education Street, City</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Clock size={14} className="text-yellow-300" />
            <span>Mon - Fri: 8:00 - 17:00</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Mail size={14} className="text-yellow-300" />
            <span>contact@sukantiacademy.com</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}