// import MapComponent from "./MapComponent";
// import img from "../assets/cont.jpg";
// import React from "react";
// //bg-[#bad9d8]
// export default function Contactus() {
//   return (
//     <>

//       <div classNameName=" flex flex-row justify-center w-full ">
//         <div classNameName=" w-[100vw] ">

//           <div classNameName="relative">
//             <img src={img} alt="" classNameName="w-full h-[300px] " />
//             <div classNameName="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
//               <p classNameName="text-8xl  "
//                 style={{
//                     fontFamily: "junge",
//                   }}>Let's Talk</p>
//             </div>
//           </div>

//           <div classNameName="absolute top-[400px] left-[970px] h-[500px] border-l-[2px] border-gray-300"></div>
//           <div classNameName="">
//             <div classNameName="absolute top-[350px] left-[100px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#235f97] text-[36px] tracking-[0] leading-[normal]">
//               Contact us
//             </div>
//             <p classNameName="absolute w-[587px] top-[434px] left-[115px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[normal]">
//               Let’s talk, drop us a message and we’ll get back to you.
//             </p>

//             <form classNameName="absolute top-[500px] left-[110px] w-[40vw]">
//               <div classNameName=" font-medium text-[#235f97] text-[22px] tracking-[0] leading-[normal] whitespace-nowrap pb-2">
//                 <label htmlFor="Name" classNameName="block  mb-2 ">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="Name"
//                   name="Name"
//                   classNameName="border p-2 w-full"
//                   required
//                   placeholder="Your Name"
//                 />
//               </div>

//               <div classNameName=" font-medium text-[#235f97] text-[22px] tracking-[0] leading-[normal] whitespace-nowrap pb-2">
//                 <label htmlFor="Email" classNameName="block   mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="Email"
//                   name="Email"
//                   classNameName="border p-2 w-full"
//                   required
//                   placeholder="Your Email"
//                 />
//               </div>

//               <div classNameName=" font-medium text-[#235f97] text-[22px] tracking-[0] leading-[normal] whitespace-nowrap pb-2">
//                 <label htmlFor="Message" classNameName="block   mb-2 ">
//                   Message
//                 </label>
//                 <textarea
//                   id="Message"
//                   name="Message"
//                   classNameName="border p-2 w-full h-32"
//                   required
//                   placeholder="Your Message"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 classNameName="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//           <div classNameName=" ">
//             <MapComponent />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import img from "../assets/talk.jpg";

export default function ContactUs() {
  return (
    <>
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
            Lets Talk
          </p>
        </div>
      </div>
      <div className="container my-24 mx-auto md:px-6 bg-[#bad9d8] rounded-[50px]">
        <section className="mb-32 text-center">
          <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
                    <form>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleInput90"
                          placeholder="Name"
                        />
                        <label
                          className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          htmlFor="exampleInput90"
                        >
                          Name
                        </label>
                      </div>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="email"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleInput91"
                          placeholder="Email address"
                        />
                        <label
                          className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          htmlFor="exampleInput91"
                        >
                          Email address
                        </label>
                      </div>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <textarea
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Your message"
                        ></textarea>
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Message
                        </label>
                      </div>

                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                    <iframe
                      src="https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      className="absolute left-0 top-0 h-full w-full rounded-lg"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
}
