import { useState } from 'react';
import './CalificacionStars.css';

function CalificacionStars({ calificacion = 0, editable = false, onCalificar }) {
  const [valorSeleccionado, setValorSeleccionado] = useState(calificacion);
  const estrellas = [1, 2, 3, 4, 5];

  const manejarClick = (valor) => {
    if (!editable) return;
    setValorSeleccionado(valor);
    if (onCalificar) onCalificar(valor);
  };

  return (
    <div
      className="calificacion-stars"
      role="img"
      aria-label={`Calificación: ${valorSeleccionado} de 5`}
    >
      {estrellas.map((estrella) => (
        <span
          key={estrella}
          className={estrella <= valorSeleccionado ? 'estrella activa' : 'estrella'}
          onClick={() => manejarClick(estrella)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default CalificacionStars;
