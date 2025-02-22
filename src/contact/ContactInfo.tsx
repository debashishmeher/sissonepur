import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    href:"https://maps.app.goo.gl/HyNMZHzeB5hnnwG97",
    icon: MapPin,
    title: "Visit Us",
    details: ["Dhubamunda, S.Kalapathar, Sonepur, Odisha, PIN-767017"]
  },
  {
    href:"tel:+91 76840 43075",
    icon: Phone,
    title: "Call Us",
    details: ["+91 76840 43075" , "+91 98277 53075"]
  },
  {
    href:"mailto:sissonepur2015@gmail.com",
    icon: Mail,
    title: "Email Us",
    details: ["sissonepur2015@gmail.com"]
  },
  {
    href:"#",
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 9:00 AM - 4:00 PM", "Saturday: 9:00 AM - 1:00 PM"]
  }
];

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <MessageCircle size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Contact Information</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Reach Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with us through multiple channels. We're here to assist you with any inquiries.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <a 
              href={info.href}
              target="_blank"
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300 mb-4">
                  <info.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}