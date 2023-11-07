import React from "react";
import img from "../assets/cont.jpg";
import img1 from "../assets/job.jpg";
import Testimonial from "./Testimonial";
import Meet from "./Meet";
import Youtube from "./Youtube";
function Community() {
  return (
    <>
      <div className=" bg-[#bad9d8]">
        <div className="relative mb-5">
          <img
            src={img}
            alt=""
            className="w-full h-[30vh] object-cover max-w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
            <p
              className="text-6xl md:text-8xl  "
              style={{
                fontFamily: "junge",
              }}
            >
              Community
            </p>
          </div>
        </div>
        <Meet />

        <Testimonial />
        <Youtube />
      </div>
    </>
  );
}

export default Community;