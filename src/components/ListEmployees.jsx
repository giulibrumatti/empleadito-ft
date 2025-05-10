import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

const TABLE_HEAD = ["Nombre", "Departamento", "Salario", "Acción"];

export default function ListEmployees() {
  const urlBase = "http://localhost:8080/empleadito-app/empleados";
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    addEmployees();
  }, []);

  const addEmployees = async () => {
    const result = await axios.get(urlBase);
    console.log("Resultado de cargar nuestros datos");
    console.log(result.data);
    setEmployees(result.data);
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
            {employees.map(({ name, departament, salary }, index) => (
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
                  <a href="/" className="text-primary text-decoration-none">
                    Editar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
