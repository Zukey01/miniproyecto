import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/search" style={{ marginRight: "10px" }}>
        Search
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Header;
