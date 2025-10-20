import "./boton.css"

function Boton({children, funcion, clase}) {
  return (
    <button className={"boton " + (clase || "")} onClick={funcion}>{children}</button>
  )
}

export default Boton