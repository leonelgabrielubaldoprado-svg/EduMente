import React from "react";
import { Link } from "react-router-dom"; 
import img4 from "../assets/imagen 4.jpg"; 
import img5 from "../assets/imagen 5.jpg"; 
import img6 from "../assets/imagen 6.png"; 
import img7 from "../assets/imagen 7.jpg"; 
import img8 from "../assets/imagen 8.png"; 
import img9 from "../assets/imagen 9.jpg"; 

const cursos = [
  {
    id: 1,
    titulo: "Desarrollo Web Completo con React y Node.js",
    autor: "María Gomez",
    rating: 4.8,
    estudiantes: "12,543",
    duracion: "42 horas",
    nivel: "Intermedio",
    precio: 89.99,
    precioOriginal: 199.99,
    bestseller: true,
    imagen: img4,
  },
  {
    id: 2,
    titulo: "Diseño UX/UI desde Cero hasta Profesional",
    autor: "María Gomez",
    rating: 4.8,
    estudiantes: "12,543",
    duracion: "42 horas",
    nivel: "Intermedio",
    precio: 89.99,
    precioOriginal: 199.99,
    bestseller: false,
    imagen: img5,
  },
  {
    id: 3,
    titulo: "Marketing Digital y Redes Sociales 2024",
    autor: "María Gomez",
    rating: 4.8,
    estudiantes: "12,543",
    duracion: "42 horas",
    nivel: "Intermedio",
    precio: 89.99,
    precioOriginal: 199.99,
    bestseller: true,
    imagen: img6,
  },
  {
    id: 4,
    titulo: "Python para Data Science y Machine Learning",
    autor: "María Gomez",
    rating: 4.8,
    estudiantes: "12,543",
    duracion: "42 horas",
    nivel: "Intermedio",
    precio: 89.99,
    precioOriginal: 199.99,
    bestseller: false,
    imagen: img7,
  },
  {
    id: 5,
    titulo: "Fotografía Digital: De Principiante a Experto",
    autor: "María Gomez",
    rating: 4.8,
    estudiantes: "12,543",
    duracion: "42 horas",
    nivel: "Intermedio",
    precio: 89.99,
    precioOriginal: 199.99,
    bestseller: false,
    imagen: img8,
  },
  {
    id: 6,
    titulo: "Inglés de Negocios para Profesionales",
    autor: "María Gomez",
    rating: 4.8,
    estudiantes: "12,543",
    duracion: "42 horas",
    nivel: "Intermedio",
    precio: 89.99,
    precioOriginal: 199.99,
    bestseller: false,
    imagen: img9,
  },
];

const CursosDestacados = () => {
  return (
<section style={{ padding: "40px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Cursos Destacados
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {cursos.map((curso) => (
          <div
            key={curso.id}
            style={{
              background: "white",
              border: "1px solid #ea6969ff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 6px rgba(243, 73, 73, 1)",
            }}
          >
            {curso.bestseller && (
              <span
                style={{
                  background: "orange",
                  color: "white",
                  padding: "3px 8px",
                  borderRadius: "5px",
                  fontSize: "12px",
                  marginBottom: "10px",
                  display: "inline-block",
                }}
              >
                Bestseller
              </span>
            )}
            <img 
    src={curso.imagen} 
    alt={curso.titulo} 
    style={{ 
    width: "100%", 
    height: "150px", 
    objectFit: "cover", 
    borderRadius: "8px", 
    marginBottom: "10px" 
    }} 
/>

            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
              {curso.titulo}
            </h3>
            <p style={{ margin: "4px 0", color: "#555" }}>Por {curso.autor}</p>
            <p style={{ margin: "4px 0" }}>⭐ {curso.rating} | 👥 {curso.estudiantes}</p>
            <p style={{ margin: "4px 0" }}>⏱️ {curso.duracion} · {curso.nivel}</p>
            <p style={{ margin: "6px 0", fontWeight: "bold" }}>
              ${curso.precio}{" "}
              <span style={{ textDecoration: "line-through", color: "#777" }}>
                ${curso.precioOriginal}
              </span>
            </p>
            <Link to="/register">
            <button
              style={{
                background: "#7b2ff7",
                color: "white",
                border: "none",
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Inscribirse
            </button>
            </Link> 
          </div>
        ))}
      </div>
    </section>
  );
}

export default CursosDestacados;