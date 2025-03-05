import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      style={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const styles = {
  btn:{
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",
  }
}

export default Button;