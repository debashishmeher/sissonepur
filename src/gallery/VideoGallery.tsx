import React from 'react';
import { Play, Video } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    title: "Annual Day Celebrations 2024",
    duration: "5:30",
    views: "1.2K"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
    title: "Sports Day Highlights",
    duration: "4:15",
    views: "980"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    title: "Campus Tour 2024",
    duration: "7:45",
    views: "2.5K"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    title: "Science Exhibition Showcase",
    duration: "6:20",
    views: "1.5K"
  }
];

export default function VideoGallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <Video size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Video Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Videos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch highlights from our school events and activities
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <OptimizedImage
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width={800}
                  height={450}
                />
                <div className="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/30 transition-colors duration-300" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={20} className="text-primary-600 ml-1" />
                  </div>
                </button>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-gray-900/75 text-white text-xs rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{video.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}