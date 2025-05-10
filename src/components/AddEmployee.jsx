
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddEmployee() {
  let navegation = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    departament: "",
    salary: ""
  })
  
  const{name, departament, salary} = employee;

  const onInputChange = (e) => {
    setEmployee({...employee, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/empleadito-app/crearEmpleado";
    await axios.post(urlBase, employee);
    navegation('/empleados');
  }

  return (
    <div className="card h-100 w-100 overflow-auto p-5 justify-content-center d-flex align-items-center">
      <h1 className="h3 text-secondary">Agregar Empleado</h1>
      <p className="text-muted mt-2">
        Introduce los datos del empleado para agregarlo
      </p>

      <form className="mt-4 mb-3" onSubmit={(e) => onSubmit(e)} style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label fw-semibold">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="name"
            placeholder="Juan Perez"
            required={true}
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="departamento" className="form-label fw-semibold">
            Departamento
          </label>
          <input
            type="text"
            className="form-control"
            id="departamento"
            name="departament"
            placeholder="Sistemas"
            required={true}
            value={departament}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="salario" className="form-label fw-semibold">
            Salario
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="salario"
            name="salary"
            placeholder="3000.00"
            required={true}
            value={salary}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Agregar
        </button>
      </form>
    </div>
  );
}
