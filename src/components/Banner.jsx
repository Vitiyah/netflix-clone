import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../api";

const Banner = () => {
  const url = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`
      );
      console.log(response.data.results);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    };
    fetchData();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div>
      <div className="w-full h-[36rem] relative">
        <img
          src={`${url}${movie?.backdrop_path}`}
          alt={`${movie?.title}`}
          className="w-full h-full bg-no-repeat bg-center bg-contain"
        />
        <div className="overlay w-full h-full absolute top-0 left-0"></div>
        <div className="w-[30%] h-[50%] absolute top-[50%] translate-y-[-50%] p-8 flex flex-col justify-center gap-8">
          <h1 className="text-[3rem] font-extrabold">
            {movie?.title || movie?.name || movie?.originam_name}
          </h1>
          <div>
            <button className="w-24 h-8 bg-zinc-900 opacity-80 mr-4 text-sm">
              Play
            </button>
            <button className="w-24 h-8 bg-zinc-900 opacity-70 text-sm">
              My List
            </button>
          </div>
          <p className="text-md">{truncate(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
