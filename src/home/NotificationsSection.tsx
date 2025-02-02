import React from 'react';
import { Bell, ChevronRight, Pin } from 'lucide-react';

const notifications = [
  {
    title: "Admission Open for 2024-25",
    date: "March 15, 2024",
    isPinned: true,
    category: "Admission"
  },
  {
    title: "Annual Sports Day Registration",
    date: "March 10, 2024",
    isPinned: true,
    category: "Events"
  },
  {
    title: "Parent-Teacher Meeting Schedule",
    date: "March 5, 2024",
    isPinned: false,
    category: "Academic"
  },
  {
    title: "Summer Camp Registration Begins",
    date: "March 1, 2024",
    isPinned: false,
    category: "Activities"
  },
  {
    title: "Scholarship Test Announcement",
    date: "February 28, 2024",
    isPinned: false,
    category: "Examination"
  }
];

export default function NotificationsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
              <Bell size={16} className="text-primary-600" />
              <span className="text-primary-600 text-sm font-medium">Latest Updates</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              School Notifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest announcements, events, and important dates at SUKANTI
            </p>
          </div>

          {/* Notifications List */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {notifications.map((notification, index) => (
              <div 
                key={index}
                className={`group flex items-center gap-4 p-4 md:p-6 hover:bg-blue-50 transition-all duration-300 ${
                  index !== notifications.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                {notification.isPinned && (
                  <Pin size={16} className="text-primary-600 flex-shrink-0" />
                )}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      notification.isPinned ? 'bg-blue-100 text-primary-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {notification.category}
                    </span>
                    <span className="text-sm text-gray-500">{notification.date}</span>
                  </div>
                  <h3 className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors duration-300">
                    {notification.title}
                  </h3>
                </div>
                <ChevronRight size={20} className="text-gray-400 group-hover:text-primary-600 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-blue-700 transition-colors duration-300">
              View All Notifications
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}