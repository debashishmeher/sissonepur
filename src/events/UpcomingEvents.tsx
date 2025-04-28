import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import foodFest from "../photos/foodFest.jpg";
import annualSports from "../photos/annualSports.jpg";
import science from "../photos/science.jpg";
import functions from "../photos/function.jpg";
const events = [
  {
    title: "Annual Science Exhibition",
    date: "Octaber 26, 2024-25",
    time: "9:00 AM - 4:00 PM",
    location: "School Auditorium",
    image: science,
    category: "Academic",
    description: "Showcasing innovative science projects by our talented students",
    link:"https://www.instagram.com/reel/DBlDNkhAOdw/?igsh=MWRjamxvdzlzcXZibg"
  },
  {
    title: "Annual Athletic Meet",
    date: "November 29-30, 2024",
    time: "8:00 AM - 6:00 PM",
    location: "Sports Complex",
    image: annualSports,
    category: "Sports",
    description: "Join us for two thrilling days of athletic excellence, team spirit, and fierce competition across a wide range of sports and events at the Annual Athletic Meet!",
    link:"https://www.facebook.com/share/r/1AFChULyCv/"
  },
  {
    title: "Cultural Festival 2024",
    date: "December 23, 2024-25",
    time: "11:30 AM - 9:30 PM",
    location: "Main Campus",
    image: functions,
    category: "Cultural",
    description: "A celebration of art, music, and cultural performances",
    link:"https://www.instagram.com/reel/DELu-NyTXql/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA"
  },
  {
    title: "Annual Food Festival 2024",
    date: "April 13, 2025",
    time: "9:00 AM - 12:30 PM",
    location: "Main Campus",
    image: foodFest,
    category: "Food & Culinary",
    description: "Come and enjoy a vibrant showcase of international cuisines, local delicacies, cooking demonstrations, and fun food contests at our Annual Food Festival!",
    link:"https://www.facebook.com/share/r/18wPyCQgEp/"
  }
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Calendar size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Events</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these exciting upcoming events at our school
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent z-10" />
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                  {event.category}
                </span>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={18} className="text-primary-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={18} className="text-primary-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={18} className="text-primary-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <a href={event.link} target="_blank" className="w-full mt-6 flex items-center justify-center gap-2 bg-gray-50 hover:bg-blue-50 text-primary-600 font-medium py-3 rounded-xl transition-colors duration-300">
                  Learn More
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}