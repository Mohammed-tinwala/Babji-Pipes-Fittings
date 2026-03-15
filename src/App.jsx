import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/HomePage";
import CategoryProductPage from './pages/CategoryProductPage'
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black">

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/category/:id' element={<CategoryProductPage />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;