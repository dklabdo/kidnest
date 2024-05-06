import React from 'react'
import Image from 'next/image'
import 'aos/dist/aos.css';
function SectionFour() {
  return (
    <div className='lg:px-20 flex flex-col gap-28 my-24'>
        <div className='flex gap-20 lg:gap-0 flex-col lg:flex-row  justify-center items-center  '>
           <div className='w-full flex justify-center lg:w-1/2'>
           <h1 className='text-center xs2:px-2 w-fit ' >
                <span className='text-secondary'>Kidnest et </span>
                <br className='hidden lg:block' />
                <span className='text-primary'> La nature</span>
            </h1>
           </div>
           <div data-aos-duration="1000" data-aos="zoom-in-left" data-aos-delay="300" className='lg:w-1/2  flex justify-center px-2'>
           <Image className='rounded-[50%] object-cover xs2:w-48 xs2:h-48  md:scale-75 lg:scale-100 w-80 h-80 ' src="/image/n1.jpg" width={500} height={200} />
           </div>

        </div>
        <div  className='gap-20 lg:gap-0 flex flex-col-reverse lg:flex-row  justify-center items-center  '>
            <div data-aos-delay="300" data-aos-duration="1000" data-aos="zoom-in-right" className='w-full lg:w-1/2 flex justify-center px-2' >
            <Image className='rounded-[50%] object-cover xs2:w-48 xs2:h-48  md:scale-90 lg:scale-100  w-80 h-80 ' src="/image/n2.png" width={500} height={100} />


            </div>

            <div className='w-full px-12 lg:w-1/2 flex justify-center'>
            <p className='text-center lg:text-start text-balance'>
            La nature exerce un impact profond sur le développement des enfants, favorisant la créativité, la curiosité et le bien-être mental. Elle offre un terrain fertile pour l'exploration .
            </p>
            </div>
           
            
        </div>
        
    </div>
  )
}

export default SectionFour