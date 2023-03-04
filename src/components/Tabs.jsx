import React from "react";
import { FaDoorOpen } from "@react-icons/all-files/fa/FaDoorOpen";
import { BsPhone } from "@react-icons/all-files/bs/BsPhone";
import { IoMdPricetags } from "@react-icons/all-files/io/IoMdPricetags";
import { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="tabheads flex flex-col items-center w-screen">
        <div className="tablists w-full h-[12rem] bg-zinc-900 grid grid-cols-3 place-items-center">
          <div
            className="tabs w-full h-full flex flex-col items-center justify-center focus:border-b-4 focus:border-b-red-600 gap-8 cursor-pointer p-4 max-[375px]:gap-4"
            tabIndex="1"
            onClick={() => {
              setIndex(1);
            }}
          >
            <FaDoorOpen className="icon text-gray-400 text-center" />
            <p className="text-gray-400 text-center max-[375px]:text-[0.8rem]">
              Cancel at any time
            </p>
          </div>
          <div
            className="tabs w-full h-full flex flex-col items-center justify-center focus:border-b-4 focus:border-b-red-600 gap-8 cursor-pointer p-4 max-[375px]:gap-4"
            tabIndex="2"
            onClick={() => {
              setIndex(2);
            }}
          >
            <BsPhone className="icon text-gray-400 text-center" />
            <p className="text-gray-400 text-center max-[375px]:text-[0.8rem]">
              Watch anywhere
            </p>
          </div>
          <div
            className="tabs w-full h-full flex flex-col items-center justify-center focus:border-b-4 focus:border-b-red-600 gap-8 cursor-pointer p-4 max-[375px]:gap-4"
            tabIndex="3"
            onClick={() => {
              setIndex(3);
            }}
          >
            <IoMdPricetags className="icon text-gray-400 text-center" />
            <p className="text-gray-400 text-center max-[375px]:text-[0.8rem]">
              Pick your price
            </p>
          </div>
        </div>
        <div className="tabcontent" hidden={index !== 1}>
          <div className="content-1 w-full h-[40rem] p-8 flex items-center justify-around max-md:flex-col max-sm:mt-0">
            <div className="content-1-text">
              <p className="text-xl font-light max-sm:text-center max-[375px]:text-sm">
                If you decide Netflix isn't for you - no <br />
                problem. No commitment. Cancel online <br />
                anytime.
              </p>
              <Link
                to="/netflixshow"
                className="bg-red-600 w-[18rem] h-[3rem] flex items-center justify-center mt-12 max-sm:m-auto max-sm:mt-12 max-[375px]:w-[12rem] max-[375px]:text-xs"
              >
                WATCH FREE FOR 30 DAYS
              </Link>
            </div>
            <div className="content-1-image">
              <img
                src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
                alt="cancel"
                className="w-[36rem] max-md:w-[24rem] max-lg:w-[28rem]"
              />
            </div>
          </div>
        </div>
        <div className="tabcontent" hidden={index !== 2}>
          This is second tabcontent
        </div>
        <div className="tabcontent" hidden={index !== 3}>
          This is third tabcontent
        </div>
      </div>
    </>
  );
};

export default Tabs;
