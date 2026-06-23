import { HashRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { UnderConstruction } from "./pages/UnderConstruction/UnderConstruction";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/acceso" element={<UnderConstruction />} />
        {/* Cualquier ruta desconocida vuelve a la landing */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </HashRouter>
  );
}
