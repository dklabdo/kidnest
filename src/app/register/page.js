"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserRound,MailQuestion,PhoneCall,Heart } from "lucide-react";
function Register() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg w-full h-screen overflow-y-hidden flex justify-center  items-center ">
      <div className="h-screen flex justify-center items-center w-full md:w-[70%] lg:w-[60%] bg-white/50 backdrop-blur-lg ">
        <div className=" w-full h-fit   md:px-4 py-10    rounded-3xl  ">
          <h2 className="text-center text-secondary">Inscivez a kidnest</h2>
          <form className="w-full  my-20  px-6">
            <label className="flex mt-4 items-center gap-3 px-2 my-4">
              <UserRound />
              <h3>Full name</h3>
            </label>
            <input className="in" type="text" placeholder="your name" />
            <label className="flex mt-4 items-center gap-3 px-2 my-4">
              <MailQuestion />
              <h3>E-mail</h3>
            </label>
            <input className="in" type="text" placeholder="your email" />
            <label className="flex mt-4 items-center gap-3 px-2 my-4">
              <PhoneCall />
              <h3>Phone number</h3>
            </label>
            <input
              className="in"
              type="number"
              placeholder="your Phone number"
            />
            <label className="flex mt-4 items-center gap-3 px-2 my-4">
            <Heart />
              <h3>Etat civile</h3>
            </label>
            <Menu open={openMenu} handler={setOpenMenu}>
              <MenuHandler>
                <Button
                  variant="text"
                  className="flex w-full shadow-md shadow-gray-500/50 bg-white rounded-3xl items-center justify-between my-6 text-base font-normal capitalize tracking-normal"
                >
                  Etat civil{" "}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="focus:border-none w-[45%] flex flex-col  gap-3 overflow-visible lg:grid">
                <MenuItem>odfgkfdlgk</MenuItem>
                <MenuItem>odfgkfdlgk</MenuItem>
                <MenuItem>odfgkfdlgk</MenuItem>
                <MenuItem>odfgkfdlgk</MenuItem>
              </MenuList>
            </Menu>
            <button className="py-3 w-full text-center bg-secondary text-white rounded-3xl my-6">
              Suivent
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
