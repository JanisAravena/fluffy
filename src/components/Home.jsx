import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [jugador, setJugador] = useState({
    nombre: "",
    salud: 100,
    inventario: [],
  });
  const [mensaje, setMensaje] = useState("");
  const [mostrarInput, setMostrarInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const nombre = jugador.nombre;
  const OPCIONES = ["explorar", "descansar", "buscar comida", "buscar agua", "ver inventario", "salir"];
  const MENSAJE_ACCION_INVALIDA = `Acción no válida. Opciones: ${OPCIONES.join(", ")}`;
  const MENSAJE_AGRADECIMIENTO = "¡Gracias por jugar!";

  const obtenerRespuesta = (nuevoMensaje) => {
    setMensaje(nuevoMensaje);
    setMostrarInput(true);
  };

  const manejarSubmit = (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente
    const accion = inputValue.toLowerCase();
    if (OPCIONES.includes(accion)) {
      realizarAccion(accion);
    } else {
      setMensaje(MENSAJE_ACCION_INVALIDA);
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
        setMensaje(MENSAJE_AGRADECIMIENTO);
        setJugador({ ...jugador, salud: 0 }); // Terminar el juego
        break;
      default:
        break;
    }
  };

  const handleNombreChange = (e) => {
    setInputValue(e.target.value); // Guardar el valor del nombre en el estado inputValue
  };

  const handleNombreSubmit = (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente
    setJugador({ ...jugador, nombre: inputValue }); // Guardar el nombre cuando se envíe el formulario
    setMostrarInput(false); // Ocultar el formulario después de enviar el nombre
    setInputValue(""); // Limpiar el valor del nombre en el estado inputValue
    obtenerRespuesta("¿Qué quieres hacer ahora?"); // Mostrar la siguiente pregunta
  };

  return (
    <div className="container">
      <h1 className="display-4">¡Bienvenido a la isla misteriosa!</h1>
      <p className="lead">{mensaje}</p>
      <div className="nombre-jugador">{nombre && `Jugador: ${nombre}`}</div>
      {mostrarInput && (
        <form onSubmit={manejarSubmit} className="d-flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleNombreChange}
            placeholder="Escribe tu acción aquí"
            className="form-control mr-2"
          />
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      )}
      {!mostrarInput && !nombre && (
        <div>
          <form onSubmit={handleNombreSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleNombreChange}
              placeholder="Ingresa tu nombre"
              className="form-control"
            />
            <button type="submit" className="btn btn-primary mt-2">Comenzar juego</button>
          </form>
        </div>
      )}
      {!mostrarInput && nombre && (
        <button onClick={() => obtenerRespuesta("¿Qué quieres hacer ahora?")} className="btn btn-primary">Continuar</button>
      )}
    </div>
  );
};

export default Home;
