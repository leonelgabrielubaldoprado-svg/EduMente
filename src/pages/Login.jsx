import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false); // 👈 para el ojito

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validación de correo
    if (!email.includes("@")) {
      setEmailError("El correo debe incluir '@'.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Validación de contraseña (ejemplo: mínimo 6 caracteres)
    if (password.length < 6) {
      setPasswordError("La contraseña es incorrecta (mínimo 6 caracteres).");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Login correcto ✅");
    }
  };

  return (
    <div>
      <h2 className="section-title">Iniciar sesión</h2>
      <form className="form" onSubmit={handleSubmit}>
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
            type={showPassword ? "text" : "password"} // 👈 cambia según showPassword
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Botón ojito */}
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
          Ingresar
        </button>
      </form>
    </div>
  );
}
