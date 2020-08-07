import React from 'react';
/*import Contador from './components/Contador';
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import FormHook from './components/FormHook';
import EjemploUno from './components/EjemploUno';*/
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {
  const sujeto = {
      nombre: "pepe",
      urlImagen: "https://via.placeholder.com/64",
      texto: "Hola yo soy una persona"
  }

  return (
    <div className="container mt-5">
      <h1>Props</h1>
      <Saludo persona = "pepe"/>
      <Saludo persona = "jose"/>
      <Comentario sujeto = {sujeto}/>
      <Comentario sujeto = {sujeto}/>
      <Comentario sujeto = {sujeto}/>
    </div>
  );
}

export default App;
