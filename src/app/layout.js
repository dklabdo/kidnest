import { Happy_Monkey } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";

const HappyMonkey = Happy_Monkey({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
 });

export const metadata = {
  title: "Kidnest",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={HappyMonkey.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}