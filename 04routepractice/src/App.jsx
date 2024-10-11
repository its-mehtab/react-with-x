import { useState } from "react";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="max-w-screen-xl px-4 mx-auto py-10">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
