import logo from '../photos/logo.jpg';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
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
                  src={logo}
                  alt="SUKANTI Logo"
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-400/20 group-hover:bg-primary-400/30 transition-colors duration-500 rounded-full" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  SUKANTI INTERNATIONAL SCHOOL
                </h2>
                <p className="text-sm text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering minds and shaping futures through quality education
              . Join us on a journey of discovery, innovation, and
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
                  Dhubamunda, S.Kalapathar, Sonepur, Odisha, PIN-767017
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400" />
                <a href='tel:+91 76840 43075' className="text-sm">+91 76840 43075 </a>
                <a href='tel:+91 98277 53075' className="text-sm">+91 98277 53075 </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary-400" />
                <a href='mailto:sissonepur2015@gmail.com' className="text-sm">sissonepur2015@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-primary-400" />
                <span className="text-sm">Mon - Sat: 9:00 AM - 4:00 PM </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-4">
  <a
    href="https://www.facebook.com/profile.php?id=61566854695733" target='_blank'
    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
  >
    <Facebook size={24} />
  </a>
  <a
    href="https://www.instagram.com/sukanti_int_school_" target='_blank'
    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
  >
    <Instagram size={24} />
  </a>
  <a
    href="https://www.youtube.com/@sukantiinternationalschool1578" target='_blank'
    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
  >
    <Youtube size={24} />
  </a>
  <a
    href="https://wa.me/qr/6X3MSJFAVBMSF1" target='_blank'
    className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-green-600 transition-all duration-300 shadow-md"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
    WhatsApp Us
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
                href="/"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
  href="https://wa.me/qr/6X3MSJFAVBMSF1" target='_blank'
  className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-green-600 transition-all duration-300 shadow-lg"
>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
  WhatsApp Us
</a>

    </footer>
    // created by GigaX - WEES PATEL

  );
}
