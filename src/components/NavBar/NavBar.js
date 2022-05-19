import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar sticky-top">
      <h1>MercadoTown Cursos&nbsp;</h1><span className='navbar--version'>(v.0.1)</span>
      <div>
        <ul className="navbar-ul">
          <li className="nav-link">Inicio</li>
          <li className="nav-link">Diseño</li>
          <li className="nav-link">Programación</li>
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
