import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/netflix-logo.png";

const Header = () => {
  return (
    <>
      <div className="header w-full h-[85vh] flex flex-col items-center justify-center relative p-8">
        <img src={logo} alt="logo" className="w-48 h-24 absolute top-0" />
        <Link
          to="/signin"
          className="absolute top-[3.5%] right-[4%] w-24 h-[2rem] bg-red-600 rounded flex items-center justify-center"
        >
          Sign In
        </Link>
        <h1 className="text-[3.8rem] font-medium text-center leading-[1.25] mt-20 max-sm:text-[3rem]">
          Unlimited movies, TV shows <br />
          and more
        </h1>
        <p className="text-[1.7rem] font-light mt-12 max-sm:text-[1.3rem] text-center">
          WATCH ANYWHERE. CANCEL ANYTIME.
        </p>
        <Link
          to="/netflixshow"
          className="bg-red-600 w-[24rem] h-[3rem] flex items-center justify-center mt-12"
        >
          WATCH FREE FOR 30 DAYS
        </Link>
      </div>
    </>
  );
};

export default Header;
