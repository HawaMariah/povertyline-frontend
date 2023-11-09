import React, { useEffect } from "react";
import img from "../assets/talk.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  useEffect(() => {
    emailjs.init("YOUR-PUBLIC-KEY-HERE")
  }, [])

  const form = useRef();
  console.log(form.current)
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_o77mhct"
    const templateId = "template_u70t73l"

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        "rZNjwCu7QYQwYwSoa"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert ('message succesfully sent')
        
        },
        (error) => {
          console.log(error.text);
        }
      );
   
  };

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
      <div className="container my-10 mx-auto md:px-6 bg-[#bad9d8] rounded-[50px]">
        <section className="mb-32 text-center">
          <div className="py-12 md:px-6">
            <div className="container mx-auto xl:px-32">
              <div className="grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0 mr-10">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
                    <form className="space-y-7" ref={form} onSubmit={sendEmail}>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <label
                          className="pointer-events-none mb-3 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          htmlFor="exampleInput90"
                        >
                          Name
                        </label>

                        <input
                          name="user_name"
                          type="text"
                          className="block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none "
                          id="exampleInput90"
                          placeholder=""
                        />
                      </div>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <label
                          className="pointer-events-none mb-3 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          htmlFor="exampleInput91"
                        >
                          Email address
                        </label>

                        <input
                          type="email"
                          name="user_email"
                          className="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleInput91"
                          placeholder="Email address"
                        />
                      </div>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="pointer-events-none mb-4 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Message
                        </label>

                        <textarea
                          name="message"
                          className="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Your message"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        value="Send"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="inline-block w-full rounded bg-[#235F97] px-6 py-3 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                    <iframe
                      src={`https://maps.google.com/maps?q=${-1.286389},${36.817223}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
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
