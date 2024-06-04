
import React from "react";
import Title from "../Components/Title";
import Image from "next/image";
function SectionSex() {
 
  return (
    <div className="xs2:px-2 px-8 md:px-18 xl:px-32 my-48">
      <div className="flex-col md:flex-row flex justify-between">
        <div
          
          className="md:w-[50%] gap-8 justify-center md:px-12  flex flex-col"
        >
          <Title
            GreenText="Decouvrir notre"
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
         
          className="my-20 md:my-0 md:w-[40%]  flex justify-center "
        >
          <Image
          alt="..."
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
