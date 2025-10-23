import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Heart, ChevronDown } from "lucide-react";
import Container from "./Container";

export default function Navbar() {
  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-blue-600 text-white text-sm py-2">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-xs">
              <span>support@pressmart.com</span>
              <span>+(123) 4567890</span>
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <span>Welcome to Our Store!</span>
              <div className="flex items-center space-x-2">
                <span>English</span>
                <ChevronDown size={14} />
              </div>
              <div className="flex items-center space-x-2">
                <span>$ Dollar (US)</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <nav className="bg-white shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-black">PressMart.</Link>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <Link to="/">Home</Link>
                <ChevronDown size={14} />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <Link to="/products">Shop</Link>
                <ChevronDown size={14} />
              </div>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
             <Link to="/blog">Blog</Link>
                <ChevronDown size={14} />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
           <span>KES Kenyan Shilling</span>
              <button className="text-gray-700 hover:text-blue-600"><Search size={20} /></button>
              <button className="text-gray-700 hover:text-blue-600"><Heart size={20} /></button>
              <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
