"use client"
import React, { useState } from "react";
import Image from "next/image";
function NavBar() {
  const [open,setopen] = useState(false)
  function Close(){
    setopen(false);
  }
  return (
    <div className="w-full flex-col flex gap-4">
      <nav >
      <div className="xs:scale-75   flex gap-2 md:px-10 xl:px-20 items-center">
        <Image alt="..." src="/image/logo.svg" width={45} height={50} />
        <h4>
          <span className="text-secondary">Kid</span>
          <span className="text-primary">nest</span>
        </h4>
      </div>
      <div className="md:flex hidden gap-10  md:px-10 xl:px-20 lg:gap-24">
        <a
          href="#home"
          className="text-base group mt-2 hover:text-secondary flex items-center flex-col gap-1 justify-center"
        >
          {" "}
          Home <div className="dot"></div>{" "}
        </a>
        <a
          href="#service"
          className="text-base group mt-2 hover:text-secondary flex items-center flex-col gap-1 justify-center"
        >
          {" "}
          Services <div className="dot"></div>{" "}
        </a>
        <a
          href="#contact"
          className="text-base group mt-2 hover:text-secondary flex items-center flex-col gap-1 justify-center"
        >
          {" "}
          Contact us <div className="dot"></div>{" "}
        </a>
      </div>

      <div className="md:hidden">
        <Image
        alt="..."
          src={`/icon/${open ? "close" : "menu"}.svg`}
          className="stroke-black cursor-pointer fill-black"
          width={40}
          height={30}
          onClick={() => setopen(!open)}
        />
      </div>
      </nav>
      {open && <TopBar close={Close} />}


    </div>
  );
}

function TopBar({close}) {
  return (
    <div className="w-full openAnimation overflow-y-hidden flex flex-col gap-4">
      <a
        href="#home"
        onClick={() => close()}
        className="text-base group mt-2 hover:text-secondary flex items-center flex-col gap-1 justify-center"
      >
        {" "}
        Home 
      </a>
      <a
        href="#service"
        onClick={() => close()}
        className="text-base group mt-2 hover:text-secondary flex items-center flex-col gap-1 justify-center"
      >
        {" "}
        Services 
      </a>
      <a
        href="#contact"
        onClick={() => close()}
        className="text-base group mt-2 hover:text-secondary flex items-center flex-col gap-1 justify-center"
      >
        {" "}
        Contact us
      </a>
    </div>
  );
}

export default NavBar;
