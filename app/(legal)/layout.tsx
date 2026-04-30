import "./legal.css";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        background: "#F7F4F0",
        minHeight: "100vh",
        padding: "32px 16px 64px",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <article
          style={{
            background: "white",
            borderRadius: 24,
            padding: "40px 28px",
            boxShadow: "0 12px 36px rgba(45,38,32,0.06)",
            border: "1px solid #EDE0C8",
          }}
          className="legal-article"
        >
          {children}
        </article>
      </div>
    </main>
  );
}
