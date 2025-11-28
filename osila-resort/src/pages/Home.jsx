import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import RoomCard from '../components/RoomCard';
import TestimonialCard from '../components/TestimonialCard';

// Sample data - in a real app, this would come from an API
const featuredRooms = [
  {
    id: 1,
    name: 'Deluxe Ocean View',
    description: 'Wake up to stunning ocean views in our spacious deluxe room. Features a king-size bed, private balcony, and modern amenities.',
    price: 249,
    image: '/images/modern-home.jpeg',
    amenities: ['Ocean View', 'King Bed', 'Balcony', 'Free WiFi']
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Luxury at its finest with a separate living area, premium furnishings, and exclusive access to the executive lounge.',
    price: 399,
    image: '/images/executive-suite.jpeg',
    amenities: ['Lounge Access', 'Living Area', 'Premium Amenities', 'City View']
  },
  {
    id: 3,
    name: 'Family Suite',
    description: 'Spacious accommodation for the whole family with connecting rooms, kids play area, and family-friendly amenities.',
    price: 349,
    image: '/images/family-suite.jpeg',
    amenities: ['2 Bedrooms', 'Kids Area', 'Kitchenette', 'Free WiFi']
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    comment: 'Absolutely stunning resort with exceptional service. The ocean view from our room was breathtaking. Will definitely be back!',
    room: 'Deluxe Ocean View',
    date: 'March 2023',
    avatar: '/images/40%20Times%20Designers%20Went%20All%20In%20And%20Designed%20The%20Most%20Fabulous%20Examples%20Of%20%E2%80%98Modern%20Architecture%E2%80%99.jpeg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    rating: 4,
    comment: 'Great experience overall. The staff was very attentive and the amenities were top-notch.',
    room: 'Executive Suite',
    date: 'April 2023',
    avatar: '/images/Dagestani%20beast.jpeg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'London, UK',
    rating: 5,
    comment: 'Perfect family vacation! The kids loved the pool and the family suite was spacious and comfortable.',
    room: 'Family Suite',
    date: 'May 2023',
    avatar: '/images/emily-rodriguez-2.jpg'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate featured rooms
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredRooms.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Welcome to Osila Resort
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Experience luxury and comfort in the heart of paradise. Our resort offers world-class amenities, exquisite dining, and unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Luxury Accommodations</h3>
              <p className="text-gray-600">Elegant rooms and suites designed for your comfort and relaxation.</p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">World-Class Dining</h3>
              <p className="text-gray-600">Exquisite cuisine prepared by our award-winning chefs.</p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">24/7 Concierge</h3>
              <p className="text-gray-600">Dedicated staff to ensure your every need is met.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Featured Rooms
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Experience luxury and comfort in our thoughtfully designed accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/rooms"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              View All Rooms
              <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Guests Say
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to book your stay?</span>
            <span className="block text-amber-100">Start your journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50"
              >
                Book Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-100 bg-amber-700 hover:bg-amber-800"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
