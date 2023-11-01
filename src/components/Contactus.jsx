import MapComponent from "./MapComponent";
import img from "../assets/cont.jpg";
import React from "react";
//bg-[#bad9d8]
export default function Contactus() {
  return (
    <>
    
      <div className=" flex flex-row justify-center w-full ">
        <div className=" w-[100vw] ">
     
          <div className="relative">
            <img src={img} alt="" className="w-full h-[300px] " />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              <p className="text-8xl  "
                style={{
                    fontFamily: "junge",
                  }}>Let's Talk</p>
            </div>
          </div>

          <div className="absolute top-[400px] left-[970px] h-[500px] border-l-[2px] border-gray-300"></div>
          <div className="">
            <div className="absolute top-[350px] left-[100px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#235f97] text-[36px] tracking-[0] leading-[normal]">
              Contact us
            </div>
            <p className="absolute w-[587px] top-[434px] left-[115px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[normal]">
              Let’s talk, drop us a message and we’ll get back to you.
            </p>

            <form className="absolute top-[500px] left-[110px] w-[40vw]">
              <div className=" font-medium text-[#235f97] text-[22px] tracking-[0] leading-[normal] whitespace-nowrap pb-2">
                <label htmlFor="Name" className="block  mb-2 ">
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  className="border p-2 w-full"
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className=" font-medium text-[#235f97] text-[22px] tracking-[0] leading-[normal] whitespace-nowrap pb-2">
                <label htmlFor="Email" className="block   mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  className="border p-2 w-full"
                  required
                  placeholder="Your Email"
                />
              </div>

              <div className=" font-medium text-[#235f97] text-[22px] tracking-[0] leading-[normal] whitespace-nowrap pb-2">
                <label htmlFor="Message" className="block   mb-2 ">
                  Message
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  className="border p-2 w-full h-32"
                  required
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
          <div className=" ">
            <MapComponent />
          </div>
        </div>
      </div>
    </>
  );
}
