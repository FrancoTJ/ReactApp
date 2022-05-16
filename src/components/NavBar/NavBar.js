import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar sticky-top">
      <h1>MercadoTown Cursos (v.0.1)</h1>
      <div>
        <ul class="navbar-nav">
          <li class="nav-link">
              Inicio
          </li>
          <li class="nav-link">
              Diseño
          </li>
          <li class="nav-link">
              Programación
          </li>
          <li class="nav-link">
              Contacto
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
