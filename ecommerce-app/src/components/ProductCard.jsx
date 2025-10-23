import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden animate-fade-in hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs text-primary-600 font-medium mb-1">{product.category || 'Fashion'}</p>
          <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-primary-600 transition-colors">{product.name}</h3>
        </div>
        <div className="text-yellow-500 text-sm mb-2">{product.rating || "★★★★☆"}</div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-gray-800">{product.price}</div>
          {product.oldPrice && <div className="text-sm text-gray-500 line-through">{product.oldPrice}</div>}
        </div>
        <div className="flex items-center justify-between gap-2">
          <Link 
            to={`/cart`} 
            className="flex-1 flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transform hover:-translate-y-0.5 transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to cart
          </Link>
          <Link 
            to={`/products`} 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
