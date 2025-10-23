import ProductImg from "../assets/product1.svg";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const productImages = [
    "/images/Michael Kors Jet Set Travel Extra Small Tote Carryall Bag Powder Blush Vanilla 193599759388 _ eBay.jpeg",
    "/images/Olivia Burton London.jpeg",
    "/images/1PC Unisex Classic Square Frame Sunglasses Punk Fashion Eyewear For Daily Life Or Driving.jpeg",
    "/images/Men Metal Geometric Frame Sunglasses Summer Vintage Black Shades Sunglasses Sun Glasses.jpeg",
    "/images/AX Armani Exchange Analog Bracelet Watch & Leather Strap Set _ Dillard's.jpeg",
    "/images/What's On Your Wrist_.jpeg",
    "/images/Mens Old Money Summer Outfit Idea Fashion.jpeg",
    "/images/Gorgeous mauve handbag purchased early in the….jpeg",
    "/images/🕒✨ Dive into our collection of luxury watches and….jpeg",
    "/images/5675d1a4-8b34-481a-8dcf-4e776739e812.jpeg",
    "/images/2d5aa5fa-cc43-4a21-9ee0-82a2638d5d85.jpeg",
    "/images/fe24bb64-c059-4638-b051-05e768ed8ab8.jpeg"
  ];

  const productNames = [
    "Michael Kors Tote Bag",
    "Olivia Burton Watch",
    "Classic Square Sunglasses",
    "Designer Metal Shades",
    "Armani Exchange Watch Set",
    "Luxury Timepiece Collection",
    "Summer Fashion Essentials",
    "Mauve Designer Handbag",
    "Premium Watch Collection",
    "Leather Accessories",
    "Fashion Essentials 2025",
    "Luxury Lifestyle Collection"
  ];

  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: productNames[i],
    price: `KES ${(Math.round((20000 + i * 5000))).toLocaleString()}`,
    image: productImages[i],
    rating: "****" + (i % 2 ? "*" : ""),
  }));

  return (
    <div className="min-h-screen bg-white py-12">
      <Container>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <input className="border border-gray-300 rounded px-3 py-2" type="text" placeholder="Search products..." />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </div>
  );
}

