import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/netflix-logo.png";

const Header = () => {
  return (
    <>
      <div className="header w-[100vw] h-[85vh] flex flex-col items-center justify-center relative p-8">
        <img
          src={logo}
          alt="logo"
          className="w-48 h-24 absolute top-0 max-[400px]:w-36 max-[400px]:h-20 max-[375px]:w-16 max-[375px]:h-8 max-[375px]:mt-8"
        />
        <Link
          to="/signin"
          className="absolute top-[3.5%] right-[4%] w-24 h-[2rem] bg-red-600 rounded flex items-center justify-center max-[375px]:w-16 max-[375px]:top-[5.5%]"
        >
          Sign In
        </Link>
        <h1 className="text-[3.8rem] font-medium text-center leading-[1.25] mt-20 max-sm:text-[3rem] max-[375px]:text-[2rem]">
          Unlimited movies, TV shows <br />
          and more
        </h1>
        <p className="text-[1.7rem] font-light mt-12 max-sm:text-[1.3rem] text-center max-[400px]:text-[1rem] max-[375px]:text-[0.8rem]">
          WATCH ANYWHERE. CANCEL ANYTIME.
        </p>
        <Link
          to="/netflixshow"
          className="bg-red-600 w-[24rem] h-[3rem] flex items-center justify-center text-center mt-12 max-[400px]:w-[20rem] max-[375px]:w-[12rem] max-[375px]:h-[2rem] max-[375px]:text-[0.7rem]"
        >
          WATCH FREE FOR 30 DAYS
        </Link>
      </div>
    </>
  );
};

export default Header;
