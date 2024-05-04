"use client"
import React from 'react'
import Title from '../Components/Title'
import Comment from "../Components/Comment";
import { useEffect } from 'react'
import Aos from 'aos'

function SectionSeven() {
  useEffect(()=>{Aos.init()},[]);

  return (
    <div data-aos-duration="500" data-aos-delay="200" data-aos="zoom-out" className='flex overflow-x-hidden flex-col gap-32 mt-48 '>
        <Title GreenText="Les commantaire de nos" YellowText="cher client" />
        <Comment/>

    </div>
  )
}

export default SectionSeven