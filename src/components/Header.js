import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image from "../images/img-logo.jpg";
import "../styles/Header.css";
import { selectLatestUsername } from "../store/usernameSlice";

//functional component for the navbar
export default function Header() {
  const username = useSelector(selectLatestUsername);

  return (
    <nav className="header">
      <Link className="logo" to="/">
        <img src={image} alt="Logo" style={{ height: "100px" }} />
      </Link>
      <div className="welcome-msg">
      {username && (
        <div className="welcome-message">
          Welcome, {username}
        </div>
      )}
      </div>
      <div className="all-links">
        <ul>
          <li>
            <Link className="link-text" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="link-text" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="link-text" to="/login">
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/*export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col">
          <Link to="/">
            <img
              src={image}
              alt="Logo"
              className="img-fluid rounded-circle"
              style={{ height: "100px" }}></img>
          </Link>
        </div>
        <div className="col-auto">
          <nav>
            <Link to="/store">Store</Link>
            <Link to="/cart">Shopping cart</Link>
            <Link to="about">About</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}*/
