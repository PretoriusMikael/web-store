import React from "react";
import "../styles/Landing.css";
import landingImage from "../images/landing-img.jpg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <div className="text-body">
        <h1 className="raleway-headingFont">Welcome to The Sneaker Shop</h1>
        <h2 className="raleway-headingFont">
          Highest Quality, Lowest Prices...
        </h2>
        <p className="raleway-headingFont">
          Step into a world where style meets affordability.
        </p>
        <p className="raleway-headingFont">
          At The Sneaker Shop,
          we believe everyone deserves to walk in comfort and confidence without
          breaking the bank.
        </p>
        <p className="raleway-headingFont">
          Our collection boasts:
        </p>
        <p className="premium-brands">
          Premium Brands: Discover the latest and greatest from top sneaker
          brands.
        </p>
        <p className="unbeatable-prices">
          Unbeatable Prices: Enjoy the lowest prices on the market without
          compromising on quality.
        </p>
        <p className="exclusive-designs">
          Exclusive Designs: Stand out with unique styles that set you apart
          from the crowd.
        </p>
        <p className="comfort-guaranteed">
          Comfort Guaranteed: Experience unparalleled comfort with every step
          you take.
        </p>
        <h3 className="shop-now">Shop Now and Elevate Your Sneaker Game!</h3>
        <Link className="login-link" to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
}
