import Container from './Container';

import { Link } from 'react-router-dom';

export default function Footer() {
  const categories = [
    { name: "Men's Fashion", count: 12 },
    { name: "Women's Fashion", count: 8 },
    { name: "Accessories", count: 15 },
    { name: "Electronics", count: 6 },
    { name: "Home & Garden", count: 9 },
    { name: "Sports & Outdoors", count: 4 },
    { name: "Beauty & Health", count: 7 },
    { name: "Books & Media", count: 3 }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Featured Categories Section */}
      <div className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors">
                  <span className="text-2xl font-bold">{category.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-400">{category.count} items</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-700 py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">PressMart.</h3>
              <p className="text-gray-400 mb-4">Your one-stop destination for the latest fashion trends, electronics, and lifestyle products.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"><span className="text-sm">f</span></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"><span className="text-sm">t</span></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"><span className="text-sm">i</span></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"><span className="text-sm">y</span></div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link to="/returns" className="hover:text-white transition-colors">Returns</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates on new products and exclusive offers.</p>
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md focus:outline-none focus:border-blue-600" />
                <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400">© 2025 PressMart. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
