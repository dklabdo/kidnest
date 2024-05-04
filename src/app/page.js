import Image from "next/image";
import Hero from "./Sections/Hero";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";
import SectionFive from "./Sections/SectionFive";
import SectionSex from "./Sections/SectionSex";
import SectionSeven from "./Sections/SectionSeven";
import SectionHeight from "./Sections/SectionHeight";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <main className="w-screen  h-screen  ">
      <Hero/> 
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSex/>
      <SectionSeven/>
      <SectionHeight/>
      <Footer/>      
      
      
   
    </main>
  );
}
