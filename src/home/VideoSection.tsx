import { PlayCircle, X } from "lucide-react";
import { useState } from "react";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('http://localhost:5173/src/photos/banner1.jpg')" }}>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Experience Excellence <br /> <span className="text-green-400">At Sukanti International School</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Join a future-driven community where innovation meets education. Explore world-class 
          programs in business, design, and technology.
        </p>

        {/* Play Button */}
        <div className="mt-8 align-center justify-center">
          <button 
            className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold 
            shadow-lg hover:bg-gray-200 transition duration-300 "
            onClick={() => setIsOpen(true)}
          >
            <PlayCircle size={32} className="text-green-500" />
            Watch Video
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
    <div className="relative w-full max-w-3xl bg-black rounded-lg shadow-lg">
      
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 md:top-4 md:right-4 p-2 md:p-3 bg-red-600 text-white rounded-full flex items-center justify-center w-8 h-8 md:w-10 md:h-10 shadow-lg transition-all duration-300 hover:bg-red-700"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>

      {/* Video Frame */}
      <iframe
        className="w-full h-[300px] md:h-[500px] rounded-lg"
        src="https://www.youtube.com/embed/X_M3FjfLXdI?autoplay=1&si=e4O1KR1lVYfWM5B3&amp;start=7"
        title="Video"
        allowFullScreen
      ></iframe>

     
    </div>
  </div>
)}

    </div>
  );
}
