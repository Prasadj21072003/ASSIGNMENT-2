"use client";
import Image from "next/image";
import React from "react";

import { icon3, icon4, navimg } from "../../data";
import { motion } from "framer-motion";

function Seventhsection() {
  return (
    <motion.div
      initial={{ y: "200px", opacity: 0 }}
      whileInView={{ y: "0px", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="h-[100%] w-full  mt-[150px] "
    >
      <div className="h-[95%] w-full flex flex-wrap gap-[10px] max-sm:gap-[20px] max-lg:gap-[30px] max-sm:justify-center ">
        <div className="w-[17%] max-sm:w-[40%] h-[80%]  flex-col  ">
          <div className="mb-[10px]">
            <Image src={navimg} width={117} height={35} alt="" />
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
              className="flex items-center"
            >
              <Image
                src={icon3}
                width={19}
                height={19}
                className="mr-[10px]"
                alt=""
              />
              Help@Frybix.com
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
              className="flex items-center"
            >
              <Image
                src={icon4}
                width={19}
                height={19}
                className="mr-[10px]"
                alt=""
              />
              +1 234 456 678 89
            </span>
          </div>
        </div>

        <div className="w-[17%] max-sm:w-[40%] h-[80%] flex-col ">
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "42px",
              }}
            >
              Links
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Home
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              About Us
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Bookings
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Blog
            </span>
          </div>
        </div>
        <div className="w-[17%] max-sm:w-[40%] h-[80%] flex-col ">
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "42px",
              }}
            >
              LEGAL
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Terms Of Use
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Privacy Policy
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Cookie Policy
            </span>
          </div>
        </div>
        <div className="w-[17%] max-sm:w-[40%] h-[80%] flex-col ">
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "42px",
              }}
            >
              PRODUCT
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Take Tour
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Live Chat
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Reviews
            </span>
          </div>
        </div>
        <div className=" w-[25%] h-[80%] max-sm:w-[90%] ">
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "42px",
              }}
            >
              NEWSLETTER
            </span>
          </div>
          <div className="mb-[10px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Stay Up To Date
            </span>
          </div>
          <div className="flex w-[90%] mt-[20px]">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="py-[10px] px-[30px] w-[50%] "
            />
            <button className="py-[10px] px-[30px] text-white bg-black cursor-pointer hover:bg-white hover:text-black transition ease-in-out duration-1000">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-[90%] w-full border-t-[2px]  text-center py-[30px] mt-[10px]">
        <span
          style={{
            fontFamily: "Clash Display",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "26px",
          }}
        >
          Copyright 2022 Uifry.Com All Rights Reserved
        </span>
      </div>
    </motion.div>
  );
}

export default Seventhsection;
