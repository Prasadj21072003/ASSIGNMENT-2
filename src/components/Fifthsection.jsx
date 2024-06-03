"use client";
import Image from "next/image";
import React from "react";
import { light2, star, testimonial, testimonial2 } from "../../data";
import { motion } from "framer-motion";

const Fifthsection = () => {
  return (
    <motion.div
      initial={{ y: "200px", opacity: 0 }}
      whileInView={{ y: "0px", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="w-full h-screen relative max-sm:mb-[400px]"
    >
      <div className="w-full h-[150px]  mb-[100px] text-center ">
        <span
          style={{
            fontFamily: "Clash Display",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "28px",
            opacity: "0.5",
          }}
        >
          Testimonial
        </span>
        <h1
          style={{
            fontFamily: "Clash Display",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "48px",
          }}
          className="sm:w-[30%]  w-full m-auto"
        >
          What Our Users Say About Us?
        </h1>
      </div>
      <div className="w-full h-full flex max-sm:flex-col     sm:pr-[50px]">
        <div className="h-[100%] w-[50%]  pt-[50px] max-sm:w-full max-sm:h-[40%]   relative  max-sm:bottom-[90px] ">
          <Image
            src={testimonial}
            width={719}
            height={719}
            className="relative md:bottom-[200px] "
            alt=""
          />

          <Image
            src={light2}
            width={500}
            height={500}
            className=" absolute sm:top-[0px]  right-[190px] max-md:top-[100px]  z-[-10] max-sm:left-[0px]  "
            alt=""
          />
          <Image
            src={star}
            width={48}
            height={48}
            className=" absolute bottom-[40%]  "
            alt=""
          />
        </div>
        <div className="h-[100%] flex items-start justify-center w-[50%]  max-sm:w-full max-sm:h-[50%]  relative  ">
          <div className="mt-[20px] w-full ">
            <div className="mt-[30px]    sm:w-[70%]">
              <span
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "28px",
                }}
                className=" "
              >
                The Best Financial Accounting App Ever!
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
              <div className="mt-[30px]">
                <Image src={testimonial2} width={190} height={40} alt="" />
              </div>
              <div
                className="mt-[30px]"
                style={{
                  fontFamily: "Clash Display",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
              >
                Nick Jonas
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Fifthsection;
