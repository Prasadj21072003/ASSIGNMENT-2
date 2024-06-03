"use client";
import Image from "next/image";
import React from "react";
import {
  light2,
  light3,
  phone1,
  phone2,
  phone3,
  rightarrow,
  showicon,
  star,
  topsectionleftimg,
} from "../../data";
import { motion } from "framer-motion";

const Topsection = () => {
  return (
    <div className="w-full h-full flex max-sm:flex-col-reverse max-sm:gap-[20px] mb-[50px] relative">
      <div className="h-[100%] w-[50%]  sm:pt-[50px] max-sm:w-full max-sm:h-[50%] ">
        <div className=" flex flex-col gap-[30px] pt-[40px] ">
          <h1
            style={{
              fontFamily: "Clash Display",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "64px",
            }}
            className="relative  flex items-center justify-center"
          >
            <Image
              src={light3}
              width={400}
              alt=""
              height={400}
              className="absolute  top-[-70%] left-[15%] z-[-10] opacity-[1] object-fill max-lg:top-[0px]"
            />
            Make The Best Financial Decisions
          </h1>
          <span
            style={{
              fontFamily: "Clash Display",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "28px",
              opacity: "0.5",
            }}
          >
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </span>
          <div className="md:w-[60%] flex  items-center gap-[30px] w-full">
            <motion.button
              style={{ fontFamily: "Clash Display" }}
              transition={{ ease: "easeInOut", duration: 2 }}
              className="py-[10px] px-[30px] text-white bg-black flex items-center gap-[10px] hover:bg-white hover:text-black transition ease-in-out duration-1000"
            >
              Get Started
              <Image
                src={rightarrow}
                width={24}
                height={24}
                className=""
                alt=""
              />
            </motion.button>
            <motion.button
              style={{ fontFamily: "Clash Display" }}
              className="py-[10px] px-[30px] flex items-center gap-[10px] hover:text-white hover:bg-black transition ease-in-out duration-1000"
            >
              <Image src={showicon} width={24} height={24} alt="" />
              Watch Video
            </motion.button>
          </div>
          <div className="w-full h-full  relative">
            <Image src={topsectionleftimg} width={596} height={357} alt="" />
            <Image
              src={star}
              width={48}
              alt=""
              height={48}
              className="absolute top-[20%] left-[20%]"
            />
          </div>
        </div>
      </div>
      <div className="h-[100%] w-[50%]  max-sm:w-full max-sm:h-[50%] relative max-md:top-[50px] left-[30px] ">
        <Image
          src={phone1}
          width={700}
          height={700}
          alt=""
          className="relative bottom-[50px] max-sm:bottom-[0px]"
        />

        <Image
          src={phone2}
          width={700}
          height={700}
          alt=""
          className="absolute top-[20px] max-sm:bottom-[0px]"
        />
        <Image
          src={phone3}
          width={700}
          alt=""
          height={700}
          className="absolute top-[-30px] left-[-100px] max-sm:bottom-[0px]"
        />
        <Image
          src={light2}
          width={442}
          alt=""
          height={645}
          className=" absolute left-[70px] md:bottom-[120px] z-[-10] max-sm:left-[0px] max-sm:bottom-[0px] "
        />
      </div>
    </div>
  );
};

export default Topsection;
