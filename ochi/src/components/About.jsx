import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <div className="w-full min-h-[100vh] p-20 rounded-tl-[50px] rounded-tr-[50px] bg-[#CDEA68] text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.1vw] tracking-tight ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] mt-[2vw] border-[#a1b562] "></div>
      <div className="content pt-[2vw] text-[1.5vw] font-['Neue_Montreal'] flex">
        <div className="flex-1">
          <h1 className="mx-[2vw]">What you can expect:</h1>
        </div>
        <div className="flex-1 mx-[9vw] font-thin">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
            <br />
            <br />
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="flex-3">
          <h1>S:</h1>
          <br />
          <ul>
            <li>Instagram</li>
            <li>Behance</li>
            <li>Facebook</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
      <div className="w-full border-t-[1px] pt-[2vw] mt-[3vw] border-[#a1b562] flex">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="px-10 py-6 bg-zinc-900 mt-[2vw] rounded-full uppercase text-white gap-10 flex items-center">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-green-400 rounded-[10px] bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]"></div>
      </div>
    </div>
  );
}

export default About;
