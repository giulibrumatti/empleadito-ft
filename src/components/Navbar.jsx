import { Link } from "react-router-dom";

const nav = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Empleados",
    link: "/empleados",
  },
  {
    name: "Agregar",
    link: "/agregar",
  },
];

function NavList() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row align-items-lg-center gap-2 gap-lg-3 mt-2 mt-lg-0">
      {nav.map((main) => (
        <li className="nav-item" key={main.name}>
          <Link
            className="nav-link px-2 text-dark fw-medium"
            to={main.link}
          >
            {main.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light mt-4 rounded px-4 py-3">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          Empleadito
        </a>
        <div className="d-none d-lg-block">
          <NavList />
        </div>
      </div>
    </nav>
  );
}
