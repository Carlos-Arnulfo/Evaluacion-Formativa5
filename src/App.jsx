import './App.css'
import Botones from './Componentes/Botones'
import Tarjeta from './Componentes/Tarjeta';
import { useState} from 'react';

const url = 'https://randomuser.me/api/?gender=female';

function App() {
  const [tarjetas, setTarjetas] = useState([]);

  const agregar = async () => {
    try {

      const response = await fetch(url);
      const result = await response.json();
      const usuario = result.results[0];
      
      const nuevaTarjeta = {

        id: Math.random().toString(),
        foto: usuario.picture.large,
        nombre: `${usuario.name.first} ${usuario.name.last}`,
        seleccionar: false

      };

      setTarjetas([...tarjetas, nuevaTarjeta]);
    } catch (error) {
      console.error(error);
    }
  };

  const seleccionarTarjeta = (id) => {

    const nuevasTarjetas = tarjetas.map((tarjeta) => {
      if (tarjeta.id === id) {
        return { ...tarjeta, seleccionar: !tarjeta.seleccionar };
      }
      return tarjeta;

    });

    setTarjetas(nuevasTarjetas);
  };

  const borrar = () => {

    const nuevasTarjetas = tarjetas.filter((tarjeta) => !tarjeta.seleccionar);
    setTarjetas(nuevasTarjetas);

  };

  return (

    <div className='App'>

      <h1>Random Users</h1>
      <Botones agregar={agregar} borrar={borrar} />

      <div className='contenedor-tarjeta'>

        {tarjetas.map((tarjeta) => (

          <Tarjeta
            key={tarjeta.id}
            foto={tarjeta.foto}
            nombre={tarjeta.nombre}
            seleccionar={tarjeta.seleccionar}
            Click={() => seleccionarTarjeta(tarjeta.id)}
          />
        ))}

      </div>
    </div>
  );
}

export default App;