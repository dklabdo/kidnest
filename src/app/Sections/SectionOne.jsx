"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Get3D from "../Components/Get3D";
import Aos from "aos";
function SectionOne() {
  useEffect(()=>{Aos.init()},[]);

  return (
    <div data-aos="zoom-in" className="overflow-x-hidden overflow-y-hidden  h-[500px] lg:flex-row w-full  items-center flex-col  flex  ">
      <div className="w-full lg:w-1/2   items-center flex justify-center  h-full">
        <div className="w-fit h-fit">
          <Get3D />
        </div>
      </div>
      <div className="w-full flex flex-col mt-14 xs2:px-4 px-12 md:px-10 lg:w-1/2">
        <h2 className="text-center lg:text-start">
          <span className="text-secondary  ">Metre votre enfant dans une</span>{" "}
          <br /> <span className="text-primary">experiance unique</span>{" "}
        </h2>
        <div className="flex w-full  flex-col mx-auto lg:mx-0 md:flex-row gap-10 my-14">
          <div className="flex lg:w-fit w-full  gap-4 items-center py-2 px-6 rounded-full border-2 border-secondary">
            <Image src="/icon/s1.svg" width={30} height={30} />
            <p className="text-sm  2xl:text-base text-secondary">
              De 1 ans jusqu’a 7 ans
            </p>
          </div>
          <div className=" flex lg:w-fit  w-full gap-4 items-center py-2 px-6 rounded-full border-2 border-primary">
            <Image src="/icon/s2.svg" width={30} height={30} />
            <p className="text-primary text-sm 2xl:text-base">
              grandir avec la nature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
