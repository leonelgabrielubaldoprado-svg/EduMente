import React from "react";

export default function SobreNosotros() {
  return (
    <main style={{ padding: "40px" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "#40dff4ff",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          marginBottom: "40px",
          color: "white",
        }}
      >
        <h2 style={{ marginBottom: "8px", fontSize: "28px" }}>
          Sobre Nosotros
        </h2>
        <p style={{ opacity: 0.9 }}>
          En <strong>EduMente</strong> creemos que la educación transforma vidas. 
          Nuestro objetivo es brindar aprendizaje accesible, dinámico y de calidad 
          para todos.
        </p>
      </section>

      {/* Misión y Visión */}
      <h2 style={{ marginBottom: "20px", fontSize: "22px", color: "#333" }}>
        Nuestra Identidad
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "white",
            border: "1px solid #eee",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#7b2ff7", marginBottom: "10px" }}>🚀 Misión</h3>
          <p>
            Formar estudiantes capaces de afrontar los retos del futuro con 
            conocimientos sólidos, prácticos y actualizados.
          </p>
        </div>

        <div
          style={{
            background: "white",
            border: "1px solid #eee",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#7b2ff7", marginBottom: "10px" }}>🌍 Visión</h3>
          <p>
            Ser la plataforma educativa líder en Latinoamérica, impulsando 
            el talento y la innovación.
          </p>
        </div>
      </div>

      {/* Valores */}
      <h2 style={{ marginBottom: "20px", fontSize: "22px", color: "#333" }}>
        Nuestros Valores
      </h2>
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <span
          style={{
            background: "#eee",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          💡 Innovación
        </span>
        <span
          style={{
            background: "#eee",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          🤝 Colaboración
        </span>
        <span
          style={{
            background: "#eee",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          ⭐ Excelencia
        </span>
        <span
          style={{
            background: "#eee",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          ❤️ Compromiso
        </span>
      </div>

      {/* Impacto */}
      <h2 style={{ marginBottom: "20px", fontSize: "22px", color: "#333" }}>
        Nuestro Impacto
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#7b2ff7" }}>
            +500
          </p>
          <p>Estudiantes</p>
        </div>
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#7b2ff7" }}>
            +10
          </p>
          <p>Cursos</p>
        </div>
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#7b2ff7" }}>
            95%
          </p>
          <p>Satisfacción</p>
        </div>
      </div>
            {/* Testimonios */}
      <h2 style={{ margin: "40px 0 20px", fontSize: "22px", color: "#333" }}>
        Lo que dicen nuestros estudiantes
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
            "Gracias a EduMente aprendí React y conseguí mi primer trabajo
            como desarrollador junior."
          </p>
          <strong>- Ana López</strong>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
            "Los cursos son muy prácticos y los instructores explican súper
            claro. Lo recomiendo al 100%."
          </p>
          <strong>- Carlos Pérez</strong>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
            "Me gustó mucho la flexibilidad para estudiar a mi ritmo. ¡Ya
            terminé 3 cursos!"
          </p>
          <strong>- Luis García</strong>
        </div>
      </div>

      {/* CTA Final */}
      <section
        style={{
          background: "#302f92ff",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          color: "white",
          marginTop: "20px",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>
          ¿Listo para aprender con nosotros?
        </h2>
        <p style={{ marginBottom: "20px", opacity: 0.9 }}>
          Únete a cientos de estudiantes y lleva tu carrera al siguiente nivel.
        </p>
        <a
          href="/register"
          style={{
            background: "white",
            color: "#240199ff",
            padding: "12px 25px",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Inscríbete Ahora
        </a>
      </section>
    </main>
  );
}
