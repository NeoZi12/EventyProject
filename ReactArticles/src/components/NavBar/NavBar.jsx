import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/home");
  };

  return (
    <nav className={classes.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        Home
      </NavLink>
      {user && (
        <NavLink
          to="/personal-area"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Personal Area
        </NavLink>
      )}
      {user ? (
        <button onClick={handleLogout} className={classes.logoutButton}>
          Logout
        </button>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Login
        </NavLink>
      )}
    </nav>
  );
}
