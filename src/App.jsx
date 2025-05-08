import { Route, Routes } from "react-router-dom";
import AddEmployees from "./components/AddEmployees";
import ListEmployees from "./components/ListEmployees";
import NavbarS from "./components/NavbarS";

function App() {
  return (
    <>
      <NavbarS />
      <Routes>
        <Route path="/empleados" element={<ListEmployees />} />
        <Route path="/agregar" element={<AddEmployees />} />
      </Routes>
    </>
  );
}

export default App;
