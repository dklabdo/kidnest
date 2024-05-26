"use client";
import React, { useState , useRef} from "react";
import Image from "next/image";
function Contact() {
  const [msg, setmsg] = useState({
    name: "",
    email: "",
    msg: "",
  });

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u56c339', 'template_8t4qk7a', form.current, {
        publicKey: '5C8hJKC4vI_nTnfzg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <form method="POST" onSubmit={(e) => sendEmail(e)} ref={form} className="flex flex-col gap-8 ">
      <input
        className="focus:outline-none focus:border-secondary border-2 py-4 px-3 bg-white appearance-none rounded-full shadow-sm shadow-gray-500"
        type="text"
        placeholder="Your name"
        name="name"
      />
      <input
        className="focus:outline-none focus:border-secondary border-2 focus:border-2  py-4 px-3 bg-white appearance-none rounded-full shadow-sm shadow-gray-500"
        type="email"
        placeholder="Your email"
        name="email"
      />
      <textarea
        className="focus:outline-none py-4 px-3 focus:border-secondary border-2 h-60 bg-white appearance-none rounded-3xl shadow-sm shadow-gray-500"
        placeholder="Your msg"
        name="msg"
      />
      <button type="submit" className="w-full py-4 bg-secondary hover:scale-105 transition text-white rounded-3xl">
        Envoyer un message
      </button>
    </form>
  );
}

export default Contact;
