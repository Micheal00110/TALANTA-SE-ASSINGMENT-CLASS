import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p>Check out our latest posts:</p>
      <ul className="list-disc list-inside mt-4">
        <li>
          <Link to="/blog/1" className="text-blue-500 hover:underline">Post 1: Getting Started with React</Link>
        </li>
        <li>
          <Link to="/blog/2" className="text-blue-500 hover:underline">Post 2: Mastering State Management</Link>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
