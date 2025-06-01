"use client";
import { useState } from "react";

export default function Navbar() {
  const [showProjectsMsg, setShowProjectsMsg] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">dilges saribulak</div>
        <ul className="navbar-links">
          <li><a href="#/">Main</a></li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                setShowProjectsMsg(true);
              }}
            >
              Projects
            </a>
          </li>
          <li><a href="#about">About me</a></li>
        </ul>
      </nav>
      {showProjectsMsg && (
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
          onClick={() => setShowProjectsMsg(false)}
        >
          <div
            style={{
              background: "rgba(20,20,30,0.96)",
              color: "#ffe066",
              padding: "2.2rem 2.5rem",
              borderRadius: "18px",
              fontSize: "1.3rem",
              fontWeight: 500,
              boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              minWidth: "340px",
              textAlign: "center",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowProjectsMsg(false)}
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
            <div>
              I will share my projects here soon.<br />
              Until then, you can reach them on my{" "}
              <a
                href="https://github.com/dilgeshx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#69c9ff", textDecoration: "underline" }}
              >
                GitHub profile
              </a>
              .
            </div>
          </div>
        </div>
      )}
    </>
  );
}