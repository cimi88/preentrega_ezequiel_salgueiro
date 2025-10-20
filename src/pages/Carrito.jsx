import Boton from "../components/Boton";
import "./carrito.css";

export default function CarritoCompras({ carrito, setCarrito }) {
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const quitarCantidad = (idProducto) => {
        const carritoActualizado = carrito // creo un nuevo carrito
            .map((producto) => {
                if (producto.id === idProducto) {
                    // busco el producto para bajar su cantidad
                    if (producto.cantidad === 1) {
                        return null; // si su cantidad es 1, devuelvo un "null" en vez de un producto
                    }
                    return { ...producto, cantidad: producto.cantidad - 1 }; // si la cant > 1, devuelvo el producto con la cantidad actualizada
                }
                return producto; // si no es el producto que busco, lo devuelvo sin actualizar
            })
            .filter((producto) => producto !== null); // si el producto es "null" no se agrega al array (de esta forma el array tendra productos sin actualizar y actualizados)

        setCarrito(carritoActualizado);
    };

    const agregarCantidad = (idProducto) => {
        const nuevoCarrito = carrito.map((producto) => {
            // creo un nuevo carrito
            if (producto.id === idProducto) {
                // busco el producto para aumentar su cantidad
                return {
                    ...producto, // si existe, traigo ese producto
                    cantidad: producto.cantidad + 1, // le actualizo la cantidad y lo retorno
                };
            }
            return producto; // si no es el producto que busco, lo devuelvo sin actualizar (de esta forma el carrito se crea con todos los productos con la cantidad actualizada y sin actualizar segun corresponda)
        });
        setCarrito(nuevoCarrito); // asigno el carrito con las cantidades actualizadas
    };

    const total = carrito.reduce((sum, item) => {
        const cantidad = item.cantidad || 1;
        return sum + Number(item.precio) * cantidad;
    }, 0);

    return (
        <div className="carrito">
            <h3 className="titulo">Carrito</h3>
            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div className="lista-items">
                    {carrito.map((item) => (
                        <div className="items-descripcion" key={item.id}>
                            <div className="nombre-precio">
                                <span className="nombre">{item.nombre}</span>
                                <span className="precio">${Number(item.precio).toFixed(3)}</span>
                                <span className="relleno"></span>
                            </div>
                            <div className="cantidad">
                                <span style={{ marginRight: "8px" }}>(Cantidad: {item.cantidad})</span>
                                <button onClick={() => quitarCantidad(item.id)}>-</button>
                                <button onClick={() => agregarCantidad(item.id)}>+</button>
                            </div>
                        </div>
                    ))}

                    <div>
                        <hr />
                        Total: ${Number(total).toFixed(3)}
                    </div>
                    <Boton clase={"vaciar"} children={"Vaciar"} funcion={() => vaciarCarrito()}/>
                </div>
            )}
        </div>
    );
}
