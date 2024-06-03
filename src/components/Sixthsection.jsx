"use client";
import Image from "next/image";
import React from "react";
import { light, secondlastdivimg, star } from "../../data";
import { motion } from "framer-motion";

const Sixthsection = () => {
  return (
    <motion.div
      initial={{ y: "200px", opacity: 0 }}
      whileInView={{ y: "0px", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="w-full h-full mt-[50px]  flex-col gap-[50px]  relative "
    >
      <div className="w-full h-[150px]  mb-[50px]  relative">
        <span
          style={{
            fontFamily: "Clash Display",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "28px",
          }}
          className="text-[#FF5555]"
        >
          FAQ
        </span>
        <h1
          style={{
            fontFamily: "Clash Display",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "48px",
          }}
          className="sm:w-[30%]  w-full "
        >
          Frequently asked questions
        </h1>
        <Image
          src={star}
          width={48}
          height={48}
          className="absolute bottom-[20px] left-[50%]"
          alt=""
        />
      </div>
      <div className="w-full  max-sm:flex-col  flex    sm:pr-[50px] sm:px-[20px] max-sm:mt-[200px] ">
        <div className="h-[100%] w-[50%]   max-sm:w-full max-sm:h-[40%]   relative  max-sm:bottom-[90px]  flex justify-end  ">
          <div className="sm:w-[78%]  sm:mr-[20px] mb-[10px]">
            <div className="mt-[0px] w-full max-sm:w-full bg-[#FF5555]  py-[20px] px-[20px] rounded-xl ">
              <span
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "28px",
                }}
                className="text-white  "
              >
                The Best Financial Accounting App Ever!
              </span>
              <div
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="mt-[10px] text-white"
              >
                “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </div>
            </div>
            <div className=" w-full max-sm:w-full  py-[20px] px-[20px] rounded-xl mt-[20px]">
              <span
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "28px",
                }}
                className=""
              >
                The Best Financial Accounting App Ever!
              </span>
              <div
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="mt-[10px] "
              >
                “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </div>
            </div>
            <div className=" w-full max-sm:w-full bg-[#FF5555]  py-[20px] px-[20px] rounded-xl mt-[20px]">
              <span
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "28px",
                }}
                className="text-white "
              >
                The Best Financial Accounting App Ever!
              </span>
              <div
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="mt-[10px] text-white"
              >
                “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[50%]   max-sm:w-full max-sm:h-[40%]   relative  max-sm:bottom-[90px] ">
          <div className="mt-[0px] w-[78%] max-sm:w-full   py-[20px] px-[20px] rounded-xl ">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 600,
                fontSize: "28px",
                lineHeight: "28px",
              }}
              className="  "
            >
              The Best Financial Accounting App Ever!
            </span>
            <div
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "28px",
              }}
              className="mt-[10px] "
            >
              “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </div>
          </div>
          <div className=" w-[78%] max-sm:w-full  py-[20px] px-[20px] rounded-xl mt-[20px] bg-[#FF5555]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 600,
                fontSize: "28px",
                lineHeight: "28px",
              }}
              className="text-white"
            >
              The Best Financial Accounting App Ever!
            </span>
            <div
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "28px",
              }}
              className="mt-[10px] text-white"
            >
              “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </div>
          </div>
          <div className=" w-[78%] max-sm:w-full   py-[20px] px-[20px] rounded-xl mt-[20px]">
            <span
              style={{
                fontFamily: "Clash Display",
                fontWeight: 600,
                fontSize: "28px",
                lineHeight: "28px",
              }}
              className=""
            >
              The Best Financial Accounting App Ever!
            </span>
            <div
              style={{
                fontFamily: "Clash Display",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "28px",
              }}
              className="mt-[10px] "
            >
              “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit  sm:mt-[150px] relative mt-[50px] ">
        <Image
          src={secondlastdivimg}
          width={1090}
          height={508}
          alt=""
          className="mx-auto"
        />
        <Image
          src={light}
          width={300}
          alt=""
          height={300}
          className="absolute sm:top-[-50%] sm:left-[0px] z-[-10] max-sm:top-[-160%] max-sm:left-[-100px]"
        />

        <Image
          src={star}
          width={48}
          alt=""
          height={48}
          className="absolute top-[0%] left-[0px] "
        />
        <Image
          src={star}
          width={58}
          height={58}
          alt=""
          className="absolute top-[-10%] right-[0px] max-sm:top-[-40%]"
        />
      </div>
    </motion.div>
  );
};

export default Sixthsection;
