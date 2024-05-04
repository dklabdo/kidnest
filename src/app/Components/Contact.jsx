import React from 'react'
import Image from 'next/image'
function Contact() {
  return (
    <form className='flex flex-col gap-8 '>
       <input className='focus:outline-none focus:border-secondary border-2 py-4 px-3 bg-white appearance-none rounded-full shadow-sm shadow-gray-500' type='text' placeholder='Your name' />
       <input className='focus:outline-none focus:border-secondary border-2 focus:border-2  py-4 px-3 bg-white appearance-none rounded-full shadow-sm shadow-gray-500' type='email' placeholder='Your email' />
       <textarea className='focus:outline-none py-4 px-3 focus:border-secondary border-2 h-60 bg-white appearance-none rounded-3xl shadow-sm shadow-gray-500' placeholder='Your msg' />
       <button className='w-full py-4 bg-secondary hover:scale-105 transition text-white rounded-3xl'>Envoyer un message</button>
    </form>
  )
}

export default Contact