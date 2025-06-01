export default function HomePage() {
  return (
    <main>
      <h1>
        <span className="outline-text">Welcome</span>
        </h1>
      <p>
        This is <b>Dilgeş Sarıbulak</b>, a student software developer from Turkey.
      </p>
      <a
        href="mailto:dilgesaribulak@gmail.com"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "0.7rem 1.5rem",
          background: "#222",
          color: "#ffde59",
          borderRadius: "6px",
          fontWeight: "bold",
          border: "1px solid #444",
          

        }}
      >
        Contact Me
      </a>
    </main>
  );
}