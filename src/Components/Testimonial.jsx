import React from "react";
import img from "../assets/prof.jpg";
 
function Testimonial() {
  return (
    <>
      <section className=" p-20   px-4 ">
        <div className="mx-auto max-w-3xl text-center  ">
          <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
          <p className="mb-6 pb-2 text-xl md:mb-12">
            Here's what some of our valued beneficiaries and partners have to
            say about their experience with Gighunts Jobs program. Their
            stories serve as a testament to the impact we're making together in
            the community. We're honored to share their heartfelt testimonials.
          </p>
        </div>

        <div className="grid gap-12 text-center md:grid-cols-2">
          {/* First Testimonial */}
          <div className="mb-6 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={img}
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="Testimonial Avatar 1"
              />
            </div>
            <p className="my-4 text-xl ">
              "Gighunt has been a lifeline for me and my family. The
              awesome connections they provide have eased our burdens and given us
              hope. We're so grateful for their unwavering support"
            </p>
            <p className="italic">- Anna Morian</p>
          </div>

          {/* Second Testimonial */}
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={img}
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="Testimonial Avatar 2"
              />
            </div>
            <p className="my-4 text-xl ">
              "Partnering with Gighunt has been a rewarding experience.
              Their commitment to the community is inspiring, and we're proud to
              contribute to their mission. Together, we're making a positive
              impact."
            </p>
            <p className="italic">- Teresa May</p>
          </div>
          {/* third testimonial */}
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={img}
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="Testimonial Avatar 2"
              />
            </div>
            <p className="my-4 text-xl ">
              "Gighunt  not only feeds our bodies but also our souls. Their
              kindness and dedication are truly heartwarming. They've shown me
              that there are people who care and are willing to help."
            </p>
            <p className="italic">- Angie Bhaddie</p>
          </div>
          {/* fourth testimonial */}
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={img}
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="Testimonial Avatar 2"
              />
            </div>
            <p className="my-4 text-xl ">
              "Supporting Gighunt has been one of the most fulfilling
              experiences. Knowing that my contributions directly nourish those
              in need is a privilege. I'm proud to be a part of this incredible
              cause."
            </p>
            <p className="italic">- Claus Michaelson</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;