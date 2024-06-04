
import React from "react";
import Image from "next/image";


function SectionTwo() {

  return (
    <div id="#home"  className="md:px-8 flex lg:h-[600px] overflow-x-hidden flex-col-reverse lg:flex-row w-full my-20 items-center justify-between  ">
      <div className=" md:w-[50%] w-full  flex justify-center items-center">
        <BabySitting />
      </div>
      <div data-aos="fade-left" data-aos-duration="500" className="w-full md:w-auto  px-2 lg:px-0 flex justify-end">
        <Image
        alt="..."
          src="/image/section1.png"
          className="rounded-3xl w-full  lg:rounded-tl-3xl  lg:rounded-bl-3xl "
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}

function BabySitting() {
  return (
    <div className="w-full px-4 scale-90  lg:scale-100 flex flex-col my-24 lg:my-0 items-center gap-4 justify-center">
      <div className="w-28 P-3 xs2:scale-90 flex justify-center items-center bg-secondary h-28 rounded-full">
        <Image alt="..." src="/icon/BabySitting.png" width={80} height={80} />
      </div>
      <h3 className="text-lg text-secondary">Baby sitting</h3>
      <p className="text-base text-center">
      Notre crèche propose un service de baby-sitting à domicile via une application mobile, permettant aux parents de réserver des baby-sitters qualifiés en toute simplicité et sécurité.
      </p>
    </div>
  );
}

export default SectionTwo;
