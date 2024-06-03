"use client";
import React from "react";
import { cubeicon, icon, light, phone4, star, staricon } from "../../data";
import Image from "next/image";
import { motion } from "framer-motion";

const Secondsection = () => {
  return (
    <motion.div
      initial={{ y: "200px", opacity: 0 }}
      whileInView={{ y: "0px", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="w-full h-full flex max-md:flex-col   my-[50px]"
    >
      <div className="h-[100%] w-[50%]  pt-[50px] max-sm:w-full max-sm:h-[40%]   relative  ">
        <Image
          src={phone4}
          width={719}
          height={719}
          className="relative md:bottom-[100px] "
          alt=""
        />
        <Image
          src={star}
          width={48}
          height={48}
          className="absolute top-[10%] max-sm:top-[30%]"
        />
        <Image
          src={light}
          width={400}
          height={500}
          className=" absolute md:top-[-210px] left-[60px] max-md:top-[-150px]  z-[-10] max-sm:left-[0px] max-sm:bottom-[0px] "
          alt=""
        />
      </div>
      <div className="h-[100%] flex items-center justify-center w-[50%]  pt-[50px] max-sm:w-full max-sm:h-[50%]  relative">
        <div className="h-[95%] w-full ">
          <span
            style={{
              fontFamily: "Clash Display",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "28px",
            }}
            className="text-[#FF5555]"
          >
            FEATURES
          </span>
          <h1
            style={{
              fontFamily: "Clash Display",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "48px",
            }}
          >
            Uifry Premium
          </h1>
          <div className="mt-[20px] w-full ">
            <div className="mt-[0px] w-full  mb-[20px]">
              <span
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="flex"
              >
                <Image
                  src={staricon}
                  width={24}
                  height={24}
                  className="mr-[10px]"
                  alt=""
                />
                Budgeting Intervals
              </span>
              <div
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "28px",
                  opacity: "0.5",
                }}
                className="mt-[10px]"
              >
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </div>
            </div>
            <div
              className="mt-[0px] w-full  mb-[20px]
            "
            >
              <span
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="flex"
              >
                <Image
                  src={icon}
                  width={24}
                  height={24}
                  className="mr-[10px]"
                  alt=""
                />
                Budgeting Intervals
              </span>
              <div
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "28px",
                  opacity: "0.5",
                }}
                className="mt-[10px]"
              >
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </div>
            </div>
            <div className="mt-[0px] w-full  ">
              <span
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="flex"
              >
                <Image
                  src={cubeicon}
                  width={24}
                  height={24}
                  className="mr-[10px]"
                  alt=""
                />
                Budgeting Intervals
              </span>
              <div
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "28px",
                  opacity: "0.5",
                }}
                className="mt-[10px]"
              >
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </div>
            </div>
          </div>
        </div>
        <Image
          src={light}
          width={400}
          height={300}
          alt=""
          className=" absolute sm:top-[-210px] right-[-250px] max-md:top-[-150px]  z-[-10]   "
        />
      </div>
    </motion.div>
  );
};

export default Secondsection;
