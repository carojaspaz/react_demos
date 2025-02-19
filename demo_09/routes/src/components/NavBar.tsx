import { Link } from "react-router-dom";

import "../assets/style.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/profile/2">Perfil de Usuario</Link>
        </li>
        <li>
          <Link to="/client">List Clientes</Link>
        </li>
        <li>
          <Link to="/client/add">Agregar Cliente</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
