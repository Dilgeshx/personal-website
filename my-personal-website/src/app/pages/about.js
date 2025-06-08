import React from "react";

export default function About() {
  return (
    <div
      className="about-modal"
      style={{
        maxWidth: "700px",
        margin: "3rem auto",
        padding: "2.5rem",
        background: "rgba(30,30,40,0.92)",
        borderRadius: "18px",
        color: "#ffe066",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        fontSize: "1.2rem",
        lineHeight: 1.7,
        display: "block",
      }}
    >
      <h1 style={{ color: "#ffde59", fontSize: "2.3rem", marginBottom: "1.2rem", textAlign: "center" }}>
        About Me
      </h1>
      <p>
        Hi! I&apos;m <b style={{ color: "#ffde59" }}>Dilgeş Sarıbulak</b>, a student software developer from Turkey.
        I love building modern web applications, exploring new technologies, and sharing what I learn with others.
      </p>
      <p>
        I&apos;m currently studying at <b>Gebze Technical University</b>, as an Electronic Engineering student.
        I identify myself as a <b>Frontend Developer</b>.
      </p>
      <p>
        My main interests are in <b>frontend development</b>, <b>UI/UX design</b>, and <b>creative coding</b>.
        I enjoy working with <b>React</b>, <b>Next.js</b>, and experimenting with new frameworks and tools.
      </p>
      <p>
        When I&apos;m not coding, you can find me reading about technology, drawing, or exploring new music.<br />
        You can always reach out to me via my social links or email!
      </p>
      <p style={{ fontSize: "1rem", textAlign: "center" }}>
        I hope you enjoy exploring my website and learning more about my work!
      </p>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#ffde59",
            color: "#222",
            fontWeight: "bold",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          View My CV
        </a>
      </div>
    </div>
  );
}