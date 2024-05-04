import React from "react";
import Title from "../Components/Title";
import Image from "next/image";
function SectionFive() {

  return (
    <div  className="w-screen  overflow-x-hidden flex justify-center py-4 my-48 ">
      <div className="flex xs2:w-full xs2:px-4 w-[80%]  flex-col items-center ">
        <Title YellowText="de votre enfants " GreenText="L’entretien" />
        <Image
          className="my-32 px-10 xs2:scale-75 "
          src="/image/section2.png"
          width={300}
          height={300}
        />
        <div className="w-fit  gap-14 h-fit xs2:pl-2 pl-8 flex justify-center flex-col ">
          <div className="flex gap-5 items-center ">
            <Image
              className=" "
              src="/image/icon1.svg"
              width={50}
              height={50}
            />
            <h3>Des repas équilibrés sont inclus dans les services de la crèche pour assurer une alimentation saine.</h3>

          </div>
          <div className="flex gap-5 items-center  ">
            <Image
              className=""
              src="/image/icon2.svg"
              width={50}
              height={50}
            />
            <h3>La crèche fournit des tenues appropriées aux enfants pendant leur séjour.</h3>

          </div>
          <div className="flex gap-5 items-center ">
            <Image
              className=""
              src="/image/icon3.svg"
              width={50}
              height={50}
            />
            <h3>Chaque jour, une attention particulière est portée au bien-être et au confort des enfants accueillis à la crèche.</h3>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
