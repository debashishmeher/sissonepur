import React from 'react';
import { Users2, Mail, Phone, Facebook, Twitter, Linkedin, GraduationCap } from 'lucide-react';

const teachers = [
  {
    name: "Dr. Sarah Johnson",
    position: "Science Department Head",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    email: "sarah.j@sukantiacademy.com",
    phone: "+1 234 567 890",
    subjects: ["Physics", "Chemistry"],
    experience: "15+ Years",
    education: "Ph.D. in Physics",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Prof. Michael Chen",
    position: "Mathematics Expert",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80",
    email: "michael.c@sukantiacademy.com",
    phone: "+1 234 567 891",
    subjects: ["Mathematics", "Statistics"],
    experience: "12+ Years",
    education: "M.Sc. in Mathematics",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Dr. Emily Brown",
    position: "English Literature",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80",
    email: "emily.b@sukantiacademy.com",
    phone: "+1 234 567 892",
    subjects: ["English", "Literature"],
    experience: "10+ Years",
    education: "Ph.D. in Literature",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Prof. David Wilson",
    position: "Computer Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    email: "david.w@sukantiacademy.com",
    phone: "+1 234 567 893",
    subjects: ["Programming", "Web Development"],
    experience: "8+ Years",
    education: "M.Tech in CS",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

export default function TeachersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Users2 size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Our Faculty</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Teachers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from our highly qualified and dedicated teachers who are passionate about education and student success
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Teacher Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Mail size={16} />
                      <span className="text-sm">{teacher.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white mb-4">
                      <Phone size={16} />
                      <span className="text-sm">{teacher.phone}</span>
                    </div>
                    <div className="flex gap-3">
                      <a href={teacher.socialLinks.facebook} className="text-white hover:text-primary-600 transition-colors duration-300">
                        <Facebook size={18} />
                      </a>
                      <a href={teacher.socialLinks.twitter} className="text-white hover:text-primary-600 transition-colors duration-300">
                        <Twitter size={18} />
                      </a>
                      <a href={teacher.socialLinks.linkedin} className="text-white hover:text-primary-600 transition-colors duration-300">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teacher Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {teacher.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{teacher.position}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap size={16} className="text-primary-600" />
                    <span className="text-sm">{teacher.education}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map((subject, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-primary-600 text-sm rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-white border-2 border-green-600 text-primary-600 hover:bg-green-600 hover:text-white font-medium px-8 py-3 rounded-xl transition-all duration-300">
            View All Teachers
            <Users2 size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}