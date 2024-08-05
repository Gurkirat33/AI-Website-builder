import React from "react";
import Heading from "./Heading";
import { testimonials } from "../data/Testimonials";

const Testimonials = () => {
  return (
    <section className="bg-primary-900 py-12 text-white">
      <div className="section-container text-center">
        <h2 className="mb-2 text-4xl font-bold text-white">
          What Our <Heading title="Clients Say" color={"secondary"} />
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-400">
          Discover the impact our platform has had on businesses and creators,
          from seamless AI-driven customization to unmatched efficiency.
        </p>
        <div className="flex flex-col justify-center space-y-16 md:flex-row md:space-x-8 md:space-y-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative mx-auto max-w-md transform rounded-xl bg-gradient-to-r from-secondary-600 to-tertiary-600 p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 transform">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-20 w-20 rounded-full border-4 border-primary-800 object-cover shadow-lg transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="pt-14">
                <p className="mb-6 text-lg italic text-gray-300 transition-all duration-300 group-hover:text-gray-100">
                  “{testimonial.feedback}”
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-secondary-200">
                  {testimonial.position}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 z-[-1]">
                <svg
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M200 0C310.046 0 400 89.9543 400 200C400 310.046 310.046 400 200 400C89.9543 400 0 310.046 0 200C0 89.9543 89.9543 0 200 0ZM200 50C267.988 50 325 107.012 325 175C325 242.988 267.988 300 200 300C132.012 300 75 242.988 75 175C75 107.012 132.012 50 200 50Z"
                    fill="rgba(255,255,255,0.1)"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
