import { useState } from "react";
import { Link } from "react-router-dom";
import { Truck, Handshake, DollarSign, MessageCircle } from "lucide-react";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";

// Local product images
const HERO_MAN = "/images/man-glasses.jpg";
const HERO_WOMAN = "/images/woman-fashion.jpg";
const PRODUCT_PHOTO = "/images/5675d1a4-8b34-481a-8dcf-4e776739e812.jpeg";

export default function Home() {
  const [activeTab, setActiveTab] = useState("New Arrival");
  const [showSecondImage, setShowSecondImage] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Tan Solid Laptop Backpack",
      price: `KES ${((149) * 140).toLocaleString()} - KES ${((185) * 140).toLocaleString()}`,
      rating: "***** (2)",
      image: "/images/Michael Kors Jet Set Travel Extra Small Tote Carryall Bag Powder Blush Vanilla 193599759388 _ eBay.jpeg",
      discount: "15% OFF"
    },
    {
      id: 2,
      name: "Designer Sunglasses Collection",
      price: "KES 15,400",
      rating: "***** (5)",
      image: "/images/1PC Unisex Classic Square Frame Sunglasses Punk Fashion Eyewear For Daily Life Or Driving.jpeg",
      discount: null
    },
    {
      id: 3,
      name: "Luxury Chronograph Watch",
      price: "KES 16,100",
      rating: "***** (3)",
      image: "/images/AX Armani Exchange Analog Bracelet Watch & Leather Strap Set _ Dillard's.jpeg",
      discount: "FEATURED"
    },
    {
      id: 4,
      name: "Olivia Burton London Collection",
      price: "KES 6,860",
      rating: "***** (4)",
      image: "/images/Olivia Burton London.jpeg",
      discount: null
    },
    {
      id: 5,
      name: "Black Analogue and Digital...",
      price: `KES ${Math.round(1599 * 140).toLocaleString()}`,
      rating: "***** (1)",
      image: "/images/What's On Your Wrist_.jpeg",
      discount: null
    },
    {
      id: 6,
      name: "Men's Fashion Summer Collection",
      price: "KES 7,000",
      rating: "***** (2)",
      image: "/images/Mens Old Money Summer Outfit Idea Fashion.jpeg",
      discount: null
    },
    {
      id: 7,
      name: "Gorgeous Mauve Handbag",
      price: "KES 10,920",
      rating: "***** (3)",
      image: "/images/Gorgeous mauve handbag purchased early in the….jpeg",
      discount: null
    },
    {
      id: 8,
      name: "Luxury Watch Collection 2025",
      price: "KES 237,860",
      rating: "***** (1)",
      image: "/images/🕒✨ Dive into our collection of luxury watches and….jpeg",
      discount: null
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-light text-blue-400" style={{fontFamily: 'cursive'}}>
                  Season Sale
                </h2>
                <h1 className="text-6xl font-bold text-black">
                  MEN'S FASHION
                </h1>
                <p className="text-xl text-gray-600">
                  Min. 35-70% Off
                </p>
              </div>
              <div className="flex space-x-4">
                <Link to="/products" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 transition-transform">
                  SHOP NOW
                </Link>
                <Link to="/about" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 transition-transform">
                  READ MORE
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gray-200 rounded-lg flex items-center justify-center relative">
                <img 
                  src={showSecondImage ? HERO_WOMAN : HERO_MAN} 
                  alt={showSecondImage ? "Woman fashion" : "Man with glasses"}
                  className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
                />
                <button
                  onClick={() => setShowSecondImage(!showSecondImage)}
                  className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Next Image
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Feature Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Truck className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Free Shipping</h3>
              <p className="text-gray-600">On All Orders Over $99.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Handshake className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Secure Payment</h3>
              <p className="text-gray-600">We ensure secure payment.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <DollarSign className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">100% Money Back</h3>
              <p className="text-gray-600">30 Days Return Policy.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <MessageCircle className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Online Support</h3>
              <p className="text-gray-600">24/7 Dedicated Support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Banner - Women's Style */}
            <div className="lg:col-span-2 bg-gray-200 rounded-lg p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">New Arrivals</h3>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Women's Style</h2>
                <p className="text-xl text-gray-600 mb-4">Up to 70% Off</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  Shop Now
                </button>
              </div>
              <div className="absolute right-0 top-0 w-64 h-full">
                <img 
                  src={HERO_WOMAN} 
                  alt="Woman in pink sweater"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column Banners */}
            <div className="space-y-6">
              {/* Handbag Banner */}
              <div className="bg-amber-100 rounded-lg p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-amber-800 mb-1">25% OFF</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Handbag</h3>
                  <button className="text-blue-600 font-semibold">Shop Now &gt;</button>
                </div>
                <div className="absolute right-0 top-0 w-24 h-24">
                  <img 
                    src={PRODUCT_PHOTO} 
                    alt="Yellow handbag"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Watch Banner */}
              <div className="bg-gray-200 rounded-lg p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-gray-800 mb-1">45% OFF</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Watch</h3>
                  <button className="text-blue-600 font-semibold">Shop Now &gt;</button>
                </div>
                <div className="absolute right-0 top-0 w-24 h-24">
                  <img 
                    src={PRODUCT_PHOTO} 
                    alt="Analog watch"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Backpack Banner */}
              <div className="bg-amber-200 rounded-lg p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-sm text-gray-600 mb-1">Accessories</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Backpack</h3>
                  <div className="text-sm text-gray-600 mb-2">Min. 40-80% Off</div>
                  <button className="text-blue-600 font-semibold">Shop Now &gt;</button>
                </div>
                <div className="absolute right-0 top-0 w-24 h-24">
                  <img 
                    src={PRODUCT_PHOTO} 
                    alt="Brown backpack"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
            <div className="flex justify-center space-x-8">
              {["New Arrival", "Best Selling", "Top Rated"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 border-b-2 font-semibold ${
                    activeTab === tab 
                      ? "border-blue-600 text-blue-600" 
                      : "border-transparent text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={{ ...product }} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Promotional Banners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Men's Fashion Banner */}
            <div className="bg-gray-200 rounded-lg p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Weekend Sale</h3>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Men's Fashion</h2>
                <p className="text-xl text-gray-600 mb-4">Flat 70% Off</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  Shop Now &gt;
                </button>
              </div>
              <div className="absolute right-0 top-0 w-64 h-full">
                <img 
                  src={HERO_MAN} 
                  alt="Man with bag"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Women's Wear Banner */}
            <div className="bg-gray-200 rounded-lg p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Fashion Style</h3>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Women's Wear</h2>
                <p className="text-xl text-gray-600 mb-4">Min. 35-70% Off</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  Shop Now &gt;
                </button>
              </div>
              <div className="absolute right-0 top-0 w-64 h-full">
                <img 
                  src={HERO_WOMAN} 
                  alt="Woman in patterned top"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

