import React, { useState, useMemo } from 'react';
import { Image as ImageIcon, Filter } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const categories = ['All', 'Campus', 'Events', 'Sports', 'Academic', 'Cultural'] as const;
type Category = typeof categories[number];

interface GalleryItem {
  image: string;
  category: Exclude<Category, 'All'>;
  title: string;
  date: string;
}

const galleryItems: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    category: "Campus",
    title: "Modern Campus Building",
    date: "2024"
  },
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
    category: "Sports",
    title: "Annual Sports Meet",
    date: "2024"
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    category: "Events",
    title: "Cultural Festival",
    date: "2024"
  },
  {
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
    category: "Academic",
    title: "Graduation Ceremony",
    date: "2024"
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    category: "Academic",
    title: "Group Study Session",
    date: "2024"
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    category: "Events",
    title: "Science Exhibition",
    date: "2024"
  },
  {
    image: "https://images.unsplash.com/photo-1598992220397-44f0cdf59929?auto=format&fit=crop&q=80",
    category: "Cultural",
    title: "Dance Performance",
    date: "2024"
  },
  {
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80",
    category: "Sports",
    title: "Basketball Tournament",
    date: "2024"
  }
];

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = useMemo(() => 
    activeCategory === 'All' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <ImageIcon size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Photo Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Captured Moments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of photographs capturing the essence of school life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-green-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category === 'All' && <Filter size={16} />}
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <OptimizedImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                width={800}
                height={600}
              />

              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-green-600/90 text-white text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}