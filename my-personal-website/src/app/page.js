"use client";
import { useState } from "react";

export default function HomePage({ showPopup, setShowPopup }) {
  const [localShowPopup, localSetShowPopup] = useState(false);
  const popup = typeof showPopup === "boolean" ? showPopup : localShowPopup;
  const setPopup = setShowPopup || localSetShowPopup;

  return (
    <main>
      <h1>
        <span className="outline-text">Welcome</span>
      </h1>
      <p style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: 500 }}>
        Hi, I&apos;m{" "}
        <b style={{ color: "#ffde59" }}>Dilgeş Sarıbulak</b> — a
        student software developer from Turkey, building modern web experiences.
      </p>
      <button
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "1rem 2.2rem",
          background: "#222",
          color: "#ffde59",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "2px solid #ffde59",
          fontSize: "1.4rem",
          letterSpacing: "0.04em",
          boxShadow: "0 4px 24px rgba(255, 222, 89, 0.1)",
          cursor: "pointer",
          transition: "background 0.2s, color 0.2s, border 0.2s",
        }}
        onClick={() => setPopup(true)}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "#ffde59";
          e.currentTarget.style.color = "#222";
          e.currentTarget.style.border = "2px solid #222";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "#222";
          e.currentTarget.style.color = "#ffde59";
          e.currentTarget.style.border = "2px solid #ffde59";
        }}
      >
        Contact Me
      </button>
      {popup && (
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
          onClick={() => setPopup(false)}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(20,20,30,0.92)",
              borderRadius: "22px",
              padding: "2.5rem 2.5rem",
              minWidth: "480px",
              minHeight: "160px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              backdropFilter: "blur(8px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPopup(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
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
                transition: "background 0.2s, color 0.2s, border 0.2s",
              }}
              aria-label="Close"
            >
              ×
            </button>
            <div
              style={{
                display: "flex",
                width: "420px",
                height: "120px",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                background: "rgba(30,30,40,0.92)",
              }}
            >
              <a
                href="https://instagram.com/dilgeshx"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRight: "2px solid #353535",
                  height: "100%",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,222,89,0.08)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  style={{ width: "64px", height: "64px" }}
                />
              </a>
              <a
                href="https://github.com/dilgeshx"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRight: "2px solid #353535",
                  height: "100%",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,222,89,0.08)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                  alt="GitHub"
                  style={{ width: "64px", height: "64px" }}
                />
              </a>
              <a
                href="https://twitter.com/dilgeshx"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRight: "2px solid #353535",
                  height: "100%",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,222,89,0.08)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                  style={{ width: "64px", height: "64px" }}
                />
              </a>
              <a
                href="mailto:dilgesaribulak@gmail.com"
                title="Mail"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,222,89,0.08)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  alt="Mail"
                  style={{ width: "64px", height: "64px" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/dilge%C5%9F-sar%C4%B1bulak-876481236/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,222,89,0.08)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  style={{ width: "64px", height: "64px" }}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}