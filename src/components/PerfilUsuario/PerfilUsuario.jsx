import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CalificacionStars from '../CalificacionStars/CalificacionStars.jsx';
import AcuerdoModal from '../AcuerdoModal/AcuerdoModal.jsx';
import './PerfilUsuario.css';

function PerfilUsuario() {
  const { id } = useParams();
  const [mostrarModal, setMostrarModal] = useState(false);

  // Aquí se conecta con el backend real: GET /api/usuarios/:id
  const usuario = {
    id,
    nombre: 'Usuario demo',
    rol: 'trabajador',
    calificacion: 4,
  };

  return (
    <section className="perfil-usuario">
      <h2>{usuario.nombre}</h2>
      <p>Rol: {usuario.rol}</p>
      <CalificacionStars calificacion={usuario.calificacion} />

      <button onClick={() => setMostrarModal(true)}>
        Confirmar acuerdo
      </button>

      {mostrarModal && (
        <AcuerdoModal usuario={usuario} onCerrar={() => setMostrarModal(false)} />
      )}
    </section>
  );
}

export default PerfilUsuario;
