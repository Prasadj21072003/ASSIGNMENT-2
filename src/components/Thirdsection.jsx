"use client";
import React from "react";
import { icon2, light, phone5, star } from "../../data";
import Image from "next/image";
import { motion } from "framer-motion";

const Thirdsection = () => {
  return (
    <motion.div
      initial={{ y: "200px", opacity: 0 }}
      whileInView={{ y: "0px", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="w-full h-full flex max-md:flex-col-reverse   my-[50px]"
    >
      <div className="h-[100%] flex items-center justify-center w-[50%]  pt-[50px] max-sm:w-full max-sm:h-[50%]  ">
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
            ADVANTAGES
          </span>
          <h1
            style={{
              fontFamily: "Clash Display",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "48px",
            }}
          >
            why Choose Uifry?
          </h1>
          <div className="mt-[20px] w-full ">
            <div className="mt-[30px] w-full  ">
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
                  src={icon2}
                  width={48}
                  alt=""
                  height={48}
                  className="mr-[10px]"
                />
                Clever Notifications
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
      </div>
      <div className="h-[100%] w-[50%]  pt-[50px] max-sm:w-full max-sm:h-[40%]   relative  ">
        <Image
          src={phone5}
          width={719}
          alt=""
          height={719}
          className="relative md:bottom-[100px] "
        />
        <Image
          src={star}
          width={48}
          alt=""
          height={48}
          className="absolute right-[10px] top-[10%] max-sm:top-[30%]"
        />
        <Image
          src={light}
          width={400}
          alt=""
          height={500}
          className=" absolute md:top-[0px] left-[60px] max-md:top-[-50px]  z-[-10] max-sm:left-[0px]  "
        />
      </div>
    </motion.div>
  );
};

export default Thirdsection;
