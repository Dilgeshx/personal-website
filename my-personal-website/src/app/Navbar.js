"use client";
import { useState } from "react";
import About from "./pages/about"; // Import the About component

export default function Navbar({ onContactClick }) {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">dilges saribulak</div>
        <ul className="navbar-links">
          <li><a href="#/">Theme</a></li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setShowAbout(true); // Show the About section
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
                onContactClick(); // Popup açılır
              }}
            >
              Contact
            </a>
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
          onClick={() => setShowAbout(false)} // Close the About section when clicking outside
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
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
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