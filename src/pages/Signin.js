import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/netflix-logo.png";
import Footer from "../components/Footer";

const Signin = () => {
  const [passwordType, setPasswordType] = useState("password");
  const click = () => {
    let password = document.getElementById("password");
    if (password.type === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };
  return (
    <div>
      <div className="header w-full h-screen flex flex-col items-center justify-center relative p-8">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-48 h-24 absolute top-0 left-[50%] translate-x-[-50%]"
          />
        </Link>
        <div className="w-[25%] h-[60%] bg-zinc-900 opacity-90 flex p-16 rounded max-sm:w-[90%] max-md:w-[70%] max-lg:w-[60%] max-xl:w-[30%] max-2xl:w-[30%]">
          <form className="w-full flex flex-col gap-8">
            <label className="text-3xl font-bold">Sign In</label>
            <input
              type="email"
              id="email"
              placeholder="Email or phone number"
              className="w-full h-[3rem] rounded p-4 text-black outline-none text-sm"
            />
            <input
              type={passwordType}
              id="password"
              placeholder="Password"
              className="w-full h-[3rem] rounded p-4 text-black outline-none text-sm"
            />
            <div className="checkbox flex items-center gap-2">
              <input
                id="checkbox"
                type="checkbox"
                name="checkbox"
                onClick={click}
              />
              <label>Show password</label>
            </div>
            <button className="w-[60%] h-[3rem] bg-red-600 m-auto rounded">
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
