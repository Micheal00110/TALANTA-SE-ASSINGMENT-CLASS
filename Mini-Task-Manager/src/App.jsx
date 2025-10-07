import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import UserDirectory from './pages/UserDirectory';
import NotFound from './pages/NotFound';
import TaskManager from './components/TaskManager';
import './App.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="">
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold">⚡ Task Manager</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/user-directory" element={<UserDirectory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
