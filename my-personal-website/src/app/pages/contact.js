export default function Contact() {
  return (
    <div>
      <h1>İletişim</h1>
      <p>
        Bana ulaşmak için:{" "}
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