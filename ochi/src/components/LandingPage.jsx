import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.6"
      className="w-full h-screen bg-zinc-900 pt-2"
    >
      <div className="textstructure mt-[20vh] px-[3.5vw]">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[9vw] h-[6vw] rounded-md relative -top-[1vw] bg-green-500"
                  ></motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-['Founders_Grotesk_X-Condensed'] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-[2vw] px-[4vw]">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
          ,
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-lg font-light tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-300 font-light text-lg uppercase rounded-full">
            Start the Project
          </div>
          <div className="h-10 w-10 border-[1px] border-zinc-300 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
