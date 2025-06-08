"use client";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import About from "./pages/about";

export default function Navbar({ onContactClick, theme, setTheme }) {
  const [showAbout, setShowAbout] = useState(false);
  const [showNameInfo, setShowNameInfo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.background =
        "linear-gradient(-45deg, #18191a 0%, #232526 40%, #414345 70%, #88898a 100%)";
      document.body.style.backgroundSize = "400% 400%";
      document.body.style.animation = "gradientMove 16s ease-in-out infinite";
      document.body.style.color = "#ffe066";
    } else {
      setTheme("light");
      document.body.style.background =
        "linear-gradient(-45deg, #f8f9fa 0%, #e9ecef 40%, #dee2e6 70%, #bfc2c7 100%)";
      document.body.style.backgroundSize = "400% 400%";
      document.body.style.animation = "gradientMove 16s ease-in-out infinite";
      document.body.style.color = "#181818";
    }
  };

  return (
    <>
      <nav className="navbar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <div
          className="navbar-logo"
          style={{
            position: "relative",
            textAlign: "left",
            width: "auto",
            flex: "0 0 auto"
          }}
        >
          <span
            style={{ cursor: "pointer", color: "#ffde59", fontWeight: 900 }}
            onClick={() => setShowNameInfo((v) => !v)}
            onMouseLeave={() => setShowNameInfo(false)}
          >
            dilges
          </span>
          <span> saribulak</span>
          {showNameInfo && (
            <div
              style={{
                position: "absolute",
                top: "110%",
                left: 0,
                background: "rgba(30,30,40,0.98)",
                color: "#ffe066",
                borderRadius: "10px",
                padding: "0.7rem 1.1rem",
                fontSize: "1rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                whiteSpace: "nowrap",
                zIndex: 10001,
                marginTop: "0.3rem",
              }}
            >
              Dilgeş: A name of Kurdish origin. It means "one whose heart shines". Another meaning is "cheerful".
            </div>
          )}
        </div>
        <button
          className="navbar-hamburger"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          ☰
        </button>
        <ul
          className={`navbar-links${mobileMenuOpen ? " open" : ""}`}
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            width: "auto",
            textAlign: "right",
            gap: "1.2rem",
            display:
              typeof window !== "undefined" && window.innerWidth <= 700
                ? mobileMenuOpen
                  ? "flex"
                  : "none"
                : "flex",
            flex: "0 0 auto"
          }}
        >
          <li>
            <button
              onClick={handleThemeToggle}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                borderRadius: "8px",
                padding: "0.7rem 1.7rem",
                fontWeight: "bold",
                fontSize: "2.2rem",
                cursor: "pointer",
                marginRight: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <FaSun color="#fff" size={32} />
              ) : (
                <FaMoon color="#fff" size={32} />
              )}
            </button>
          </li>
          <li>
            <a
              href="#about"
              onClick={e => {
                e.preventDefault();
                setShowAbout(true);
              }}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                borderRadius: "8px",
                padding: "0.7rem 1.7rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
                cursor: "pointer",
                marginRight: "1rem",
                transition: "background 0.2s, color 0.2s",
                display: "inline-block",
                textDecoration: "none",
                textAlign: "center"
              }}
            >
              About me
            </a>
          </li>
          <li>
            <button
              onClick={() => setShowCV(true)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                borderRadius: "8px",
                padding: "0.7rem 1.7rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
                cursor: "pointer",
                marginRight: "1rem",
                transition: "background 0.2s, color 0.2s",
                display: "inline-block",
                textAlign: "center"
              }}
            >
              CV
            </button>
          </li>
        </ul>
      </nav>
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
      {showCV && (
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
            zIndex: 10000,
          }}
          onClick={() => setShowCV(false)}
        >
          <button
            onClick={() => setShowCV(false)}
            style={{
              position: "fixed",
              top: "2.5vh",
              right: "2vw",
              background: "#222",
              border: "2px solid #ffde59",
              color: "#ffde59",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "1.7rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
              zIndex: 10001,
            }}
            aria-label="Close"
          >
            ×
          </button>
          <div
            style={{
              position: "relative",
              background: "rgba(20,20,30,0.96)",
              borderRadius: "18px",
              padding: "1rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              maxWidth: "95vw",
              maxHeight: "90vh",
              width: "700px",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="/cv.pdf"
              title="CV"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}