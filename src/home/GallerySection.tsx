import React, { useMemo, useCallback, useState } from "react";
import { Image as ImageIcon, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";

// Types
const categories = ["All", "Academic", "Campus", "Events", "Sports", "Activities", "Functions"] as const;
type Category = typeof categories[number];

interface GalleryItem {
  image: string;
  category: Exclude<Category, "All">;
  title: string;
}

// Images
import science1 from "../photos/science1.png";
import science2 from "../photos/science2.png";
import g1 from "../photos/g1.png";
import g2 from "../photos/g2.png";
import g3 from "../photos/g3.png";
import g4 from "../photos/g4.png";
import g5 from "../photos/g5.png";
import g6 from "../photos/g6.png";
import g7 from "../photos/g7.png";
import g8 from "../photos/g8.png";
import g9 from "../photos/g9.jpg";
import g10 from "../photos/g10.jpg";
import g11 from "../photos/g11.jpg";
import g12 from "../photos/g12.jpg";
import g13 from "../photos/g13.jpg";
import g14 from "../photos/g14.jpg";
import g15 from "../photos/g15.jpg";
import g16 from "../photos/g16.jpg";

// Gallery Data
const galleryItems: GalleryItem[] = [
  { image: science1, category: "Academic", title: "Science" },
  { image: science2, category: "Academic", title: "Science" },
  { image: g1, category: "Activities", title: "Guitar Class" },
  { image: g2, category: "Activities", title: "1KM Tiranga Rally" },
  { image: g3, category: "Events", title: "Food Festival" },
  { image: g4, category: "Campus", title: "Campus" },
  { image: g5, category: "Events", title: "Science Exhibition" },
  // { image: g6, category: "Activities", title: "Yoga Day" },
  { image: g7, category: "Activities", title: "Human Chain Ganpati" },
  { image: g8, category: "Sports", title: "Annual Sports" },
  { image: g9, category: "Activities", title: "Guitar Class" },
  { image: g10, category: "Activities", title: "Yoga Class" },
  { image: g11, category: "Sports", title: "Indoor Sports Complex" },
  { image: g12, category: "Sports", title: "Colouring Activity" },
  { image: g13, category: "Sports", title: "Indoor Sports Complex" },
  { image: g14, category: "Campus", title: "SIS" },
  { image: g15, category: "Campus", title: "Prayer Class" },
  { image: g16, category: "Activities", title: "Sand Art" },
];

// Category Filter
const CategoryFilter = React.memo(
  ({
    activeCategory,
    onCategoryChange,
  }: {
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
              ? "bg-green-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {category === "All" && <Filter size={16} />}
          {category}
        </button>
      ))}
    </div>
  )
);
CategoryFilter.displayName = "CategoryFilter";

// Gallery Item
const GalleryGridItem = React.memo(
  ({
    item,
    index,
    onImageClick,
  }: {
    item: GalleryItem;
    index: number;
    onImageClick: (index: number) => void;
  }) => (
    <div
      className={`group relative ${
        index % 6 === 0 || index % 6 === 3 ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
      onClick={() => onImageClick(index)}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          src={item.image}
          alt={item.title}
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
  )
);
GalleryGridItem.displayName = "GalleryGridItem";

// Main Gallery Section
export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  const handleImageClick = (index: number) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const showNextImage = () => {
    if (modalIndex !== null) {
      setModalIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
    }
  };

  const showPrevImage = () => {
    if (modalIndex !== null) {
      setModalIndex(
        (prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <ImageIcon size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">Our Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a visual tour through our state-of-the-art facilities and vibrant campus life
          </p>
        </div>

        {/* Filter */}
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <GalleryGridItem
              key={item.title + index}
              item={item}
              index={index}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {modalIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              className="absolute -top-5 -right-5 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700/50 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
              onClick={showPrevImage}
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700/50 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
              onClick={showNextImage}
            >
              <ChevronRight size={32} />
            </button>

            {/* Modal Image */}
            <img
              src={filteredItems[modalIndex].image}
              alt={filteredItems[modalIndex].title}
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
