import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="font-poppins flex flex-col justify-center items-center max-w-7xl mx-auto sm:px-16 px-6">
        <Hero />
        <Demo />
      </div>
    </>
  );
}
