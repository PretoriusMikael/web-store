import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Cart from "./components/Cart";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
