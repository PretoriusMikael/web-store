import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <svg></svg>
      </Link>
      <nav>
        <Link to="/store">Store</Link>
        <Link to="/cart">Shopping cart</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
