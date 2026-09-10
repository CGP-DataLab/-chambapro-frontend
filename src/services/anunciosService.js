const API_URL = 'http://localhost:4000/api/anuncios';

export async function obtenerAnuncios() {
  const respuesta = await fetch(API_URL);
  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar los anuncios');
  }
  return respuesta.json();
}

export async function publicarAnuncio(datosAnuncio) {
  const respuesta = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datosAnuncio),
  });
  if (!respuesta.ok) {
    throw new Error('No se pudo publicar el anuncio');
  }
  return respuesta.json();
}
