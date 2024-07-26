import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5 ">
      <div className="cardcontainer h-[50vh] w-1/2 ">
        <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button class="absolute px-5 py-1 rounded-full border-2 border-[#CDEA68] left-10 bottom-10">
            <span class="text-[#CDEA68]">©2019–2022</span>
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
        <div className="card relative w-1/2 h-full bg-[#413e3e] rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button class="absolute px-5 py-1 rounded-full border-[1px] border-zinc-100 left-10 bottom-10">
            <span class="text-zinc-100">RATING 5.0 ON CLUTCH</span>
          </button>
        </div>
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button class="absolute px-5 py-1 rounded-full border-[1px] border-zinc-100 left-10 bottom-10">
            <span class="text-zinc-100">BUSINESS BOOTCAMP ALUMNI</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
