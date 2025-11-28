import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury resort with pool and palm trees"
        />
      </div>
      
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10 w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Experience Luxury at <span className="text-amber-400">Osila Resort</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover paradise with our world-class amenities, breathtaking views, and unparalleled service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/rooms"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300"
          >
            Our Rooms
          </Link>
          <Link
            to="/contact"
            className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 border-2 border-white rounded-md text-lg transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
