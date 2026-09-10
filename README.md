# ChambaPro — Front-end

Front-end del proyecto formativo ChambaPro (marketplace laboral), construido
con **React + Vite** y **React Router** para la navegación entre vistas.

Evidencia: `GA7-220501096-AA4-EV03` — Componente front-end del proyecto
formativo y proyectos de clase.

## 🧩 Componentes

- `Navbar` — barra de navegación superior.
- `AnuncioCard` — tarjeta de resumen de una oferta de trabajo.
- `PublicarAnuncioForm` — formulario para publicar un anuncio.
- `PerfilUsuario` — vista de perfil (anunciante o trabajador).
- `CalificacionStars` — estrellas de calificación (lectura/edición).
- `AcuerdoModal` — modal de confirmación de acuerdo.

## 🚀 Cómo correr el proyecto

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

## 🔌 Backend

El front-end espera un backend en `http://localhost:4000/api/anuncios`
(Node.js + Express). Si el backend no está corriendo, la página de inicio
muestra datos de demostración para poder navegar la interfaz de todas
formas.

## 🗂️ Rutas

| Ruta          | Componente            | Descripción                     |
|---------------|------------------------|----------------------------------|
| `/`           | `Home`                 | Feed de anuncios de empleo       |
| `/publicar`   | `PublicarAnuncioForm`  | Formulario de nuevo anuncio      |
| `/perfil/:id` | `PerfilUsuario`        | Perfil de un usuario específico  |
