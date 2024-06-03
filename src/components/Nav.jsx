"use client";
import Image from "next/image";
import React, { useState } from "react";
import { navimg, navoff, navoffimg, navonimg } from "../../data";

const Nav = () => {
  const [navon, setnavon] = useState(false);
  return (
    <div className="w-full relative">
      <div className="w-full md:w-[80%] flex justify-between items-center">
        <div className="w-[80%] md:w-[100%] 2xl:w-[40%] flex justify-between items-center max-md:px-[20px]">
          <Image
            src={navimg}
            width={80}
            height={80}
            className="mr-[25px]"
            alt=""
          />
          <div className="w-[95%] flex justify-between items-center  max-md:hidden">
            <span className="cursor-pointer font-semibold text-red-600 hover:text-white hover:py-[5px] hover:px-[20px] hover:bg-black transition ease-in-out duration-800">
              Home
            </span>
            <span className="cursor-pointer font-semibold hover:text-white hover:py-[5px] hover:px-[20px] hover:bg-black transition ease-in-out duration-800">
              About Us
            </span>
            <span className="cursor-pointer font-semibold hover:text-white hover:py-[5px] hover:px-[20px] hover:bg-black transition ease-in-out duration-800">
              Pricing
            </span>
            <span className="cursor-pointer font-semibold hover:text-white hover:py-[5px] hover:px-[20px] hover:bg-black transition ease-in-out duration-800">
              Features
            </span>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-white hover:text-black transition ease-in-out duration-1000">
          <button className="max-md:hidden py-[10px] px-[30px] ml-[20px] text-white bg-black ">
            Download
          </button>
        </div>
        <div
          className="md:hidden mr-[10px] cursor-pointer"
          onClick={() => setnavon((prev) => !prev)}
        >
          <Image
            src={navon ? navonimg : navoffimg}
            width={30}
            height={30}
            alt=""
          />
        </div>
      </div>
      <div
        className={`${
          navon ? "flex-col" : "hidden"
        }  z-[10]  bg-white border-[2px] absolute right-[10px] top-[45px] py-[20px] px-[30px]`}
      >
        <div className="mb-[10px] text-center">
          <span className="cursor-pointer font-semibold text-red-600">
            Home
          </span>
        </div>
        <div className="mb-[10px] text-center">
          <span className="cursor-pointer font-semibold">About Us</span>
        </div>
        <div className="mb-[10px] text-center">
          <span className="cursor-pointer font-semibold">Pricing</span>
        </div>
        <div className="mb-[10px] text-center">
          <span className="cursor-pointer font-semibold">Features</span>
        </div>
        <div>
          <button className=" py-[10px] px-[30px]  text-white bg-black cursor-pointer">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
