"use client";
import React from "react";
import Title from "../Components/Title";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
function SectionSex() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="xs2:px-2 px-8 md:px-18 xl:px-32 my-48">
      <div className="flex-col md:flex-row flex justify-between">
        <div
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos="fade-right"
          className="md:w-[50%] gap-8 justify-center md:px-12  flex flex-col"
        >
          <Title
            GreenText="Desouvrir notre"
            YellowText="Application"
            bold={true}
            big={true}
          />
          <p className="text-base px-4 ">
            Avec notre application, la tranquillité d'esprit des parents est
            assurée, tandis que la transparence et l'engagement envers le
            meilleur intérêt de chaque enfant restent au cœur de notre mission.
          </p>
        </div>
        <div
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos="fade-left"
          className="my-20 md:my-0 md:w-[40%]  flex justify-center "
        >
          <Image
            className="xs:scale-90 xs2:scale-75"
            src="/image/section3.png"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionSex;
