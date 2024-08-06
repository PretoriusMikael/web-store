import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItem, selectCartItems } from "../store/cartSlice";
import CartTotal from "./CartTotal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import "../styles/Cart.css";

const shippingOptions = [
  { id: 1, method: "Standard Shipping", cost: "$5.00", details: "Delivered in 5-7 business days." },
  { id: 2, method: "Express Shipping", cost: "$10.00", details: "Delivered in 2-3 business days." },
  { id: 3, method: "Next-Day Shipping", cost: "$20.00", details: "Delivered the next business day." },
];

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateCartItem({ productId, quantity }));
  };

  const handleSelectShipping = (option) => {
    setSelectedShipping(option);
  };

  const handleShowHelp = () => {
    setShowHelpModal(true);
  };

  const handleCloseHelp = () => {
    setShowHelpModal(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="cart-header">Your Cart</h2>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id} className="cart-item">
            <div className="cart-item-details">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div>
                <h5>{item.name}</h5>
                <p><strong>${item.price}</strong></p>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
            <div className="cart-item-quantity">
              <input
                type="number"
                value={item.quantity || 1}
                onChange={(e) => handleUpdateQuantity(item.id, Number(e.target.value))}
                min="1"
              />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      
      <div className="shipping-options mt-4">
        <h4>Select Shipping Method:</h4>
        <Dropdown onSelect={(eventKey) => handleSelectShipping(shippingOptions.find(option => option.id === parseInt(eventKey)))}>
          <Dropdown.Toggle variant="light" id="dropdown-shipping">
            {selectedShipping.method} ({selectedShipping.cost})
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {shippingOptions.map((option) => (
              <Dropdown.Item key={option.id} eventKey={option.id}>
                {option.method} ({option.cost})
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="info" className="mt-2" onClick={handleShowHelp}>
          Help
        </Button>
      </div>

      <CartTotal />

      <Modal show={showHelpModal} onHide={handleCloseHelp} centered>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {shippingOptions.map((option) => (
            <div key={option.id} className="m-3">
              <h5>{option.method} ({option.cost})</h5>
              <p>{option.details}</p>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
}
