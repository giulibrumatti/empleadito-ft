import { Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import ListEmployees from "./components/ListEmployees";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/empleados" element={<ListEmployees />} />
        <Route path="/agregar" element={<AddEmployee />} />
        <Route path="/editar/:id" element={<EditEmployee />} />
      </Routes>
    </>
  );
}

export default App;
