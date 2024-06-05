import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <div className='w-full flex  flex-col gap-20 '>
        <div className='flex flex-col md:flex-row  items-center'>
        <div className='flex-col justify-center  w-[30%] flex gap-4 items-center'>
            <Image alt='...' src="/image/logo.svg" width={100} height={100} />
            <h4 className='text-xl'>
                <span className='text-secondary'>Kid</span>
                <span className='text-primary'>nest</span>
            </h4>
        </div>
        <div className='md:w-[70%] w-full h-96 justify-evenly items-center flex '>
            <div className='flex flex-col gap-2'>
                <p className='font-bold mb-2 text-lg' >Navigation</p>
                <a className='appearance-none '>Home</a>
                <a className='appearance-none '>Contact</a>
                <Link href="/admin" className='appearance-none '>Admin</Link>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold mb-2 text-lg' >Legal</p>
                <a className='appearance-none '>General Info</a>
                <a className='appearance-none '>Privacy Policy</a>
                <a className='appearance-none '>Terms of Service</a>
            </div>

        </div>

    </div>
    <p className='font-light text-base text-center mb-20'>Developed by sayah abdelilah <br /> all right reserved for kidnest 2024 &copy; </p>

    </div>
  )
}

export default Footer