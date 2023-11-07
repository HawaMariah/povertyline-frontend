import React from "react";
import bnb from "../assets/airbnb.png";
import drop from "../assets/drop.png";
import virg from "../assets/virg.jpeg";
import micro from "../assets/microsoft.png";
import google from "../assets/google.png";
//animate-spin
function Lfooter() {
  return (
    <>
      <div
        className="text-[15px]  pt-10  flex sm:flex-row justify-around  sm:text-[25px] 
      
       "
       style={{
        fontFamily: "junge",
      }}
      >
        
        <div className="">
          <p className="text-gray-900 ">Microsoft</p>
          <img src={micro} alt="" className="w-[4vw] h-auto  sm:ml-2  " />
        </div>

        <div>
          <p className="text-gray-900   ">Google</p>
          <img src={google} alt="" className="w-[4vw] h-auto   " />
        </div>

        <div>
          <p className="text-gray-900  ">Dropbox</p>
          <img src={drop} alt="" className="w-[4vw] h-auto  sm:ml-2 " />
        </div>

        <div>
          <p className="text-gray-900  ">Airbnb</p>
          <div className="">
            <img src={bnb} alt="" className="w-[4vw] h-auto" />
          </div>
        </div>

        <div>
          <p className="text-gray-900  ">Virgin</p>
          <img src={virg} alt="" className="w-[4vw] h-auto " />
        </div>
        
      </div>
    </>
  );
}

export default Lfooter;