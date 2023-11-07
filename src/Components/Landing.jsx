import React from "react";
import img3 from "../assets/img8.png";
import Top from "./Top";
import Lfooter from "./Lfooter";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <div className="bg-[#bad9d8] h-screen  ">
        <Top />

        <div className="  ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  items-center  ">
            <div className="grid grid-cols-1  ">
              <div className="w-auto h-auto ssm:text-xl  sm:text-3xl md:text-5xl lg:text-6xl lg:w-[50vw]  ">
                <p
                  className=" ml-20  mt-10 font-bold    "
                  style={{
                    fontFamily: "junge",
                  }}
                >
                  Hire the <span className="text-blue-500">top</span> of
                  freelance <span className="text-blue-500">talent</span>, Get{" "}
                  <span className="text-blue-500">hired</span> & Earn from
                  community
                </p>
              </div>
              <div className="sm:mt-10">
                <Link to='/findjobs'>
                <button
                  className="w-auto h-auto ml-20 bg-[#235F97] text-white  rounded-full hover:bg-blue-500 sm:w-44 sm:h-14  "
                  style={{
                    fontFamily: "junge",
                  }}
                >
                  Get Started
                </button>
                </Link>
              </div>
            </div>
            <div className=" ml-20 sm:ml-0 sm:mt-10 mt-10">
              <img
                src={img3}
                alt=""
                className="w-60  sm:w-[43.65vw] h-auto object-cover"
              />
            </div>
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