import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoomCard from '../components/RoomCard';

// Sample room data - in a real app, this would come from an API
const allRooms = [
  {
    id: 1,
    name: 'Deluxe Ocean View',
    description: 'Wake up to stunning ocean views in our spacious deluxe room. Features a king-size bed, private balcony, and modern amenities. Perfect for couples or solo travelers seeking comfort with a view.',
    price: 249,
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
    amenities: ['Ocean View', 'King Bed', 'Balcony', 'Free WiFi', 'Air Conditioning', 'Coffee Maker', 'Minibar', 'Safe'],
    size: '45 m²',
    maxOccupancy: 2,
    bedType: '1 King Bed'
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Luxury at its finest with a separate living area, premium furnishings, and exclusive access to the executive lounge. Enjoy personalized butler service and complimentary evening cocktails.',
    price: 399,
    image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg',
    amenities: ['Lounge Access', 'Living Area', 'Premium Amenities', 'City View', 'Free WiFi', 'Air Conditioning', 'Minibar', 'Nespresso Machine'],
    size: '75 m²',
    maxOccupancy: 2,
    bedType: '1 King Bed or 2 Double Beds'
  },
  {
    id: 3,
    name: 'Family Suite',
    description: 'Spacious accommodation for the whole family with connecting rooms, kids play area, and family-friendly amenities. Includes complimentary breakfast for children under 12.',
    price: 349,
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
    amenities: ['2 Bedrooms', 'Kids Area', 'Kitchenette', 'Free WiFi', 'Air Conditioning', 'Microwave', 'Refrigerator', 'Dining Table'],
    size: '85 m²',
    maxOccupancy: 5,
    bedType: '1 King Bed + 2 Single Beds'
  },
  {
    id: 4,
    name: 'Garden View Room',
    description: 'Peaceful room overlooking our lush tropical gardens. Features a queen-size bed and private terrace. Perfect for nature lovers seeking tranquility.',
    price: 199,
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    amenities: ['Garden View', 'Queen Bed', 'Private Terrace', 'Free WiFi', 'Air Conditioning', 'Coffee Maker'],
    size: '38 m²',
    maxOccupancy: 2,
    bedType: '1 Queen Bed'
  },
  {
    id: 5,
    name: 'Presidential Suite',
    description: 'The ultimate in luxury with separate living and dining areas, a spacious bedroom, and a lavish bathroom with a jacuzzi. Includes a personal butler and complimentary airport transfers.',
    price: 799,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    amenities: ['Butler Service', 'Jacuzzi', 'Dining Area', 'Panoramic Views', 'Free WiFi', 'Airport Transfer', 'Minibar', 'Nespresso Machine', 'Premium Toiletries'],
    size: '120 m²',
    maxOccupancy: 3,
    bedType: '1 King Bed + Sofa Bed'
  },
  {
    id: 6,
    name: 'Honeymoon Suite',
    description: 'Romantic retreat with a king-size canopy bed, private plunge pool, and breathtaking ocean views. Includes a bottle of champagne and romantic turndown service.',
    price: 599,
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
    amenities: ['Private Pool', 'Ocean View', 'King Canopy Bed', 'Champagne on Arrival', 'Free WiFi', 'Air Conditioning', 'Minibar', 'Premium Bathrobes'],
    size: '65 m²',
    maxOccupancy: 2,
    bedType: '1 King Bed'
  }
];

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(1000);
  const [sortBy, setSortBy] = useState('featured');

  const filteredRooms = allRooms
    .filter(room => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'suite') {
        return room.name.toLowerCase().includes('suite');
      }
      return room.name.toLowerCase().includes(selectedCategory);
    })
    .filter(room => room.price <= priceRange)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0; // featured order (original order)
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-64 flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury resort room"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Rooms & Suites</h1>
          <p className="mt-4 text-xl text-amber-100">Luxury accommodations for every need</p>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md"
              >
                <option value="all">All Rooms</option>
                <option value="suite">Suites</option>
                <option value="deluxe">Deluxe</option>
                <option value="ocean">Ocean View</option>
                <option value="family">Family</option>
              </select>
            </div>
            
            <div className="flex-1">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Max Price: ${priceRange}
              </label>
              <input
                type="range"
                id="price"
                min="100"
                max="1000"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$100</span>
                <span>$1000+</span>
              </div>
            </div>
            
            <div className="flex-1">
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={room.image}
                    alt={room.name}
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    ${room.price} <span className="text-xs font-normal">/ night</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="mr-4">{room.size}</span>
                    <span>•</span>
                    <span className="mx-4">{room.maxOccupancy} {room.maxOccupancy > 1 ? 'Guests' : 'Guest'}</span>
                    <span>•</span>
                    <span className="ml-4">{room.bedType}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.slice(0, 4).map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        +{room.amenities.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/rooms/${room.id}`}
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                    >
                      View Details →
                    </Link>
                    <Link
                      to={`/contact?room=${room.id}`}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md text-sm transition duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No rooms found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange(1000);
                  setSortBy('featured');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Reset filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-amber-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Can't find what you're looking for?</span>
            <span className="block text-amber-100">Contact our reservations team for assistance.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
