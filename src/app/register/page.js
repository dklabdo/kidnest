"use client";
import React, { useRef, useState } from "react";
import { getFirestore } from "firebase/firestore";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserRound, MailQuestion, PhoneCall, Heart } from "lucide-react";
import Swal from "sweetalert2";
import { app } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore"; 


const db = getFirestore(app);

function Register() {
  const [info, setinfo] = useState(null);
  const [next, setnext] = useState(false);
  function getParentInfo(info) {
    setinfo(info);
    setnext(true);
  }
  return (
    <div className="bg w-full h-screen overflow-y-hidden flex justify-center  items-center ">
      <div className="h-screen  flex justify-center items-center w-full md:w-[70%] lg:w-[60%] bg-white/50 backdrop-blur-lg ">
        {next ? (
          <ChildForm parentInfo={info} />
        ) : (
          <ParentForm getParentInfo={getParentInfo} />
        )}
      </div>
    </div>
  );
}

function ParentForm({ getParentInfo }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [perentInfo, setperentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    etatCevil: "",
  });

  function handleChange(data) {
    const { name, value } = data;
    setperentInfo({
      ...perentInfo,
      [name]: value,
    });
  }
  function handleSubmit() {
    perentInfo.etatCevil = etatCevil;
    getParentInfo(perentInfo);
  }
  const [etatCevil, setetatCevil] = useState("Etat civile");
  return (
    <div className=" w-full h-screen    md:px-4     rounded-3xl  ">
      <h2 className="text-center my-10 text-xl text-secondary">
        Inscivez a kidnest
      </h2>
      <form onSubmit={(e) => handleSubmit(e)} className="w-full  my-20  px-6">
        <label className="flex mt-4 items-center gap-3 px-2 my-4">
          <UserRound />
          <h3>Full name</h3>
        </label>
        <input
          required
          onChange={(e) => handleChange(e.target)}
          className="in"
          name="name"
          type="text"
          placeholder="your name"
        />
        <label className="flex mt-4 items-center gap-3 px-2 my-4">
          <MailQuestion />
          <h3>E-mail</h3>
        </label>
        <input
          onChange={(e) => handleChange(e.target)}
          className="in"
          required
          name="email"
          type="email"
          placeholder="your email"
        />
        <label className="flex mt-4 items-center gap-3 px-2 my-4">
          <PhoneCall />
          <h3>Phone number</h3>
        </label>
        <input
          required
          onChange={(e) => handleChange(e.target)}
          className="in"
          name="phone"
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
        <button
          type="submit"
          className="py-3 w-full text-center bg-secondary text-white rounded-3xl my-6"
        >
          Suivent
        </button>
      </form>
    </div>
  );
}

function ChildForm({ parentInfo }) {
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [groupage, setgroupage] = useState("A+");
  const [sex, setsex] = useState("Garcon");
  const [childInfo, setchildInfo] = useState({
    nom: "",
    age: "",
    groupage: "A+",
    sex: "Garcon",
  });
  const [child, setchild] = useState([]);
  

  function handleChange(data) {
    const { name, value } = data;
    setchildInfo({
      ...childInfo,
      [name]: value,
    });
  }

  function handleAddchild() {
    if (childInfo.nom != "" && childInfo.age != "") {
      childInfo.groupage = groupage;
      childInfo.sex = sex;
      child.push(childInfo);
      setchild(child);
      console.log(child);
      reset();
      
    }
    
   
  }
  function reset() {
    setchildInfo({
      nom: "",
      age: "",
      groupage: "A+",
      sex: "Garcon",
    });
    setgroupage("A+");
    setsex("Garcon");
  }
  async function postData(data){
     try {
          const docRef = await addDoc(collection(db, "register"), data);
        
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
  }


   function handleConfirm(e) {
    e.preventDefault();
    handleAddchild();

    if (child.length > 0) {
      console.log("test");
      Swal.fire({
        title: "Confirm ??",
        text: `Vous voulez inscrire ${
          child.length == 1 ? "votre" : child.length
        } enfants`,
        icon: "question",
        confirmButtonColor: "#F69B00",
      }).then(() => {
        const register = {
          parentInfo: parentInfo,
          childsInfo: child,
        };
        console.log(register);
        postData(register);
        
       
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Veuillez ajouter un enfant pour confirmer",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  }
  return (
    <div className=" w-full  scale-95 xs:scale-100    md:px-4 py-2    rounded-3xl  ">
      <h2 className="text-center mt-8 text-xl text-secondary">
        Inscivez a kidnest
      </h2>
      <form method="POST" onSubmit={(e) => handleConfirm(e)} className="w-full  my-16  px-6">
        <label className="flex mt-4 items-center gap-1 px-2 my-4">
          <h3>Nom de votre enfant</h3>
        </label>
        <input
          value={childInfo.nom}
          required
          name="nom"
          onChange={(e) => handleChange(e.target)}
          className="in"
          type="text"
          placeholder="Le nom de votre enfants"
        />
        <label className="flex mt-4 items-center gap-3 px-2 my-4">
          <h3>L'age</h3>
        </label>
        <input
          value={childInfo.age}
          name="age"
          required
          onChange={(e) => handleChange(e.target)}
          className="in"
          type="number"
          placeholder="L'age de votre enfant"
          max={7}
          min={1}
        />

        <div className="flex md:flex-row flex-col gap-2 my-2">
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
                  onClick={() => setsex("Garcon")}
                >
                  Garcon
                </MenuItem>
                <MenuItem
                  className="text-black"
                  onClick={() => setsex("Fille")}
                >
                  Fille
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
                  className="flex w-full py-3 shadow-md focus:outline-none border-none  shadow-gray-500/50 bg-white rounded-3xl items-center justify-between my-4 text-base font-normal capitalize "
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
              <MenuList className="focus:border-none  w-[30%] flex flex-col  gap-3 overflow-visible lg:grid">
                <MenuItem
                  className="text-black "
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
        <button
        type="reset"
          onClick={(e) => handleAddchild(e)}
          className="py-3 w-full text-center bg-white text-secondary border-2 border-secondary rounded-3xl my-6"
        >
          Ajouter votre enfants
        </button>
        <button
          type="submit"
          className="py-3 w-full text-center bg-secondary text-white rounded-3xl my-6"
        >
          Confirmer
        </button>
      </form>
    </div>
  );
}

export default Register;
