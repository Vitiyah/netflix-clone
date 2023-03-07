import React from "react";
import logo from "../images/netflix-logo.png";
import avatar from "../images/Netflix-avatar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="absolute w-[97%] top-[3%] flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 h-12 " />
        </Link>
        <img src={avatar} alt="avatar" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Navbar;
