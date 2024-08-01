import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import "../styles/Products.css";

const products = [
  {
    id: 1,
    name: "Nike Jordan 1",
    description:
      "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
    price: "$10",
    image: require("../images/shoes1.jpg"),
  },
  {
    id: 2,
    name: "Nike Roche",
    description:
      "When the sun’s beating down your back and your drive just landed in the bunker, lean into the Roshe 2, a design that can help you find your peace when your round isn't going your way. ",
    price: "$20",
    image: require("../images/shoes2.jpg"),
  },
  {
    id: 3,
    name: "Vans Old Skool",
    description:
      "Made with a classic pairing of canvas and suede, this Old Skool honors our heritage Sidestripe silhouette while offering a fresh look that boosts the appeal of this unmistakable shoe.",
    price: "$30",
    image: require("../images/shoes3.jpg"),
  },
  {
    id: 4,
    name: "Nike Air Force 1",
    description:
      "The radiance lives on in the Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp materials, bold colours and the perfect amount of flash to make you shine.",
    price: "$40",
    image: require("../images/shoes4.jpg"),
  },
  {
    id: 5,
    name: "Fila Disruptor 2",
    description:
      "Comfortable, durable and great looking, these athletic trainers for women and men are a new twist on an old favorite. You'll be unstoppable in these shoes.",
    price: "$50",
    image: require("../images/shoes5.jpg"),
  },
  {
    id: 6,
    name: "Product 6",
    description: "Short description for product 6",
    price: "$60",
    image: require("../images/shoes6.jpg"),
  },
  {
    id: 7,
    name: "Product 7",
    description: "Short description for product 7",
    price: "$70",
    image: require("../images/shoes7.jpg"),
  },
  {
    id: 8,
    name: "Product 8",
    description: "Short description for product 8",
    price: "$80",
    image: require("../images/shoes8.jpg"),
  },
  {
    id: 9,
    name: "Product 9",
    description: "Short description for product 9",
    price: "$90",
    image: require("../images/shoes9.jpg"),
  },
  {
    id: 10,
    name: "Product 10",
    description: "Short description for product 10",
    price: "$100",
    image: require("../images/shoes10.jpg"),
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="products-header">Find your fit...</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card style={{ width: "90%" }} className="product-card">
              <Card.Img
                variant="top"
                src={product.image}
                className="product-img"
                onClick={() => handleCardClick(product)}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>{product.price}</strong>
                </Card.Text>
                <Button variant="success">Buy Now</Button>
                <Dropdown className="mt-4">
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Select Color
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-up">
                    <Dropdown.Item>Green</Dropdown.Item>
                    <Dropdown.Item>Blue</Dropdown.Item>
                    <Dropdown.Item>Red</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body className="modal-body">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="modal-img"
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}
