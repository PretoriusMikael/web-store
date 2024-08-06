import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import "../styles/Products.css";
import Footer from "./Footer";

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
      "When the sun’s beating down your back and your drive just landed in the bunker, lean into the Roshe, a design that can help you find your peace when your round isn't going your way. ",
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
    name: "New Balance 574 series",
    description: "A core of soft cushioning of EVA in the midsole with a tough polyurethane rim for more support and durability.",
    price: "$60",
    image: require("../images/shoes6.jpg"),
  },
  {
    id: 7,
    name: "New Balance REVlite",
    description: "REVlite offers a lightweight ride without minimizing construction or sacrificing underfoot cushioning or stability.",
    price: "$70",
    image: require("../images/shoes7.jpg"),
  },
  {
    id: 8,
    name: "Adidas Forum Low Velcro",
    description: "You can start with these adidas Forum Low Shoes sized for kids. They have the chunky profile and signature X-strap that lit up the hardwood in the '80s. Maybe wait on the terry cloth headband and short shorts.",
    price: "$80",
    image: require("../images/shoes8.jpg"),
  },
  {
    id: 9,
    name: "Nike Roche",
    description: "When the sun’s beating down your back and your drive just landed in the bunker, lean into the Roshe, a design that can help you find your peace when your round isn't going your way.",
    price: "$90",
    image: require("../images/shoes9.jpg"),
  },
  {
    id: 10,
    name: "Nike Air Force 1 High",
    description: "The crisp, easy to clean upper makes it perfect off-court attire while the high-top design and cupsole finish underfoot nods to b-ball DNA.",
    price: "$100",
    image: require("../images/shoes10.jpg"),
  },
];

export default function Products() {
  const dispatch = useDispatch();
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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div>
      <div className="container-products mt-5">
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
                  <div className="title-desc">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  </div>
                  <Card.Text>
                    <strong>{product.price}</strong>
                  </Card.Text>
                  <Link to="/cart" onClick={() => handleAddToCart(product)}>
                    <Button variant="success">Buy Now</Button>
                  </Link>
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
    <Footer />
    </div>
  );
}
