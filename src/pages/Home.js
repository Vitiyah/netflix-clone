import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tabs from "../components/Tabs";

const Home = () => {
  return (
    <div className="w-[100vw]">
      <Header />
      <Tabs />
      <Footer />
    </div>
  );
};

export default Home;
