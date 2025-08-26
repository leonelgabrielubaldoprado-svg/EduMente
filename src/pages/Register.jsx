import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Importar useNavigate

export default function Register() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // 👈 Inicializar navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validación nombre
    if (name.trim().length < 3) {
      setNameError("El nombre debe tener al menos 3 caracteres.");
      valid = false;
    } else {
      setNameError("");
    }

    // Validación correo
    if (!email.includes("@")) {
      setEmailError("El correo debe incluir '@'.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Validación contraseña
    if (password.length < 6) {
      setPasswordError("La contraseña es incorrecta (mínimo 6 caracteres).");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Registro correcto ✅");
      navigate("/"); // 👈 Te envía al inicio
    }
  };

  return (
    <div>
      <h2 className="section-title">Registro</h2>
      <form className="form" onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className="row">
          <label>Nombre completo</label>
          <input
            className="input"
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p style={{ color: "red", fontSize: "14px" }}>{nameError}</p>}
        </div>

        {/* Correo */}
        <div className="row">
          <label>Correo electrónico</label>
          <input
            className="input"
            type="text"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: "red", fontSize: "14px" }}>{emailError}</p>}
        </div>

        {/* Contraseña */}
        <div className="row" style={{ position: "relative" }}>
          <label>Contraseña</label>
          <input
            className="input"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Ojito */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "32px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
          {passwordError && <p style={{ color: "red", fontSize: "14px" }}>{passwordError}</p>}
        </div>

        <button className="btn" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}
