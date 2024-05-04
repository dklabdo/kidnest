import React from 'react'
import Image from 'next/image'
function NavBar() {
  return (
    <nav>
        <div className='xs:scale-75   flex gap-2 md:px-10 xl:px-20 items-center'>
            <Image src="/image/logo.svg" width={45} height={50} />
            <h4>
                <span className='text-secondary'>Kid</span>
                <span className='text-primary'>nest</span>
            </h4>
        </div>
        <div className='md:flex hidden gap-10  md:px-10 xl:px-20 lg:gap-24'>
            <a href='#' className='text-base group mt-2 hover:text-secondary flex items-center flex-col gap-1 justify-center' > Home <div className='dot'></div> </a>
            <a href='#service' className='text-base group mt-2 hover:text-secondary flex items-center flex-col gap-1 justify-center' > Services <div className='dot'></div> </a>
            <a href='#' className='text-base group mt-2 hover:text-secondary flex items-center flex-col gap-1 justify-center' > Contact us <div className='dot'></div> </a>
            

        </div>
       
        <div className='md:hidden'>
        <Image src="/icon/menu.svg" className='stroke-black cursor-pointer fill-black' width={40} height={30} />
        </div>

    </nav>
  )
}

export default NavBar