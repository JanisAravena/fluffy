import React, { useState } from 'react';

const Home = () => {
  const [jugador, setJugador] = useState({
    nombre: "",
    salud: 100,
    inventario: [],
  });
  const [mensaje, setMensaje] = useState("");
  const [mostrarInput, setMostrarInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const opciones = ["explorar", "descansar", "buscar comida", "buscar agua", "ver inventario", "salir"];

  const obtenerRespuesta = (nuevoMensaje) => {
    setMensaje(nuevoMensaje);
    setMostrarInput(true);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    const accion = inputValue.toLowerCase();
    if (opciones.includes(accion)) {
      realizarAccion(accion);
    } else {
      setMensaje(`Acción no válida. Opciones: ${opciones.join(", ")}`);
    }
    setInputValue("");
  };

  const realizarAccion = (accion) => {
    switch (accion) {
      case "explorar":
        // Lógica para explorar
        break;
      case "descansar":
        // Lógica para descansar
        break;
      case "buscar comida":
        // Lógica para buscar comida
        break;
      case "buscar agua":
        // Lógica para buscar agua
        break;
      case "ver inventario":
        setMensaje(`Inventario: ${jugador.inventario.join(", ")}`);
        break;
      case "salir":
        setMensaje("¡Gracias por jugar!");
        setJugador({ ...jugador, salud: 0 }); // Terminar el juego
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>¡Bienvenido a la isla misteriosa!</h1>
      <p>{mensaje}</p>
      {mostrarInput && (
        <form onSubmit={manejarSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe tu acción aquí"
          />
          <button type="submit">Enviar</button>
        </form>
      )}
      {!mostrarInput && (
        <button onClick={() => obtenerRespuesta("¿Cuál es tu nombre?")}>Comenzar juego</button>
      )}
    </div>
  );
};

export default Home;

