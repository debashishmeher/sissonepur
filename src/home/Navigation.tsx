import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'ACADEMIC', path: '/academic' },
  // { name: 'INFRASTRUCTURE', path: '/infrastructure' },
  { name: 'EVENTS', path: '/events' },
  { name: 'MANDATORY', path: '/mandatory' },

  // { name: 'ACHIEVEMENT', path: '/achievement' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'CONTACT', path: '/contact' }
];
import logo from '../photos/logo.jpg';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
              {/* logo */}
              <img src={logo}

                alt="SUKANTI Logo"
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
              />
              {/* logo end */}
              <div className="absolute inset-0 bg-green-600/10 group-hover:bg-green-600/20 transition-colors duration-500 rounded-full" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                SUKANTI INTERNATIONAL <p>SCHOOL</p> 
              </h1>
              <p className="text-xs md:text-sm text-primary-600">Affiliated to CBSE New Delhi</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-primary-600 font-medium relative group py-2 text-sm xl:text-base transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-primary-600' : ''
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 transform ${
                  location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100 transition-transform duration-300`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <div className="py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:text-primary-600 transition-all duration-300 rounded-lg ${
                  location.pathname === item.path ? 'bg-gradient-to-r from-blue-50 to-sky-50 text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}