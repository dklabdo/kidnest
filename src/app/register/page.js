"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserRound, MailQuestion, PhoneCall, Heart } from "lucide-react";
function Register() {
  const [info,setinfo] = useState(null);
  

  return (
    <div className="bg w-full h-screen overflow-y-hidden flex justify-center  items-center ">
      <div className="h-screen flex justify-center items-center w-full md:w-[70%] lg:w-[60%] bg-white/50 backdrop-blur-lg ">
        <ChildForm />
      </div>
    </div>
  );
}

function ParentForm({getParentInfo}) {
  const [openMenu, setOpenMenu] = useState(false);
  const [perentInfo,setperentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    etatCevil : ""
  })
 
  function handleChange(data){
    const {name,value} = data
    setperentInfo({
      ...perentInfo,
      [name] : value
    })
  }
  function handleSubmit(e){
    e.preventDefault();
    perentInfo.etatCevil = etatCevil;

  }
  const [etatCevil, setetatCevil] = useState("Etat civile");
  return (
    <div className=" w-full h-fit    md:px-4 py-10    rounded-3xl  ">
      <h2 className="text-center my-10 text-xl text-secondary">
        Inscivez a kidnest
      </h2>
      <form className="w-full  my-20  px-6">
        <label className="flex mt-4 items-center gap-3 px-2 my-4">
          <UserRound />
          <h3>Full name</h3>
        </label>
        <input onChange={(e)=>handleChange(e.target)} className="in" type="text" placeholder="your name" />
        <label className="flex mt-4 items-center gap-3 px-2 my-4">
          <MailQuestion />
          <h3>E-mail</h3>
        </label>
        <input onChange={(e)=>handleChange(e.target)} className="in" type="text" placeholder="your email" />
        <label className="flex mt-4 items-center gap-3 px-2 my-4">
          <PhoneCall />
          <h3>Phone number</h3>
        </label>
        <input onChange={(e)=>handleChange(e.target)} className="in" type="number" placeholder="your Phone number" />
        <label className="flex mt-4 items-center gap-3 px-2 my-4">
          <Heart />
          <h3>Etat civile</h3>
        </label>

        <Menu open={openMenu} handler={setOpenMenu}>
          <MenuHandler>
            <Button
              variant="text"
              className="flex w-full shadow-md shadow-gray-500/50 bg-white rounded-3xl items-center justify-between my-6 text-base font-normal capitalize "
            >
              {etatCevil}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="focus:border-none w-[50%] flex flex-col  gap-3 overflow-visible lg:grid">
            <MenuItem
              className="text-black"
              onClick={() => setetatCevil("Merié")}
            >
              Merié
            </MenuItem>
            <MenuItem
              className="text-black"
              onClick={() => setetatCevil("Divorcé")}
            >
              Divorcé
            </MenuItem>
            <MenuItem
              className="text-black"
              onClick={() => setetatCevil("veuf")}
            >
              veuf
            </MenuItem>
            <MenuItem
              className="text-black"
              onClick={() => setetatCevil("veuve")}
            >
              veuve
            </MenuItem>
          </MenuList>
        </Menu>
        <button type="submit" className="py-3 w-full text-center bg-secondary text-white rounded-3xl my-6">
          Suivent
        </button>
      </form>
    </div>
  );
}

function ChildForm() {
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [groupage, setgroupage] = useState("A+");
  const [sex, setsex] = useState("M");


  return (
    <div className=" w-full h-fit    md:px-4 py-10    rounded-3xl  ">
      <h2 className="text-center my-10 text-xl text-secondary">
        Inscivez a kidnest
      </h2>
      <form className="w-full  my-20  px-6">
        <label className="flex mt-4 items-center gap-3 px-2 my-4">
          <h3>Nom de votre enfant</h3>
        </label>
        <input className="in" type="text" placeholder="your name" />
        <label className="flex mt-4 items-center gap-3 px-2 my-4">
          <h3>L'age</h3>
        </label>
        <input
          className="in"
          type="number"
          placeholder="L'age de votre enfant"
          max={7}
          min={1}
        />

       <div className="flex md:flex-row flex-col gap-2 my-2" >
        
       
       <div className="w-full">
          <label className="flex mt-4 items-center gap-3 px-2">
            <h3>Sex</h3>
          </label>
          <Menu open={openMenu1} handler={setOpenMenu1}>
            <MenuHandler>
              <Button
                variant="text"
                className="flex w-full py-3 shadow-md shadow-gray-500/50 bg-white rounded-3xl items-center justify-between my-4 text-base font-normal capitalize "
              >
                {sex}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu1 ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="focus:border-none w-[30%] flex flex-col  gap-3 overflow-visible lg:grid">
              <MenuItem
                className="text-black"
                onClick={() => setgroupage("M")}
              >
                Masculain
              </MenuItem>
              <MenuItem
                className="text-black"
                onClick={() => setgroupage("F")}
              >
                Feminain
              </MenuItem>
              
            </MenuList>
          </Menu>
        </div>
      
        <div className="w-full">
          <label className="flex mt-4 items-center gap-3 px-2 ">
            <h3>Groupage</h3>
          </label>
          <Menu open={openMenu2} handler={setOpenMenu2}>
            <MenuHandler>
              <Button
                variant="text"
                className="flex w-full py-3 shadow-md shadow-gray-500/50 bg-white rounded-3xl items-center justify-between my-4 text-base font-normal capitalize "
              >
                {groupage}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu2 ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="focus:border-none w-[30%] flex flex-col  gap-3 overflow-visible lg:grid">
              <MenuItem
                className="text-black"
                onClick={() => setgroupage("A+")}
              >
                A+
              </MenuItem>
              <MenuItem
                className="text-black"
                onClick={() => setgroupage("A-")}
              >
                A-
              </MenuItem>
              <MenuItem
                className="text-black"
                onClick={() => setgroupage("B+")}
              >
                B+
              </MenuItem>
              <MenuItem
                className="text-black"
                onClick={() => setgroupage("B-")}
              >
                B-
              </MenuItem>
              <MenuItem
                className="text-black"
                onClick={() => setgroupage("AB+")}
              >
                AB+
              </MenuItem>
              <MenuItem
                className="text-black"
                onClick={() => setgroupage("AB-")}
              >
                AB-
              </MenuItem>
              <MenuItem
                className="text-black"
                onClick={() => setgroupage("O+")}
              >
                O+
              </MenuItem>
              <MenuItem
                className="text-black"
                onClick={() => setgroupage("O-")}
              >
               O-
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
       </div>
        <button className="py-3 w-full text-center bg-white text-secondary border-2 border-secondary rounded-3xl my-6">
          Ajouter votre enfants
        </button>
        <button className="py-3 w-full text-center bg-secondary text-white rounded-3xl my-6">
          Confirmer
        </button>
      </form>
    </div>
  );
}

export default Register;
