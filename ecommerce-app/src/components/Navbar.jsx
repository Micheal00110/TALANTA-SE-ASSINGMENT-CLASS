import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-yellow-500 p-3 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-black">
        MyShop
      </Link>

      {/* Search Bar */}
      <div className="flex w-1/2">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 rounded-l-md border border-gray-300"
        />
        <button className="bg-black text-white px-3 rounded-r-md">
          <Search size={18} />
        </button>
      </div>

      {/* Icons */}
      <div className="flex gap-4 items-center">
        <Link to="/profile" className="flex items-center gap-1">
          <User /> <span>Profile</span>
        </Link>
        <Link to="/cart" className="flex items-center gap-1">
          <ShoppingCart /> <span>Cart</span>
        </Link>
        <Link to="/login" className="bg-black text-white px-4 py-1 rounded-md">
          Login
        </Link>
      </div>
    </nav>
  );
}
