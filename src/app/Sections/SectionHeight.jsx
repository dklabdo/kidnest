import React from "react";
import Title from "../Components/Title";
import Image from "next/image";
import Contact from "../Components/Contact";
function SectionHeight() {

  return (
    <div id="contact" className="w-full my-20 flex flex-col xs2:px-4 px-8 md:px-12 lg:px-20 xl:px-32 gap-32">
      <Title GreenText="Contact" big={true} YellowText="Us" />
      <div className="flex items-center flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] xs2:px-2 px-6 lg:px-12 ">
            <Contact/>
        </div>
        <div className="lg:w-[40%] my-14  md:my-32 lg:my-0 items-center w-full flex flex-col md:flex-row lg:flex-col gap-6 ">
          <div className="flex flex-col w-full px-1 md:px-10 my-2 gap-2 lg:gap-8">
            <div className="flex gap-4 my-2  w-full items-start">
              <Image
              
              alt="..."
                src="/icon/local.svg"
                className="inline"
                width={20}
                height={20}
              />
              <p className="text-base  ">
                sidi djilali sidi bel abbes
              </p>
            </div>
            <div className="flex gap-6 my-2 items-center">
              <Image
              alt="..."
                src="/icon/phone.svg"
                className="inline"
                width={20}
                height={20}
              />
              <p className="text-base">
              +213 541 45 71 82
              </p>
            </div>
            <div className="flex gap-6 my-2 items-center">
              <Image
              alt="..."
                src="/icon/mail.svg"
                className="inline"
                width={20}
                height={20}
              />
              <p className="text-base">
                kidnest@gmail.com
              </p>
            </div>
            
          </div>
          <div>
          <Image
          alt="..."
                src="/image/map.png"
                className="rounded-3xl"
                width={600}
                height={400}
                
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeight;
