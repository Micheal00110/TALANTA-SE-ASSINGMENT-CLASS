import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Blog Post {postId}</h1>
      <p>This is the content for blog post {postId}.</p>
      <Link to="/blog" className="text-blue-500 hover:underline mt-4 inline-block">Back to Blog</Link>
    </div>
  );
};

export default BlogPost;
