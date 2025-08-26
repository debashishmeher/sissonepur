
import { Calendar, ArrowRight } from 'lucide-react';
import science1 from "../photos/science1.png";
import g8 from "../photos/g8.png";
import functionss from "../photos/function.jpg";

const events = [
  {
    title: "Annual Science Exhibition",
    image: science1,
    paragraph: "All Students  I am dsgd Empowering minds and shaping futures through quality education . Join us on a journey of discovery, innovation, and academic excellence.",
    category: "Academic"
  },
  {
    title: "Inter-School Sports Meet",

    image: g8,
    paragraph: "Selected Athlete Empowering minds and shaping futures through quality education . Join us on a journey of discovery, innovation, and academic excellence.s",
    category: "Sports"
  },
  {
    title: "Cultural Festival 2024",

    image: functionss,
    paragraph: "All Student Empowering minds and shaping futures through quality education . Join us on a journey of discovery, innovation, and academic excellence.s",
    category: "Cultural"
  }
];

export default function EventsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Calendar size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Events</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            School Events & Activities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for exciting events and activities that enhance learning and create lasting memories
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
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <div className="space-y-3 mb-6">
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    
                    <p className='text-sm'>{event.paragraph}</p>
                  </div>
                </div>
                {/* <button className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-blue-50 text-primary-600 font-medium py-3 rounded-xl transition-colors duration-300">
                  View Details
                  <ArrowRight size={18} />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-colors duration-300">
            View All Events
            <ArrowRight size={20} />
          </button>
        </div> */}
      </div>
    </section>
    // created by GigaX - WEES PATEL
  );
}