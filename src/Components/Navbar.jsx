import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { themes } = useContext(ThemeContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "15px",
        backgroundColor: themes.cardBackground,
        color: themes.color,
      }}
    >
      <h3>Home</h3>
      <h3>About Us</h3>
      <h3>Contact</h3>
    </nav>
  );
};

export default Navbar;