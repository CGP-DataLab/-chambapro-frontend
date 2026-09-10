import { useEffect, useState } from 'react';
import AnuncioCard from '../components/AnuncioCard/AnuncioCard.jsx';
import { obtenerAnuncios } from '../services/anunciosService.js';

// Datos de respaldo para poder navegar la interfaz aunque el
// backend todavía no esté corriendo (útil para revisión y demo).
const ANUNCIOS_DEMO = [
  {
    id: 1,
    titulo: 'Domiciliario',
    descripcion: 'Entrega de pedidos en el centro de la ciudad, turno de tarde.',
    ciudad: 'Villavicencio',
    salario: 45000,
    calificacionAnunciante: 4,
  },
  {
    id: 2,
    titulo: 'Aseo general',
    descripcion: 'Limpieza de oficinas, disponibilidad los fines de semana.',
    ciudad: 'Villavicencio',
    salario: 38000,
    calificacionAnunciante: 5,
  },
  {
    id: 3,
    titulo: 'Mesero/a',
    descripcion: 'Atención al cliente en restaurante, turno nocturno.',
    ciudad: 'Villavicencio',
    salario: 42000,
    calificacionAnunciante: 3,
  },
];

function Home() {
  const [anuncios, setAnuncios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerAnuncios()
      .then(setAnuncios)
      .catch(() => setAnuncios(ANUNCIOS_DEMO))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando anuncios...</p>;

  return (
    <section className="home-feed">
      {anuncios.map((anuncio) => (
        <AnuncioCard key={anuncio.id} anuncio={anuncio} />
      ))}
    </section>
  );
}

export default Home;
