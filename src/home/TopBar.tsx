
import { MapPin, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#87CEFA] text-white py-2 md:py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-2 md:mb-0">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin size={14} className="text-yellow-300" />
            <span>Dhubamunda, S.Kalapathar, Sonepur, Odisha, PIN-767017</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Clock size={14} className="text-yellow-300" />
            <span>Mon - Sat: 9:00 AM - 4:00 PM</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Mail size={14} className="text-yellow-300" />
            <span>sissonepur2015@gmail.com</span>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61566854695733" target="_blank" className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110">
              <Facebook size={16} />
            </a>
            
            <a href="https://www.instagram.com/sukanti_int_school_" target="_blank" className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110">
              <Instagram size={16} />
            </a>
            <a href="https://www.youtube.com/@sukantiinternationalschool1578" target='_blank' className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}