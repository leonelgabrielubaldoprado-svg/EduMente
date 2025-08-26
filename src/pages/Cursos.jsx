// src/pages/Cursos.jsx
import React from "react";
import { cursos } from "../data/cursos";
import CursosDestacados from "../components/CursosDestacados";
import { Link } from "react-router-dom";  
import { useParams } from "react-router-dom";

export default function Cursos() {
    const { categoria } = useParams();
      const cursosFiltrados = categoria
    ? cursos.filter(c => c.categoria === categoria)
    : cursos;
  return (
    <main style={{ padding: "40px" }}>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          background: "#7b2ff7",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "  center",
          marginBottom: "40px",
          color: "white",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: 8 }}>
          Explora nuestros cursos
        </h2>
        <p style={{ opacity: 0.9 }}>
          Aprende a tu ritmo con contenido actualizado y práctico.
        </p>
      </section>

      {/* Listado de cursos (con el mismo estilo de cursos destacados) */}
      <h2 className="section-title" style={{ marginBottom: "20px" }}>
        Cursos
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {cursos.map((c) => (
          <div
            key={c.id}
            style={{
              background: "white",
              border: "1px solid #e5f649ff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 6px rgba(225, 245, 45, 1)",
            }}
          >
            <img
              src={c.imagen}
              alt={c.titulo}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{c.titulo}</h3>
            <p style={{ margin: "4px 0", color: "#555" }}>{c.descripcion}</p>
            <p
              style={{
                margin: "6px 0",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              S/ {c.precio}.00
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

      {/* Cursos Destacados abajo */}
      <CursosDestacados />
    </main>
  );
}
