import { useState } from "react";
import classes from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post("/login/login", { email, password })
      .then((res) => {
        const user = res.data.user;
        setUser(user); // זה ישמור בעוגייה דרך AuthContext
        navigate("/home");
      })
      .catch((err) => {
        if (err.response?.data?.error) {
          setError(err.response.data.error);
        } else {
          setError("שגיאה לא צפויה בהתחברות.");
        }
      });
  };

  return (
    <div className={classes.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={classes.loginForm}>
        {error && <p className={classes.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input}
          required
        />
        <button type="submit" className={classes.button}>
          Login
        </button>
      </form>
    </div>
  );
}
