import React from "react";
import api from "../api.js";
import Row from "../components/Row";

const NetflixShow = () => {
  return (
    <div>
      {/* Navbar */}
      {/* Banner */}
      <Row
        title="Netflix Originals"
        fetchURL={api.fetchNetflixOriginals}
        isLargeRow
      />
    </div>
  );
};

export default NetflixShow;
