import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Profile from "./pages/Profile.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import Terms from "./pages/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            } />
            <Route path="/products" element={
              <ErrorBoundary>
                <Products />
              </ErrorBoundary>
            } />
                        <Route path="/" element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            } />
            <Route path="/products" element={
              <ErrorBoundary>
                <Products />
              </ErrorBoundary>
            } />
            <Route path="/about" element={
              <ErrorBoundary>
                <AboutUs />
              </ErrorBoundary>
            } />
            <Route path="/profile" element={
              <ErrorBoundary>
                <Profile />
              </ErrorBoundary>
            } />
            <Route path="/cart" element={
              <ErrorBoundary>
                <Cart />
              </ErrorBoundary>
            } />
            <Route path="/login" element={
              <ErrorBoundary>
                <Login />
              </ErrorBoundary>
            } />
            <Route path="/register" element={
              <ErrorBoundary>
                <Register />
              </ErrorBoundary>
            } />
            <Route path="/contact" element={
              <ErrorBoundary>
                <Contact />
              </ErrorBoundary>
            } />
            <Route path="/terms" element={
              <ErrorBoundary>
                <Terms />
              </ErrorBoundary>
            } />
            <Route path="*" element={
              <ErrorBoundary>
                <NotFound />
              </ErrorBoundary>
            } />
          </Routes>
        </div>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
