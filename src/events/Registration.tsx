import React from 'react';
import { Send } from 'lucide-react';

export default function Registration() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Form Section */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Registration</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="event" className="text-sm font-medium text-gray-700">Select Event</label>
                    <select
                      id="event"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    >
                      <option value="">Choose an event</option>
                      <option value="science">Annual Science Exhibition</option>
                      <option value="sports">Inter-School Sports Meet</option>
                      <option value="cultural">Cultural Festival 2024</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Additional Information</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="Any specific requirements or questions..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r  from-gray-600 via-green-500 hover:from-blue-700 hover:to-sky-600 text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Register Now
                    <Send size={18} />
                  </button>
                </form>
              </div>

              {/* Image Section */}
              <div className="relative hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                  alt="Event Registration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-sky-500/90">
                  <div className="p-12 text-white h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Join Our Events</h3>
                    <p className="mb-8">Register for upcoming events and be part of our vibrant school community.</p>
                    <div className="space-y-4 text-sm">
                      <p>Early registration benefits</p>
                      <p>Limited seats available</p>
                      <p>Special group discounts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}