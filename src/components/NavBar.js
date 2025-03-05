import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/wallet" style={styles.link}>Wallet</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },
  link: {
    textDecoration: "none",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
};

export default NavBar;