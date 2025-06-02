"use client";
import { useState } from "react";
import About from "./pages/about";

export default function Navbar({ onContactClick }) {
  const [showAbout, setShowAbout] = useState(false);
  const [themeDark, setThemeDark] = useState(false);
  const [gradientSpeed, setGradientSpeed] = useState(16);
  const [showInfo, setShowInfo] = useState(false);
  const [showColorPanel, setShowColorPanel] = useState(false);

  // Renk seçenekleri
  const colorOptions = [
    { name: "Gece Mavisi", color: "#27548A" },
    { name: "Koyu Gri", color: "#232323" },
    { name: "Kum Beji", color: "#DDA853" },
    { name: "Kırmızı", color: "#d7263d" },
    { name: "Yeşil", color: "#183B4E" },
    { name: "Mor", color: "#8e44ad" },
  ];

  // Tema butonu: sadece renk panelini açar
  const handleThemeClick = (e) => {
    e.preventDefault();
    setShowColorPanel(true);
  };

  // Renk seçilince arka planı değiştir ve dark moda geç
  const handleColorPick = (color) => {
    setThemeDark(true);
    setShowColorPanel(false);
    document.body.style.background = `
    ${color} radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)
  `;
    document.body.style.backgroundBlendMode = "multiply";
    document.body.style.backgroundImage = `radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)`;
    document.body.style.backgroundColor = color;
    document.body.style.animation = "none";
    document.body.style.backgroundSize = "cover";
  };

  // Gradyan moduna dön (themeDark=false)
  const handleGradientMode = () => {
    setThemeDark(false);
    setShowColorPanel(false);
    document.body.removeAttribute("style");
    document.body.style.animationDuration = `${gradientSpeed}s`;
  };

  // Gradyan hızını değiştir
  const handleGradientSpeed = (delta) => {
    const newSpeed = Math.max(2, gradientSpeed + delta);
    setGradientSpeed(newSpeed);
    document.body.style.animationDuration = `${newSpeed}s`;
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">dilges saribulak</div>
        <ul className="navbar-links">
          <li>
            <a href="#/" onClick={handleThemeClick}>
              Theme
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setShowAbout(true);
              }}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Sağ altta info ve kontrol paneli */}
      <div
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          zIndex: 10000,
        }}
      >
        {/* Info Button: Sadece gradyan hız paneli açıkken göster */}
        {!showColorPanel && !themeDark && (
          <div style={{ position: "relative", marginBottom: "0.7rem" }}>
            <button
              onClick={() => setShowInfo((v) => !v)}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",  
                background: "#222",
                border: "2px solid #ffde59",
                color: "#ffde59",
                fontWeight: "bold",
                fontSize: "1.3rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                outline: "none",
                fontFamily: "serif",
              }}
              aria-label="Info"
            >
              <span style={{ fontFamily: "serif", fontWeight: "bold" }}>i</span>
            </button>
            {showInfo && (
              <div
                style={{
                  position: "absolute",
                  bottom: "110%",
                  right: 0,
                  background: "rgba(30,30,40,0.98)",
                  color: "#ffe066",
                  borderRadius: "10px",
                  padding: "0.7rem 1.1rem",
                  fontSize: "1rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                  whiteSpace: "nowrap",
                  zIndex: 10001,
                }}
              >
                A simple mechanism to control the gradient animation speed.
              </div>
            )}
          </div>
        )}
        {/* Panel: gradyan veya renk */}
        {showColorPanel ? (
          <div
            style={{
              background: "rgba(30,30,40,0.92)",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
              padding: "1rem 1.2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            {colorOptions.map((opt) => (
              <button
                key={opt.color}
                onClick={() => handleColorPick(opt.color)}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "2px solid #ffde59",
                  background: opt.color,
                  cursor: "pointer",
                  outline: "none",
                  margin: "0 0.2rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                  transition: "transform 0.15s",
                }}
                title={opt.name}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
            <button
              onClick={handleGradientMode}
              style={{
                marginLeft: "1rem",
                padding: "0.5rem 1.1rem",
                borderRadius: "12px",
                border: "2px solid #ffde59",
                background: "#232323",
                color: "#ffde59",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s, border 0.2s",
              }}
              title="Gradyan moda dön"
            >
              Gradyan
            </button>
          </div>
        ) : !themeDark && (
          <div
            style={{
              background: "rgba(30,30,40,0.92)",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
              padding: "0.7rem 1.2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            <button
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#232323",
                border: "2px solid #ffde59",
                color: "#ffde59",
                cursor: "pointer",
                fontSize: "1.3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s, color 0.2s, border 0.2s",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#ffde59")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#232323")}
              onClick={() => handleGradientSpeed(-4)}
              title="Speed Up"
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "#ffde59",
                  fontWeight: "bold",
                }}
              >
                {"<"}
              </span>
            </button>
            <span
              style={{
                color: "#ffe066",
                fontSize: "1.1rem",
                minWidth: 40,
                textAlign: "center",
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}
            >
              {gradientSpeed}s
            </span>
            <button
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#232323",
                border: "2px solid #ffde59",
                color: "#ffde59",
                cursor: "pointer",
                fontSize: "1.3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s, color 0.2s, border 0.2s",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#ffde59")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#232323")}
              onClick={() => handleGradientSpeed(4)}
              title="Slow Down"
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "#ffde59",
                  fontWeight: "bold",
                }}
              >
                {">"}
              </span>
            </button>
          </div>
        )}
      </div>
      {showAbout && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={() => setShowAbout(false)}
        >
          <div
            style={{
              position: "relative",
              background: "rgba(20,20,30,0.96)",
              borderRadius: "18px",
              padding: "2rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              maxWidth: "700px",
              color: "#ffe066",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAbout(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "#222",
                border: "2px solid #ffde59",
                color: "#ffde59",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                fontSize: "1.3rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
              }}
              aria-label="Close"
            >
              ×
            </button>
            <About />
          </div>
        </div>
      )}
    </>
  );
}