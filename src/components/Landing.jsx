import React from "react";
import img3 from "../assets/img8.png";
import Top from "./Top";
import Lfooter from "./Lfooter";
function Landing() {
  return (
    <>
      <div className="bg-[#bad9d8] h-screen">
        <Top />

        <div className="  flex justify-around items-center">
          <div className="lg:mt-20  ">
            <p
              className="mt-40 w-[34.8vw] h-[39vh] ml-20 text-6xl font-bold leading-[113px] tracking-normal sm:text-[3vw]  "
              style={{
                fontFamily: "junge",
              }}
            >
              Hire the <span className="text-blue-500">top</span> of freelance{" "}
              <span className="text-blue-500">talent</span>, Get{" "}
              <span className="text-blue-500">hired</span> & Earn from community
            </p>
            <button
              className="ml-20 bg-[#235F97] text-white  rounded-full hover:bg-blue-500 w-44 h-14  "
              style={{
                fontFamily: "junge",
              }}
            >
              Get Started
            </button>
          </div>
          <div className="md:mt-40 sm:mt-10">
            <img
              src={img3}
              alt=""
              className="w-60 sm:w-[43.65vw] h-auto object-cover"
            />
          </div>
        </div>
        <div className="">
          <Lfooter />
        </div>
      </div>
    </>
  );
}

export default Landing;
