import { useParams } from 'react-router-dom';

// Sample room data - in a real app, this would come from an API or context
const roomData = {
  1: {
    id: 1,
    name: 'Deluxe Ocean View',
    description: 'Wake up to stunning ocean views in our spacious deluxe room. Features a king-size bed, private balcony, and modern amenities.',
    price: 249,
    images: [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg'
    ],
    amenities: ['Ocean View', 'King Bed', 'Balcony', 'Free WiFi', 'Air Conditioning', 'Coffee Maker', 'Minibar', 'Safe'],
    size: '45 m²',
    maxOccupancy: 2,
    bedType: '1 King Bed',
    longDescription: 'Our Deluxe Ocean View rooms offer breathtaking views of the ocean from your private balcony. The spacious room features a comfortable king-size bed with premium linens, a sitting area, and a modern en-suite bathroom with rain shower.'
  },
  2: {
    id: 2,
    name: 'Executive Suite',
    description: 'Luxury at its finest with separate living area, premium furnishings, and exclusive access to the executive lounge.',
    price: 399,
    images: [
      'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg'
    ],
    amenities: ['Lounge Access', 'Living Area', 'Premium Amenities', 'City View', 'Free WiFi', 'Air Conditioning', 'Minibar'],
    size: '75 m²',
    maxOccupancy: 2,
    bedType: '1 King Bed',
    longDescription: 'Experience luxury in our Executive Suite, featuring a separate living area, premium furnishings, and exclusive access to the executive lounge with complimentary evening cocktails and breakfast.'
  },
  3: {
    id: 3,
    name: 'Family Suite',
    description: 'Spacious accommodation for the whole family with connecting rooms and family-friendly amenities.',
    price: 349,
    images: [
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg'
    ],
    amenities: ['2 Bedrooms', 'Kids Area', 'Kitchenette', 'Free WiFi', 'Air Conditioning', 'Microwave', 'Refrigerator'],
    size: '85 m²',
    maxOccupancy: 5,
    bedType: '1 King Bed + 2 Single Beds',
    longDescription: 'Perfect for families, our Family Suite offers spacious accommodation with connecting rooms, a kids play area, and family-friendly amenities. Includes complimentary breakfast for children under 12.'
  }
};

const RoomDetail = () => {
  const { id } = useParams();
  const room = roomData[id];

  if (!room) {
    return <div className="container mx-auto py-12 text-center">Room not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Room Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{room.name}</h1>
          <p className="text-xl md:text-2xl text-amber-400 font-medium">From ${room.price} per night</p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 h-96">
            <img
              src={room.images[0]}
              alt={room.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {room.images.slice(1).map((img, index) => (
              <div key={index} className="h-48">
                <img
                  src={img}
                  alt={`${room.name} ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Room Details</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">{room.longDescription}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="bg-white p-6 rounded-lg shadow-lg h-fit sticky top-4 border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Book This Room</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Check-in</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Check-out</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Guests</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                </select>
              </div>
              <button className="w-full bg-amber-600 text-white py-3 rounded-md font-medium hover:bg-amber-700 transition duration-200 text-lg">
                Book Now for ${room.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
