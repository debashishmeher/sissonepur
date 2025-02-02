import React from "react";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
  Award,
  BookOpen,
  Users,
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Admission", href: "#" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Academic Calendar", href: "#" },
];

const resources = [
  { label: "Support", href: "#" },
];

const achievements = [
  { icon: Award, label: "Best School Award 2023" },
  { icon: BookOpen, label: "100% Pass Rate" },
  { icon: Users, label: "15000+ Alumni Network" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="relative w-12 h-12">
                <img
                  src="https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-1/304784131_545741720685397_6898752098845042170_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=_hw1wNbojxIQ7kNvgEZ7Zpb&_nc_oc=AdgPEUO_v_CSdK_HNpSaSWFCdBhaGxGAm-DVT3E-s5fsLiX_dRiGr9jHNjZHr_w2SXA&_nc_zt=24&_nc_ht=scontent-bom2-3.xx&_nc_gid=AFZMSraLQCz732MHSjAivma&oh=00_AYASJ9FwDpeqjHJCHVDijRjiyh67cR2gOff_her_PwuyBQ&oe=678758D7"
                  alt="SUKANTI Logo"
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-400/20 group-hover:bg-primary-400/30 transition-colors duration-500 rounded-full" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  SUKANTI
                </h2>
                <p className="text-sm text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering minds and shaping futures through quality education
              since 1990. Join us on a journey of discovery, innovation, and
              academic excellence.
            </p>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon size={20} className="text-primary-400" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm hover:text-primary-400 transition-colors duration-300 group"
                  >
                    <ChevronRight
                      size={16}
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm hover:text-primary-400 transition-colors duration-300 group"
                  >
                    <ChevronRight
                      size={16}
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-primary-400 flex-shrink-0 mt-1"
                />
                <span className="text-sm">
                  Demo Address
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400" />
                <span className="text-sm">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary-400" />
                <span className="text-sm">contact@sukantiacademy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-primary-400" />
                <span className="text-sm">Mon - Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} SUKANTI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // created by GigaX - WEES PATEL

  );
}
