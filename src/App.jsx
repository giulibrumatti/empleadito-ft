import ListEmployees from "./components/ListEmployees";
import NavbarS from "./components/NavbarS";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarS />
      <Routes>
        <Route path="/empleados" element={<ListEmployees />} />
      </Routes>
    </>
  );
}

export default App;
