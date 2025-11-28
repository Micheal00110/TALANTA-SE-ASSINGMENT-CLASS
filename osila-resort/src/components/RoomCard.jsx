import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const RoomCard = ({ room }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Create a new image object to test loading
    const img = new Image();
    img.src = room.image;
    
    img.onload = () => {
      setImageSrc(room.image);
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${room.image}`);
      setImageError(true);
      // Try to load a fallback image if available
      const fallbackImage = '/images/room-placeholder.jpg';
      if (fallbackImage && fallbackImage !== room.image) {
        const fallbackImg = new Image();
        fallbackImg.src = fallbackImage;
        fallbackImg.onload = () => {
          setImageSrc(fallbackImage);
          setImageLoaded(true);
          setImageError(false);
        };
      }
    };

    return () => {
      // Cleanup
      img.onload = null;
      img.onerror = null;
    };
  }, [room.image]);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/room/${room.id}`} className="block">
        <div className="h-48 overflow-hidden relative bg-gray-100">
          {/* Loading Skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
          )}
          
          {/* Error State */}
          {imageError && (
            <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
              <div className="text-center p-4">
                <svg 
                  className="w-12 h-12 text-gray-300 mx-auto mb-2" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm text-gray-400">Image not available</p>
              </div>
            </div>
          )}
          
          {/* Image */}
          {!imageError && imageSrc && (
            <img
              src={imageSrc}
              alt={room.name}
              className={`w-full h-full object-cover transition-all duration-300 ${!imageLoaded ? 'opacity-0' : 'opacity-100 hover:scale-105'}`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </Link>
      <div className="p-6">
        <Link to={`/room/${room.id}`} className="block">
          <h3 className="text-xl font-semibold text-gray-800 hover:text-amber-600 transition-colors">
            {room.name}
          </h3>
        </Link>
        <p className="text-amber-600 font-bold text-lg mt-2">${room.price} <span className="text-sm font-normal text-gray-500">/ night</span></p>
        <p className="text-gray-600 mt-2 line-clamp-2">{room.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>
       <Link
  to={`/room/${room.id}`}
  className="mt-4 inline-block text-sm font-medium text-amber-600 hover:text-amber-700"
>
  View Details →
</Link>
      </div>
    </div>
  );
};

export default RoomCard;
