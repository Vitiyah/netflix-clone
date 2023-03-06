import React from "react";
import api from "../api.js";
import Footer from "../components/Footer.jsx";
import Row from "../components/Row.jsx";
import Banner from "../components/Banner.jsx";
import Navbar from "../components/Navbar.jsx";

const NetflixShow = () => {
  return (
    <div className="bg-zinc w-screen h-screen">
      <Banner />
      <Navbar />
      <Row title="Netflix Originals" fetchURL={api.fetchNetflixOriginals} />
      <Footer />
    </div>
  );
};

export default NetflixShow;
