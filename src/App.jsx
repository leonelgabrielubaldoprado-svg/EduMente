import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Cursos from './pages/Cursos'
import Categorias from './pages/Categorias'
import Instructores from './pages/Instructores'
import SobreNosotros from './pages/SobreNosotros'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App(){
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:categoria" element={<Cursos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/instructores" element={<Instructores />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
