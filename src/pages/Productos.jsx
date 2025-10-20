import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./productos.css";
import Carrito from "./Carrito";
import Boton from "../components/Boton";

const apiProductos = "https://68d4873f214be68f8c697821.mockapi.io/api/productos";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        // para usar tryCatch primero defino un metodo, y adentro implemento el try/catch, en el try va el llamado a la api y las demas instrucciones, y en el catch manejo los errores, y por ultimo el finally que se ejecuta SIEMPRE
        const cargarProductos = async () => {
            try {
                const res = await axios.get(`${apiProductos}`);
                setProductos(res.data);
            } catch (error) {
                console.error(error); // esto se ve en la consola del navegador
                setError("Hubo un problema al cargar los productos."); // esto se renderiza en la pagina
            } finally {
                setCargando(false); // react trabaja mejor la instruccion dentro del bloque finally, no suelta
            }
        };

        cargarProductos();
    }, []);

    if (cargando) return <h4>Cargando...</h4>; // este cartel siempre dejara de verse, haya o no errores, debido al finally
    if (error) return <h4>{error}</h4>; // aca se muestra el string asignado con setError en el catch

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, { ...producto, cantidad: 1 }]); // agrego el producto con una nueva propiedad "cantidad" y le asigno 1
    };

    const obtenerCantidad = (productoId) => {
        const item = carrito.find((i) => i.id === productoId);
        return item ? item.cantidad : 0;
    };

    return (
        <>
            <div className="lista-productos">
                <h1 style={{textAlign:"center"}}>Productos</h1>
                <div className="card-producto">
                    {productos.map((producto) => (
                        <div className="producto" key={producto.id}>
                            <img src={producto.avatar} alt={producto.nombre} title={producto.nombre} />
                            <span>
                                <b>{producto.nombre}: </b>
                                <hr />
                            </span>
                            <span>{producto.descripcion}</span>
                            <hr style={{width:"100%"}}/>
                            <Link style={{margin:"8px 0"}} to={`/productos/${producto.id}`} state={{ producto }}><Boton clase={"verMas"} children={"Ver más"}/></Link>
                            {obtenerCantidad(producto.id) === 0
                                ? <Boton clase={"agregar"} children={"Agregar al carrito"} funcion={() => agregarAlCarrito(producto)}/>
                                : ""
                            }
                        </div>
                    ))}
                </div>
            </div>
            <Carrito carrito={carrito} setCarrito={setCarrito} />
        </>
    );
}

export default Productos;
