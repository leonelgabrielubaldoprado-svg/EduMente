import { useState, useEffect } from "react";
import CursosDestacados from "../components/CursosDestacados";
import img1 from "../assets/imagen 1.jpg";
import img2 from "../assets/imagen 2.jpg";
import img3 from "../assets/imagen 3.jpg";
const slides = [
  {
    id: 1,
    img: img1,
    titulo: "Aprende sin límites",
    texto: "Descubre cientos de cursos diseñados para ayudarte a crecer profesionalmente.",
  },
  {
    id: 2,
    img: img2,
    titulo: "Cursos con instructores expertos",
    texto: "Aprende de profesionales con experiencia real en la industria.",
  },
  {
    id: 3,
    img: img3,
    titulo: "A tu ritmo y en cualquier lugar",
    texto: "Accede al contenido actualizado cuando quieras y desde donde quieras.",
  },
];

export default function Inicio() {
  const [current, setCurrent] = useState(0);

  // cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* ================= HERO / CARRUSEL ================= */}
      <section
        className="hero"
        style={{
          minHeight: "320px",
          position: "relative",
          backgroundImage: `url(${slides[current].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          borderRadius: "16px",
        }}
      >
        {/* Capa oscura encima de la imagen */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.55)",
            borderRadius: "16px",
          }}
        ></div>

        {/* Contenido centrado */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "60px 20px",
          }}
        >
          <h1 style={{ fontSize: "2.4rem", marginBottom: "12px" }}>
            {slides[current].titulo}
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto" }}>
            {slides[current].texto}
          </p>
          <div style={{ marginTop: "20px" }}>
            <a href="/cursos" className="btn">
              Explorar cursos 
            </a>
          </div>
        </div>

        {/* Indicadores (puntitos) */}
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
          }}
        >
          {slides.map((_, idx) => (
            <span
              key={idx}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: idx === current ? "#fff" : "rgba(255,255,255,.4)",
                cursor: "pointer",
              }}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </section>

      {/* ================= RAZONES ================= */}
      <section className="py-12 px-6 text-center">
        <h2 className="section-title">¿Por qué elegir EduMente?</h2>
        <div className="grid">
          <div className="card">
            <h3>Cursos Actualizados</h3>
            <p>Contenidos alineados a las últimas tendencias.</p>
          </div>
          <div className="card">
            <h3>Instructores Expertos</h3>
            <p>Profesionales con experiencia real en la industria.</p>
          </div>
          <div className="card">
            <h3>Aprende a tu Ritmo</h3>
            <p>Accede al contenido cuando quieras y desde donde quieras.</p>
          </div>
        </div>
      </section>

      {/* ================= CURSOS DESTACADOS ================= */}
      <CursosDestacados />
    </main>
  );
}
