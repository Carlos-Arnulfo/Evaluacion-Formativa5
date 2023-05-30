import '../Estilos/Botones.css'

function Botones({ agregar, borrar }) {
  return (
    <div className="Botones">

      <button className="Agregar" onClick={agregar}>
        Agregar Usuario
      </button>
      <button className="Borrar" onClick={borrar}>
        Eliminar usuario
      </button>
      
    </div>
  );
}

export default Botones;