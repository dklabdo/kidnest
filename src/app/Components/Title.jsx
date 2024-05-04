import React from 'react'

function Title({YellowText,GreenText,big,bold}) {
  return (
    <h5 className={`${big && 'text-xl'} ${bold && 'font-bold text-start'}`} >
        <span className='text-primary'>{GreenText} </span>
        <span className='text-secondary'>{YellowText} </span>

    </h5>
  )
}

export default Title