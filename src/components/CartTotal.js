import React from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../store/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CartTotal.css";

export default function CartTotal() {
  const total = useSelector(selectCartTotal);

  return (
    <div className="cart-total">
      <h4>Total Price: ${total}</h4>
    </div>
  );
}
