import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">ChambaPro</Link>
      <nav className="navbar-links">
        <NavLink to="/" end className="navbar-link">
          Inicio
        </NavLink>
        <NavLink to="/publicar" className="navbar-link">
          Publicar anuncio
        </NavLink>
        <NavLink to="/perfil/1" className="navbar-link">
          Mi perfil
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
