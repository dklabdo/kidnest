
import React from "react";
import Image from "next/image";


function SectionTwo() {

  return (
    <div id="#home"  className="md:px-8 flex lg:h-[600px] overflow-x-hidden flex-col-reverse lg:flex-row w-full my-20 items-center justify-between  ">
      <div className="w-[50%]   flex justify-center items-center">
        <BabySitting />
      </div>
      <div data-aos="fade-left" data-aos-duration="500" className="w-full md:w-auto  px-2 lg:px-0 flex justify-end">
        <Image
          src="/image/section1.png"
          className="rounded-3xl w-full  lg:rounded-tl-3xl  lg:rounded-bl-3xl "
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

function BabySitting() {
  return (
    <div className="w-52 scale-90  lg:scale-100 flex flex-col my-24 lg:my-0 items-center gap-4 justify-center">
      <div className="w-28 P-3 xs2:scale-90 flex justify-center items-center bg-secondary h-28 rounded-full">
        <Image src="/icon/BabySitting.png" width={80} height={80} />
      </div>
      <h3 className="text-lg text-secondary">Baby sitting</h3>
      <p className="text-base text-center">
        offrant une sécurité et une flexibilité inégalées pour les parents h24.
      </p>
    </div>
  );
}

export default SectionTwo;
