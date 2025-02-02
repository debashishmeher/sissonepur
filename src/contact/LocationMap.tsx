import React from 'react';
import { MapPin } from 'lucide-react';

export default function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <MapPin size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Our Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Campus
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our campus is conveniently located in the heart of the city. Come visit us to experience our facilities firsthand.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.985!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCc0OC4wIk4gNzPCsDU5JzA2LjAiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}