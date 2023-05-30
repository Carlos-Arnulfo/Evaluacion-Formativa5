import '../Estilos/Tarjeta.css'

function Tarjeta({ foto, nombre, seleccionar, Click }) {

  return (

    <div className={`Tarjeta ${seleccionar ? 'seleccionada' : ''}`} onClick={Click}>
      <div className='imagen-usuario'>
        <img src={foto} alt='user' />
      </div>

      <div className='datos-usuario'>
        <p>{nombre}</p>
      </div>
      
    </div>
  );
}

export default Tarjeta;
