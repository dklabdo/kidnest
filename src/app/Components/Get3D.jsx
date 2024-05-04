"use client"
import React, { Suspense, lazy, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import Aos from 'aos'
function Get3D() {
  useEffect(()=>{Aos.init()},[]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Spline data-aos="zoom-in" className='xs:scale-50  scale-75 lg:scale-90 mx-auto' scene="https://prod.spline.design/SOseIfYSJ8Dq9s2S/scene.splinecode" />
    </Suspense>
  )
}

export default Get3D