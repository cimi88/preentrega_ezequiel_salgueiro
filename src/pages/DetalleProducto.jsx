import { /* useParams, */ Link, useLocation } from "react-router-dom";
import "./detalle-producto.css";

function DetalleProducto() {
    // const { id } = useParams(); // esto en realidad no tiene utilidad aca, era solo para mostrar como usar un parametro pasado por la URL
    const location = useLocation(); // devuelve un objeto con información de la ruta actual
    const producto = location.state?.producto;

    return (
        <div className="card-detalle">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <img src={producto.avatar} alt={producto.nombre} title={producto.nombre} />
            <button>Agregar al carrito</button>
            <Link to={"/productos"}>Volver</Link>
        </div>
    );
}

export default DetalleProducto;
