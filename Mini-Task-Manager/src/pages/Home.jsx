import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p className="mb-4">Welcome to the Task Manager application!</p>
      <button
        onClick={() => navigate('/services')}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Go to Services
      </button>
    </div>
  );
};

export default Home;
