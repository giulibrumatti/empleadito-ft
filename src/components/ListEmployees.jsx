import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Nombre", "Departamento", "Salario", "Acción"];

export default function ListEmployees() {
  const urlBase = "http://localhost:8080/empleadito-app/empleados";
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    addEmployees();
  }, []);

  const addEmployees = async () => {
    const result = await axios.get(urlBase);
    console.log("Resultado de cargar nuestros datos");
    console.log(result.data);
    setEmployee(result.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`${urlBase}/${id}`, employee);
    addEmployees();
  };

  return (
    <div className="card h-100 w-100 overflow-auto p-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="text-start">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employee.map(({ id, name, departament, salary }, index) => (
              <tr key={name} className={index % 2 === 0 ? "table-light" : ""}>
                <td>{name}</td>
                <td>{departament}</td>
                <td>
                  <NumericFormat
                    value={salary}
                    displayType="text"
                    thousandSeparator={true}
                    prefix="$"
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td>
                  <Link
                    className="btn btn-warning btn-sm me-3"
                    to={`/editar/${id}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger btn-sm "
                    onClick={()=> deleteEmployee(id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
