import React from "react";
import api from "../api.js";
import Footer from "../components/Footer.jsx";
import Row from "../components/Row.jsx";
import Banner from "../components/Banner.jsx";
import Navbar from "../components/Navbar.jsx";

const NetflixShow = () => {
  return (
    <div className="bg-zinc w-screen">
      <Banner />
      <Navbar />
      <Row
        rowID="1"
        title="Netflix Originals"
        fetchURL={api.fetchNetflixOriginals}
      />
      <Row rowID="2" title="Top Rated" fetchURL={api.fetchTopRated} />
      <Row rowID="3" title="Trending" fetchURL={api.fetchTrending} />
      <Row rowID="4" title="Action" fetchURL={api.fetchActionMovies} />
      <Row rowID="5" title="Comedy" fetchURL={api.fetchComedyMovies} />
      <Row rowID="6" title="Documentaries" fetchURL={api.fetchDocumentaries} />
      <Row rowID="7" title="Horror" fetchURL={api.fetchHorrorMovies} />
      <Row rowID="8" title="Romance" fetchURL={api.fetchRomanceMovies} />
      <Footer />
    </div>
  );
};

export default NetflixShow;
