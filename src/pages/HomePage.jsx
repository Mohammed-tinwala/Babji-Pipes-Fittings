import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Categories from "../components/sections/Categories";
import Products from "../components/sections/Products";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Categories />
            <Products />
            <Testimonials />
            <Contact />
        </>
    )
}

export default HomePage