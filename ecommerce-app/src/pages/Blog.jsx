import Container from "../components/Container";

export default function Blog() {
  const posts = [
    { 
      id: 1, 
      title: "Luxury Watches Guide 2025", 
      excerpt: "Discover this year's most exclusive timepieces and trends.", 
      img: "/images/AX Armani Exchange Analog Bracelet Watch & Leather Strap Set _ Dillard's.jpeg" 
    },
    { 
      id: 2, 
      title: "Designer Sunglasses Collection", 
      excerpt: "The ultimate guide to this season's must-have shades.", 
      img: "/images/1PC Unisex Classic Square Frame Sunglasses Punk Fashion Eyewear For Daily Life Or Driving.jpeg" 
    },
    { 
      id: 3, 
      title: "Luxury Bags & Accessories", 
      excerpt: "From totes to clutches - our premium selection revealed.", 
      img: "/images/Michael Kors Jet Set Travel Extra Small Tote Carryall Bag Powder Blush Vanilla 193599759388 _ eBay.jpeg" 
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <Container>
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{p.excerpt}</p>
                <a href="#" className="text-blue-600 font-medium">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
