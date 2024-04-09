import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [nombreJugador, setNombreJugador] = useState("");
  const [etapa, setEtapa] = useState("inicio");
  const [nivel, setNivel] = useState(1);
  const [mensaje, setMensaje] = useState("");

  const niveles = {
    1: {
      pregunta: "Fluffy está atrapado en una jaula. ¿Cómo lo ayudas?",
      opciones: ["Usar una llave", "Romper la jaula", "Buscar ayuda"],
      correcta: "Usar una llave",
    },
    2: {
      pregunta: "Fluffy necesita cruzar un río. ¿Qué haces?",
      opciones: ["Construir un puente", "Nadar juntos", "Encontrar un bote"],
      correcta: "Encontrar un bote",
    },
    3: {
      pregunta: "Fluffy está enfermo. ¿Cómo lo curas?",
      opciones: ["Darle medicina", "Llevarlo al veterinario", "Dejarlo descansar"],
      correcta: "Llevarlo al veterinario",
    },
    4: {
      pregunta: "Fluffy está perdido en un bosque. ¿Cómo lo encuentras?",
      opciones: ["Seguir sus huellas", "Gritar su nombre", "Usar un GPS"],
      correcta: "Seguir sus huellas",
    },
    5: {
      pregunta: "Fluffy está siendo perseguido por un malvado hechicero. ¿Cómo lo proteges?",
      opciones: ["Esconder a Fluffy", "Enfrentar al hechicero", "Crear un hechizo de protección"],
      correcta: "Crear un hechizo de protección",
    },
  };

  const iniciarJuego = () => {
    setMensaje(`Hola, ${nombreJugador}. Fluffy está en peligro y necesita tu ayuda. ¿Estás dispuesto a ayudarlo?`);
    setEtapa("decision");
  };

  const tomarDecision = (decision) => {
    if (decision === "sí") {
      setEtapa("niveles");
    } else {
      setMensaje("Fluffy está triste por tu decisión. Un hechizo de mala suerte te ha sido lanzado.");
      setEtapa("fin");
    }
  };

  const elegirOpcion = (opcion) => {
    if (opcion === niveles[nivel].correcta) {
      setMensaje(`¡Correcto! Has ayudado a Fluffy a superar el nivel ${nivel}.`);
      if (nivel < 5) {
        setNivel(nivel + 1);
      } else {
        setMensaje("¡Felicidades! Has ayudado a Fluffy a liberarse del mal.");
        setEtapa("fin");
      }
    } else {
      setMensaje("Esa no parece ser la mejor opción. Intenta de nuevo.");
    }
  };

  return (
    <div className="overlay">
  <div className="container">
    <h1 className="Titulo">¡Ayuda a Fluffy a liberarse del mal!</h1>
    <p>{mensaje}</p>
    {etapa === "inicio" && (
      <div className="mt-3">
        <div className='si'>
        <input         
          className="formNombre"
          type="text"
          value={nombreJugador}
          onChange={(e) => setNombreJugador(e.target.value)}
          placeholder="Escribe tu nombre"
        />
        <div className='BtnInicio'>
            <button onClick={iniciarJuego} className="btn btn-primary comenzar">Comenzar</button>
        </div>
      </div>
      </div>
    )}
    {etapa === "decision" && (
      <div className="mt-3">
        <button onClick={() => tomarDecision("sí")} className="btn btn-success mb-2 siJuego">Sí, quiero ayudar</button>
        <button onClick={() => tomarDecision("no")} className="btn btn-danger noJuego">No, gracias</button>
      </div>
    )}
    {etapa === "niveles" && (
      <div className="mt-3 text-center">
        <p>{niveles[nivel].pregunta}</p>
        <div className="mx-auto" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {niveles[nivel].opciones.map((opcion, index) => (
            <button key={index} onClick={() => elegirOpcion(opcion)} className={`btn btn-primary btn-opcion`}>
              <span>{opcion}</span>
            </button>
          ))}
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default Home;
