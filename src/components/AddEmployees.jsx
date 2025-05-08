import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React from "react";

export default function AddEmployees() {
  return (
    <Card color="transparent" shadow={false} className="h-full w-full overflow-scroll p-20">
      <Typography variant="h1" color="gray">
        Agregar Empleado
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Introduce los datos del empleado para agregarlo
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="gray" className="-mb-3">
            Nombre
          </Typography>
          <Input
            size="lg"
            placeholder="Juan Perez"
            className=" !border-blue-gray-200 focus:!border-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="gray" className="-mb-3">
            Departamento
          </Typography>
          <Input
            size="lg"
            placeholder="Sistemas"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="gray" className="-mb-3">
            Salario
          </Typography>
          <Input
            size="lg"
            placeholder="3000.00"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6" fullWidth>
          agregar
        </Button>
      </form>
    </Card>
  );
}
