import React, { useEffect, useState } from "react";
import axios from "axios";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API}${fetchURL}`
      );
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, []);
  console.log(movies);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Row;
