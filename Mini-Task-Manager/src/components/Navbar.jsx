import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeLinkStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <nav className="p-4 border-b">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-directory" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
            User Directory
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
