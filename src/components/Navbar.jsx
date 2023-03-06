import React from "react";
import logo from "../images/netflix-logo.png";
import avatar from "../images/Netflix-avatar.png";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="absolute w-[97%] top-[3%] flex justify-between items-center">
        <img src={logo} alt="logo" className="w-24 h-12 " />
        <img src={avatar} alt="avatar" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Navbar;
