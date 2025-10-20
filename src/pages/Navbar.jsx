import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <nav>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/servicios"}>Servicios</Link>
            <Link to={"/productos"}>Productos</Link>
        </nav>
    );
}

export default Navbar;
