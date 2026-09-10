import { Link } from 'react-router-dom';
import CalificacionStars from '../CalificacionStars/CalificacionStars.jsx';
import './AnuncioCard.css';

function AnuncioCard({ anuncio }) {
  const { id, titulo, descripcion, ciudad, salario, calificacionAnunciante } = anuncio;

  return (
    <article className="anuncio-card">
      <h3 className="anuncio-card-titulo">{titulo}</h3>
      <p className="anuncio-card-descripcion">{descripcion}</p>
      <div className="anuncio-card-info">
        <span>{ciudad}</span>
        <span>${salario.toLocaleString('es-CO')}</span>
      </div>
      <CalificacionStars calificacion={calificacionAnunciante} />
      <Link to={`/perfil/${id}`} className="anuncio-card-boton">
        Ver detalles y postularme
      </Link>
    </article>
  );
}

export default AnuncioCard;
