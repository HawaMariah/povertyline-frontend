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
        className="text-2xl  pt-7 pb-4 bg-[#bad9d8] flex justify-around"
        style={{
          fontFamily: "junge",
        }}
      >
        <div>
          <p className="text-gray-900 pb-2">Microsoft</p>
          <img src={micro} alt="" className="w-[4.11vw] h-[6.vh] pl-2 " />
        </div>

        <div>
          <p className="text-gray-900  pb-2">Google</p>
          <img src={google} alt="" className="w-[4.11vw] h-[6.vh] " />
        </div>

        <div>
          <p className="text-gray-900  pb-2">Dropbox</p>
          <img src={drop} alt="" className="w-[4.11vw] h-[6.vh] " />
        </div>

        <div>
          <p className="text-gray-900  pb-2">Airbnb</p>
          <img src={bnb} alt="" className="w-[4.11vw] h-[6.vh] " />
        </div>

        <div>
          <p className="text-gray-900  pb-2">Virgin</p>
          <img src={virg} alt="" className="w-[4.11vw] h-[6.vh] " />
        </div>
      </div>
    </>
  );
}

export default Lfooter;
