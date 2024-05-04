"use client"
import React,{useEffect} from 'react'
import Title from '../Components/Title'
import Image from 'next/image'
import Aos from 'aos'
function SectionThree() {
    useEffect(()=>{Aos.init()},[])
  return (
    <div  id='service' className='w-full my-20 xl:my-40 '>
        <Title GreenText="Q’est ce q’on propose dans" YellowText="notre creche" />
        <div className='flex flex-col gap-20 xl:gap-6 xl:flex-row my-28 px-8 md:px-28 xs:px-2 xl:px-24  xl:justify-between'>
            <Card title="Bouger pour Grandir" icon={1} content=" Notre crèche est conçue pour être en harmonie avec la nature, offrant aux enfants un espace où ils peuvent se connecter avec le monde naturel qui les entoure. Des espaces extérieurs soigneusement aménagés invitent à l'exploration et à la découverte" />
            <Card title="Hébergement d'Urgence" icon={2} content="En cas d'absence imprévue des parents, notre service d'accueil d'urgence assure une continuité de soins et de confort pour les enfants. Notre personnel dévoué veille à ce que chaque enfant se sente en sécurité et aimé en tout temps" />
            <Card title="Santé Mentale et Physique" icon={3} content="Notre approche unique combine les soins de santé physique et le soutien psychopédagogique pour offrir un service intégré et complet. Sous un même toit, nous offrons un éventail de services allant des soins médicaux de routine à l'accompagnement psychopédagogique individualisé"  />
        </div>
    </div>
  )
}

function Card({icon,title,content} ){
    return(
        <div data-aos="zoom-in" className='w-full  xl:w-[400px] bg-white shadow-lg px-4 py-20 rounded-3xl flex flex-col gap-6 shadow-gray-400/80'>
            <div className={`flex justify-center mx-auto items-center w-28 h-28 rounded-full ${icon == 2 ? "bg-secondary/70" : "bg-primary/70"}`}>
                <Image src={`/icon/c${icon}.svg`}  width={70} height={70} />

            </div>
            <h3 className={`text-lg text-center ${icon == 2 ? "text-secondary" : "text-primary"}`} >{title} </h3>
            <p className='text-balance text-base my-4 text-center '>{content} </p>
        </div>
    )
}

export default SectionThree