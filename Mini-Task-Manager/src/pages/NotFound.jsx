import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Go to Home</Link>
    </div>
  );
};

export default NotFound;
