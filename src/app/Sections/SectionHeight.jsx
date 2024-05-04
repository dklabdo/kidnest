import React from "react";
import Title from "../Components/Title";
import Image from "next/image";
import Contact from "../Components/Contact";
function SectionHeight() {

  return (
    <div id="#contact" className="w-full my-32 flex flex-col xs2:px-4 px-8 md:px-12 lg:px-20 xl:px-32 gap-32">
      <Title GreenText="Contact" big={true} YellowText="Us" />
      <div className="flex items-center flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] xs2:px-2 px-6 lg:px-12 ">
            <Contact/>
        </div>
        <div className="lg:w-[40%] my-14  md:my-32 lg:my-0 items-center w-full flex flex-col md:flex-row lg:flex-col gap-6 ">
          <div className="flex flex-col gap-2 lg:gap-8">
            <div className="flex gap-4 my-2 items-center">
              <Image
                src="/icon/local.svg"
                className="inline"
                width={25}
                height={30}
              />
              <p className="text-base">
                Infomation technologies building, Victoria Island, Lagos,
                Nigeria.
              </p>
            </div>
            <div className="flex gap-6 my-2 items-center">
              <Image
                src="/icon/phone.svg"
                className="inline"
                width={25}
                height={30}
              />
              <p className="text-base">
              +234 081-1236-4568
              </p>
            </div>
            <div className="flex gap-6 my-2 items-center">
              <Image
                src="/icon/mail.svg"
                className="inline"
                width={25}
                height={30}
              />
              <p className="text-base">
                kidnest@gmail.com
              </p>
            </div>
            <div className="flex gap-6 my-2 items-center">
              <Image
                src="/icon/insta.svg"
                className="inline"
                width={25}
                height={30}
              />
              <p className="text-base">
                kidnest.creche
              </p>
            </div>
          </div>
          <div>
          <Image
                src="/image/map.png"
                className="rounded-3xl"
                width={600}
                height={500}
                
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeight;
