"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Comment() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow : <></>,
    prevArrow : <></>,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            
            
          }
        },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          },
        
      ]
   
    
  };
  return <div className="overflow-x-hidden w-screen md:px-12 ">
    <Slider {...settings} >
        <CommentCard profile={1} name="Ouadria mouad" content="Mon fils s'épanouit vraiment ici. Les éducateurs sont attentionnés, et il adore jouer à l'extérieur. Les tenues fournies facilitent notre quotidien." />
        <CommentCard profile={2} name="Elhadj omar" content="Notre fils adore les activités en plein air. Les repas sont variés et sains, et la tenue fournie est un gros plus. Nous sommes très satisfaits." />
        <CommentCard profile={3} name="Sophie" content="Notre fille adore cette crèche! Les repas sont équilibrés, et les tenues fournies sont très pratiques. Le cadre naturel est un vrai plus, elle rentre toujours heureuse et épanouie." />
        <CommentCard profile={4} name="Meki Sara" content="Mon enfant est heureux et épanoui à la crèche. Les repas équilibrés, les tenues fournies, et l'environnement naturel sont parfaits. Les éducateurs sont fantastiques." />
        
    </Slider>
  </div>;
};


function CommentCard({profile,name,content}){
    return(
        <div className=" xs2:px-4 px-8  xs:px-2   flex flex-col gap-4 py-4  ">
            <div className="w-full h-fit px-1 ">
                <Image alt="..." src="/icon/quote.svg" width={40} height={40} />
            </div>
            <div className=" flex items-center gap-4 ">
                <Image className="rounded-[50%] object-cover w-18 h-16" alt="..." src={`/profile/p${profile}.png`} width={60} height={60} />
                <h5 className="text-lg">{name}</h5>
            </div>
            <div className=" ">
                <p className="font-light  w-full text-base">{content} </p>
            </div>
        </div>
    )
}

export default Comment;
