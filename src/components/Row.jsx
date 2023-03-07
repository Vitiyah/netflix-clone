import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiChevronLeftCircle } from "@react-icons/all-files/bi/BiChevronLeftCircle";
import { BiChevronRightCircle } from "@react-icons/all-files/bi/BiChevronRightCircle";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL, rowID }) => {
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

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="p-8 relative">
      <h1 className="pb-4 text-xl">{title}</h1>
      <div
        id={"slider" + rowID}
        className="w-full h-full flex items-center gap-4 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide"
      >
        <BiChevronLeftCircle
          size={26}
          className="icon-direction absolute left-0 top-[60%] translate-y-[-60%]"
          onClick={slideLeft}
        />
        {movies.map((movie) => {
          return (
            <div key={movie?.id}>
              <div className="box w-56 h-32 relative flex cursor-pointer">
                <img
                  src={`${base_url}${movie?.backdrop_path}`}
                  alt={movie?.name}
                  className="bg-no-repeat bg-contain bg-center"
                />
                <div className="img-overlay bg-black opacity-0 hover:opacity-80 w-full h-full absolute top-0"></div>
                <p className="overlay-text absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                  {movie?.name || movie?.title || movie?.originam_name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <BiChevronRightCircle
        size={26}
        className="icon-direction absolute right-0 top-[60%] translate-y-[-60%]"
        onClick={slideRight}
      />
    </div>
  );
};

export default Row;
