import { categorias } from '../data/categorias'
import { Link } from "react-router-dom";

export default function Categorias(){
  const categorias = [
    { id: 1, nombre: "Programación", descripcion: "Aprende a crear apps y páginas web", icono: "💻" },
    { id: 2, nombre: "Diseño Gráfico", descripcion: "Domina Photoshop, Illustrator y más", icono: "🎨" },
    { id: 3, nombre: "Marketing Digital", descripcion: "Haz crecer negocios en internet", icono: "📊" },
    { id: 4, nombre: "Gastronomía", descripcion: "Cocina como un profesional", icono: "🍳" },
    { id: 5, nombre: "Bienestar", descripcion: "Cuida tu mente y cuerpo", icono: "🧘‍♂️" },
  ];

  return (
    <main>
      <section className="hero">
        <h2 className="section-title" style={{ color: "#fff" }}>Explora por Categorías</h2>
        <p style={{ opacity: .9 }}>Encuentra cursos según tus intereses</p>
      </section>
      <input 
        type="text" 
        placeholder="Buscar categoría..." 
        style={{ 
          padding: "10px", 
          border: "1px solid #ccc", 
          borderRadius: "8px", 
          margin: "20px 0", 
          width: "100%" 
        }}
      />
      <div className="grid">
        {categorias.map(cat => (
          <article
            key={cat.id}
            style={{
              background: "white",
              border: "1px solid #00ddffff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 6px rgba(255, 255, 255, 1)",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "40px" }}>{cat.icono}</div>
            <h3>{cat.nombre}</h3>
            <p>{cat.descripcion}</p>
            <div style={{ marginTop: "10px" }}>
              <h4 style={{ color: "#ea6969ff" }}>Cursos destacados:</h4>
              <ul>
                <li>Introducción a {cat.nombre}</li>
                <li>{cat.nombre} avanzado</li>
              </ul>
            </div>
            <Link to={`/cursos/${cat.nombre}`}>
              <button className="btn">Ver cursos</button>
            </Link>
          </article>
        ))}
      </div>
      <section style={{ marginTop: "40px", padding: "20px", background: "#dbfeeeff", borderRadius: "12px" }}>
        <h2 className="section-title">Estadísticas</h2>
        <p>Actualmente contamos con:</p>
        <ul>
          <li>+10 cursos en total</li>
          <li>+5 categorías diferentes</li>
          <li>+1,000 estudiantes registrados</li>
        </ul>
      </section>
      <section style={{ marginTop: "40px" }}>
        <h2 className="section-title">Lo que dicen nuestros estudiantes</h2>
        <blockquote style={{ fontStyle: "italic", borderLeft: "4px solid #ff0000ff", paddingLeft: "10px" }}>
          "Gracias al curso de Programación pude conseguir mi primer trabajo como desarrollador junior."
          <br /> <strong>- Ana, 21 años</strong>
        </blockquote>
      </section>
      <br />
      <br />
      <section style={{ marginTop: "40px" }}>
        <h2 className="section-title">Categorías más populares 🔥</h2>
        <ol>
          <li>Programación</li>
          <li>Marketing Digital</li>
          <li>Diseño Gráfico</li>
          <li>Gastronomía</li>
          <li>Idiomas</li>
        </ol>
      </section>
      <section style={{ textAlign: "center", marginTop: "60px" }}>
        <h2>¿Listo para aprender algo nuevo?</h2>
        <p>Únete a nuestra comunidad de estudiantes y empieza tu camino hoy mismo.</p>
        <Link to="/register">
          <button className="btn">Registrarme</button>
        </Link>
      </section>
      <br />
      <br />
      <br />
    </main>
  );
}
