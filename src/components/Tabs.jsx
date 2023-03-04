import React from "react";
import { FaDoorOpen } from "@react-icons/all-files/fa/FaDoorOpen";
import { BsPhone } from "@react-icons/all-files/bs/BsPhone";
import { IoMdPricetags } from "@react-icons/all-files/io/IoMdPricetags";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
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
          <div className="content-2 w-full h-[100%] p-8 flex flex-col items-center justify-center gap-8">
            <div className="w-[90%] h-[80%] flex items-end justify-around max-md:flex-col max-md:items-center max-md:text-center">
              <h1 className="text-2xl max-lg:text-xl">
                Watch TV shows and movies anytime, anywhere - <br />
                personalized for you.
              </h1>
              <Link
                to="/netflixshow"
                className="bg-red-600 w-[18rem] h-[3rem] flex items-center justify-center mt-12 max-lg:text-sm"
              >
                WATCH FREE FOR 30 DAYS
              </Link>
            </div>
            <div className="w-[70%] h-full grid grid-cols-3 text-center max-lg:grid-cols-1">
              <div className="flex flex-col items-center justify-center p-8 gap-4">
                <img
                  src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
                  alt="content1"
                />
                <p className="text-md">Watch on your TV</p>
                <p className="text-xs text-gray-500">
                  Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                  players and more
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 gap-4">
                <img
                  src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
                  alt="content2"
                />
                <p className="text-md">Watch instantly or download for later</p>
                <p className="text-xs text-gray-500">
                  Available on phone and tablet, wherever you go
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 gap-4">
                <img
                  src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png"
                  alt="content3"
                />
                <p className="text-md">Use any computer</p>
                <p className="text-xs text-gray-500">
                  Watch right on Netflix.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tabcontent" hidden={index !== 3}>
          <div className="content-1 w-full h-[40rem] p-8 flex flex-col items-center justify-around gap-16">
            <div className="w-[90%] h-[20%] flex flex-col items-center text-center">
              <h1 className="text-2xl">
                Choose one plan and watch everything on Netflix
              </h1>
              <Link
                to="/netflixshow"
                className="bg-red-600 w-[18rem] h-[3rem] flex items-center justify-center mt-8"
              >
                WATCH FREE FOR 30 DAYS
              </Link>
            </div>
            <div className="w-[70%] h-full flex flex-col justify-start gap-4">
              <table className="w-[30%]">
                <tr className="h-4 text-center uppercase">
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </table>
              <table>
                <tr className="w-full h-12 text-gray-400 bg-zinc-800">
                  <td className="w-[70%] p-4">
                    Monthly price after free month ends on 6/19/2021
                  </td>
                  <td className="w-[10%] text-center">$6.99</td>
                  <td className="w-[10%] text-center">$11.99</td>
                  <td className="w-[10%] text-center">$15.99</td>
                </tr>
                <tr className="w-full h-12 text-gray-400">
                  <td className="w-[70%] p-4">HD Available</td>
                  <td className="w-[10%] text-center bg-blue-500">
                    <FaTimes className="text-center" />
                  </td>
                  <td className="w-[10%] text-center">/</td>
                  <td className="w-[10%] text-center">/</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
