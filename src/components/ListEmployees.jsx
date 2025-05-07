import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from 'react-number-format';

const TABLE_HEAD = ["Nombre", "Departamento", "Salario", "Acción"];

export default function ListEmployees() {
  const urlBase = "http://localhost:8080/empleadito-app/empleados";
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    addEmployees();
  }
  , []);

  const addEmployees = async () => {
    const result = await axios.get(urlBase);
    console.log("Resultado de cargar nuestros datos");
    console.log(result.data);
    setEmployees(result.data);
  }

  return (
    <Card className="h-full w-full overflow-scroll p-20">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map(({ name, departament, salary }, index) => (
            <tr key={name} className="even:bg-gray-50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {departament}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  <NumericFormat value={salary} displayType="text" thousandSeparator={true} prefix="$" decimalScale={2} fixedDecimalScale={true} />
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  Editar
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
