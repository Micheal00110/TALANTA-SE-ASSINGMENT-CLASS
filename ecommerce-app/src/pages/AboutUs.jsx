import Container from "../components/Container";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About PressMart</h1>
          
          <div className="mb-12">
            <img 
              src="/images/Mens Old Money Summer Outfit Idea Fashion.jpeg" 
              alt="Fashion Collection" 
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
          </div>

          <div className="prose lg:prose-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2025, PressMart has become Kenya's premier destination for luxury fashion, 
              watches, and accessories. We curate the finest collections from world-renowned brands,
              bringing international style to our discerning customers.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To provide unparalleled access to luxury fashion while maintaining the highest standards
              of customer service and authenticity. We believe in making luxury accessible without
              compromising on quality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
                <p className="text-gray-600">Every product in our collection is carefully authenticated 
                and verified for quality assurance.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-gray-600">We pride ourselves on exceptional customer service and 
                a seamless shopping experience.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Our Collections</h2>
            <p className="text-gray-600 mb-6">
              From designer watches to luxury accessories, our carefully curated collections 
              represent the pinnacle of fashion and style. Each piece is selected to ensure
              it meets our exacting standards for quality and design.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}