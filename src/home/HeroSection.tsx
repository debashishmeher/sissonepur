import  { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Banner1 from "../photos/banner1.jpg";
import Banner2 from "../photos/banner2.jpg";
import { Link } from "react-router-dom";

const slides = [
   {
    image: Banner1,
    title: "Education Is The",
    highlight: "Key To Success",
    description:
      "Empowering minds and shaping futures through quality education. Join us on a journey of discovery, innovation, and academic excellence.",
  },
  {
    image:
      Banner2,
    title: "Shaping Tomorrow's",
    highlight: "Education is the best key to success in life",
    description:
      "Our comprehensive curriculum and experienced faculty ensure that every student reaches their full potential.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="relative h-screen w-full bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white group-hover:scale-110 transition-transform duration-300 w-4 h-4 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white group-hover:scale-110 transition-transform duration-300 w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
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
            {/* Background Image with loading state */}
            <div className="relative h-screen w-full">
  {isLoading && (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
      <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )}
  <img
    src={slide.image}
    alt={`Slide ${index + 1} background`}
    className="w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out"
    onLoad={() => setIsLoading(false)}
  />
</div>


            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto w-full transform translate-y-[-10%] space-y-4 md:space-y-6">
                {/* Welcome Text */}
                <h2 className="text-green-300 text-sm md:text-base lg:text-lg tracking-wider uppercase mb-2 animate-fade-in ">
                  Welcome to SUKANTI International School
                </h2>
                
                {/* Main Title */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-up">
                  {slide.title}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                    {slide.highlight}
                  </span>
                </h1>
                
                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mt-4 animate-fade-in">
                  {slide.description}
                </p>
                
                {/* CTA Button */}
                <div className="mt-8 animate-fade-in">
                  <Link to="/about" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}