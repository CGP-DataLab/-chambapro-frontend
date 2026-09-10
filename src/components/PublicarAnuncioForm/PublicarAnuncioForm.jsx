import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { publicarAnuncio } from '../../services/anunciosService.js';
import './PublicarAnuncioForm.css';

function PublicarAnuncioForm() {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    titulo: '',
    descripcion: '',
    ciudad: '',
    salario: '',
  });
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    setEnviando(true);
    setError(null);

    try {
      // Antes tenía un error capturando el id generado en el backend;
      // ahora tomamos el id directamente de la respuesta del servidor.
      const anuncioCreado = await publicarAnuncio({
        ...formulario,
        salario: Number(formulario.salario),
      });

      navigate(`/perfil/${anuncioCreado.id}`);
    } catch (errorPeticion) {
      setError(errorPeticion.message);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form className="publicar-anuncio-form" onSubmit={manejarEnvio}>
      <h2>Publicar nuevo anuncio</h2>

      <label htmlFor="titulo">Título del empleo</label>
      <input
        id="titulo"
        name="titulo"
        type="text"
        value={formulario.titulo}
        onChange={manejarCambio}
        required
      />

      <label htmlFor="descripcion">Descripción</label>
      <textarea
        id="descripcion"
        name="descripcion"
        rows={4}
        value={formulario.descripcion}
        onChange={manejarCambio}
        required
      />

      <label htmlFor="ciudad">Ciudad</label>
      <input
        id="ciudad"
        name="ciudad"
        type="text"
        value={formulario.ciudad}
        onChange={manejarCambio}
        required
      />

      <label htmlFor="salario">Salario ofrecido (COP)</label>
      <input
        id="salario"
        name="salario"
        type="number"
        value={formulario.salario}
        onChange={manejarCambio}
        required
      />

      {error && <p className="mensaje-error">{error}</p>}

      <button type="submit" disabled={enviando}>
        {enviando ? 'Publicando...' : 'Publicar anuncio'}
      </button>
    </form>
  );
}

export default PublicarAnuncioForm;
