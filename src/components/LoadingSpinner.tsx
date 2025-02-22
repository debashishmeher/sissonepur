import logo from '../photos/logo.jpg';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      {/* School Logo */}
      <div className="relative w-24 h-24 mb-8">
        <img
          src={logo}
          alt="SUKANTI Logo"
          className="w-full h-full object-cover rounded-full animate-pulse"
        />
        {/* Rotating Circle */}
        <div className="absolute inset-0 border-4 border-primary-500 rounded-full animate-spin-slow" 
          style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent' }} 
        />
        {/* Pulsing Glow */}
        <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl animate-pulse" />
      </div>
    </div>
  );
}