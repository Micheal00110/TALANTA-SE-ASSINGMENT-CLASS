import { useState } from 'react';

const TestimonialCard = ({ testimonial }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Generate initials for fallback avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 relative">
          {!imageLoaded && !imageError && (
            <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse flex items-center justify-center">
              <span className="text-gray-400 text-xs">Loading...</span>
            </div>
          )}
          {imageError ? (
            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="text-amber-600 font-medium">
                {getInitials(testimonial.name)}
              </span>
            </div>
          ) : (
            <img
              className={`h-12 w-12 rounded-full object-cover ${!imageLoaded ? 'hidden' : ''}`}
              src={testimonial.avatar}
              alt={testimonial.name}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          )}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {renderStars(testimonial.rating)}
      </div>
      
      <blockquote className="flex-1">
        <p className="text-gray-600 italic">"{testimonial.comment}"</p>
      </blockquote>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          Stayed in <span className="font-medium">{testimonial.room}</span> • {testimonial.date}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
