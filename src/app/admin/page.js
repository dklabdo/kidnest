"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const db = getFirestore(app);
const auth = getAuth();

const ref = collection(db, "register");

function AdminAuth(){
  const [signed,setsigned] = useState(false);
  const [adminData,setadminData] = useState({
    email : "",
    password : ""
  })

  function handleChange(data){
    
    const {value, name} = data.target;
    
    setadminData({...adminData , [name] : value })
    console.log(adminData);
  }

  function handleSignIn(e){
    console.log(adminData);
    e.preventDefault();
    signInWithEmailAndPassword(auth, adminData.email, adminData.password)
    .then((user) => {
      setsigned(true);
      console.log(user);
    })
    .catch((err) => console.log(err))


  }

  return(
    <>
      {
        signed ? <Admin/> : (
          <div className="w-full h-screen flex justify-center items-center ">
      <div className="flex flex-col w-80 h-60  " >
        <h2 className="text-lg text-secondary text-center my-6 ">Admin log-in</h2>
        <form className="flex flex-col " onSubmit={(e) => handleSignIn(e)}>
          <input onChange={(e) => handleChange(e)} name="email" className="in my-4"  placeholder="enter your e-mail" type="email" />
          <input onChange={(e) => handleChange(e)} name="password" className="in my-4"  placeholder="enter your password" type="password" />
          <button type="submit"  className="px-6 py-3 my-4 self-center text-white  rounded-full bg-secondary" >Sign in</button>

        </form>

      </div>

    </div>
        )
      }
    </>
  )
}

function Admin() {
  const [data, setData] = useState([]);
  const [refresh, setrefresh] = useState(false);

  useEffect(() => {
    function getOrders() {
      getDocs(ref).then((data) => {
        const array = [];
        console.log(data);

        data.forEach((doc) => {
          array.push({ ...doc.data(), id: doc.id });
        });
        console.log(array);
        setData(array);
      });
    }

    getOrders();
  }, [refresh]);

  return (
    <div className="w-full overflow-y-hidden h-screen p-6">
      <div className="w-full flex justify-between px-4">
        <h1 className="text-lg">Registration</h1>
        <button
          onClick={() => setrefresh(!refresh)}
          className="px-4 py-3 rounded-full bg-secondary text-white"
        >
          {" "}
          Actualisé{" "}
        </button>
      </div>
      <div className="w-full mt-20 overflow-y-auto h-full">
        <Ligne
          name="Nom"
          phoneNumber="numero de telephone"
          kids="Nbr d'enfants"
        />
        {data.map((data, index) => {
          return (
            <Ligne
              key={index}
              name={data.parentInfo.name}
              phoneNumber={data.parentInfo.phone}
              kids={data.childsInfo}
            />
          );
        })}
      </div>
    </div>
  );
}

function Ligne({ name, phoneNumber, kids }) {
  const [showDetails, setshowDetails] = useState(false);
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full px-6 border-b-2 items-center border-secondary h-14 flex justify-between ">
        <p className="text-base w-[40%] "> {name} </p>
        <p className="text-base w-[10%] ">
          {" "}
          {kids == "Nbr d'enfants" ? "Nbr d'enfants" : kids.length}{" "}
        </p>
        <p className="text-base w-[20%] "> {phoneNumber} </p>
        {kids == "Nbr d'enfants" ? (
          <div className="w-8 "></div>
        ) : (
          <button onClick={() => setshowDetails(!showDetails)} className="w-9">
            {" "}
            {showDetails ? "moin" : "plus"}{" "}
          </button>
        )}
      </div>
      {showDetails && <div className="w-full h-32 ">
          {kids.map((data,index) => {
            return(
              <KidLigne key={index} enfant={data.nom} sex={data.sex} groupage={data.groupage} age={data.age} />
            )
          })}
        </div>}
    </div>
  );
}

function KidLigne({ enfant, sex, age, groupage }) {
  return (
    <div className="w-full px-6 bg-blue-gray-50 items-center  h-14 flex justify-between ">
      <p className="text-base w-[40%] "> {enfant} </p>
      <p className="text-base w-[10%] "> {sex} </p>
      <p className="text-base w-[20%] "> age : {age} </p>
      <p className="text-base w-[20%] "> {groupage} </p>
    </div>
  );
}

export default AdminAuth;
