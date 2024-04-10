import React, { useState, useRef, useEffect } from 'react';
import backgroundMusic from '../assets/audio/la-atmosfera_4.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Home = () => {
  const [nombreJugador, setNombreJugador] = useState('');
  const [etapa, setEtapa] = useState('inicio');
  const [nivel, setNivel] = useState(1);
  const [mensaje, setMensaje] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);

  const audioRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    audioRef.current.volume = 0.9;
    audioRef.current.play();
    audioRef.current.loop = true;

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const niveles = {
    1: {
      pregunta: 'Fluffy está atrapado en una jaula. ¿Cómo lo ayudas?',
      opciones: ['Usar una llave', 'Romper la jaula', 'Buscar ayuda'],
      correcta: 'Usar una llave',
    },
    // ... resto de tus niveles
  };

  const iniciarJuego = () => {
    setMensaje(`Hola, ${nombreJugador}. Fluffy está en peligro y necesita tu ayuda. ¿Estás dispuesto a ayudarlo?`);
    setEtapa('decision');
  };

  const tomarDecision = (decision) => {
    if (decision === 'sí') {
      setEtapa('niveles');
    } else {
      setMensaje('Fluffy está triste por tu decisión. Un hechizo de mala suerte te ha sido lanzado.');
      setEtapa('fin');
    }
  };

  const elegirOpcion = (opcion) => {
    if (opcion === niveles[nivel].correcta) {
      setMensaje(`¡Correcto! Has ayudado a Fluffy a superar el nivel ${nivel}.`);
      if (nivel < 5) {
        setNivel((prevNivel) => prevNivel + 1);
      } else {
        setMensaje('¡Felicidades! Has ayudado a Fluffy a liberarse del mal.');
        setEtapa('fin');
      }
    } else {
      setMensaje('Esa no parece ser la mejor opción. Intenta de nuevo.');
    }
  };

  return (
    <div className="main-container">
      <div className="overlay">
        <div className="container">
          <h1 className="Titulo">Fluffy programando</h1>
          <p>{mensaje}</p>
          {etapa === "inicio" && (
            <div className="mt-3">
              <input
                className="formNombre"
                type="text"
                value={nombreJugador}
                onChange={(e) => setNombreJugador(e.target.value)}
                placeholder="Escribe tu nombre"
              />
                <div className='BotonComenzar'>
                  <Button  onClick={iniciarJuego} className="btncomenzar">Comenzar</Button>
                  </div>


            </div>
          )}
          {/* Aquí iría el resto de tu código según la etapa en la que se encuentre el juego */}
        </div>
      </div>
      <div >
      <Button onClick={toggleAudio} className="btn-musica">
        <FontAwesomeIcon icon={isPlaying ? faVolumeUp : faVolumeMute} size="2x" />
      </Button>
      </div>
    </div>
  );
};

export default Home;
