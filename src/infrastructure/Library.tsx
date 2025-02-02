import React from 'react';
import { Library as LibraryIcon, Book, Computer, Coffee } from 'lucide-react';

const features = [
  {
    icon: Book,
    title: "Extensive Collection",
    value: "50,000+",
    description: "Books across various subjects"
  },
  {
    icon: Computer,
    title: "Digital Resources",
    value: "20+",
    description: "Online databases and e-libraries"
  },
  {
    icon: Coffee,
    title: "Study Areas",
    value: "200+",
    description: "Individual and group study spaces"
  }
];

export default function Library() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <LibraryIcon size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Library</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modern Library
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A state-of-the-art library facility with extensive resources for research and learning
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80"
                alt="Library Interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 left-8 right-8">
              <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="font-bold text-2xl text-gray-900 mb-1">{feature.value}</div>
                    <div className="text-sm text-gray-600">{feature.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}