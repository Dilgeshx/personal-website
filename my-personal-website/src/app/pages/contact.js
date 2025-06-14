export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        To reach me:{" "}
        <a
          href="mailto:dilgesaribulak@gmail.com"
          style={{ color: "#27548A", textDecoration: "underline" }}
          onClick={e => e.stopPropagation()}
        >
          dilgesaribulak@gmail.com
        </a>
      </p>
    </div>
  );
}