import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import PublicarAnuncioForm from './components/PublicarAnuncioForm/PublicarAnuncioForm.jsx';
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario.jsx';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publicar" element={<PublicarAnuncioForm />} />
          <Route path="/perfil/:id" element={<PerfilUsuario />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
