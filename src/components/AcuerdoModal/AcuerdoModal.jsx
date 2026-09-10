import './AcuerdoModal.css';

function AcuerdoModal({ usuario, onCerrar }) {
  return (
    <div className="acuerdo-modal-fondo">
      <div className="acuerdo-modal">
        <h3>Confirmar acuerdo con {usuario.nombre}</h3>
        <p>
          Al confirmar, ambas partes aceptan los términos del trabajo
          publicado. Este acuerdo quedará registrado en la plataforma.
        </p>
        <div className="acuerdo-modal-botones">
          <button onClick={onCerrar}>Cancelar</button>
          <button className="boton-confirmar" onClick={onCerrar}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcuerdoModal;
