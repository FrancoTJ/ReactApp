import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar sticky-top">
      <h1>Poster Market&nbsp;</h1><span className='navbar--version'>(v.0.2)</span>
      <div>
        <ul className="navbar-ul">
          <li className="nav-link">Productos</li>
          <li className="nav-link">Nosotros</li>
          <li className="nav-link">Contacto</li>
          <li className="nav-link">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
