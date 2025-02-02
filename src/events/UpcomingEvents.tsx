import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    title: "Annual Science Exhibition",
    date: "March 25, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "School Auditorium",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80",
    category: "Academic",
    description: "Showcasing innovative science projects by our talented students"
  },
  {
    title: "Inter-School Sports Meet",
    date: "April 5-7, 2024",
    time: "8:00 AM - 6:00 PM",
    location: "Sports Complex",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80",
    category: "Sports",
    description: "Annual sports competition featuring multiple disciplines"
  },
  {
    title: "Cultural Festival 2024",
    date: "April 15, 2024",
    time: "5:00 PM - 9:00 PM",
    location: "Main Campus",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80",
    category: "Cultural",
    description: "A celebration of art, music, and cultural performances"
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
                <button className="w-full mt-6 flex items-center justify-center gap-2 bg-gray-50 hover:bg-blue-50 text-primary-600 font-medium py-3 rounded-xl transition-colors duration-300">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}