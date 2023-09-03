import React from "react";
import Header from "../Components/header/Header1";
import Nav from "../Components/nav/Nav";
import Nav2 from "../Components/nav2/Nav2";
import About from "../Components/about/About";
import Experience from "../Components/experience/Experience";
import Services from "../Components/services/Services";
import Portfolio from "../Components/portfolio/Portfolio";
import Temoignage from "../Components/temoignage/Temoignage";
import Contact from "../Components/contact/Contact";
import Footer from "../Components/footer/Footer";

const Home = () => {
  return (
    <>
      <Nav2 />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Temoignage />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
