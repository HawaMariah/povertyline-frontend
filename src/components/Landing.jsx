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
          <div className="">
            <p
              className="mt-10 w-[34.8vw] h-[39vh] ml-20 text-6xl font-bold leading-[113px] tracking-normal "
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

          <div className="mt-40">
            <img
              src={img3}
              alt=""
              className="w-[43.65vw] h-[60.52vh] object-cover "
            />
          </div>

    
        </div>
        <div className="">

  <Lfooter/>
</div>

      </div>
    
    </>
  );
}

export default Landing;
