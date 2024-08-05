import React from "react";
// import { steps1, steps2 } from "../data/StepsData";
import Heading from "./Heading";
import { steps } from "../data/StepsData";
// import Step1 from "../assets/1.png";

const HowItWorks = () => {
  return (
    <section className="bg-primary-900 text-white">
      <div className="section-container">
        <h2 className="mb-2 text-center text-4xl font-bold text-white">
          How <Heading title="It Works" color={"tertiary"} />
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          Discover the features that make our AI website builder the perfect
          choice for creators, entrepreneurs, and businesses alike.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-9">
          {steps.map((step, index) => (
            <div
              className={`relative rounded-lg bg-primary-800 p-6 shadow-lg ${index === 0 || index === 6 ? "md:col-span-4" : ""} ${index === 1 || index === 5 ? "md:col-span-5" : ""} ${index === 2 || index === 4 ? "hidden md:col-span-2 md:block" : ""} ${index === 3 ? "md:col-span-5" : ""} bg-[url('./assets/hero-bg.svg')]`}
              key={index}
            >
              {index === 0 || index === 5 ? (
                <img
                  src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-10.png"
                  alt=""
                  className={`pointer-events-none absolute top-16 z-40 hidden size-1/3 md:-right-16 md:flex lg:-right-20`}
                />
              ) : (
                ""
              )}
              {index === 3 || index === 1 ? (
                <img
                  src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-10.png"
                  alt=""
                  className="pointer-events-none absolute z-40 hidden size-1/3 rotate-[145deg] select-none md:-bottom-12 md:flex lg:-bottom-[3.5rem]"
                />
              ) : (
                ""
              )}
              {index === 2 || index === 4 ? (
                <img src={step.image} alt="" className="" />
              ) : (
                <>
                  <div className="mb-4 text-4xl">{step.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
