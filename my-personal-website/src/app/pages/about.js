export default function About() {
  return (
    <div style={{
      maxWidth: "700px",
      margin: "3rem auto",
      padding: "2.5rem",
      background: "rgba(30,30,40,0.92)",
      borderRadius: "18px",
      color: "#ffe066",
      boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      fontSize: "1.2rem",
      lineHeight: 1.7,
      display: "flex",
      alignItems: "center",
      gap: "2.5rem"
    }}>
      <img
        src="/profile.jpeg"
        alt="Dilgeş Sarıbulak"
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
          border: "3px solid #ffde59",
          flexShrink: 0
        }}
      />
      <div>
        <h1 style={{ color: "#ffde59", fontSize: "2.3rem", marginBottom: "1.2rem" }}>About Me</h1>
        <p>
          Hi! I'm <b style={{ color: "#ffde59" }}>Dilgeş Sarıbulak</b>, a student software developer from Turkey.
          I love building modern web applications, exploring new technologies, and sharing what I learn with others.
        </p>
        <p>
          My main interests are in <b>frontend development</b>, <b>UI/UX design</b>, and <b>creative coding</b>. 
          I enjoy working with <b>React</b>, <b>Next.js</b>, and experimenting with new frameworks and tools.
        </p>
        <p>
          When I'm not coding, you can find me reading about technology, drawing, or exploring new music.
          <br />
          You can always reach out to me via my social links or email!
        </p>
      </div>
    </div>
  );
}