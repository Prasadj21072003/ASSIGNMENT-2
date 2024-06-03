"use client";
import React from "react";
import { icon1, light, light2, para3, phone6, star } from "../../data";
import Image from "next/image";
import { motion } from "framer-motion";

const Fourthsection = () => {
  return (
    <motion.div
      initial={{ y: "200px", opacity: 0 }}
      whileInView={{ y: "0px", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="w-full h-full flex max-sm:flex-col   my-[50px] sm:pr-[50px] "
    >
      <div className="h-[100%] w-[50%]  pt-[50px] max-sm:w-full max-sm:h-[40%]   relative  ">
        <Image
          src={phone6}
          width={719}
          height={719}
          className="relative md:bottom-[200px] "
          alt=""
        />

        <Image
          src={light2}
          width={500}
          height={500}
          className=" absolute sm:top-[80px]  right-[60px] max-md:top-[100px]  z-[-10] max-sm:left-[0px]  "
          alt=""
        />
      </div>
      <div className="h-[100%] flex items-center justify-center sm:w-[50%] w-full  pt-[50px] max-sm:w-full max-sm:h-[50%]  relative  ">
        <div className="h-[95%] w-full ">
          <div className="mt-[20px] w-full ">
            <div className="mt-[30px] w-full sm:w-[80%]  ">
              <span
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "28px",
                }}
                className="flex items-center"
              >
                <Image
                  src={icon1}
                  width={48}
                  height={48}
                  className="mr-[10px]"
                  alt=""
                />
                Fully Customizable
              </span>
              <div
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "28px",
                  opacity: "0.5",
                }}
                className="mt-[30px]"
              >
                Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
                Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
                Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
                Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
              </div>
            </div>
          </div>
        </div>

        <Image
          src={star}
          width={48}
          height={48}
          className="absolute right-[30%] md:bottom-[-200px] max-sm:top-[110%] max-sm:right-[0px] "
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Fourthsection;
