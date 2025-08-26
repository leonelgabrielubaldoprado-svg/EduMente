import { NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/logo.svg" alt="EduMente"/>
        <span>EduMente</span>
      </div>
      <ul className="navlinks">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/cursos">Cursos</NavLink></li>
        <li><NavLink to="/categorias">Categorías</NavLink></li>
        <li><NavLink to="/instructores">Instructores</NavLink></li>
        <li><NavLink to="/sobre-nosotros">Sobre nosotros</NavLink></li>
        <li><NavLink to="/login">Iniciar sesión</NavLink></li>
        <li><NavLink to="/register">Registrarse</NavLink></li>
      </ul>
    </nav>
  )
}
