import React, { useMemo, useCallback } from 'react';
import { Image as ImageIcon, Filter } from 'lucide-react';

const categories = ['All', 'Campus', 'Events', 'Sports', 'Activities', 'Labs'] as const;
type Category = typeof categories[number];

interface GalleryItem {
  image: string;
  category: Exclude<Category, 'All'>;
  title: string;
  width: number;
  height: number;
}


const galleryItems: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=75",
    category: "Labs",
    title: "Advanced Science Lab",
    width: 800,
    height: 600
  },
  {
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=75",
    category: "Campus",
    title: "Modern Library",
    width: 800,
    height: 600
  },
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=75",
    category: "Sports",
    title: "Basketball Court",
    width: 800,
    height: 600
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=75",
    category: "Events",
    title: "Annual Cultural Festival",
    width: 800,
    height: 600
  },
  {
    image: "https://images.unsplash.com/photo-1598992220397-44f0cdf59929?auto=format&fit=crop&w=800&q=75",
    category: "Activities",
    title: "Art & Craft Workshop",
    width: 800,
    height: 600
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=75",
    category: "Campus",
    title: "Modern Classrooms",
    width: 800,
    height: 600
  },
  {
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=75",
    category: "Labs",
    title: "Computer Lab",
    width: 800,
    height: 600
  },
  {
    image: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&w=800&q=75",
    category: "Sports",
    title: "Indoor Sports Complex",
    width: 800,
    height: 600
  }
];

const CategoryFilter = React.memo(({ activeCategory, onCategoryChange }: {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}) => (
  <div className="flex flex-wrap justify-center gap-3 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
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
));

CategoryFilter.displayName = 'CategoryFilter';

const GalleryItem = React.memo(({ item, index }: { item: GalleryItem; index: number }) => (
  <div
    className={`group relative ${
      index % 5 === 0 || index % 5 === 3 ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}
  >
    <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      <img
        src={item.image}
        alt={item.title}
        width={item.width}
        height={item.height}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />

      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-3 py-1 bg-green-600/90 text-white text-xs rounded-full mb-2">
            {item.category}
          </span>
          <h3 className="text-white text-lg font-bold">{item.title}</h3>
        </div>
      </div>
    </div>
  </div>
));

GalleryItem.displayName = 'GalleryItem';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = React.useState<Category>('All');

  const filteredItems = useMemo(() => 
    activeCategory === 'All' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <ImageIcon size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Our Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Campus Life & Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a visual tour through our state-of-the-art facilities and vibrant campus life
          </p>
        </div>

        <CategoryFilter 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <GalleryItem key={item.title} item={item} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-white border-2 border-green-600 text-primary-600 hover:bg-green-600 hover:text-white font-medium px-8 py-3 rounded-xl transition-all duration-300">
            View Full Gallery
            <ImageIcon size={20} />
          </button>
        </div>
      </div>
    </section>
    // created by GigaX - WEES PATEL
  );
}