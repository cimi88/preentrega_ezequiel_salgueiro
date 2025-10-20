import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer.jsx";
import Inicio from "./pages/Inicio";
import Servicios from './pages/Servicios'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto.jsx'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/productos/:id" element={<DetalleProducto />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
