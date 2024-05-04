
import React from 'react'
import Title from '../Components/Title'
import Comment from "../Components/Comment";


function SectionSeven() {

  return (
    <div className='flex h-[600px]  flex-col gap-32 mt-48 '>
        <Title GreenText="Les commantaire de nos" YellowText="cher client" />
        <Comment/>

    </div>
  )
}

export default SectionSeven