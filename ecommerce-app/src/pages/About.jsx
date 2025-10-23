export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose prose-lg">
        <p className="text-lg text-gray-600 mb-6">
          Welcome to our premium fashion and lifestyle store. We curate the finest collection 
          of luxury products to bring elegance and style to your everyday life.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Founded in 2023, we started with a simple mission: to make luxury accessible 
          while maintaining the highest standards of quality and authenticity.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Authentic luxury products</li>
          <li>Exceptional customer service</li>
          <li>Secure shopping experience</li>
          <li>Quality guaranteed</li>
        </ul>
      </div>
    </div>
  );
}