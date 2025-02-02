import  { useState, useEffect } from "react";
import {  ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
    title: "Education Is The",
    highlight: "Key To Success",
    description:
      "Empowering minds and shaping futures through quality education. Join us on a journey of discovery, innovation, and academic excellence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    title: "Shaping Tomorrow's",
    highlight: "Leaders Today",
    description:
      "Our comprehensive curriculum and experienced faculty ensure that every student reaches their full potential.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
    title: "Building A Better",
    highlight: "Future Together",
    description:
      "State-of-the-art facilities and innovative teaching methods prepare students for the challenges of tomorrow.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all duration-300 group"
      >
        <ChevronLeft className="text-white group-hover:scale-110 transition-transform duration-300 w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all duration-300 group"
      >
        <ChevronRight className="text-white group-hover:scale-110 transition-transform duration-300 w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 pt-80">
              <h2 className="text-primary-600 text-base tracking-wide uppercase mb-2">
                Welcome to SUKANTI
              </h2>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {slide.title}{"  "}
                
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  {slide.highlight}
                </span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mt-4">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    // created by GigaX - WEES PATEL
  );
}
