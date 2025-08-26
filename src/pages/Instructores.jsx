import { useState } from "react";
import { instructores } from "../data/instructores";

export default function Instructores() {
  const [filtro, setFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  // Filtrar instructores según categoría y búsqueda
  const instructoresFiltrados = instructores.filter((i) => {
    const coincideCategoria = filtro === "Todos" || i.categoria === filtro;
    const coincideBusqueda = i.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  // TOP 3 instructores por número de estudiantes
  const topInstructores = [...instructores]
    .sort((a, b) => b.estudiantes - a.estudiantes)
    .slice(0, 3);

  return (
    <main>
      <h2 className="section-title">Nuestros Instructores</h2>
      <p style={{ opacity: 0.8, marginBottom: 20 }}>
        Aprende de profesionales con experiencia real en el campo.
      </p>

      {/* 🔎 Buscador */}
      <input
        type="text"
        placeholder="Buscar instructor..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="input"
        style={{ marginBottom: 20, width: "100%", maxWidth: 400 }}
      />

      {/* 📌 Filtros */}
      <div style={{ marginBottom: 20 }}>
        {["Todos", "Destacados"].map((cat) => (
          <button
            key={cat}
            className="btn"
            style={{
              marginRight: 10,
              background: filtro === cat ? "#ea6969" : "#f3f3f3",
              color: filtro === cat ? "#fff" : "#000",
            }}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🌟 Ranking de instructores */}
      <section style={{ marginBottom: 40 }}>
        <h3>🏆 TOP Instructores</h3>
        <ol>
          {topInstructores.map((i, index) => (
            <li key={i.id}>
              <strong>
                {index + 1}. {i.nombre}
              </strong>{" "}
              - {i.estudiantes} estudiantes
            </li>
          ))}
        </ol>
      </section>

      {/* 👨‍🏫 Lista de instructores */}
      <div className="grid">
        {instructoresFiltrados.map((i) => (
          <div
            key={i.id}
            className="card"
            style={{ textAlign: "center", padding: 20 }}
          >
            {/* Imagen de perfil */}
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto 10px",
                border: "3px solid #ea6969",
              }}
            >
              <img
                src={i.foto}
                alt={i.nombre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Datos */}
            <h3>{i.nombre}</h3>
            <p className="muted">{i.especialidad}</p>
            <p style={{ fontSize: 14, opacity: 0.8 }}>{i.bio}</p>

            {/* Estadísticas */}
            <p style={{ marginTop: 10 }}>
              👨‍🎓 {i.estudiantes} estudiantes <br />
              📚 {i.cursos} cursos
            </p>

            {/* Redes sociales */}
            <div style={{ marginTop: 10 }}>
              {i.linkedin && (
                <a href={i.linkedin} target="_blank" rel="noreferrer">
                  🔗 LinkedIn
                </a>
              )}{" "}
              {i.github && (
                <a href={i.github} target="_blank" rel="noreferrer">
                  💻 GitHub
                </a>
              )}
            </div>

            {/* CTA */}
            <button className="btn" style={{ marginTop: 15 }}>
              Ver perfil
            </button>
          </div>
        ))}
      </div>

      {/* ⭐ Sección de destacados */}
      <section style={{ marginTop: 50 }}>
        <h3>🌟 Instructores Destacados del Mes</h3>
        <p style={{ opacity: 0.8 }}>
          Reconocemos a los profesores con mejor valoración y mayor impacto.
        </p>
        <div className="grid">
          {topInstructores.map((i) => (
            <div
              key={i.id}
              className="card"
              style={{ padding: 20, border: "2px solid gold" }}
            >
              <h4>{i.nombre}</h4>
              <p>{i.especialidad}</p>
              <p>⭐ {i.rating}/5</p>
            </div>
          ))}
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />

    </main>
  );
}
