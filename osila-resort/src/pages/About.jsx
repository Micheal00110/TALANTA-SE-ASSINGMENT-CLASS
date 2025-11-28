import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-96 flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1499793983690-29d59a6f5ced?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury resort exterior"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Story</h1>
          <p className="mt-4 text-xl text-amber-100">Discover the essence of Osila Resort</p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Welcome to Osila Resort
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Nestled along the pristine coastline, Osila Resort is a sanctuary of luxury and tranquility. 
              Since our founding in 2010, we've been dedicated to providing our guests with an 
              unforgettable experience that combines world-class hospitality with the natural beauty of our surroundings.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our resort was built on the belief that true luxury lies in the details. From the moment you arrive, 
              you'll notice our commitment to excellence in every aspect of your stay.
            </p>
            <div className="mt-8">
              <Link
                to="/rooms"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700"
              >
                Explore Our Rooms
              </Link>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Resort amenities"
            />
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white px-4 py-2 rounded-tl-lg">
              <span className="font-bold">Since</span> 2010
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to creating unforgettable experiences through exceptional service and sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Exceptional Service',
                description: 'Our dedicated team goes above and beyond to ensure every guest feels valued and cared for throughout their stay.',
                icon: (
                  <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: 'Sustainable Luxury',
                description: 'We are committed to minimizing our environmental impact while maintaining the highest standards of luxury and comfort.',
                icon: (
                  <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Local Community',
                description: 'We support and collaborate with local businesses and communities to create meaningful connections and authentic experiences.',
                icon: (
                  <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team is here to ensure your stay is nothing short of extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'General Manager',
                image: 'https://randomuser.me/api/portraits/women/44.jpg'
              },
              {
                name: 'Michael Chen',
                role: 'Head Chef',
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              {
                name: 'Elena Rodriguez',
                role: 'Guest Relations',
                image: 'https://randomuser.me/api/portraits/women/68.jpg'
              },
              {
                name: 'David Kim',
                role: 'Head of Maintenance',
                image: 'https://randomuser.me/api/portraits/men/75.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-amber-100">
                  <img
                    className="w-full h-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-amber-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability */}
        <div className="mt-24 bg-amber-50 rounded-2xl p-8 md:p-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Commitment to Sustainability
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At Osila Resort, we believe in preserving the natural beauty that surrounds us. 
                Our sustainability initiatives include solar energy, water conservation, and 
                partnerships with local farmers and producers.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  'Solar Energy',
                  'Water Conservation',
                  'Local Sourcing',
                  'Waste Reduction'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    className="w-full h-64 object-cover"
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Solar panels"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md mt-8">
                  <img
                    className="w-full h-64 object-cover"
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bef6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Organic garden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-amber-600 mt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to experience Osila Resort?</span>
            <span className="block text-amber-100">Book your stay with us today.</span>
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
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-700 hover:bg-amber-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
