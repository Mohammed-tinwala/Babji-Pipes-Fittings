import React from 'react'
import Navbar from './components/Layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Categories from './components/sections/Categories';
import Products from './components/sections/Products';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Categories />
        <Products />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
