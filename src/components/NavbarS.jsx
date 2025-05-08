import {
  Navbar,
  Typography
} from "@material-tailwind/react";
import React from "react";

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
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {nav.map((main) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link
            className="flex items-center hover:text-blue-500 transition-colors"
            to={main.link}
          >
            {main.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export default function NavbarS() {
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 text-gray-900 bg-slate-200 mt-4 rounded">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Empleadito
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
      </div>
    </Navbar>
  );
}
