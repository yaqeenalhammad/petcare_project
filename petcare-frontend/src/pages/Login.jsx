import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/Logo.png";

function Login() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");

   
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (mode === "register") {
      if (!fullName.trim()) {
        setError("Full name is required");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }

    try {
      const url =
        mode === "login"
          ? "http://localhost:5000/api/auth/login"
          : "http://localhost:5000/api/auth/register";

      const payload =
        mode === "login"
          ? { email, password }
          : { full_name: fullName.trim(), email, password };

      const res = await axios.post(url, payload);

      
      if (mode === "login") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      navigate("/home");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong, try again");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img 
            src={Logo}
            alt="PerCare Jordan"
            style={styles.Logo}
        />    

       
        <p style={styles.subtitle}>
          {mode === "login" ? "Welcome back 💙" : "Create new account 💙"}
        </p>

        {mode === "register" && (
          <div style={styles.field}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={styles.input}
            />
          </div>
        )}

        <div style={styles.field}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>

        {mode === "register" && (
          <div style={styles.field}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              placeholder="****"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
          </div>
        )}

        {error && <p style={styles.error}>{error}</p>}

        
        <button type="button" onClick={handleSubmit} style={styles.button}>
          {mode === "login" ? "Login" : "Register"}
        </button>

        <p style={styles.footer}>
          {mode === "login" ? (
            <>
            Don’t have an account?{" "}
              <span
                style={styles.link}
                onClick={() => {
                  setMode("register");
                  setError("");
                }}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                style={styles.link}
                onClick={() => {
                  setMode("login");
                  setError("");
                }}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, #f6f2eb, #e8f4fb)",
    padding: 24,
  },
  card: {
    width: 380,
    background: "#fffdf9",
    borderRadius: 20,
    padding: 28,
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  Logo: {
    width: 200,
    margin: "0 auto 12px",
    display: "grid",
  },
  title: {
    margin: 0,
    color: "#4fa3c7",
    fontSize: 26,
  },
  subtitle: {
    margin: "6px 0 20px",
    color: "#777",
    fontSize: 14,
  },
  field: {
    textAlign: "left",
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    color: "#555",
    marginBottom: 4,
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid #dcdcdc",
    fontSize: 14,
    outline: "none",
  },
  button: {
    width: "100%",
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
    border: "none",
    background: "#9fd3ea",
    color: "#fff",
    fontSize: 15,
    cursor: "pointer",
  },
  error: {
    color: "#d9534f",
    fontSize: 13,
    margin: "6px 0",
  },
  footer: {
    marginTop: 16,
    fontSize: 13,
    color: "#555",
  },
  link: {
    color: "#4fa3c7",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;