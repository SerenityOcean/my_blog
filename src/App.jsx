import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import "./styles.css";
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
