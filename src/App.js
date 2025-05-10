import { Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import ListEmployees from "./components/ListEmployees";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/empleados" element={<ListEmployees />} />
        <Route path="/agregar" element={<AddEmployee />} />
      </Routes>
    </>
  );
}

export default App;
