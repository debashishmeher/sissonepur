import React from 'react';
import { Microscope, Beaker, Monitor, Atom } from 'lucide-react';

const labs = [
  {
    icon: Microscope,
    title: "Biology Lab",
    description: "Advanced microscopes and specimen preparation facilities",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
  },
  {
    icon: Beaker,
    title: "Chemistry Lab",
    description: "Modern equipment for chemical experiments and research",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
  },
  {
    icon: Atom,
    title: "Physics Lab",
    description: "State-of-the-art apparatus for physics experiments",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80"
  },
  {
    icon: Monitor,
    title: "Computer Lab",
    description: "High-performance computers with latest software",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
  }
];

export default function Labs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Microscope size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Laboratory Facilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Laboratories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our well-equipped laboratories provide hands-on learning experiences across various scientific disciplines
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {labs.map((lab, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Lab Image */}
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent z-10" />
                <img 
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-bold text-white">{lab.title}</h3>
                </div>
              </div>

              {/* Lab Info */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300">
                    <lab.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <p className="text-gray-600">{lab.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}