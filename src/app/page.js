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
import NavBar from "./Components/NavBar";
import Head from "next/head";
export default function Home() {
  return (
    <main className="w-screen relative    h-screen  ">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
     <div className="overflow-x-hidden">
     <NavBar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSex />
      <SectionSeven />
      <SectionHeight />
      <Footer />
     </div>
      
      <div className="h-screen w-full preloadContainer absolute top-0 z-40 bg-bg flex  justify-center">
        <Image className="animate__animated animate__zoomIn z-50" alt="..." src="/image/logo.svg" width={120} height={120} />
      </div>
    </main>
  );
}
