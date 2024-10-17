import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { DataContext } from "./context/userContext";

function App() {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/products" element={<Products data={data} />} />
          <Route path="/features" element={<Features data={data} />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/contact" element={<Contact data={data} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
