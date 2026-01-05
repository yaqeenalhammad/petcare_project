import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <img src ={Logo} alt="PetCare Jordan" style={styles.logo}/>
        <div>
          <h1 style={styles.title}>Home</h1>
          <p style={styles.subtitle}>Choose a module to continue</p>
        </div>
      </div>

      {/* Adoption */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Adoption</h2>
        <div style={styles.grid}>
          <Card title="Dogs" icon="🐶" desc="Browse dogs for adoption" onClick={() => navigate("/adoption/dogs")} />
          <Card title="Cats" icon="🐱" desc="Browse cats for adoption" onClick={() => navigate("/adoption/cats")} />
          <Card title="Birds" icon="🐦" desc="Browse birds for adoption" onClick={() => navigate("/adoption/birds")} />
          <Card title="Other Pets" icon="🐾" desc="Other animals" onClick={() => navigate("/adoption/other")} />
        </div>
      </section>

      {/* Health */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Health</h2>
        <div style={styles.grid}>
          <Card
            title="Vaccination Records"
            icon="💉"
            desc="View & track vaccines"
            onClick={() => navigate("/vaccines")}
          />
          <Card
            title="Private Vet Chat"
            icon="🩺"
            desc="Chat privately with a vet"
            onClick={() => navigate("/chat/vet")}
          />
        </div>
      </section>

      {/* Community */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Community</h2>
        <div style={styles.grid}>
          <Card
            title="Public Chat"
            icon="💬"
            desc="Ask & share with others"
            onClick={() => navigate("/chat/public")}
          />
        </div>
      </section>

      {/* Lost & Found */}
<section style={styles.section}>
  <h2 style={styles.sectionTitle}>Lost & Found</h2>
  <div style={styles.grid}>
    <Card
      title="Browse Lost Pets"
      icon="📌"
      desc="See reported lost pets"
      onClick={() => navigate("/lost-pets")}
    />
    <Card
      title="Search by Pet ID"
      icon="🔎"
      desc="Enter Pet ID to locate info"
      onClick={() => navigate("/lost-pets/search")}
    />
    <Card
      title="Report Lost Pet"
      icon="📝"
      desc="Create a new lost report"
      onClick={() => navigate("/lost-pets/new")}
    />
  </div>
</section>

    </div>
  );
}

function Card({ title, icon, desc, onClick }) {
  return (
    <button style={styles.card} onClick={onClick} type="button">
      <div style={styles.cardIcon}>{icon}</div>
      <div style={{ textAlign: "left" }}>
        <div style={styles.cardTitle}>{title}</div>
        <div style={styles.cardDesc}>{desc}</div>
      </div>
    </button>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f6f2eb, #e8f4fb)",
    padding: 28,
  },
  header: {
    maxWidth: 980,
    margin: "0 auto 24px",
    display: "flex",
    flexDirection:"center",
    alignItems: "center",
    gap: 8,
    background: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: 18,
    padding: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  },
  logo: {
    width: 90,
    margin: "0 auto 4px",
    display: "block",
    margin:0
  },
  title: { margin: "6px 0 0", color: "#0f172a", fontSize: 22 },
  subtitle: { margin: "4px 0 0", color: "#475569", fontSize: 13 },

  section: { maxWidth: 980, margin: "18px auto" },
  sectionTitle: { margin: "10px 0", color: "#2c7da0", fontSize: 18 },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
  },

  card: {
    border: "1px solid rgba(0,0,0,0.08)",
    background: "rgba(255,255,255,0.85)",
    borderRadius: 18,
    padding: 16,
    display: "flex",
    gap: 12,
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 10px 26px rgba(0,0,0,0.06)",
  },
  cardIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    fontSize: 22,
    background: "#d9eef7",
  },
  cardTitle: { fontWeight: 700, color: "#0f172a" },
  cardDesc: { marginTop: 3, fontSize: 12, color: "#475569" },
}