import React from "react";
import Image from "next/image";
import Link from "next/link";
import 'animate.css';
function Hero() {
  return (
    <div className="my-10 scale-95 flex xl:flex-row   md:px-8 2xl:px-24 xl:px-14   w-full flex-col-reverse  items-center justify-between  ">
     
      <div className="animate__animated animate__backInLeft xl:w-[60%] w-full my-10 xl:mt-36 xs:px-1 px-8 flex flex-col gap-8  md:px-14">
        <h1 className="xl:text-nowrap text-center xl:text-start"><span className="text-secondary">Le sourir </span><span>
        <Image src="/image/smile.svg" className="inline w-10" width={80} height={80} />
        </span> <span className="text-secondary">de votre enfant </span> <br /> <span className="text-primary">c’est notre responsabilité</span> </h1>
        <p className="text-center xl:text-start">Une crèche accueillante, offrant un environnement naturel et sécurisé pour votre enfant, favorisant son développement harmonieux.</p>
        <Link href="/walid" className="px-6  text-start scale-90 mx-auto xl:mx-0 md:scale-95 lg:scale-100 w-fit bg-secondary rounded-full text-base flex gap-2 items-center hover:scale-105 transition text-white my-4 xl:my-14 py-4">
        inscriver vos enfants
            <Image src="/icon/arrow.svg" className="inline" width={30} height={30} />   
            
        </Link>
      </div>
      <div className="animate__animated animate__backInRight xl:w-[40%]  xl:p-4 flex flex-col items-center p-6 xs:p-0 sm:p-10 justify-center">
      <Image src="/image/hero.png" className="inline" width={500} height={600} />
      </div>
      </div>
      
    
  );
}

export default Hero;
